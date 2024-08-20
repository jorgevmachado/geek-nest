import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';

import { Service } from '@/services';

import type { IResponsePokemonByName } from '../pokemon.interface';

import { Stat } from './stat.entity';

@Injectable()
export class StatService extends Service<Stat> {
  constructor(
    @InjectRepository(Stat)
    protected repository: Repository<Stat>,
  ) {
    super(repository, 'stats', []);
  }
  async generate(stats: IResponsePokemonByName['stats']): Promise<Array<Stat>> {
    return Promise.all(
      stats.map(async (item) => {
        const entity = await this.repository.findOne({
          where: { order: item.order },
        });

        if (!entity) {
          const stat = new Stat();
          stat.url = item.stat.url;
          stat.name = item.stat.name;
          stat.order = item.order;
          stat.effort = item.effort;
          stat.base_stat = item.base_stat;
          return await this.repository.save(stat);
        }

        return entity;
      }),
    );
  }
}
