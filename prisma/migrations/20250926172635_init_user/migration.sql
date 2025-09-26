-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "cenarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "cenarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "figurinos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "figurinos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roteirocenario" (
    "id" SERIAL NOT NULL,
    "roteiro_id" INTEGER,
    "cenario_id" INTEGER,

    CONSTRAINT "roteirocenario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roteirofigurino" (
    "id" SERIAL NOT NULL,
    "roteiro_id" INTEGER,
    "figurino_id" INTEGER,

    CONSTRAINT "roteirofigurino_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roteiros" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "texto" TEXT NOT NULL,

    CONSTRAINT "roteiros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "textospopups" (
    "id" SERIAL NOT NULL,
    "termo" TEXT NOT NULL,
    "explicacao" TEXT NOT NULL,

    CONSTRAINT "textospopups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "unique_nome_cenario" ON "cenarios"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "unique_nome_figurino" ON "figurinos"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "unique_nome_desc_figurino" ON "figurinos"("nome", "descricao");

-- CreateIndex
CREATE UNIQUE INDEX "roteirocenario_roteiro_id_cenario_id_key" ON "roteirocenario"("roteiro_id", "cenario_id");

-- CreateIndex
CREATE UNIQUE INDEX "roteirofigurino_roteiro_id_figurino_id_key" ON "roteirofigurino"("roteiro_id", "figurino_id");

-- CreateIndex
CREATE UNIQUE INDEX "unique_nome_roteiro" ON "roteiros"("titulo");

-- CreateIndex
CREATE UNIQUE INDEX "textospopups_termo_key" ON "textospopups"("termo");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "roteirocenario" ADD CONSTRAINT "roteirocenario_cenario_id_fkey" FOREIGN KEY ("cenario_id") REFERENCES "cenarios"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "roteirocenario" ADD CONSTRAINT "roteirocenario_roteiro_id_fkey" FOREIGN KEY ("roteiro_id") REFERENCES "roteiros"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "roteirofigurino" ADD CONSTRAINT "roteirofigurino_figurino_id_fkey" FOREIGN KEY ("figurino_id") REFERENCES "figurinos"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "roteirofigurino" ADD CONSTRAINT "roteirofigurino_roteiro_id_fkey" FOREIGN KEY ("roteiro_id") REFERENCES "roteiros"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
