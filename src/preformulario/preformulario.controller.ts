import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PreformularioService } from './preformulario.service';
import { CreatePreformularioDto } from './dto/create-preformulario.dto';
import { UpdatePreformularioDto } from './dto/update-preformulario.dto';

@Controller('preformulario')
export class PreformularioController {
  constructor(private readonly preformularioService: PreformularioService) {}

  @Post()
  create(@Body() createPreformularioDto: CreatePreformularioDto) {
    return this.preformularioService.create(createPreformularioDto);
  }

  @Get()
  findAll() {
    return this.preformularioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.preformularioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePreformularioDto: UpdatePreformularioDto) {
    return this.preformularioService.update(+id, updatePreformularioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.preformularioService.remove(+id);
  }
}
