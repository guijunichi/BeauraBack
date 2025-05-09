import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService :JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorization = this.extractTokenFromHeader(request);
    if (!authorization) throw new UnauthorizedException('Token requerido!'); 
    try {
      const payload = await this.jwtService.verifyAsync(authorization,{secret:process.env.SECRET_KEY});
      request.user = payload;

    } catch (error) {
      throw new UnauthorizedException('Token inválido!')
    }
      // Aqui, você pode acessar o userType e armazená-lo no request, se desejar
    request.userType = request.user.userType; // Armazena o tipo de usuário
    
    return true;
  }
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
