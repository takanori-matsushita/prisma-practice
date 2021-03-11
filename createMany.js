const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.createMany({
    data: [
      { name: "Bob", email: "bob@prisma.io", password: "password" },
      { name: "Bobo", email: "bob@prisma.io", password: "password" }, // Duplicate unique key!
      { name: "Yewande", email: "yewande@prisma.io", password: "password" },
      {
        name: "Angelique",
        email: "angelique@prisma.io",
        password: "password",
      },
    ],
    skipDuplicates: true, // Skip 'Bobo'
  });
  return users;
}

main()
  .then((res) => {
    console.log(res);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
