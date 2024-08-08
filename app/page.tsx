import {Container, Title, TopBar, Filters, ProductsGroupList} from "@/components/shared";

export default function Home() {
  return (
      <>
          <Container className="mt-10">
              <Title text="All sneakers" size={"lg"} className='font-extrabold'/>
          </Container>

          <TopBar/>

          <Container className="mt-10 pb-14">
              <div className="flex gap-[90px]">

              {/*  Filters  */}
               <Filters />

                {/*Products LIST*/}
                  <div className='flex-1'>
                    <div className='flex flex-col gap-16'>
                        <ProductsGroupList
                            title="New Balance"
                            categoryId={1}
                            products={[
                                {
                                    id:1,
                                    name: 'Product 1',
                                    imageUrl: 'http://sneaker-shop.ru/images/product/icon/12/New%20Balance%20M1500GT%20.jpg',
                                    items: [{price: 30}]
                                },
                                {
                                    id:2,
                                    name: 'Product 1',
                                    imageUrl: 'http://sneaker-shop.ru/images/product/icon/12/New%20Balance%20M1500GT%20.jpg',
                                    items: [{price: 30}]
                                },
                                {
                                    id:3,
                                    name: 'Product 1',
                                    imageUrl: 'http://sneaker-shop.ru/images/product/icon/12/New%20Balance%20M1500GT%20.jpg',
                                    items: [{price: 30}]
                                },
                                {
                                    id:4,
                                    name: 'Product 1',
                                    imageUrl: 'http://sneaker-shop.ru/images/product/icon/12/New%20Balance%20M1500GT%20.jpg',
                                    items: [{price: 30}]
                                },
                                {
                                    id:5,
                                    name: 'Product 1',
                                    imageUrl: 'http://sneaker-shop.ru/images/product/icon/12/New%20Balance%20M1500GT%20.jpg',
                                    items: [{price: 30}]
                                },
                            ]}
                        />
                        <ProductsGroupList
                            title="Saucony"
                            categoryId={2}
                            products={[
                                {
                                    id:6,
                                    name: 'Product 2',
                                    imageUrl: 'http://sneaker-shop.ru/images/product/icon_auto/11/d8206e624b2d94c1f1c73a6d213efd12.jpg',
                                    items: [{price: 30}]
                                },
                                {
                                    id:7,
                                    name: 'Product 2',
                                    imageUrl: 'http://sneaker-shop.ru/images/product/icon_auto/11/d8206e624b2d94c1f1c73a6d213efd12.jpg',
                                    items: [{price: 30}]
                                },
                                {
                                    id:8,
                                    name: 'Product 2',
                                    imageUrl: 'http://sneaker-shop.ru/images/product/icon_auto/11/d8206e624b2d94c1f1c73a6d213efd12.jpg',
                                    items: [{price: 30}]
                                },
                                {
                                    id:9,
                                    name: 'Product 2',
                                    imageUrl: 'http://sneaker-shop.ru/images/product/icon_auto/11/d8206e624b2d94c1f1c73a6d213efd12.jpg',
                                    items: [{price: 30}]
                                },
                                {
                                    id:10,
                                    name: 'Product 2',
                                    imageUrl: 'http://sneaker-shop.ru/images/product/icon/12/New%20Balance%20M1500GT%20.jpg',
                                    items: [{price: 30}]
                                },
                            ]}
                        />
                    </div>
                  </div>
              </div>

          </Container>
      </>

  );
}
