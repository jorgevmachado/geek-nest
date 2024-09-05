import { createParamDecorator } from '@nestjs/common';

import { Users } from '@/modules/auth/users/users.entity';

export const GetUserAuth = createParamDecorator(
  (_, req): Users => req.args[0].user,
);
