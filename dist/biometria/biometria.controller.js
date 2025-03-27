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
exports.BiometriaController = void 0;
const common_1 = require("@nestjs/common");
const biometria_service_1 = require("./biometria.service");
const create_biometria_dto_1 = require("./dto/create-biometria.dto");
const update_biometria_dto_1 = require("./dto/update-biometria.dto");
let BiometriaController = class BiometriaController {
    constructor(biometriaService) {
        this.biometriaService = biometriaService;
    }
    create(createBiometriaDto) {
        return this.biometriaService.create(createBiometriaDto);
    }
    findAll() {
        return this.biometriaService.findAll();
    }
    findOne(id) {
        return this.biometriaService.findOne(+id);
    }
    update(id, updateBiometriaDto) {
        return this.biometriaService.update(+id, updateBiometriaDto);
    }
    remove(id) {
        return this.biometriaService.remove(+id);
    }
};
exports.BiometriaController = BiometriaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_biometria_dto_1.CreateBiometriaDto]),
    __metadata("design:returntype", void 0)
], BiometriaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BiometriaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BiometriaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_biometria_dto_1.UpdateBiometriaDto]),
    __metadata("design:returntype", void 0)
], BiometriaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BiometriaController.prototype, "remove", null);
exports.BiometriaController = BiometriaController = __decorate([
    (0, common_1.Controller)('biometria'),
    __metadata("design:paramtypes", [biometria_service_1.BiometriaService])
], BiometriaController);
//# sourceMappingURL=biometria.controller.js.map