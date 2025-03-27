import { PartialType } from '@nestjs/mapped-types';
import { CreateFormularioFacialDto } from './create-formulario-facial.dto';

export class UpdateFormularioFacialDto extends PartialType(CreateFormularioFacialDto) {}
