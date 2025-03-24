import { Module } from '@nestjs/common';
import { BotModule } from './modules/bot/bot.module';
import { internalsImportsAppModule } from './app/imports/internals.import';
import { externalsImportsAppModule } from './app/imports/externals.import';

@Module({
  imports: [
    ...externalsImportsAppModule,
    ...internalsImportsAppModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
