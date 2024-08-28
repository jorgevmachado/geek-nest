import { SetMetadata } from '@nestjs/common';

export const Status = (...status: Array<string>) =>
  SetMetadata('status', status);
