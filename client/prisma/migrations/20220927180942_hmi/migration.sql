-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Operator', 'Mainteance', 'Engineer', 'Admin', 'Service');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "level" "Role" NOT NULL DEFAULT 'Operator',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value1" INTEGER NOT NULL,
    "value2" DOUBLE PRECISION NOT NULL,
    "value3" TEXT NOT NULL,

    CONSTRAINT "recipes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_login_key" ON "users"("login");
