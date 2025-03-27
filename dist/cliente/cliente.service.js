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
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
let ClienteService = class ClienteService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createClienteDto) {
        const hash = await bcrypt.hash(createClienteDto.cli_senha, 12);
        createClienteDto.cli_senha = hash;
        return this.prisma.cliente.create({ data: createClienteDto });
    }
    async findAll() {
        return this.prisma.cliente.findMany();
    }
    async findUnique(cli_email) {
        return this.prisma.cliente.findUnique({ where: { cli_email } });
    }
    async findOne(cli_id) {
        return this.prisma.cliente.findUnique({ where: { cli_id } });
    }
    async update(cli_id, updateClienteDto) {
        return this.prisma.cliente.update({ where: { cli_id }, data: updateClienteDto });
    }
    async remove(cli_id) {
        return this.prisma.cliente.delete({ where: { cli_id } });
    }
};
exports.ClienteService = ClienteService;
exports.ClienteService = ClienteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClienteService);
//# sourceMappingURL=cliente.service.js.map