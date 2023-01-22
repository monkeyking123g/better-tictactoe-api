import { Module } from '@nestjs/common';
import { InfoController, UserController } from './info.controller';
import { InfoService, UserService } from './info.service';

@Module({
  imports: [],
  controllers: [InfoController],
  providers: [InfoService],
})
export class InfoModule {}

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
