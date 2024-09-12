import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    const post = await prisma.post.deleteMany({
        where: {
            published: false,
            authorId: 1
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