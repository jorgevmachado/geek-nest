import { Type } from './type.entity';

import { RESPONSE_TYPES_FIXTURE } from '@/modules/pokemon/fixtures';

export const ENTITIES_TYPES_FIXTURE: Array<Type> = [
  {
    id: 'ec655500-f15e-40f3-a546-426c7d56833a',
    url: RESPONSE_TYPES_FIXTURE[0].type.url,
    name: RESPONSE_TYPES_FIXTURE[0].type.name,
    order: RESPONSE_TYPES_FIXTURE[0].order,
    textColor: '#8b4513',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    backgroundColor: '#b9cc50',
  },
  {
    id: '4200c144-bf14-4012-a001-6e8c7ff18b11',
    url: RESPONSE_TYPES_FIXTURE[1].type.url,
    name: RESPONSE_TYPES_FIXTURE[1].type.name,
    order: RESPONSE_TYPES_FIXTURE[1].order,
    textColor: '#f5f5f5',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    backgroundColor: '#8b008b',
  },
];
