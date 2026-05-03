/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Slug` table. All the data in the column will be lost.
  - Added the required column `originalString` to the `Slug` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Slug" DROP COLUMN "createdAt",
ADD COLUMN     "originalString" TEXT NOT NULL;
