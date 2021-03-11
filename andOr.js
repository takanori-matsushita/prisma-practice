const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const user = async () => {
  return await prisma.user.findMany({
    where: {
      OR: [
        {
          name: {
            startsWith: "yu",
          },
        },
        {
          AND: {
            email: {
              startsWith: "elsa",
            },
            password: "password",
          },
        },
      ],
    },
  });
};
// AND filter
const user2 = async () => {
  return await prisma.user.findMany({
    where: {
      email: {
        startsWith: "yu",
      },
      password: "password",
    },
  });
};

user()
  .then((res) => console.log(res))
  .finally(async () => await prisma.$disconnect());

user2()
  .then((res) => console.log(res))
  .finally(async () => await prisma.$disconnect());
