import { ConflictException, NotFoundException } from '@nestjs/common';
import { ObjectLiteral, Repository } from 'typeorm';

import type { IFilterParams } from '@/interfaces/filter.interface';
import type { IFindByParams } from '@/services';
import { QueryParametersDto } from '@/dto/query-parameters.dto';
import { SelectQueryBuilder } from 'typeorm/query-builder/SelectQueryBuilder';

export interface IPaginate<T> {
  next: number | null;
  prev: number | null;
  total: number;
  pages: number;
  per_page: number;
  current_page: number;
  skip: number;
  data: Array<T>;
}

interface IIndexParams {
  filters?: Array<IFilterParams>;
  parameters: QueryParametersDto;
  withDeleted?: boolean;
  withRelations?: boolean;
}

export abstract class Service<T extends ObjectLiteral> {
  protected constructor(
    protected readonly repository: Repository<T>,
    protected readonly alias: string,
    protected readonly relations: Array<string>,
  ) {}

  async index({
    filters = [],
    parameters,
    withDeleted = false,
    withRelations = true,
  }: IIndexParams): Promise<Array<T> | IPaginate<T>> {
    const query = this.repository.createQueryBuilder(this.alias);

    this.queryOrderBy(query, parameters.asc, parameters.desc);

    if (withDeleted) {
      query.withDeleted();
    }

    if (withRelations) {
      this.queryRelations(query);
    }

    if (!parameters.limit || !parameters.page) {
      return await query.getMany();
    }

    return await this.paginate(query, parameters, filters);
  }

  async findBy({ by, all = false, value, withThrow = false }: IFindByParams) {
    const query = this.repository.createQueryBuilder(this.alias);
    this.queryRelations(query);
    query.andWhere(`${this.alias}.${by} = :${by}`, { [by]: value });
    if (all) {
      query.withDeleted();
    }
    const result = await query.getOne();

    if (!result) {
      if (!withThrow) {
        return null;
      }

      throw new NotFoundException(`${this.alias} not found`);
    }

    return result;
  }

  private async paginate(
    query: SelectQueryBuilder<T>,
    queryParameters: QueryParametersDto,
    filters: Array<IFilterParams>,
  ): Promise<IPaginate<T>> {
    const page = queryParameters.page < 1 ? 1 : queryParameters.page;
    const limit = queryParameters.limit > 100 ? 100 : queryParameters.limit;

    this.queryFilters(query, filters, queryParameters);

    const [data, total] = await query.getManyAndCount();

    const currentPage = page === 0 ? 1 : Number(page);
    const skip = this.paginateSkip(currentPage, limit);
    const pages = Math.ceil(total / Number(limit));

    return {
      next: currentPage === pages ? null : currentPage + 1,
      prev: currentPage === 1 ? null : currentPage - 1,
      total,
      pages,
      per_page: limit === 0 ? total : limit,
      current_page: currentPage,
      skip,
      data,
    };
  }

  private queryOrderBy(
    query: SelectQueryBuilder<T>,
    asc: string,
    desc: string,
  ) {
    if (asc && desc) {
      throw new ConflictException('Cannot use asc and desc at the same time');
    }

    if (asc) {
      query.orderBy(`${this.alias}.${asc}`, 'ASC');
    }

    if (desc) {
      query.orderBy(`${this.alias}.${desc}`, 'DESC');
    }
  }

  private queryFilters(
    query: SelectQueryBuilder<T>,
    filters: Array<IFilterParams>,
    queryParameters: QueryParametersDto,
  ) {
    if (!filters.length) {
      filters = this.transformFilters(queryParameters);
    }
    if (filters.length) {
      filters.forEach((filter) => {
        query.andWhere(
          `${this.alias}.${filter.param} ${filter.condition} :${filter.param}`,
          {
            [filter.param]: filter.value,
          },
        );
      });
    }
  }

  private queryRelations(query: SelectQueryBuilder<T>) {
    if (this.relations.length) {
      this.relations.forEach((relation) => {
        query.leftJoinAndSelect(`${this.alias}.${relation}`, relation);
      });
    }
  }

  private paginateSkip(currentPage: number, perPage: number) {
    if (currentPage === 1) {
      return 0;
    }
    if (currentPage === 2) {
      return perPage;
    }
    return currentPage * perPage - perPage;
  }

  private transformFilters(filterDto: QueryParametersDto) {
    const filters: Array<IFilterParams> = [];

    if (filterDto.status) {
      filters.push({
        param: 'status',
        condition: '=',
        value: filterDto.status.toUpperCase(),
      });
    }

    if (filterDto.name) {
      filters.push({
        param: 'name',
        condition: 'LIKE',
        value: `%${filterDto.name}%`,
      });
    }

    return filters;
  }
}
