"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitacaoModule = void 0;
const common_1 = require("@nestjs/common");
const solicitacao_service_1 = require("./solicitacao.service");
const solicitacao_controller_1 = require("./solicitacao.controller");
const prisma_service_1 = require("../prisma/prisma.service");
let SolicitacaoModule = class SolicitacaoModule {
};
exports.SolicitacaoModule = SolicitacaoModule;
exports.SolicitacaoModule = SolicitacaoModule = __decorate([
    (0, common_1.Module)({
        controllers: [solicitacao_controller_1.SolicitacaoController],
        providers: [solicitacao_service_1.SolicitacaoService, prisma_service_1.PrismaService],
    })
], SolicitacaoModule);
//# sourceMappingURL=solicitacao.module.js.map