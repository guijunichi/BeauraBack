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
exports.BiometriaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BiometriaService = class BiometriaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createBiometriaDto) {
        return this.prisma.biometria.create({ data: createBiometriaDto });
    }
    async findAll() {
        return this.prisma.biometria.findMany();
    }
    async findOne(bio_id) {
        return this.prisma.biometria.findUnique({ where: { bio_id } });
    }
    async update(bio_id, updateBiometriaDto) {
        return this.prisma.biometria.update({ where: { bio_id }, data: updateBiometriaDto });
    }
    async remove(bio_id) {
        return this.prisma.biometria.delete({ where: { bio_id } });
    }
};
exports.BiometriaService = BiometriaService;
exports.BiometriaService = BiometriaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BiometriaService);
//# sourceMappingURL=biometria.service.js.map