import { IsString } from "class-validator";

export class CreateTurmaDto {
    @IsString()
    tur_nome: string;
}
