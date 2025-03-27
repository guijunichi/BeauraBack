"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBiometriaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_biometria_dto_1 = require("./create-biometria.dto");
class UpdateBiometriaDto extends (0, mapped_types_1.PartialType)(create_biometria_dto_1.CreateBiometriaDto) {
}
exports.UpdateBiometriaDto = UpdateBiometriaDto;
//# sourceMappingURL=update-biometria.dto.js.map