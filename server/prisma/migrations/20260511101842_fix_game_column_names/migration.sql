/*
  Warnings:

  - You are about to drop the column `conerUrl` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `igdbID` on the `Game` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[igdbId]` on the table `Game` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `igdbId` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Game_igdbID_key";

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "conerUrl",
DROP COLUMN "igdbID",
ADD COLUMN     "coverUrl" TEXT,
ADD COLUMN     "igdbId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Game_igdbId_key" ON "Game"("igdbId");
