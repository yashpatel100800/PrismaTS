import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query", "info"] });

async function main(){
    const posts = await prisma.post.createMany({
        data: [{
            title: "Post 1",
            content: "Content of Post 7",
            published: true,
            authorId: 1
        }, {
            title: "Post 2",
            content: "Content of Post 6",
            authorId: 1
        }, {
            title: "Post 3",
            content: "Content of Post 5",
            authorId: 1
        }]
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