import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    console.log('The module has been initialized........');
    await this.$connect();
  }

  async onModuleDestroy() {
    console.log('The module has been destroy.........');
    await this.$disconnect();
  }
}
