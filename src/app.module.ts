import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LabsModule } from './labs/labs.module';
import { RoleController } from './role/role.controller';

@Module({
  imports: [UserModule, LabsModule],
  controllers: [AppController, RoleController],
  providers: [AppService],
})
export class AppModule {}
