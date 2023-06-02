-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "status" SET DEFAULT false;

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "banner" DROP NOT NULL;

-- AlterTable
ALTER TABLE "purchases" ALTER COLUMN "status" SET DEFAULT false;

-- AlterTable
ALTER TABLE "sticknotes" ALTER COLUMN "status" SET DEFAULT false;
