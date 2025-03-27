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
exports.ConsultaController = void 0;
const common_1 = require("@nestjs/common");
const consulta_service_1 = require("./consulta.service");
const create_consulta_dto_1 = require("./dto/create-consulta.dto");
const update_consulta_dto_1 = require("./dto/update-consulta.dto");
let ConsultaController = class ConsultaController {
    constructor(consultaService) {
        this.consultaService = consultaService;
    }
    create(createConsultaDto) {
        return this.consultaService.create(createConsultaDto);
    }
    findAll() {
        return this.consultaService.findAll();
    }
    findOne(id) {
        return this.consultaService.findOne(+id);
    }
    update(id, updateConsultaDto) {
        return this.consultaService.update(+id, updateConsultaDto);
    }
    remove(id) {
        return this.consultaService.remove(+id);
    }
    async getConsulta(sol_id) {
        const consulta = await this.consultaService.getConsultaByCadId(sol_id);
        if (!consulta) {
            return { message: 'Solicitações não encontradas.' };
        }
        return consulta.map(consulta => ({
            con_id: consulta.con_id,
            con_data: consulta.con_data,
            con_descricao: consulta.con_descricao,
            hora_inicio: consulta.hora_inicio,
            hora_termino: consulta.hora_termino,
            tec_id: consulta.tec_id,
            sol_id: consulta.sol_id
        }));
    }
    async getConsultaTec(tec_id) {
        const consulta = await this.consultaService.getConsultaByTecId(tec_id);
        if (!consulta) {
            return { message: 'Solicitações não encontradas.' };
        }
        return consulta.map(consulta => ({
            con_id: consulta.con_id,
            con_data: consulta.con_data,
            con_descricao: consulta.con_descricao,
            hora_inicio: consulta.hora_inicio,
            hora_termino: consulta.hora_termino,
            tec_id: consulta.tec_id,
            sol_id: consulta.sol_id
        }));
    }
};
exports.ConsultaController = ConsultaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_consulta_dto_1.CreateConsultaDto]),
    __metadata("design:returntype", void 0)
], ConsultaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConsultaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConsultaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_consulta_dto_1.UpdateConsultaDto]),
    __metadata("design:returntype", void 0)
], ConsultaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConsultaController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('/solId/:sol_id'),
    __param(0, (0, common_1.Param)('sol_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConsultaController.prototype, "getConsulta", null);
__decorate([
    (0, common_1.Get)('/tecId/:tec_id'),
    __param(0, (0, common_1.Param)('tec_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConsultaController.prototype, "getConsultaTec", null);
exports.ConsultaController = ConsultaController = __decorate([
    (0, common_1.Controller)('consulta'),
    __metadata("design:paramtypes", [consulta_service_1.ConsultaService])
], ConsultaController);
//# sourceMappingURL=consulta.controller.js.map