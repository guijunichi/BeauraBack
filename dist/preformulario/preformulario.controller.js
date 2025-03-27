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
exports.PreformularioController = void 0;
const common_1 = require("@nestjs/common");
const preformulario_service_1 = require("./preformulario.service");
const create_preformulario_dto_1 = require("./dto/create-preformulario.dto");
const update_preformulario_dto_1 = require("./dto/update-preformulario.dto");
let PreformularioController = class PreformularioController {
    constructor(preformularioService) {
        this.preformularioService = preformularioService;
    }
    create(createPreformularioDto) {
        return this.preformularioService.create(createPreformularioDto);
    }
    findAll() {
        return this.preformularioService.findAll();
    }
    findOne(id) {
        return this.preformularioService.findOne(+id);
    }
    update(id, updatePreformularioDto) {
        return this.preformularioService.update(+id, updatePreformularioDto);
    }
    remove(id) {
        return this.preformularioService.remove(+id);
    }
};
exports.PreformularioController = PreformularioController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_preformulario_dto_1.CreatePreformularioDto]),
    __metadata("design:returntype", void 0)
], PreformularioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PreformularioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PreformularioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_preformulario_dto_1.UpdatePreformularioDto]),
    __metadata("design:returntype", void 0)
], PreformularioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PreformularioController.prototype, "remove", null);
exports.PreformularioController = PreformularioController = __decorate([
    (0, common_1.Controller)('preformulario'),
    __metadata("design:paramtypes", [preformulario_service_1.PreformularioService])
], PreformularioController);
//# sourceMappingURL=preformulario.controller.js.map