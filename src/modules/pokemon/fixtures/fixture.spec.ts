import {
  generateEntities,
  generateResponse,
  match,
} from '@/modules/pokemon/fixtures/fixture';

import {
  ENTITIES_MOVES_FIXTURE_BULBASAUR,
  ENTITIES_MOVES_FIXTURE_IVYSAUR,
  ENTITIES_MOVES_FIXTURE_VENUSAUR,
} from '@/modules/pokemon/move/move.fixture';
import {
  ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
  ENTITY_POKEMON_FIXTURE_BULBASAUR,
  ENTITY_POKEMON_FIXTURE_IVYSAUR,
  ENTITY_POKEMON_FIXTURE_VENUSAUR,
} from '@/modules/pokemon/pokemon.fixture';
import {
  RESPONSE_EVOLUTION_FIXTURE,
  RESPONSE_POKEMON_BASE_FIXTURE_PAGINATE,
  RESPONSE_POKEMON_BY_NAME_FIXTURE_BULBASAUR,
  RESPONSE_POKEMON_BY_SPECIE_NAME_FIXTURE_BULBASAUR,
} from '@/modules/pokemon/fixtures/response';
import { ENTITIES_ABILITIES_FIXTURE } from '@/modules/pokemon/ability/ability.fixture';
import { ENTITIES_TYPES_FIXTURE } from '@/modules/pokemon/type/type.fixture';

import { EStatus } from '@/enums/status.enum';
import { STAT_FIXTURE } from '@/modules/pokemon/stat/stat.fixture';

