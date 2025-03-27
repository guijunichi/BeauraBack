-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('Cliente', 'Tecnico', 'Admin');

-- CreateTable
CREATE TABLE "Turma" (
    "tur_id" SERIAL NOT NULL,
    "tur_nome" TEXT NOT NULL,

    CONSTRAINT "Turma_pkey" PRIMARY KEY ("tur_id")
);

-- CreateTable
CREATE TABLE "Especialidade" (
    "esp_id" SERIAL NOT NULL,
    "esp_nome" TEXT NOT NULL,
    "esp_descricao" TEXT,

    CONSTRAINT "Especialidade_pkey" PRIMARY KEY ("esp_id")
);

-- CreateTable
CREATE TABLE "Tecnicos" (
    "tec_id" SERIAL NOT NULL,
    "tec_nome" TEXT NOT NULL,
    "tec_sobrenome" TEXT NOT NULL,
    "tec_rg" TEXT NOT NULL,
    "tec_cpf" TEXT NOT NULL,
    "tec_rua" TEXT NOT NULL,
    "tec_numero" TEXT NOT NULL,
    "tec_complemento" TEXT,
    "tec_bairro" TEXT NOT NULL,
    "tec_cep" TEXT NOT NULL,
    "tec_cidade" TEXT NOT NULL,
    "tec_uf" TEXT NOT NULL,
    "tec_celular" TEXT NOT NULL,
    "tec_telefone" TEXT NOT NULL,
    "tec_emergencia" TEXT,
    "tec_contato" TEXT,
    "tec_dataNascimento" DATE NOT NULL,
    "tec_idade" TEXT NOT NULL,
    "tec_sexo" TEXT NOT NULL,
    "tec_escolaridade" TEXT NOT NULL,
    "tec_profissao" TEXT NOT NULL,
    "tec_estadoCivil" TEXT NOT NULL,
    "tec_filhos" TEXT NOT NULL,
    "turId" INTEGER NOT NULL,
    "espId" INTEGER,
    "cliId" INTEGER NOT NULL,

    CONSTRAINT "Tecnicos_pkey" PRIMARY KEY ("tec_id")
);

