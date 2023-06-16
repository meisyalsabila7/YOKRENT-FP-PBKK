const { PrismaClient } = require('@prisma/client')

export async function GET(request: Request)
{
    const prisma = new PrismaClient();
    const mobil = await prisma.mobil.findMany()
    return new Response(mobil);
}