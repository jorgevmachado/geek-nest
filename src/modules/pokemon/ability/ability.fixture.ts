import { Ability } from './ability.entity';
import { RESPONSE_ABILITIES_FIXTURE } from '@/modules/pokemon/fixtures';

export const ENTITIES_ABILITIES_FIXTURE: Array<Ability> = [
  {
    id: '899f0537-0bbd-4ecf-9ae4-a2e0d19bcedf',
    url: RESPONSE_ABILITIES_FIXTURE[0].ability.url,
    slot: RESPONSE_ABILITIES_FIXTURE[0].slot,
    order: RESPONSE_ABILITIES_FIXTURE[0].order,
    name: RESPONSE_ABILITIES_FIXTURE[0].ability.name,
    is_hidden: RESPONSE_ABILITIES_FIXTURE[0].is_hidden,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: 'ffd64ad6-37a8-4689-ba15-eed51e8c8524',
    url: RESPONSE_ABILITIES_FIXTURE[1].ability.url,
    slot: RESPONSE_ABILITIES_FIXTURE[1].slot,
    order: RESPONSE_ABILITIES_FIXTURE[1].order,
    name: RESPONSE_ABILITIES_FIXTURE[1].ability.name,
    is_hidden: RESPONSE_ABILITIES_FIXTURE[1].is_hidden,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
];
