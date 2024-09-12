import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query", "info"] });

async function main() {
    const user = await prisma.user.create({
        data: {
            email: "yashpatel100800@gmail.com",
            name: "Yash Patel",
        }
    })
    console.log(user)
}

main();