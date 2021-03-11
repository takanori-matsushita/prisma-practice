const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const user = async () => {
  return await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
};

user()
  .then((res) => console.dir(res, { depth: null }))
  .finally(async () => await prisma.$disconnect());
