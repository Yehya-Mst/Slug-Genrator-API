-- CreateTable
CREATE TABLE "Slug" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Slug_pkey" PRIMARY KEY ("id")
);
