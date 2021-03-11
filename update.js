const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const updateUser = async () => {
  return await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      name: "Viola",
    },
  });
};

updateUser()
  .then((res) => console.log(res))
  .finally(async () => await prisma.$disconnect());