-- CreateTable
CREATE TABLE "Consulta" (
    "con_id" SERIAL NOT NULL,
    "con_data" DATE NOT NULL,
    "con_descricao" TEXT,
    "hora_inicio" TEXT NOT NULL,
    "hora_termino" TEXT NOT NULL,
    "tec_id" INTEGER NOT NULL,
    "sol_id" INTEGER NOT NULL,

    CONSTRAINT "Consulta_pkey" PRIMARY KEY ("con_id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "cli_id" SERIAL NOT NULL,
    "cli_email" TEXT NOT NULL,
    "cli_senha" TEXT NOT NULL,
    "userType" "UserType" NOT NULL DEFAULT 'Cliente',

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("cli_id")
);

-- CreateTable
CREATE TABLE "Cadastro" (
    "cad_id" SERIAL NOT NULL,
    "cad_nome" TEXT NOT NULL,
    "cad_sobrenome" TEXT NOT NULL,
    "cad_rg" TEXT NOT NULL,
    "cad_cpf" TEXT NOT NULL,
    "cad_rua" TEXT NOT NULL,
    "cad_numero" TEXT NOT NULL,
    "cad_complemento" TEXT,
    "cad_bairro" TEXT NOT NULL,
    "cad_cep" TEXT NOT NULL,
    "cad_cidade" TEXT NOT NULL,
    "cad_uf" TEXT NOT NULL,
    "cad_celular" TEXT NOT NULL,
    "cad_telefone" TEXT NOT NULL,
    "cad_emergencia" TEXT,
    "cad_contato" TEXT,
    "cad_dataNascimento" DATE NOT NULL,
    "cad_idade" TEXT NOT NULL,
    "cad_sexo" TEXT NOT NULL,
    "cad_escolaridade" TEXT NOT NULL,
    "cad_profissao" TEXT NOT NULL,
    "cad_estadoCivil" TEXT NOT NULL,
    "cad_filhos" TEXT NOT NULL,
    "cliId" INTEGER NOT NULL,

    CONSTRAINT "Cadastro_pkey" PRIMARY KEY ("cad_id")
);

-- CreateTable
CREATE TABLE "Procedimento" (
    "pro_id" SERIAL NOT NULL,
    "pro_nome" TEXT NOT NULL,

    CONSTRAINT "Procedimento_pkey" PRIMARY KEY ("pro_id")
);

-- CreateTable
CREATE TABLE "Solicitacao" (
    "sol_id" SERIAL NOT NULL,
    "sol_status" TEXT NOT NULL DEFAULT 'EM ANÁLISE',
    "sol_data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sol_descricao" TEXT,
    "cadId" INTEGER NOT NULL,
    "proId" INTEGER NOT NULL,

    CONSTRAINT "Solicitacao_pkey" PRIMARY KEY ("sol_id")
);

-- CreateTable
CREATE TABLE "PreFormulario" (
    "pre_id" SERIAL NOT NULL,
    "pre_altura" DECIMAL(65,30) NOT NULL,
    "pre_peso" DECIMAL(65,30) NOT NULL,
    "pre_imc" DECIMAL(65,30) NOT NULL,
    "pre_p1" TEXT NOT NULL,
    "pre_p2" TEXT,
    "pre_p3" TEXT,
    "pre_p4" TEXT,
    "pre_p5" DATE,
    "pre_p6" TEXT NOT NULL,
    "pre_p7" TEXT,
    "pre_p8" TEXT NOT NULL,
    "pre_p9" TEXT NOT NULL,
    "pre_p10" TEXT NOT NULL,
    "pre_p12" TEXT NOT NULL,
    "pre_p13" TEXT NOT NULL,
    "pre_p14" TEXT NOT NULL,
    "pre_p15" TEXT NOT NULL,
    "pre_p16" TEXT NOT NULL,
    "pre_p17" TEXT NOT NULL,
    "pre_p18" TEXT,
    "pre_p19" TEXT NOT NULL,
    "pre_p20" TEXT,
    "pre_p21" TEXT,
    "pre_p22" TEXT NOT NULL,
    "pre_p23" TEXT,
    "pre_p24" DATE,
    "pre_p25" TEXT NOT NULL,
    "pre_p26" TEXT,
    "pre_p27" TEXT NOT NULL,
    "pre_p28" TEXT,
    "pre_p29" TEXT NOT NULL,
    "pre_p30" TEXT,
    "pre_p31" TEXT,
    "pre_p32" TEXT NOT NULL,
    "pre_p33" TEXT NOT NULL,
    "pre_p34" TEXT NOT NULL,
    "pre_p36" TEXT NOT NULL,
    "pre_p37" TEXT NOT NULL,
    "pre_p38" TEXT,
    "pre_p39" TEXT NOT NULL,
    "pre_p40" TEXT NOT NULL,
    "pre_p41" TEXT NOT NULL,
    "pre_p42" TEXT,
    "pre_p43" TEXT NOT NULL,
    "pre_p44" TEXT,
    "pre_p45" TEXT NOT NULL,
    "pre_p46" TEXT NOT NULL,
    "pre_p47" TEXT NOT NULL,
    "pre_p48" TEXT NOT NULL,
    "pre_p49" TEXT NOT NULL,
    "pre_p50" TEXT NOT NULL,
    "pre_p51" TEXT,
    "pre_p52" TEXT NOT NULL,
    "pre_p53" TEXT,
    "pre_p54" TEXT NOT NULL,
    "pre_p55" TEXT,
    "pre_p56" TEXT,
    "solId" INTEGER NOT NULL,

    CONSTRAINT "PreFormulario_pkey" PRIMARY KEY ("pre_id")
);

-- CreateTable
CREATE TABLE "FormularioFacial" (
    "fac_id" SERIAL NOT NULL,
    "fac_img" TEXT,
    "fac_p1" TEXT NOT NULL,
    "fac_p2" TEXT NOT NULL,
    "fac_p3" TEXT NOT NULL,
    "fac_p4" TEXT NOT NULL,
    "fac_p5" TEXT NOT NULL,
    "fac_p6" TEXT NOT NULL,
    "fac_p7" TEXT NOT NULL,
    "fac_p8" TEXT,
    "fac_p9" TEXT NOT NULL,
    "fac_p10" TEXT,
    "fac_p11" TEXT NOT NULL,
    "fac_p12" TEXT,
    "fac_p13" TEXT NOT NULL,
    "fac_p14" TEXT,
    "fac_p15" TEXT NOT NULL,
    "fac_p16" TEXT NOT NULL,
    "fac_p17" TEXT,
    "fac_p18" TEXT NOT NULL,
    "fac_p19" TEXT NOT NULL,
    "fac_ComObs" TEXT NOT NULL,
    "solId" INTEGER NOT NULL,

    CONSTRAINT "FormularioFacial_pkey" PRIMARY KEY ("fac_id")
);

-- CreateTable
CREATE TABLE "FormularioCorporal" (
    "cor_id" SERIAL NOT NULL,
    "cor_img" TEXT,
    "cor_p1" TEXT NOT NULL,
    "cor_p2" TEXT NOT NULL,
    "cor_p3" TEXT NOT NULL,
    "cor_p4" TEXT NOT NULL,
    "cor_p5" TEXT NOT NULL,
    "cor_p6" TEXT,
    "cor_p7" TEXT NOT NULL,
    "cor_p8" TEXT,
    "cor_p9" TEXT NOT NULL,
    "cor_p10" TEXT NOT NULL,
    "cor_p11" TEXT NOT NULL,
    "cor_p12" TEXT NOT NULL,
    "cor_p13" TEXT NOT NULL,
    "cor_p14" TEXT NOT NULL,
    "cor_p15" TEXT NOT NULL,
    "cor_p16" TEXT NOT NULL,
    "cor_p17" TEXT NOT NULL,
    "cor_p18" TEXT NOT NULL,
    "cor_p19" TEXT NOT NULL,
    "cor_p20" TEXT NOT NULL,
    "cor_p21" TEXT NOT NULL,
    "cor_p22" TEXT NOT NULL,
    "cor_p23" TEXT NOT NULL,
    "cor_p24" TEXT NOT NULL,
    "cor_p25" TEXT NOT NULL,
    "cor_ComObs" TEXT NOT NULL,
    "solId" INTEGER NOT NULL,

    CONSTRAINT "FormularioCorporal_pkey" PRIMARY KEY ("cor_id")
);

-- CreateTable
CREATE TABLE "Biometria" (
    "bio_id" SERIAL NOT NULL,
    "bio_data" DATE NOT NULL,
    "bio_bracoD" DECIMAL(65,30),
    "bio_bracoE" DECIMAL(65,30),
    "bio_busto" DECIMAL(65,30),
    "bio_torax" DECIMAL(65,30),
    "bio_cintura" DECIMAL(65,30),
    "bio_abdomen" DECIMAL(65,30),
    "bio_flancos" DECIMAL(65,30),
    "bio_quadril" DECIMAL(65,30),
    "bio_culote" DECIMAL(65,30),
    "bio_coxaD" DECIMAL(65,30),
    "bio_coxaE" DECIMAL(65,30),
    "bio_entreD" DECIMAL(65,30),
    "bio_entreE" DECIMAL(65,30),
    "bio_panturrilhaD" DECIMAL(65,30),
    "bio_panturrilhaE" DECIMAL(65,30),
    "corId" INTEGER NOT NULL,

    CONSTRAINT "Biometria_pkey" PRIMARY KEY ("bio_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Especialidade_esp_nome_key" ON "Especialidade"("esp_nome");

-- CreateIndex
CREATE UNIQUE INDEX "Tecnicos_tec_rg_key" ON "Tecnicos"("tec_rg");

-- CreateIndex
CREATE UNIQUE INDEX "Tecnicos_tec_cpf_key" ON "Tecnicos"("tec_cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cli_email_key" ON "Cliente"("cli_email");

-- CreateIndex
CREATE UNIQUE INDEX "Cadastro_cad_rg_key" ON "Cadastro"("cad_rg");

-- CreateIndex
CREATE UNIQUE INDEX "Cadastro_cad_cpf_key" ON "Cadastro"("cad_cpf");

-- AddForeignKey
ALTER TABLE "Tecnicos" ADD CONSTRAINT "Tecnicos_turId_fkey" FOREIGN KEY ("turId") REFERENCES "Turma"("tur_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tecnicos" ADD CONSTRAINT "Tecnicos_espId_fkey" FOREIGN KEY ("espId") REFERENCES "Especialidade"("esp_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tecnicos" ADD CONSTRAINT "Tecnicos_cliId_fkey" FOREIGN KEY ("cliId") REFERENCES "Cliente"("cli_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_tec_id_fkey" FOREIGN KEY ("tec_id") REFERENCES "Tecnicos"("tec_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_sol_id_fkey" FOREIGN KEY ("sol_id") REFERENCES "Solicitacao"("sol_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cadastro" ADD CONSTRAINT "Cadastro_cliId_fkey" FOREIGN KEY ("cliId") REFERENCES "Cliente"("cli_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solicitacao" ADD CONSTRAINT "Solicitacao_cadId_fkey" FOREIGN KEY ("cadId") REFERENCES "Cadastro"("cad_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solicitacao" ADD CONSTRAINT "Solicitacao_proId_fkey" FOREIGN KEY ("proId") REFERENCES "Procedimento"("pro_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PreFormulario" ADD CONSTRAINT "PreFormulario_solId_fkey" FOREIGN KEY ("solId") REFERENCES "Solicitacao"("sol_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormularioFacial" ADD CONSTRAINT "FormularioFacial_solId_fkey" FOREIGN KEY ("solId") REFERENCES "Solicitacao"("sol_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormularioCorporal" ADD CONSTRAINT "FormularioCorporal_solId_fkey" FOREIGN KEY ("solId") REFERENCES "Solicitacao"("sol_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Biometria" ADD CONSTRAINT "Biometria_corId_fkey" FOREIGN KEY ("corId") REFERENCES "FormularioCorporal"("cor_id") ON DELETE RESTRICT ON UPDATE CASCADE;
