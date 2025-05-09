import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { PrismaService } from 'src/prisma/prisma.service';


@Module({
  controllers: [ClienteController],
  providers: [ClienteService, PrismaService],
  exports: [ClienteService]
})
export class ClienteModule {}
