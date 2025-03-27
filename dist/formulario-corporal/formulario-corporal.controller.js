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
exports.FormularioCorporalController = void 0;
const common_1 = require("@nestjs/common");
const formulario_corporal_service_1 = require("./formulario-corporal.service");
const create_formulario_corporal_dto_1 = require("./dto/create-formulario-corporal.dto");
const update_formulario_corporal_dto_1 = require("./dto/update-formulario-corporal.dto");
let FormularioCorporalController = class FormularioCorporalController {
    constructor(formularioCorporalService) {
        this.formularioCorporalService = formularioCorporalService;
    }
    create(createFormularioCorporalDto) {
        return this.formularioCorporalService.create(createFormularioCorporalDto);
    }
    findAll() {
        return this.formularioCorporalService.findAll();
    }
    findOne(id) {
        return this.formularioCorporalService.findOne(+id);
    }
    update(id, updateFormularioCorporalDto) {
        return this.formularioCorporalService.update(+id, updateFormularioCorporalDto);
    }
    remove(id) {
        return this.formularioCorporalService.remove(+id);
    }
};
exports.FormularioCorporalController = FormularioCorporalController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_formulario_corporal_dto_1.CreateFormularioCorporalDto]),
    __metadata("design:returntype", void 0)
], FormularioCorporalController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FormularioCorporalController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FormularioCorporalController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_formulario_corporal_dto_1.UpdateFormularioCorporalDto]),
    __metadata("design:returntype", void 0)
], FormularioCorporalController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FormularioCorporalController.prototype, "remove", null);
exports.FormularioCorporalController = FormularioCorporalController = __decorate([
    (0, common_1.Controller)('formulario-corporal'),
    __metadata("design:paramtypes", [formulario_corporal_service_1.FormularioCorporalService])
], FormularioCorporalController);
//# sourceMappingURL=formulario-corporal.controller.js.map