import { $Enums, Cliente } from "@prisma/client";

export class ClienteEntity implements Cliente {
    userType: $Enums.UserType;
    cli_id: number;
    cli_email: string;
    cli_senha: string;
}
