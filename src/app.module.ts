import { Module } from '@nestjs/common';
import { InfoModule,UserModule } from './info/info.module';

@Module({
  imports: [InfoModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
