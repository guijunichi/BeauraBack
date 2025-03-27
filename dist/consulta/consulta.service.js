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
exports.ConsultaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ConsultaService = class ConsultaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createConsultaDto) {
        return this.prisma.consulta.create({ data: createConsultaDto });
    }
    async findAll() {
        return this.prisma.consulta.findMany();
    }
    async findOne(con_id) {
        return this.prisma.consulta.findUnique({ where: { con_id } });
    }
    async update(con_id, updateConsultaDto) {
        return this.prisma.consulta.update({ where: { con_id }, data: updateConsultaDto });
    }
    async remove(con_id) {
        return this.prisma.consulta.delete({ where: { con_id } });
    }
    async getConsultaByCadId(sol_id) {
        return this.prisma.consulta.findMany({ where: { sol_id } });
    }
    async getConsultaByTecId(tec_id) {
        return this.prisma.consulta.findMany({ where: { tec_id } });
    }
};
exports.ConsultaService = ConsultaService;
exports.ConsultaService = ConsultaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConsultaService);
//# sourceMappingURL=consulta.service.js.map