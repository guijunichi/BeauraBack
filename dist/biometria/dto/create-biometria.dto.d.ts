import { Decimal } from "@prisma/client/runtime/library";
export declare class CreateBiometriaDto {
    bio_data: Date;
    bio_bracoD: Decimal;
    bio_bracoE: Decimal;
    bio_busto: Decimal;
    bio_torax: Decimal;
    bio_cintura: Decimal;
    bio_abdomen: Decimal;
    bio_flancos: Decimal;
    bio_quadril: Decimal;
    bio_culote: Decimal;
    bio_coxaD: Decimal;
    bio_coxaE: Decimal;
    bio_entreD: Decimal;
    bio_entreE: Decimal;
    bio_panturrilhaD: Decimal;
    bio_panturrilhaE: Decimal;
    corId: number;
}
