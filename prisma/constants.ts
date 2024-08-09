export const categories = [
    {
        name: 'New Balance',
    },
    {
        name: 'Saucony',
    },
    {
        name: 'Nike',
    },
    {
        name: 'Timberland',
    },
    {
        name: 'Palladium',
    },
];

export const _accessories = [
    {
        name: 'Hat Alpha Industries Daisy Mae',
        price: 14,
        imageUrl:
            'https://www.sneakerstore.ru/upload/resize_cache/iblock/afc/400_400_140cd750bba9870f18aada2478b24840a/afc78743ef7f03426e600495c69e3f7d.png',
    },
    {
        name: 'Nike Hayward backpack',
        price: 30,
        imageUrl:
            'https://www.sneakerstore.ru/upload/resize_cache/iblock/f6f/400_400_140cd750bba9870f18aada2478b24840a/f6fc1819e639d91724ed82ef7398f7e1.JPG',
    },
    {
        name: 'Jordan 13 Backpack',
        price: 79,
        imageUrl: 'https://www.sneakerstore.ru/upload/resize_cache/iblock/795/400_400_140cd750bba9870f18aada2478b24840a/7951e6b9772cc98458a0be0e1d6c447a.JPG',
    },
    {
        name: 'Gift set',
        price: 55,
        imageUrl:
            'https://www.sneakerstore.ru/upload/resize_cache/iblock/94f/400_400_140cd750bba9870f18aada2478b24840a/94f060cbb341cd5af08ed9557e36db48.JPG',
    },
    {
        name: 'Nike Everyday Lightweight Crew Socks',
        price: 7,
        imageUrl: 'https://www.sneakerstore.ru/upload/resize_cache/iblock/048/400_400_140cd750bba9870f18aada2478b24840a/048b813ccfcfcb12e228bdc6a18505e9.JPG',
    },
    {
        name: 'Nike Club Cap',
        price: 15,
        imageUrl: 'https://www.sneakerstore.ru/upload/resize_cache/iblock/536/400_400_140cd750bba9870f18aada2478b24840a/53679a5525d6f346f07eb0965c5fe6e6.JPG',
    },
    {
        name: 'NIKE CROSS-BODY BAG',
        price: 59,
        imageUrl: 'https://www.sneakerstore.ru/upload/resize_cache/iblock/d8f/400_400_140cd750bba9870f18aada2478b24840a/d8fde3ac9e5b3fcd717c1b4b9273c4df.jpg',
    },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
    {
        name: 'Max90 T-Shirt',
        imageUrl: 'https://www.sneakerstore.ru/upload/resize_cache/iblock/bd2/400_400_140cd750bba9870f18aada2478b24840a/bd2f32ad4772738fb6060cd794b91d01.JPG',
        categoryId: 1,
    },
    {
        name: 'Nike Sportswear Essentials Tee',
        imageUrl: 'https://www.sneakerstore.ru/upload/resize_cache/iblock/718/400_400_140cd750bba9870f18aada2478b24840a/718603a1d696d4359cd01d3b017e9894.jpg',
        categoryId: 1,
    },
    {
        name: 'JORDAN FLIGHT MVP HOODIE',
        imageUrl: 'https://www.sneakerstore.ru/upload/resize_cache/iblock/d95/400_400_140cd750bba9870f18aada2478b24840a/d9558d9a337c95bd02e85d9f834b162e.JPG',
        categoryId: 2,
    },
    {
        name: 'Nike Tech Fleece Zip Hoodie',
        imageUrl: 'https://www.sneakerstore.ru/upload/resize_cache/iblock/12d/400_400_140cd750bba9870f18aada2478b24840a/12d8ab1f2a05b18553dcda292c440fd2.JPG',
        categoryId: 3,
    },

];
