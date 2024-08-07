import { Injectable } from '@nestjs/common';
import { IResponsePokemonByName } from '../pokemon.interface';
import { Ability } from './ability.entity';
import { Service } from '../../../services';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AbilityService extends Service<Ability> {
  constructor(
    @InjectRepository(Ability)
    protected repository: Repository<Ability>,
  ) {
    super(repository, 'abilities', []);
  }
  async generate(
    abilities: IResponsePokemonByName['abilities'],
  ): Promise<Array<Ability>> {
    return Promise.all(
      abilities.map(async (item) => {
        const entity = await this.repository.findOne({
          where: { order: item.order },
        });
        if (!entity) {
          const ability = new Ability();
          ability.url = item.ability.url;
          ability.name = item.ability.name;
          ability.slot = item.slot;
          ability.order = item.order;
          ability.is_hidden = item.is_hidden;
          return await this.repository.save(ability);
        }

        return entity;
      }),
    );
  }
}
