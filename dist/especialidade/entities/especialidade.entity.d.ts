import { Especialidade } from "@prisma/client";
export declare class EspecialidadeEntity implements Especialidade {
    esp_id: number;
    esp_nome: string;
    esp_descricao: string;
}
