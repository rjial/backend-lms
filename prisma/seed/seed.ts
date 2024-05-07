import { createSeedClient } from "@snaplet/seed";
import { copycat} from "@snaplet/copycat";
import * as bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function main() {

    // const seed = await createSeedClient()

    // await seed.$resetDatabase();
    
    // const seedCategory = Array.from(Array(10).keys()).map(async () => {
    //     return await prisma.category.create({
    //         data: {
    //             name: copycat.words("mboh", {max: 5}),
    //             description: copycat.paragraph("mboh"),
    //             thumbnail: "https://source.unsplash.com/OqtafYT5kTw"
    //         }
    //     })
    // })
    const userAdmin = await prisma.user.create({
        data: {
            name: copycat.fullName("mboh"),
            email: "admin@admin.com",
            password: await bcrypt.hash("admin123", 10),
            username: copycat.username("mboh"),
            secretKey: "",
            gender: copycat.bool("mboh") ? "Laki-Laki" : "Perempuan",
            expiredAt: new Date(),
            phone: copycat.phoneNumber("mboh"),
            dob: (new Date(copycat.dateString("mboh"))).toISOString(),
            address: copycat.postalAddress("mboh"),
            countryCode: copycat.countryCode("mboh"),
            city: copycat.city("mboh"),
            postalCode: String(copycat.int("mboh", { max: 66666 })),
            isAdmin: false,
            balance: 0,
            image: "lorem ipsum",
            verify: true,
            admin: false,
            created_at: new Date(),
            updated_at: new Date(),
            deleted_at: new Date()
        }
    })
    const category = await prisma.category.create({
        data: {
            name: copycat.words("mboh", { max: 5 }),
            description: copycat.paragraph("mboh"),
            thumbnail: "https://source.unsplash.com/OqtafYT5kTw"
        }
    })
    for (let i = 0; i < 10; i++) {
        const courseCategory = await prisma.courseCategory.create({
            data: {
                course: {
                    create: {
                        name: copycat.fullName("mboh"),
                        description: copycat.words("mboh", { max: 100 }),
                        thumbnail: "https://source.unsplash.com/OqtafYT5kTw",
                        video: "https://source.unsplash.com/OqtafYT5kTw",
                        document: "https://source.unsplash.com/OqtafYT5kTw",
                        userCount: copycat.int("mboh", { max: 100 }),
                        memberCount: copycat.int("mboh", { max: 5 }),
                        finished: "lorem",
                        rating5: copycat.int(5, { max: 5 }),
                        rating4: copycat.int(4, { max: 5 }),
                        rating3: copycat.int(3, { max: 5 }),
                        rating2: copycat.int(2, { max: 5 }),
                        rating1: copycat.int(1, { max: 5 }),
                        price: String(copycat.int("mboh", { max: 1000 })),
                        level: copycat.word("mboh"),
                    }
                },
                category: {
                    create: {
                        name: copycat.words("mboh", {max: 5}),
                        description: copycat.paragraph("mboh"),
                        thumbnail: "https://source.unsplash.com/OqtafYT5kTw"
                    }
                }
            }
        })
    }

    // await seed.user({
    //     //@ts-ignore
    //     name: copycat.fullName("mboh"),
    //     email: copycat.email("mboh"),
    //     password: await bcrypt.hash("password123", 10),
    //     username: copycat.username("mboh"),
    //     secretKey: "",
    //     gender: copycat.bool("mboh") ? "Laki-Laki" : "Perempuan",
    //     expiredAt: new Date(),
    //     phone: copycat.phoneNumber("mboh"),
    //     dob: (new Date(copycat.dateString("mboh"))).toISOString(),
    //     address: copycat.postalAddress("mboh"),
    //     countryCode: copycat.countryCode("mboh"),
    //     city: copycat.city("mboh"),
    //     postalCode: copycat.int("mboh", {max: 66666}),
    //     isAdmin: false,
    //     balance: 0,
    //     image: "lorem ipsum",
    //     verify: true,
    //     admin: false,
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //     deleted_at: new Date()
    // })

    // await seed.lesson((x) => x(30, {
    //     video: "https://source.unsplash.com/OqtafYT5kTw",
    //     document: "https://source.unsplash.com/OqtafYT5kTw",
    //     thumbnail: "https://source.unsplash.com/OqtafYT5kTw"
    // }), {connect: {course}})

    process.exit()
}
main()