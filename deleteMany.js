const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const deleteUsers = async () => {
  await prisma.user.deleteMany({
    where: {
      email: {
        contains: "prisma.io",
      },
    },
  });
};

deleteUsers()
  .then((res) => console.log(res))
  .finally(async () => await prisma.$disconnect());
