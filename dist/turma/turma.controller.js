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
exports.TurmaController = void 0;
const common_1 = require("@nestjs/common");
const turma_service_1 = require("./turma.service");
const create_turma_dto_1 = require("./dto/create-turma.dto");
const update_turma_dto_1 = require("./dto/update-turma.dto");
let TurmaController = class TurmaController {
    constructor(turmaService) {
        this.turmaService = turmaService;
    }
    create(createTurmaDto) {
        return this.turmaService.create(createTurmaDto);
    }
    findAll() {
        return this.turmaService.findAll();
    }
    findOne(id) {
        return this.turmaService.findOne(+id);
    }
    update(id, updateTurmaDto) {
        return this.turmaService.update(+id, updateTurmaDto);
    }
    remove(id) {
        return this.turmaService.remove(+id);
    }
};
exports.TurmaController = TurmaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_turma_dto_1.CreateTurmaDto]),
    __metadata("design:returntype", void 0)
], TurmaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TurmaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TurmaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_turma_dto_1.UpdateTurmaDto]),
    __metadata("design:returntype", void 0)
], TurmaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TurmaController.prototype, "remove", null);
exports.TurmaController = TurmaController = __decorate([
    (0, common_1.Controller)('turma'),
    __metadata("design:paramtypes", [turma_service_1.TurmaService])
], TurmaController);
//# sourceMappingURL=turma.controller.js.map