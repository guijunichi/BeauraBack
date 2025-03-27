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
exports.EspecialidadeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EspecialidadeService = class EspecialidadeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createEspecialidadeDto) {
        return this.prisma.especialidade.create({ data: createEspecialidadeDto });
    }
    async findAll() {
        return this.prisma.especialidade.findMany();
    }
    async findOne(esp_id) {
        return this.prisma.especialidade.findUnique({ where: { esp_id } });
    }
    async update(esp_id, updateEspecialidadeDto) {
        return this.prisma.especialidade.update({ where: { esp_id }, data: updateEspecialidadeDto });
    }
    async remove(esp_id) {
        return this.prisma.especialidade.delete({ where: { esp_id } });
    }
};
exports.EspecialidadeService = EspecialidadeService;
exports.EspecialidadeService = EspecialidadeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EspecialidadeService);
//# sourceMappingURL=especialidade.service.js.map