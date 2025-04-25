import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CadastroService } from './cadastro.service';
import { CreateCadastroDto } from './dto/create-cadastro.dto';
import { UpdateCadastroDto } from './dto/update-cadastro.dto';

@Controller('cadastro')
export class CadastroController {
  constructor(private readonly cadastroService: CadastroService) {}

  @Post()
  async create(@Body() createCadastroDto: CreateCadastroDto) {
    try {
      return await this.cadastroService.create(createCadastroDto);
    } catch (error) {
      if (
        error.code === 'P2002' &&
        error.meta?.target?.includes('cli_email')
      ) {
        throw new ConflictException('E-mail já cadastrado.');
      }
  
      console.error('Erro ao criar cadastro:', error);
      throw new InternalServerErrorException('Erro interno ao criar cadastro.');
    }
  }

  @Get()
  findAll() {
    return this.cadastroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cadastroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCadastroDto: UpdateCadastroDto) {
    return this.cadastroService.update(+id, updateCadastroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cadastroService.remove(+id);
  }

  @Get('/cliId/:cliId')
    async getCadastro(@Param('cliId') cliId: number) {
        const cadastro = await this.cadastroService.getCadastroByUserId(cliId);
        if (!cadastro) {
            return { message: 'Cadastro não encontrado.' };
        }
        return { cadastro };
    }
}
