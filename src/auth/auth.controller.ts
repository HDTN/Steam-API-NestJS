// src/auth/auth.controller.ts
import { Controller, Get, Req, Res, UseGuards, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Get('steam')
    @UseGuards(AuthGuard('steam'))
    steamLogin() {
        // Iniciar a autenticação com Steam
    }

    @Get('steam/return')
    @UseGuards(AuthGuard('steam'))
    steamLoginReturn(@Req() req: Request, @Res() res: Response) {
        console.log('Steam login return callback triggered...');
        console.log('User:', req.user);
        res.redirect('/auth/success');
    }

    @Get('success')
    getSuccess(@Req() req: Request) {
        return { message: 'Login successful', user: req.user };
    }

    @Get('profile/:steamId')
    async getProfile(@Param('steamId') steamId: string) {
        console.log('Fetching user profile for Steam ID:', steamId);
        const user = await this.authService.findUserBySteamId(steamId);
        if (!user) {
            console.log('User not found');
            return { message: 'User not found' };
        }
        return user;
    }
}
