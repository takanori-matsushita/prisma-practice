const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const users = async () => await prisma.user.findMany();

users()
  .then((res) => {
    console.log(res);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
