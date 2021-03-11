const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// 対象カラムに1ずつインクリメントする
const updatePosts = async () => {
  await prisma.post.updateMany({
    data: {
      views: {
        increment: 1,
      },
      likes: {
        increment: 1,
      },
    },
  });
};

updatePosts()
  .then((res) => console.log(res))
  .finally(async () => await prisma.$disconnect());
