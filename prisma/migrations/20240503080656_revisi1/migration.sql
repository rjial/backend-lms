/*
  Warnings:

  - You are about to drop the column `moduleId` on the `CompletionModules` table. All the data in the column will be lost.
  - You are about to drop the column `moduleId` on the `sessions` table. All the data in the column will be lost.
  - Added the required column `lessonId` to the `CompletionModules` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `CompletionModules` DROP FOREIGN KEY `CompletionModules_moduleId_fkey`;

-- DropForeignKey
ALTER TABLE `sessions` DROP FOREIGN KEY `sessions_moduleId_fkey`;

-- AlterTable
ALTER TABLE `Banner` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `CompletionCourses` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `CompletionModules` DROP COLUMN `moduleId`,
    ADD COLUMN `lessonId` INTEGER NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `assignments` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `categories` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `course_categories` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `courses` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `events` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `modules` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `quizzes` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `reviews` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `sessions` DROP COLUMN `moduleId`,
    ADD COLUMN `lessonId` INTEGER NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `users` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `sessions` ADD CONSTRAINT `sessions_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `modules`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CompletionModules` ADD CONSTRAINT `CompletionModules_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `modules`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
