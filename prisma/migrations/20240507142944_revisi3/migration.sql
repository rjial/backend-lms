/*
  Warnings:

  - You are about to drop the column `user_id` on the `courses` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `courses` DROP FOREIGN KEY `courses_user_id_fkey`;

-- AlterTable
ALTER TABLE `courses` DROP COLUMN `user_id`;
