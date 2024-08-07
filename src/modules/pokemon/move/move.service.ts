import { Injectable } from '@nestjs/common';
import { IResponsePokemonByName } from '../pokemon.interface';
import { Move } from './move.entity';
import { Service } from '../../../services';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MoveService extends Service<Move> {
  constructor(
    @InjectRepository(Move)
    protected repository: Repository<Move>,
  ) {
    super(repository, 'moves');
  }
  async generate(moves: IResponsePokemonByName['moves']): Promise<Array<Move>> {
    return Promise.all(
      moves.map(async (item) => {
        const entity = await this.repository.findOne({
          where: { order: item.order },
        });
        if (!entity) {
          const move = new Move();
          move.url = item.move.url;
          move.name = item.move.name;
          move.order = item.order;
          return await this.repository.save(move);
        }
        return entity;
      }),
    );
  }
}
