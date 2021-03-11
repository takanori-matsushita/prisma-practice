const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "elsa@prisma.io",
      name: "Elsa Prisma",
      password: "password",
    },
  });
  return user;
}

// async function main() {
//   await prisma.user.create({
//     data: {
//       name: "taka",
//       email: "taka@mail.com",
//       password: "password",
//       リレーションもネストしてかける
//       posts: {
//         create: {
//           title: "test",
//           content: "This is test comment.",
//         },
//       },
//     },
//   });
// }

// async function main() {
//   await prisma.user.create({
//     data: {
//       name: "yuki",
//       email: "yuki@mail.com",
//       password: "password",
//       posts: {
//         create: {
//           title: "test",
//           content: "This is test comment.",
//           comments: {
//             create: {
//               userId: 1,
//               content: "This is test comment.",
//             },
//           },
//         },
//       },
//     },
//   });
// }

main()
  .then((res) => {
    console.log(res);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
