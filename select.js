const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const user = async () => {
  return await prisma.user.findUnique({
    where: {
      email: "elsa@prisma.io",
    },
    select: {
      email: true,
      name: true,
    },
  });
};

user()
  .then((res) => console.log(res))
  .finally(async () => await prisma.$disconnect());
