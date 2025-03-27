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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadastroController = void 0;
const common_1 = require("@nestjs/common");
const cadastro_service_1 = require("./cadastro.service");
const create_cadastro_dto_1 = require("./dto/create-cadastro.dto");
const update_cadastro_dto_1 = require("./dto/update-cadastro.dto");
let CadastroController = class CadastroController {
    constructor(cadastroService) {
        this.cadastroService = cadastroService;
    }
    create(createCadastroDto) {
        return this.cadastroService.create(createCadastroDto);
    }
    findAll() {
        return this.cadastroService.findAll();
    }
    findOne(id) {
        return this.cadastroService.findOne(+id);
    }
    update(id, updateCadastroDto) {
        return this.cadastroService.update(+id, updateCadastroDto);
    }
    remove(id) {
        return this.cadastroService.remove(+id);
    }
    async getCadastro(cliId) {
        const cadastro = await this.cadastroService.getCadastroByUserId(cliId);
        if (!cadastro) {
            return { message: 'Cadastro não encontrado.' };
        }
        return { cadastro };
    }
};
exports.CadastroController = CadastroController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cadastro_dto_1.CreateCadastroDto]),
    __metadata("design:returntype", void 0)
], CadastroController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CadastroController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CadastroController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cadastro_dto_1.UpdateCadastroDto]),
    __metadata("design:returntype", void 0)
], CadastroController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CadastroController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('/cliId/:cliId'),
    __param(0, (0, common_1.Param)('cliId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CadastroController.prototype, "getCadastro", null);
exports.CadastroController = CadastroController = __decorate([
    (0, common_1.Controller)('cadastro'),
    __metadata("design:paramtypes", [cadastro_service_1.CadastroService])
], CadastroController);
//# sourceMappingURL=cadastro.controller.js.map