import {Turma} from "@prisma/client"

export class TurmaEntity implements Turma {
    tur_id: number;
    tur_nome: string;
}
