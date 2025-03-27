import { IsOptional, IsString } from "class-validator";

export class CreateEspecialidadeDto {
    @IsString()
    esp_nome: string;
    @IsOptional()
    esp_descricao: string
}
