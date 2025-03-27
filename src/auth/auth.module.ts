import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ClienteModule } from 'src/cliente/cliente.module'; 
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';


@Module({
  imports: [forwardRef(()=>ClienteModule), JwtModule.register({
    global:true,
    secret: process.env.SECRET_KEY || '',
    signOptions:{ expiresIn:'60m'},
  })],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard],
  exports: [AuthGuard]
})
export class AuthModule {}