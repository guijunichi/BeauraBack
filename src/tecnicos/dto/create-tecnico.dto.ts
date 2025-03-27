import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTecnicoDto {
    @IsString()
    tec_nome: string;
    @IsString()
    tec_sobrenome: string;
    @IsString()
    tec_rg: string;
    @IsString()
    tec_cpf: string;
    @IsString()
    tec_rua: string;
    @IsString()
    tec_numero: string;
    @IsOptional()
    tec_complemento: string;
    @IsString()
    tec_bairro: string;
    @IsString()
    tec_cep: string;
    @IsString()
    tec_cidade: string;
    @IsString()
    tec_uf: string;
    @IsString()
    tec_celular: string;
    @IsString()
    tec_telefone: string;
    @IsOptional()
    tec_emergencia: string;
    @IsOptional()
    tec_contato: string;
    @IsNotEmpty()
    tec_dataNascimento: Date;
    @IsString()
    tec_idade: string;
    @IsString()
    tec_sexo: string;
    @IsString()
    tec_escolaridade: string;
    @IsString()
    tec_profissao: string;
    @IsString()
    tec_estadoCivil: string;
    @IsString()
    tec_filhos: string;
    @IsNumber()
    cliId: number;
    @IsNumber()
    turId: number;
    @IsOptional()
    espId: number;
}
