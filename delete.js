const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const deleteUser = async () => {
  return await prisma.user.delete({
    where: {
      email: "elsa@prisma.io",
    },
  });
};

const deleteComment = async () => {
  return await prisma.comment.delete({
    where: {
      id: 1,
    },
  });
};

deleteUser()
  .then((res) => console.log(res))
  .finally(async () => await prisma.$disconnect());

deleteComment()
  .then((res) => console.log(res))
  .finally(async () => await prisma.$disconnect());
