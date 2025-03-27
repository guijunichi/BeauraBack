import { IsNumber, IsString } from "class-validator";

export class CreateFormularioFacialDto {
    @IsString()
    fac_img: string;
    @IsString()
    fac_p1: string;
    @IsString()
    fac_p2: string;
    @IsString()
    fac_p3: string;
    @IsString()
    fac_p4: string;
    @IsString()
    fac_p5: string;
    @IsString()
    fac_p6: string;
    @IsString()
    fac_p7: string;
    @IsString()
    fac_p8: string;
    @IsString()
    fac_p9: string;
    @IsString()
    fac_p10: string;
    @IsString()
    fac_p11: string;
    @IsString()
    fac_p12: string;
    @IsString()
    fac_p13: string;
    @IsString()
    fac_p14: string;
    @IsString()
    fac_p15: string;
    @IsString()
    fac_p16: string;
    @IsString()
    fac_p17: string;
    @IsString()
    fac_p18: string;
    @IsString()
    fac_p19: string;
    @IsString()
    fac_ComObs: string;
    @IsNumber()
    solId: number;
}
