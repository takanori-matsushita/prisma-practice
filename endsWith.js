const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const users = async () => {
  return await prisma.user.findMany({
    where: {
      email: {
        endsWith: "prisma.io",
      },
    },
  });
};

users()
  .then((res) => console.log(res))
  .finally(async () => prisma.$disconnect());
