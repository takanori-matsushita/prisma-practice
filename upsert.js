const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const upsertUser = async () => {
  return await prisma.user.upsert({
    where: {
      email: "viola@prisma.io",
    },
    update: {
      name: "Viola Magnificent",
    },
    create: {
      name: "Viola Magnificent",
      email: "viola@prisma.io",
      password: "password",
    },
  });
};

upsertUser()
  .then((res) => console.log(res))
  .finally(async () => await prisma.$disconnect());
