// src/steam/steam.service.ts
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SteamService {
    async getSteamInventory(steamId: string): Promise<any> {
        const url = `https://steamcommunity.com/inventory/${steamId}/730/2?l=english&count=5000`;
        try {
            const response = await axios.get(url);
            if (response.data && response.data.assets && response.data.descriptions) {
                return response.data;
            } else {
                console.log(`Failed to fetch inventory for Steam ID: ${steamId}`);
                return null;
            }
        } catch (error) {
            console.error('Error fetching Steam inventory:', error);
            return null;
        }
    }
}
