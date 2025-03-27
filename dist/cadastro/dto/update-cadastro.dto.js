"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCadastroDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cadastro_dto_1 = require("./create-cadastro.dto");
class UpdateCadastroDto extends (0, mapped_types_1.PartialType)(create_cadastro_dto_1.CreateCadastroDto) {
}
exports.UpdateCadastroDto = UpdateCadastroDto;
//# sourceMappingURL=update-cadastro.dto.js.map