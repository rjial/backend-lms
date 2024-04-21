/*
  Warnings:

  - You are about to drop the column `course_id` on the `Banner` table. All the data in the column will be lost.
  - You are about to drop the column `document` on the `Banner` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Banner` table. All the data in the column will be lost.
  - You are about to drop the column `video` on the `Banner` table. All the data in the column will be lost.
  - Added the required column `alt` to the `Banner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `src` to the `Banner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Banner` DROP COLUMN `course_id`,
    DROP COLUMN `document`,
    DROP COLUMN `user_id`,
    DROP COLUMN `video`,
    ADD COLUMN `alt` VARCHAR(191) NOT NULL,
    ADD COLUMN `src` VARCHAR(191) NOT NULL;
