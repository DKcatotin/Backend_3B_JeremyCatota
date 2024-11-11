import { Body, Controller, Post } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService) {

    }
    @Post('register')
    registerUser(@Body()userobj : RegisterAuthDto){
        console.log(userobj);
        return userobj;
    }
    @Post('login')
    login(@Body() credenciales: LoginAuthDto){
        return this.authService.login(credenciales)
    }
}
