"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_service_1 = require("./prisma/prisma.service");
const biometria_module_1 = require("./biometria/biometria.module");
const formulario_corporal_module_1 = require("./formulario-corporal/formulario-corporal.module");
const procedimento_module_1 = require("./procedimento/procedimento.module");
const cliente_module_1 = require("./cliente/cliente.module");
const consulta_module_1 = require("./consulta/consulta.module");
const formulario_facial_module_1 = require("./formulario-facial/formulario-facial.module");
const tecnicos_module_1 = require("./tecnicos/tecnicos.module");
const especialidade_module_1 = require("./especialidade/especialidade.module");
const turma_module_1 = require("./turma/turma.module");
const solicitacao_module_1 = require("./solicitacao/solicitacao.module");
const preformulario_module_1 = require("./preformulario/preformulario.module");
const cadastro_module_1 = require("./cadastro/cadastro.module");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [biometria_module_1.BiometriaModule, formulario_corporal_module_1.FormularioCorporalModule, procedimento_module_1.ProcedimentoModule, cliente_module_1.ClienteModule, consulta_module_1.ConsultaModule, formulario_facial_module_1.FormularioFacialModule, tecnicos_module_1.TecnicosModule, especialidade_module_1.EspecialidadeModule, turma_module_1.TurmaModule, solicitacao_module_1.SolicitacaoModule, preformulario_module_1.PreformularioModule, cadastro_module_1.CadastroModule, auth_module_1.AuthModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map