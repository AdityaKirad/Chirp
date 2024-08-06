import { PrismaClient } from "@prisma/client";
import { generateUniqueId } from "~/lib/utils";

const db = new PrismaClient();

async function main() {
  const data = {
    id: generateUniqueId(),
    name: "Aditya Kirad",
    username: "adityakirad3",
    email: "kiradaditya2001@gmail.com",
    emailVerified: true,
    dob: new Date("2001-04-22"),
    image: "https://pbs.twimg.com/profile_images/1746311964744138752/AewHiqSK_200x200.jpg",
  };
  await db.user.create({
    data,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
