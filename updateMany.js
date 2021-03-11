const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const updateUsers = async () => {
  return await prisma.user.updateMany({
    where: {
      email: {
        contains: "prisma.io",
      },
    },
    data: {
      password: "prisma",
    },
  });
};

updateUsers()
  .then((res) => console.log(res))
  .finally(async () => await prisma.$disconnect());
