import { Decimal } from "@prisma/client/runtime/library";
import {IsDateString, IsDecimal } from "class-validator";

export class CreateBiometriaDto {
    @IsDateString()
    bio_data: Date;
    @IsDecimal()
    bio_bracoD: Decimal;
    @IsDecimal()
    bio_bracoE: Decimal;
    @IsDecimal()
    bio_busto: Decimal;
    @IsDecimal()
    bio_torax: Decimal;
    @IsDecimal()
    bio_cintura: Decimal;
    @IsDecimal()
    bio_abdomen: Decimal;
    @IsDecimal()
    bio_flancos: Decimal;
    @IsDecimal()
    bio_quadril: Decimal;
    @IsDecimal()
    bio_culote: Decimal;
    @IsDecimal()
    bio_coxaD: Decimal;
    @IsDecimal()
    bio_coxaE: Decimal;
    @IsDecimal()
    bio_entreD: Decimal;
    @IsDecimal()
    bio_entreE: Decimal;
    @IsDecimal()
    bio_panturrilhaD: Decimal;
    @IsDecimal()
    bio_panturrilhaE: Decimal;
    @IsDecimal()
    corId: number;
}
