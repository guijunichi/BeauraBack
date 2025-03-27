import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormularioCorporalService } from './formulario-corporal.service';
import { CreateFormularioCorporalDto } from './dto/create-formulario-corporal.dto';
import { UpdateFormularioCorporalDto } from './dto/update-formulario-corporal.dto';

@Controller('formulario-corporal')
export class FormularioCorporalController {
  constructor(private readonly formularioCorporalService: FormularioCorporalService) {}

  @Post()
  create(@Body() createFormularioCorporalDto: CreateFormularioCorporalDto) {
    return this.formularioCorporalService.create(createFormularioCorporalDto);
  }

  @Get()
  findAll() {
    return this.formularioCorporalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formularioCorporalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormularioCorporalDto: UpdateFormularioCorporalDto) {
    return this.formularioCorporalService.update(+id, updateFormularioCorporalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formularioCorporalService.remove(+id);
  }
}
