import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.findMany();
    console.log(user);// aarray of user

    const userById = await prisma.user.findUnique({
        where: {
            id: 1
        }, include: {
            posts: true
        }
    });
    console.log(userById);// user with id 1
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