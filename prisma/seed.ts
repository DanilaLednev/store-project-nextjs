import { Prisma } from '@prisma/client';
import { categories, _accessories, products } from './constants';
import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';

const randomDecimalNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
                                 productId,
                                 sneakersType,
                                 size,
                             }: {
    productId: number;
    sneakersType?: 1 | 2;
    size?: 8 | 10 | 14;
}) => {
    return {
        productId,
        price: randomDecimalNumber(2, 100),
        sneakersType: sneakersType,
        size,
    } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'User Test',
                email: 'user@test.ru',
                password: hashSync('111111', 10),
                verified: new Date(),
                role: 'USER',
            },
            {
                fullName: 'Admin Admin',
                email: 'admin@test.ru',
                password: hashSync('111111', 10),
                verified: new Date(),
                role: 'ADMIN',
            },
        ],
    });

    await prisma.category.createMany({
        data: categories,
    });

    await prisma.accessories.createMany({
        data: _accessories,
    });

    await prisma.product.createMany({
        data: products,
    });

    const sneakers1 = await prisma.product.create({
        data: {
            name: 'NEW BALANCE 997H WORKWEAR BLACK',
            imageUrl:
                'https://www.sneakerstore.ru/upload/resize_cache/iblock/2b9/400_400_140cd750bba9870f18aada2478b24840a/2b9ba9eff45444f42ce0080443361126.jpg',
            categoryId: 1,
            accessories: {
                connect: _accessories.slice(0, 5),
            },
        },
    });

    const sneakers2 = await prisma.product.create({
        data: {
            name: 'DUNK LOW SCRAP',
            imageUrl:
                'https://www.sneakerstore.ru/upload/resize_cache/iblock/088/400_400_140cd750bba9870f18aada2478b24840a/08865b3b32e3f06a287157594c7678ae.jpg',
            categoryId: 1,
            accessories: {
                connect: _accessories.slice(0, 5),
            },
        },
    });

    const sneakers3 = await prisma.product.create({
        data: {
            name: 'TRAVIS SCOTT X AIR JORDAN 6 RETRO',
            imageUrl:
                'https://www.sneakerstore.ru/upload/resize_cache/iblock/f66/400_400_140cd750bba9870f18aada2478b24840a/f66cd831437c3e78efe106e15e42206f.jpg',
            categoryId: 1,
            accessories: {
                connect: _accessories.slice(0, 5),
            },
        },
    });

    await prisma.productItem.createMany({
        data: [
            // NEW BALANCE 997H WORKWEAR BLACK
            generateProductItem({ productId: sneakers1.id, sneakersType: 1, size: 8 }),
            generateProductItem({ productId: sneakers1.id, sneakersType: 2, size: 10 }),
            generateProductItem({ productId: sneakers1.id, sneakersType: 2, size: 14 }),

            // DUNK LOW SCRAP
            generateProductItem({ productId: sneakers2.id, sneakersType: 1, size: 8 }),
            generateProductItem({ productId: sneakers2.id, sneakersType: 1, size: 10 }),
            generateProductItem({ productId: sneakers2.id, sneakersType: 1, size: 14 }),
            generateProductItem({ productId: sneakers2.id, sneakersType: 2, size: 8 }),
            generateProductItem({ productId: sneakers2.id, sneakersType: 2, size: 10 }),
            generateProductItem({ productId: sneakers2.id, sneakersType: 2, size: 14 }),

            // TRAVIS SCOTT X AIR JORDAN 6 RETRO
            generateProductItem({ productId: sneakers3.id, sneakersType: 1, size: 8 }),
            generateProductItem({ productId: sneakers3.id, sneakersType: 2, size: 10 }),
            generateProductItem({ productId: sneakers3.id, sneakersType: 2, size: 14 }),

            // Остальные продукты
            generateProductItem({ productId: 1 }),
            generateProductItem({ productId: 2 }),
            generateProductItem({ productId: 3 }),
            generateProductItem({ productId: 4 }),
            // generateProductItem({ productId: 5 }),
            // generateProductItem({ productId: 6 }),
            // generateProductItem({ productId: 7 }),
            // generateProductItem({ productId: 8 }),
            // generateProductItem({ productId: 9 }),
            // generateProductItem({ productId: 10 }),
            // generateProductItem({ productId: 11 }),
            // generateProductItem({ productId: 12 }),
            // generateProductItem({ productId: 13 }),
            // generateProductItem({ productId: 14 }),
            // generateProductItem({ productId: 15 }),
            // generateProductItem({ productId: 16 }),
            // generateProductItem({ productId: 17 }),
        ],
    });

    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: '11111',
            },
            {
                userId: 2,
                totalAmount: 0,
                token: '222222',
            },
        ],
    });

    await prisma.cartItem.create({
        data: {
            productItemId: 1,
            cartId: 1,
            quantity: 2,
            accessories: {
                connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
            },
        },
    });

    // await prisma.story.createMany({
    //     data: [
    //         {
    //             previewImageUrl:
    //                 'https://cdn.inappstory.ru/story/xep/xzh/zmc/cr4gcw0aselwvf628pbmj3j/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3101815496',
    //         },
    //         {
    //             previewImageUrl:
    //                 'https://cdn.inappstory.ru/story/km2/9gf/jrn/sb7ls1yj9fe5bwvuwgym73e/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3074015640',
    //         },
    //         {
    //             previewImageUrl:
    //                 'https://cdn.inappstory.ru/story/quw/acz/zf5/zu37vankpngyccqvgzbohj1/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=1336215020',
    //         },
    //         {
    //             previewImageUrl:
    //                 'https://cdn.inappstory.ru/story/7oc/5nf/ipn/oznceu2ywv82tdlnpwriyrq/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=38903958',
    //         },
    //         {
    //             previewImageUrl:
    //                 'https://cdn.inappstory.ru/story/q0t/flg/0ph/xt67uw7kgqe9bag7spwkkyw/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=2941222737',
    //         },
    //         {
    //             previewImageUrl:
    //                 'https://cdn.inappstory.ru/story/lza/rsp/2gc/xrar8zdspl4saq4uajmso38/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=4207486284',
    //         },
    //     ],
    // });

    // await prisma.storyItem.createMany({
    //     data: [
    //         {
    //             storyId: 1,
    //             sourceUrl:
    //                 'https://cdn.inappstory.ru/file/dd/yj/sx/oqx9feuljibke3mknab7ilb35t.webp?k=IgAAAAAAAAAE',
    //         },
    //         {
    //             storyId: 1,
    //             sourceUrl:
    //                 'https://cdn.inappstory.ru/file/jv/sb/fh/io7c5zarojdm7eus0trn7czdet.webp?k=IgAAAAAAAAAE',
    //         },
    //         {
    //             storyId: 1,
    //             sourceUrl:
    //                 'https://cdn.inappstory.ru/file/ts/p9/vq/zktyxdxnjqbzufonxd8ffk44cb.webp?k=IgAAAAAAAAAE',
    //         },
    //         {
    //             storyId: 1,
    //             sourceUrl:
    //                 'https://cdn.inappstory.ru/file/ur/uq/le/9ufzwtpdjeekidqq04alfnxvu2.webp?k=IgAAAAAAAAAE',
    //         },
    //         {
    //             storyId: 1,
    //             sourceUrl:
    //                 'https://cdn.inappstory.ru/file/sy/vl/c7/uyqzmdojadcbw7o0a35ojxlcul.webp?k=IgAAAAAAAAAE',
    //         },
    //     ],
    // });
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Accessories" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

// async function main() {
//     try {
//         await down();
//         await up();
//     } catch (e) {
//         console.error(e);
//     }
// }

// main()
//     .then(async () => {
//         await prisma.$disconnect();
//     })
//     .catch(async (e) => {
//         console.error(e);
//         await prisma.$disconnect();
//         process.exit(1);
//     });
