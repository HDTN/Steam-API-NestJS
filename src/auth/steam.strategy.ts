// src/auth/steam.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-openid';
import { AuthService } from './auth.service';

@Injectable()
export class SteamStrategy extends PassportStrategy(Strategy, 'steam') {
    constructor(private readonly authService: AuthService) {
        super({
            providerURL: 'https://steamcommunity.com/openid',
            returnURL: 'http://localhost:3000/auth/steam/return',
            realm: 'http://localhost:3000/',
            stateless: true,
        });
    }

    async validate(identifier: string, done: Function) {
        console.log('Validating identifier:', identifier);
        const steamId = identifier.match(/\d+$/)[0];
        console.log('Extracted Steam ID:', steamId);
        const user = await this.authService.validateUser({ steamId }); // Passando como objeto
        console.log('User validated:', user);
        done(null, user);
    }
}
