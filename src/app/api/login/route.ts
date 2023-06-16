const { PrismaClient } = require('@prisma/client')
import * as bcrypt from 'bcrypt';

interface RequestBody{
    email: string;
    password: string;
}
export async function POST(request: Request){
    const body:RequestBody = await request.json();
    const prisma = new PrismaClient();
    const customer = await prisma.customer.findFirst({
        where:{
            Cust_Email:body.email,
        }
    })

    if(customer && (await bcrypt.compare(body.password, customer.Cust_Password))){
        const {Cust_Password, ...custWithoutPass} = customer;
        return new Response(JSON.stringify(custWithoutPass));
    }

    else return new Response(JSON.stringify(null));
}