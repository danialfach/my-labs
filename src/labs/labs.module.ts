import { Module } from '@nestjs/common';
import { LabsService } from './labs.service';
import { LabsController } from './labs.controller';

@Module({
  controllers: [LabsController],
  providers: [LabsService],
})
export class LabsModule {}
