import {IsEmail, IsNotEmpty, IsString, IsStrongPassword} from 'class-validator';

export class CreateClienteDto {
    @IsEmail({}, { message: 'O e-mail deve ser válido.' })
    @IsNotEmpty()
    @IsString()
    cli_email: string
    @IsStrongPassword( {},
        { message: 'A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial.'})
    @IsNotEmpty()
    @IsString()
    cli_senha: string
    userType: 'Cliente' | 'Tecnico' | 'Admin';
}
