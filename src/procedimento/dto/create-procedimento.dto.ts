import { IsString } from "class-validator";

export class CreateProcedimentoDto {
  @IsString()
  pro_nome: string;
}
