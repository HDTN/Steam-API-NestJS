// src/steam/steam.module.ts
import { Module } from '@nestjs/common';
import { SteamService } from './steam.service';
import { SteamController } from './steam.controller';

@Module({
    providers: [SteamService],
    controllers: [SteamController],
})
export class SteamModule { }
