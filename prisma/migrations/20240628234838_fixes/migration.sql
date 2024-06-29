/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "thread" ALTER COLUMN "author_id" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "user";
