import { Injectable } from '@nestjs/common';
import { IResponsePokemonByName } from '../pokemon.interface';
import { Type } from './type.entity';
import { TYPE_COLORS } from './type.constants';
import { Service } from '../../../services';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TypeService extends Service<Type> {
  constructor(
    @InjectRepository(Type)
    protected repository: Repository<Type>,
  ) {
    super(repository, 'types');
  }
  async generate(types: IResponsePokemonByName['types']): Promise<Array<Type>> {
    return Promise.all(
      types.map(async (item) => {
        const entity = await this.repository.findOne({
          where: { order: item.order },
        });
        if (!entity) {
          const type = new Type();
          const typeColor = TYPE_COLORS.find(
            (color) => color.name === item.type.name,
          );
          type.url = item.type.url;
          type.name = item.type.name;
          type.order = item.order;
          type.textColor = !typeColor ? '#FFF' : typeColor.textColor;
          type.backgroundColor = !typeColor
            ? '#000'
            : typeColor.backgroundColor;
          return await this.repository.save(type);
        }
        return entity;
      }),
    );
  }
}
