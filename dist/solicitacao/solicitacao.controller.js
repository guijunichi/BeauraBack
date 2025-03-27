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
exports.SolicitacaoController = void 0;
const common_1 = require("@nestjs/common");
const solicitacao_service_1 = require("./solicitacao.service");
const create_solicitacao_dto_1 = require("./dto/create-solicitacao.dto");
const update_solicitacao_dto_1 = require("./dto/update-solicitacao.dto");
let SolicitacaoController = class SolicitacaoController {
    constructor(solicitacaoService) {
        this.solicitacaoService = solicitacaoService;
    }
    create(createSolicitacaoDto) {
        return this.solicitacaoService.create(createSolicitacaoDto);
    }
    findAll() {
        return this.solicitacaoService.findAll();
    }
    findOne(id) {
        return this.solicitacaoService.findOne(+id);
    }
    update(id, updateSolicitacaoDto) {
        return this.solicitacaoService.update(+id, updateSolicitacaoDto);
    }
    remove(id) {
        return this.solicitacaoService.remove(+id);
    }
    async getSolicitacoes(cadId) {
        const solicitacao = await this.solicitacaoService.getSolicitacaoByCadId(cadId);
        if (!solicitacao) {
            return { message: 'Solicitações não encontradas.' };
        }
        return solicitacao.map(solicitacao => ({
            solicitacaoId: solicitacao.sol_id,
            status: solicitacao.sol_status,
            data: solicitacao.sol_data,
            descricao: solicitacao.sol_descricao,
            cadId: solicitacao.cadId,
            proId: solicitacao.proId
        }));
    }
};
exports.SolicitacaoController = SolicitacaoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_solicitacao_dto_1.CreateSolicitacaoDto]),
    __metadata("design:returntype", void 0)
], SolicitacaoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SolicitacaoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SolicitacaoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_solicitacao_dto_1.UpdateSolicitacaoDto]),
    __metadata("design:returntype", void 0)
], SolicitacaoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SolicitacaoController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('/cadId/:cadId'),
    __param(0, (0, common_1.Param)('cadId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SolicitacaoController.prototype, "getSolicitacoes", null);
exports.SolicitacaoController = SolicitacaoController = __decorate([
    (0, common_1.Controller)('solicitacao'),
    __metadata("design:paramtypes", [solicitacao_service_1.SolicitacaoService])
], SolicitacaoController);
//# sourceMappingURL=solicitacao.controller.js.map