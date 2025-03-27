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
exports.CreateBiometriaDto = void 0;
const library_1 = require("@prisma/client/runtime/library");
const class_validator_1 = require("class-validator");
class CreateBiometriaDto {
}
exports.CreateBiometriaDto = CreateBiometriaDto;
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateBiometriaDto.prototype, "bio_data", void 0);
__decorate([
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", library_1.Decimal)
], CreateBiometriaDto.prototype, "bio_bracoD", void 0);
__decorate([
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", library_1.Decimal)
], CreateBiometriaDto.prototype, "bio_bracoE", void 0);
__decorate([
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", library_1.Decimal)
], CreateBiometriaDto.prototype, "bio_busto", void 0);
__decorate([
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", library_1.Decimal)
], CreateBiometriaDto.prototype, "bio_torax", void 0);
__decorate([
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", library_1.Decimal)
], CreateBiometriaDto.prototype, "bio_cintura", void 0);
__decorate([
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", library_1.Decimal)
], CreateBiometriaDto.prototype, "bio_abdomen", void 0);
__decorate([
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", library_1.Decimal)
], CreateBiometriaDto.prototype, "bio_flancos", void 0);
__decorate([
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", library_1.Decimal)
], CreateBiometriaDto.prototype, "bio_quadril", void 0);
__decorate([
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", library_1.Decimal)
], CreateBiometriaDto.prototype, "bio_culote", void 0);
__decorate([
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", library_1.Decimal)
], CreateBiometriaDto.prototype, "bio_coxaD", void 0);
__decorate([
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", library_1.Decimal)
], CreateBiometriaDto.prototype, "bio_coxaE", void 0);
__decorate([
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", library_1.Decimal)
], CreateBiometriaDto.prototype, "bio_entreD", void 0);
__decorate([
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", library_1.Decimal)
], CreateBiometriaDto.prototype, "bio_entreE", void 0);
__decorate([
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", library_1.Decimal)
], CreateBiometriaDto.prototype, "bio_panturrilhaD", void 0);
__decorate([
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", library_1.Decimal)
], CreateBiometriaDto.prototype, "bio_panturrilhaE", void 0);
__decorate([
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], CreateBiometriaDto.prototype, "corId", void 0);
//# sourceMappingURL=create-biometria.dto.js.map