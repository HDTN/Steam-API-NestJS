// src/steam/steam.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { SteamService } from './steam.service';

@Controller('steam')
export class SteamController {
    constructor(private readonly steamService: SteamService) { }

    @Get('inventory/:steamId')
    async getInventory(@Param('steamId') steamId: string) {
        console.log('Fetching inventory for Steam ID:', steamId);
        const inventory = await this.steamService.getSteamInventory(steamId);
        if (!inventory) {
            console.log('Failed to fetch inventory');
            return { statusCode: 400, message: 'Failed to fetch inventory' };
        }
        return inventory;
    }
}
