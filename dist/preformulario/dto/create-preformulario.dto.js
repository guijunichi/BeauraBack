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
exports.CreatePreformularioDto = void 0;
const library_1 = require("@prisma/client/runtime/library");
const class_validator_1 = require("class-validator");
class CreatePreformularioDto {
}
exports.CreatePreformularioDto = CreatePreformularioDto;
__decorate([
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", library_1.Decimal)
], CreatePreformularioDto.prototype, "pre_altura", void 0);
__decorate([
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", library_1.Decimal)
], CreatePreformularioDto.prototype, "pre_peso", void 0);
__decorate([
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", library_1.Decimal)
], CreatePreformularioDto.prototype, "pre_imc", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p1", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p2", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p3", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p4", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreatePreformularioDto.prototype, "pre_p5", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p6", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p7", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p8", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p9", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p10", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p12", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p13", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p14", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p15", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p16", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p17", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p18", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p19", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p20", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p21", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p22", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p23", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreatePreformularioDto.prototype, "pre_p24", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p25", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p26", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p27", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p28", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p29", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p30", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p31", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p32", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p33", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p34", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p36", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p37", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p38", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p39", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p40", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p41", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p42", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p43", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p44", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p45", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p46", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p47", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p48", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p49", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p50", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p51", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p52", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p53", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p54", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p55", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreformularioDto.prototype, "pre_p56", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePreformularioDto.prototype, "solId", void 0);
//# sourceMappingURL=create-preformulario.dto.js.map