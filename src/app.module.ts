// src/app.module.ts
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { SteamModule } from './steam/steam.module';

@Module({
  imports: [
    AuthModule,
    SteamModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
