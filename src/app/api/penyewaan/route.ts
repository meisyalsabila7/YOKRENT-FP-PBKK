const { PrismaClient } = require('@prisma/client')
import { useSession } from 'next-auth/react'

interface RequestBody {
    tanggalAmbil: Date;
    durasi: number;
}

export async function POST(request: Request)
{
    const { data: session } = useSession();
    const body:RequestBody = await request.json();
    const prisma = new PrismaClient();
    const penyewaan = await prisma.penyewaan.create({
        data: {
          Penyewaan_Tanggal: body.tanggalAmbil,
          Penyewaan_Durasi: body.durasi,
          Penyewaan_TanggalPengembalian: body.tanggalAmbil,
          Penyewaan_Status: "Menunggu Pembayaran",
          Cust_ID: "clippudx60000w018cvg154o2",
          Adm_ID: "clj38c1si0000w09c76jkdp63",
          Mobil_ID: "clj4djh1s0000w0d4a7w7q338"
        },
    });
}