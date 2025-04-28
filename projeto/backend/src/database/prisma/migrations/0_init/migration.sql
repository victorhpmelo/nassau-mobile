-- CreateEnum
CREATE TYPE "Type" AS ENUM ('SP', 'SG', 'SE');

-- CreateTable
CREATE TABLE "Password" (
    "id" SERIAL NOT NULL,
    "type" "Type" NOT NULL,
    "numberPass" INTEGER NOT NULL,
    "emitDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "appointDate" TIMESTAMP(3),
    "window" INTEGER,
    "attended" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Password_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LogPanel" (
    "id" SERIAL NOT NULL,
    "passwordId" INTEGER NOT NULL,
    "callDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LogPanel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Password_numberPass_key" ON "Password"("numberPass");

-- AddForeignKey
ALTER TABLE "LogPanel" ADD CONSTRAINT "LogPanel_passwordId_fkey" FOREIGN KEY ("passwordId") REFERENCES "Password"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

