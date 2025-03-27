import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormularioFacialService } from './formulario-facial.service';
import { CreateFormularioFacialDto } from './dto/create-formulario-facial.dto';
import { UpdateFormularioFacialDto } from './dto/update-formulario-facial.dto';

@Controller('formulario-facial')
export class FormularioFacialController {
  constructor(private readonly formularioFacialService: FormularioFacialService) {}

  @Post()
  create(@Body() createFormularioFacialDto: CreateFormularioFacialDto) {
    return this.formularioFacialService.create(createFormularioFacialDto);
  }

  @Get()
  findAll() {
    return this.formularioFacialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formularioFacialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormularioFacialDto: UpdateFormularioFacialDto) {
    return this.formularioFacialService.update(+id, updateFormularioFacialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formularioFacialService.remove(+id);
  }
}
