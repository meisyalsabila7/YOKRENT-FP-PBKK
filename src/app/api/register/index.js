const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method === 'POST') {
        return res.status(200).json({ message: 'success'})
    }else{
        return res.status(400).json({ message: 'error'})
    }
  

}