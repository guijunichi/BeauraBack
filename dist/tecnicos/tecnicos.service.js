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
exports.TecnicosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TecnicosService = class TecnicosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createTecnicoDto) {
        return this.prisma.tecnicos.create({ data: createTecnicoDto });
    }
    async findAll() {
        return this.prisma.tecnicos.findMany();
    }
    async findOne(tec_id) {
        return this.prisma.tecnicos.findUnique({ where: { tec_id } });
    }
    async update(tec_id, updateTecnicoDto) {
        return this.prisma.tecnicos.update({ where: { tec_id }, data: updateTecnicoDto });
    }
    async remove(tec_id) {
        return this.prisma.tecnicos.delete({ where: { tec_id } });
    }
    async getTecnicoByUserId(cliId) {
        return this.prisma.tecnicos.findFirst({ where: { cliId } });
    }
};
exports.TecnicosService = TecnicosService;
exports.TecnicosService = TecnicosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TecnicosService);
//# sourceMappingURL=tecnicos.service.js.map