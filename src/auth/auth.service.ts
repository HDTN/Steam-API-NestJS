import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AuthService {
    private users = [];

    async validateUser({ steamId }): Promise<any> {
        console.log('Validating user with Steam ID:', steamId);
        let user = this.users.find(user => user.steamId === steamId);

        if (!user) {
            // Buscar informações adicionais do usuário da Steam
            const profile = await this.getSteamProfile(steamId);
            if (!profile) {
                return null;
            }
            user = {
                steamId,
                displayName: profile.personaname,
                photos: [profile.avatarfull],
            };
            this.users.push(user);
        }

        console.log('User validated:', user);
        return user;
    }

    async findUserBySteamId(steamId: string): Promise<any> {
        const user = this.users.find(user => user.steamId === steamId);
        console.log('User from AuthService:', user);
        return user;
    }

    async getSteamProfile(steamId: string): Promise<any> {
        const url = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API_KEY}&steamids=${steamId}`;
        try {
            const response = await axios.get(url);
            if (response.data.response.players.length > 0) {
                return response.data.response.players[0];
            } else {
                console.log(`Steam profile not found for Steam ID: ${steamId}`);
                return null;
            }
        } catch (error) {
            console.error('Error fetching Steam profile:', error);
            return null;
        }
    }
}
