import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSolicitacaoDto {
  @IsOptional()
  sol_status: string;
  @IsOptional()
  sol_data: Date;
  @IsOptional()
  sol_descricao: string;
  @IsNumber()
  cadId: number;
  @IsNumber()
  proId: number;
  
}
