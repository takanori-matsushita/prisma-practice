const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const user = async () => {
  return await prisma.user.findFirst({
    where: {
      posts: {
        some: 1,
      },
    },
  });
};

user()
  .then((res) => console.log(res))
  .finally(async () => await prisma.$disconnect());

// 以下 findFirst queryは、100を超えるいいねを含む投稿が少なくとも1つある、最近作成されたユーザーを返します。

// IDの昇順（大きいものから順に）-最大のIDが最新です
// 100件を超えるいいねを含む投稿が少なくとも1つある、昇順で最初のユーザーを返します
//   const findUser = await prisma.user.findFirst({
//     where: {
//       posts: {
//         some: {
//           likes: {
//             gt: 100
//           }
//         }
//       }
//     },
//     orderBy: {
//       id: "asc"
//     }
//   })
// }
