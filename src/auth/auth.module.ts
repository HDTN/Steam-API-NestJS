// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { SteamStrategy } from './steam.strategy';
import { AuthController } from './auth.controller';
import * as passport from 'passport';

@Module({
  imports: [PassportModule.register({ session: true })],
  providers: [AuthService, SteamStrategy],
  controllers: [AuthController],
})
export class AuthModule {
  constructor(private readonly authService: AuthService) {
    passport.serializeUser((user, done) => {
      console.log('Serializing user:', user);
      done(null, user);
    });

    passport.deserializeUser(async (user, done) => {
      console.log('Deserializing user:', user);
      const validatedUser = await this.authService.validateUser(user.steamId);
      done(null, validatedUser);
    });
  }
}
