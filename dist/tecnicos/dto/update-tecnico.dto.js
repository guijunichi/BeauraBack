"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTecnicoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tecnico_dto_1 = require("./create-tecnico.dto");
class UpdateTecnicoDto extends (0, mapped_types_1.PartialType)(create_tecnico_dto_1.CreateTecnicoDto) {
}
exports.UpdateTecnicoDto = UpdateTecnicoDto;
//# sourceMappingURL=update-tecnico.dto.js.map