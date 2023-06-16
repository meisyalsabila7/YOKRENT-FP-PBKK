const { PrismaClient } = require('@prisma/client')
import * as bcrypt from 'bcrypt';

interface RequestBody {
    email: string;
    username: string;
    password: string;
    nama: string;
    telephone: string;
    alamat: string;

}

export async function POST(request: Request)
{
    const body:RequestBody = await request.json();
    const prisma = new PrismaClient();
    const customer = await prisma.customer.create({
        data: {
          Cust_Email: body.email,
          Cust_Username: body.username,
          Cust_Password: await bcrypt.hash(body.password, 10),
          Cust_Nama: body.nama,
          Cust_NoTelp: body.telephone,
          Cust_Alamat: body.alamat
        },
    });

    const {Cust_Password, ...result} = customer;
    return new Response(JSON.stringify(result));
}