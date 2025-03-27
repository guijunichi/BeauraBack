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
exports.FormularioFacialController = void 0;
const common_1 = require("@nestjs/common");
const formulario_facial_service_1 = require("./formulario-facial.service");
const create_formulario_facial_dto_1 = require("./dto/create-formulario-facial.dto");
const update_formulario_facial_dto_1 = require("./dto/update-formulario-facial.dto");
let FormularioFacialController = class FormularioFacialController {
    constructor(formularioFacialService) {
        this.formularioFacialService = formularioFacialService;
    }
    create(createFormularioFacialDto) {
        return this.formularioFacialService.create(createFormularioFacialDto);
    }
    findAll() {
        return this.formularioFacialService.findAll();
    }
    findOne(id) {
        return this.formularioFacialService.findOne(+id);
    }
    update(id, updateFormularioFacialDto) {
        return this.formularioFacialService.update(+id, updateFormularioFacialDto);
    }
    remove(id) {
        return this.formularioFacialService.remove(+id);
    }
};
exports.FormularioFacialController = FormularioFacialController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_formulario_facial_dto_1.CreateFormularioFacialDto]),
    __metadata("design:returntype", void 0)
], FormularioFacialController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FormularioFacialController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FormularioFacialController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_formulario_facial_dto_1.UpdateFormularioFacialDto]),
    __metadata("design:returntype", void 0)
], FormularioFacialController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FormularioFacialController.prototype, "remove", null);
exports.FormularioFacialController = FormularioFacialController = __decorate([
    (0, common_1.Controller)('formulario-facial'),
    __metadata("design:paramtypes", [formulario_facial_service_1.FormularioFacialService])
], FormularioFacialController);
//# sourceMappingURL=formulario-facial.controller.js.map