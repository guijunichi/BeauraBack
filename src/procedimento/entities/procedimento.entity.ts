import{Procedimento} from "@prisma/client"

export class ProcedimentoEntity implements Procedimento {
  pro_id: number;
  pro_nome: string;
   
}
