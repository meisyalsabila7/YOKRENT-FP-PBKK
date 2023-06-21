const { PrismaClient } = require('@prisma/client')
import { useSession } from 'next-auth/react'

// export async function POST(request: Request)
// {
//     const { data: session } = useSession();
//     //const body:RequestBody = await request.json();
//     const prisma = new PrismaClient();
//     const penyewaan = await prisma.Pembayaran.create({
//         data: {
//           Pembayaran_Tanggal: ,
//           Pembayaran_Total: ,
//           Pembayaran_Status: ,
//           Penyewaan_ID: 
//         },
//     });
// }