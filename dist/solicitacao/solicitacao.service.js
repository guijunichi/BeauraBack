"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitacaoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SolicitacaoService = class SolicitacaoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createSolicitacaoDto) {
        return this.prisma.solicitacao.create({ data: createSolicitacaoDto });
    }
    async findAll() {
        return this.prisma.solicitacao.findMany();
    }
    async findOne(sol_id) {
        return this.prisma.solicitacao.findUnique({ where: { sol_id } });
    }
    async update(sol_id, updateSolicitacaoDto) {
        return this.prisma.solicitacao.update({ where: { sol_id }, data: updateSolicitacaoDto });
    }
    async remove(sol_id) {
        return this.prisma.solicitacao.delete({ where: { sol_id } });
    }
    async getSolicitacaoByCadId(cadId) {
        return this.prisma.solicitacao.findMany({ where: { cadId } });
    }
};
exports.SolicitacaoService = SolicitacaoService;
exports.SolicitacaoService = SolicitacaoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SolicitacaoService);
//# sourceMappingURL=solicitacao.service.js.map