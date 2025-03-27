import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { BiometriaModule } from './biometria/biometria.module';
import { FormularioCorporalModule } from './formulario-corporal/formulario-corporal.module';
import { ProcedimentoModule } from './procedimento/procedimento.module';
import { ClienteModule } from './cliente/cliente.module';
import { ConsultaModule } from './consulta/consulta.module';
import { FormularioFacialModule } from './formulario-facial/formulario-facial.module';
import { TecnicosModule } from './tecnicos/tecnicos.module';
import { EspecialidadeModule } from './especialidade/especialidade.module';
import { TurmaModule } from './turma/turma.module';
import { SolicitacaoModule } from './solicitacao/solicitacao.module';
import { PreformularioModule } from './preformulario/preformulario.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BiometriaModule, FormularioCorporalModule, ProcedimentoModule, ClienteModule, ConsultaModule, FormularioFacialModule, TecnicosModule, EspecialidadeModule, TurmaModule, SolicitacaoModule, PreformularioModule, CadastroModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
