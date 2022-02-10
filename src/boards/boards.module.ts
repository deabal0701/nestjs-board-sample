import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsController } from './boards.controller';
import { BoardRepository } from './boards.repository';
import { BoardsService } from './boards.service';

@Module({
  // eslint-disable-next-line prettier/prettier
  imports: [
    TypeOrmModule.forFeature([BoardRepository])
  ],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
