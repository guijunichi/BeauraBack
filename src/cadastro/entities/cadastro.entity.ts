import { Cadastro } from "@prisma/client";

export class CadastroEntity implements Cadastro {
    cad_complemento: string;
    cad_id: number;
    cad_nome: string;
    cad_sobrenome: string;
    cad_rg: string;
    cad_cpf: string;
    cad_rua: string;
    cad_numero: string;
    cad_bairro: string;
    cad_cep: string;
    cad_cidade: string;
    cad_uf: string;
    cad_celular: string;
    cad_telefone: string;
    cad_emergencia: string;
    cad_contato: string;
    cad_dataNascimento: Date;
    cad_idade: string;
    cad_sexo: string;
    cad_escolaridade: string;
    cad_profissao: string;
    cad_estadoCivil: string;
    cad_filhos: string;
    cliId: number;
}