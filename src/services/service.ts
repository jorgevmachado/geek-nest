import { Repository, ObjectLiteral } from 'typeorm';
import { QueryParametersDto } from '../dto/query-parameters.dto';
import { ConflictException } from '@nestjs/common';
import { SelectQueryBuilder } from 'typeorm/query-builder/SelectQueryBuilder';

export abstract class Service<T extends ObjectLiteral> {
  protected constructor(
    protected readonly repository: Repository<T>,
    protected readonly alias: string,
  ) {}

  async paginate(
    { page, limit, asc, desc }: QueryParametersDto,
    filters: Array<any>,
  ) {
    page = page < 1 ? 1 : page;
    limit = limit > 100 ? 100 : limit;

    const query = this.repository.createQueryBuilder(this.alias);

    this.orderBy(query, asc, desc);

    this.filters(query, filters);

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

  private orderBy(query: SelectQueryBuilder<T>, asc: string, desc: string) {
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

  private filters(query: SelectQueryBuilder<T>, filters: Array<any>) {
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

  private paginateSkip(currentPage: number, perPage: number) {
    if (currentPage === 1) {
      return 0;
    }
    if (currentPage === 2) {
      return perPage;
    }
    return currentPage * perPage - perPage;
  }
}
