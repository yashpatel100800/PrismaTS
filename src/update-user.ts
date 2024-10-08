import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    const user = await prisma.user.update({
        where: {
            id: 1
        },
        data: {
            email: "yp74371@gmail.com"
        }
    })
}

main()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})