describe('fixture', () => {
  it('should return generateResponse getByName without resolve', () => {
    expect(generateResponse(1, 'getByName')).toEqual(
      RESPONSE_POKEMON_BY_NAME_FIXTURE_BULBASAUR,
    );
  });

  it('should return generateResponse getByName with resolve', () => {
    expect(
      generateResponse(
        1,
        'getByName',
        RESPONSE_POKEMON_BY_NAME_FIXTURE_BULBASAUR,
      ),
    ).toEqual(RESPONSE_POKEMON_BY_NAME_FIXTURE_BULBASAUR);
  });

  it('should return generateResponse getSpecieByName without resolve', () => {
    expect(generateResponse(1, 'getSpecieByName')).toEqual(
      RESPONSE_POKEMON_BY_SPECIE_NAME_FIXTURE_BULBASAUR,
    );
  });

  it('should return generateResponse getSpecieByName with resolve', () => {
    expect(
      generateResponse(
        1,
        'getSpecieByName',
        RESPONSE_POKEMON_BY_SPECIE_NAME_FIXTURE_BULBASAUR,
      ),
    ).toEqual(RESPONSE_POKEMON_BY_SPECIE_NAME_FIXTURE_BULBASAUR);
  });

  it('should return generateResponse getEvolutions without resolve', () => {
    expect(generateResponse(1, 'getEvolutions')).toEqual(
      RESPONSE_EVOLUTION_FIXTURE,
    );
  });

  it('should return generateResponse getEvolutions with resolve', () => {
    expect(
      generateResponse(1, 'getEvolutions', RESPONSE_EVOLUTION_FIXTURE),
    ).toEqual(RESPONSE_EVOLUTION_FIXTURE);
  });

  it('should return generateResponse getAll without resolve', () => {
    expect(generateResponse(1, 'getAll')).toEqual(
      RESPONSE_POKEMON_BASE_FIXTURE_PAGINATE,
    );
  });

  it('should return generateResponse getAll with resolve', () => {
    expect(
      generateResponse(1, 'getAll', RESPONSE_POKEMON_BASE_FIXTURE_PAGINATE),
    ).toEqual(RESPONSE_POKEMON_BASE_FIXTURE_PAGINATE);
  });

  it('should return generateResponse null', () => {
    expect(generateResponse(1, null)).toEqual(null);
  });

  it('should return generateEntities null', () => {
    expect(generateEntities(null)).toEqual(null);
  });

  it('should return generateEntities typeService without resolve', () => {
    expect(generateEntities('typeService')).toEqual(ENTITIES_TYPES_FIXTURE);
  });

  it('should return generateEntities typeService with resolve', () => {
    expect(generateEntities('typeService', 0, ENTITIES_TYPES_FIXTURE)).toEqual(
      ENTITIES_TYPES_FIXTURE,
    );
  });

  it('should return generateEntities statService without resolve', () => {
    expect(generateEntities('statService')).toEqual(STAT_FIXTURE);
  });

  it('should return generateEntities statService with resolve', () => {
    expect(generateEntities('statService', 0, STAT_FIXTURE)).toEqual(
      STAT_FIXTURE,
    );
  });

  it('should return generateEntities moveService without resolve order 1', () => {
    expect(generateEntities('moveService', 1)).toEqual(
      ENTITIES_MOVES_FIXTURE_BULBASAUR,
    );
  });

  it('should return generateEntities moveService without resolve order 2', () => {
    expect(generateEntities('moveService', 2)).toEqual(
      ENTITIES_MOVES_FIXTURE_IVYSAUR,
    );
  });

  it('should return generateEntities moveService without resolve order 3', () => {
    expect(generateEntities('moveService', 3)).toEqual(
      ENTITIES_MOVES_FIXTURE_VENUSAUR,
    );
  });

  it('should return generateEntities moveService without resolve order 3 return array empty', () => {
    expect(generateEntities('moveService', 4)).toEqual([]);
  });

  it('should return generateEntities moveService with resolve', () => {
    expect(
      generateEntities('moveService', 0, ENTITIES_MOVES_FIXTURE_BULBASAUR),
    ).toEqual(ENTITIES_MOVES_FIXTURE_BULBASAUR);
  });

  it('should return generateEntities abilityService without resolve', () => {
    expect(generateEntities('abilityService')).toEqual(
      ENTITIES_ABILITIES_FIXTURE,
    );
  });

  it('should return generateEntities abilityService with resolve', () => {
    expect(
      generateEntities('abilityService', 0, ENTITIES_ABILITIES_FIXTURE),
    ).toEqual(ENTITIES_ABILITIES_FIXTURE);
  });

  it('should return generateEntities evolutionService without resolve', () => {
    expect(generateEntities('evolutionService')).toEqual([
      ENTITY_POKEMON_FIXTURE_BULBASAUR,
      ENTITY_POKEMON_FIXTURE_IVYSAUR,
      ENTITY_POKEMON_FIXTURE_VENUSAUR,
    ]);
  });

  it('should return generateEntities evolutionService with resolve', () => {
    expect(
      generateEntities('evolutionService', 0, [
        ENTITY_POKEMON_FIXTURE_BULBASAUR,
        ENTITY_POKEMON_FIXTURE_IVYSAUR,
        ENTITY_POKEMON_FIXTURE_VENUSAUR,
      ]),
    ).toEqual([
      ENTITY_POKEMON_FIXTURE_BULBASAUR,
      ENTITY_POKEMON_FIXTURE_IVYSAUR,
      ENTITY_POKEMON_FIXTURE_VENUSAUR,
    ]);
  });

  it('should return match fail false', () => {
    const result = match(
      ENTITY_POKEMON_FIXTURE_BULBASAUR,
      ENTITY_POKEMON_FIXTURE_BULBASAUR,
    );
    expect(result).toBeFalsy();
  });

  it('should return match fail true', () => {
    const result = match(ENTITY_POKEMON_FIXTURE_IVYSAUR, {
      ...ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
      image: 'image',
      status: EStatus.COMPLETE,
      habitat: 'habitat',
      is_baby: true,
      shape_url: 'shape_url',
      shape_name: 'shape_name',
      is_mythical: true,
      gender_rate: 358,
      is_legendary: true,
      capture_rate: 785,
      hatch_counter: 8745,
      base_happiness: 157,
      evolution_chain_url: 'evolution_chain_url',
      evolves_from_species: 'evolves_from_species',
      has_gender_differences: true,
      deletedAt: new Date('1990-01-01'),
      evolutions: [ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR],
    });
    expect(result).toBeTruthy();
  });
});
