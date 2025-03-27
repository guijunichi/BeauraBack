import { PartialType } from '@nestjs/mapped-types';
import { CreatePreformularioDto } from './create-preformulario.dto';

export class UpdatePreformularioDto extends PartialType(CreatePreformularioDto) {}
