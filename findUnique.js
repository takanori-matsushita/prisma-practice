const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// By unique identifier
const user = async () => {
  const user = await prisma.user.findUnique({
    where: {
      email: "elsa@prisma.io",
    },
  });
  return user;
};
// By ID
const user2 = async () => {
  const user = await prisma.user.findUnique({
    where: {
      id: 1,
    },
  });
  return user;
};
user()
  .then((res) => {
    console.log(res);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

user2()
  .then((res) => {
    console.log(res);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// 次のPrismaモデルは、複合IDを定義します。

// model TimePeriod {
//   year          Int
//   quarter       Int
//   total         Decimal
//   @@id([year, quarter])
// }
// この複合IDで期間を取得するには、year_quarter次のfieldName1_fieldName2パターンに従って生成されたフィールドを使用します。

// const timePeriod = await prisma.timePeriod.findUnique({
//   where: {
//     year_quarter: {
//       quarter: 4,
//       year: 2020
//     }
//   }
// })
// 次のPrismaモデルは、カスタム名（timePeriodId）を使用して複合一意識別子を定義します。

// model TimePeriod {
//   year          Int
//   quarter       Int
//   total         Decimal
//   @@unique(fields: [year, quarter], name: "timePeriodId")
// }
// この一意の識別子で期間を取得するには、カスタムtimePeriodIdフィールドを使用します。

// const timePeriod = await prisma.timePeriod.findUnique({
//   where: {
//     timePeriodId: {
//       quarter: 4,
//       year: 2020
//     }
//   }
// })
