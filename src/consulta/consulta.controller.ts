import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { UpdateConsultaDto } from './dto/update-consulta.dto';

@Controller('consulta')
export class ConsultaController {
  constructor(private readonly consultaService: ConsultaService) {}

  @Post()
  create(@Body() createConsultaDto: CreateConsultaDto) {
    return this.consultaService.create(createConsultaDto);
  }

  @Get()
  findAll() {
    return this.consultaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consultaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsultaDto: UpdateConsultaDto) {
    return this.consultaService.update(+id, updateConsultaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consultaService.remove(+id);
  }

  @Get('/solId/:sol_id')
    async getConsulta(@Param('sol_id') sol_id: number) {
        const consulta = await this.consultaService.getConsultaByCadId(sol_id);
        if (!consulta) {
            return { message: 'Solicitações não encontradas.' };
        }
        return consulta.map(consulta => ({
          con_id: consulta.con_id,
          con_data: consulta.con_data,
          con_descricao: consulta.con_descricao,
          hora_inicio: consulta.hora_inicio,
          hora_termino: consulta.hora_termino,
          tec_id: consulta.tec_id,
          sol_id: consulta.sol_id
      }));
    }

  @Get('/tecId/:tec_id')
    async getConsultaTec(@Param('tec_id') tec_id: number) {
        const consulta = await this.consultaService.getConsultaByTecId(tec_id);
        if (!consulta) {
            return { message: 'Solicitações não encontradas.' };
        }
        return consulta.map(consulta => ({
          con_id: consulta.con_id,
          con_data: consulta.con_data,
          con_descricao: consulta.con_descricao,
          hora_inicio: consulta.hora_inicio,
          hora_termino: consulta.hora_termino,
          tec_id: consulta.tec_id,
          sol_id: consulta.sol_id
      }));
    }
}
