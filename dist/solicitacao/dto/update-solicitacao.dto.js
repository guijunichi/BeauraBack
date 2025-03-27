"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSolicitacaoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_solicitacao_dto_1 = require("./create-solicitacao.dto");
class UpdateSolicitacaoDto extends (0, mapped_types_1.PartialType)(create_solicitacao_dto_1.CreateSolicitacaoDto) {
}
exports.UpdateSolicitacaoDto = UpdateSolicitacaoDto;
//# sourceMappingURL=update-solicitacao.dto.js.map