const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const userIncludePosts = async () => {
  return await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
};

userIncludePosts()
  .then((res) => console.log(res))
  .finally(async () => await prisma.$disconnect());
