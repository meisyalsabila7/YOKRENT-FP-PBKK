-- CreateTable
CREATE TABLE "customer" (
    "Cust_ID" TEXT NOT NULL,
    "Cust_Email" TEXT NOT NULL,
    "Cust_Username" TEXT NOT NULL,
    "Cust_Password" TEXT NOT NULL,
    "Cust_Nama" TEXT NOT NULL,
    "Cust_Alamat" TEXT NOT NULL,
    "Cust_NoTelp" TEXT NOT NULL,
    "Cust_FotoProfil" TEXT,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("Cust_ID")
);

-- CreateTable
CREATE TABLE "administrator" (
    "Adm_ID" TEXT NOT NULL,
    "Adm_Email" TEXT NOT NULL,
    "Adm_Password" TEXT NOT NULL,
    "Adm_Nama" TEXT NOT NULL,

    CONSTRAINT "administrator_pkey" PRIMARY KEY ("Adm_ID")
);

-- CreateTable
CREATE TABLE "mobil" (
    "Mobil_ID" TEXT NOT NULL,
    "Adm_ID" TEXT NOT NULL,
    "Mobil_Nama" TEXT NOT NULL,
    "Mobil_Merk" TEXT NOT NULL,
    "Mobil_Jenis" TEXT NOT NULL,
    "Mobil_HargaPenyewaan" INTEGER NOT NULL,
    "Mobil_Warna" TEXT NOT NULL,
    "Mobil_PlatNomor" TEXT NOT NULL,
    "Mobil_Kapasitas" INTEGER NOT NULL,
    "Mobil_Status" TEXT,
    "Mobil_Foto" TEXT NOT NULL,

    CONSTRAINT "mobil_pkey" PRIMARY KEY ("Mobil_ID")
);

-- CreateTable
CREATE TABLE "rating" (
    "Rating_ID" TEXT NOT NULL,
    "Rating_Nilai" INTEGER NOT NULL,
    "Rating_Review" TEXT,
    "Penyewaan_ID" TEXT NOT NULL,
    "Mobil_ID" TEXT NOT NULL,

    CONSTRAINT "rating_pkey" PRIMARY KEY ("Rating_ID")
);

-- CreateTable
CREATE TABLE "penyewaan" (
    "Penyewaan_ID" TEXT NOT NULL,
    "Penyewaan_Tanggal" TIMESTAMP(3) NOT NULL,
    "Penyewaan_Durasi" INTEGER NOT NULL,
    "Penyewaan_TanggalPengembalian" TIMESTAMP(3) NOT NULL,
    "Penyewaan_Status" TEXT NOT NULL,
    "Cust_ID" TEXT NOT NULL,
    "Adm_ID" TEXT NOT NULL,
    "Mobil_ID" TEXT NOT NULL,
    "Penyewaan_Total" INTEGER,

    CONSTRAINT "penyewaan_pkey" PRIMARY KEY ("Penyewaan_ID")
);

-- CreateTable
CREATE TABLE "pembayaran" (
    "Pembayaran_ID" TEXT NOT NULL,
    "Pembayaran_Tanggal" TIMESTAMP(3) NOT NULL,
    "Pembayaran_Total" INTEGER NOT NULL,
    "Pembayaran_Status" TEXT NOT NULL,
    "Penyewaan_ID" TEXT NOT NULL,

    CONSTRAINT "pembayaran_pkey" PRIMARY KEY ("Pembayaran_ID")
);

-- AddForeignKey
ALTER TABLE "mobil" ADD CONSTRAINT "mobil_Adm_ID_fkey" FOREIGN KEY ("Adm_ID") REFERENCES "administrator"("Adm_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_Mobil_ID_fkey" FOREIGN KEY ("Mobil_ID") REFERENCES "mobil"("Mobil_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_Penyewaan_ID_fkey" FOREIGN KEY ("Penyewaan_ID") REFERENCES "penyewaan"("Penyewaan_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "penyewaan" ADD CONSTRAINT "penyewaan_Adm_ID_fkey" FOREIGN KEY ("Adm_ID") REFERENCES "administrator"("Adm_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "penyewaan" ADD CONSTRAINT "penyewaan_Mobil_ID_fkey" FOREIGN KEY ("Mobil_ID") REFERENCES "mobil"("Mobil_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "penyewaan" ADD CONSTRAINT "penyewaan_Cust_ID_fkey" FOREIGN KEY ("Cust_ID") REFERENCES "customer"("Cust_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pembayaran" ADD CONSTRAINT "pembayaran_Penyewaan_ID_fkey" FOREIGN KEY ("Penyewaan_ID") REFERENCES "penyewaan"("Penyewaan_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
