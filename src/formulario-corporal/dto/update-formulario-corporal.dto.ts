import { PartialType } from '@nestjs/mapped-types';
import { CreateFormularioCorporalDto } from './create-formulario-corporal.dto';

export class UpdateFormularioCorporalDto extends PartialType(CreateFormularioCorporalDto) {}
