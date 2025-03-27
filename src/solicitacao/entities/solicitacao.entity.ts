import { Solicitacao } from "@prisma/client";

export class SolicitacaoEntity implements Solicitacao {
  sol_id: number;
  sol_status: string;
  sol_data: Date;
  sol_descricao: string;
  cadId: number;
  proId: number;
  
}

