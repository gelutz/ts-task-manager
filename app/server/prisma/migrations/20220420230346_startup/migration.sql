-- AlterTable
ALTER TABLE "tasks" ALTER COLUMN "done" SET DEFAULT false,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;
