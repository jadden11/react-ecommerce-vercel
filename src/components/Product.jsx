
const products = [
  // {
  //   id: 1,
  //   name: 'Sepatu Kodachi 8111 A Dark Grey',
  //   href: '/product-detail/1',
  //   imageSrc: 'https://i0.wp.com/www.sepatukodachi.com/wp-content/uploads/2023/12/kodachi-8111-A-1.png?fit=1024%2C1024&ssl=1',
  //   imageAlt: "Front of men's Basic Tee in black.",
  //   price: 'Rp168.000',
  //   color: ' Putih | BNIB (Brand New In Box), 100% Original',
  // },
  // {
  //   id: 2,
  //   name: 'Sepatu Kodachi Paket MZ3 (kodachi 8111 + Kaos Kaki Old School)',
  //   href: '/product-detail/2',
  //   imageSrc: 'https://i0.wp.com/www.sepatukodachi.com/wp-content/uploads/2020/12/sepatu-kodachi-badminton-8111-ykraya-sepatu-capung-running-volly-2-paket-hemat.jpg?fit=1080%2C1080&ssl=1',
  //   imageAlt: "Front of men's Basic Tee in black.",
  //   price: 'Rp180.000',
  //   color: 'Putih – Sol Putih| BNIB (Brand New In Box), 100% Original',
  // },
  {
    id: 3,
    name: 'Hoodie',
    href: '/product-detail/3',
    imageSrc: '/hoodie.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rp48.000',
    color: 'Green',
  },
  // {
  //   id: 4,
  //   name: 'Sepatu Kodachi Putih',
  //   href: '/product-detail/4',
  //   imageSrc: 'https://i0.wp.com/www.sepatukodachi.com/wp-content/uploads/2018/03/sepatu-capung-Kodachi-8115-Putih-ykraya.com-2.jpg?fit=1080%2C1080&ssl=1',
  //   imageAlt: "Front of men's Basic Tee in black.",
  //   price: 'Rp140.000',
  //   color: 'White',
  // },
  // {
  //   id: 5,
  //   name: 'Sepatu Kodachi Biru',
  //   href: '/product-detail/4',
  //   imageSrc: 'https://i0.wp.com/www.sepatukodachi.com/wp-content/uploads/2019/05/Sepatu-Capung-Kodachi-8115-Biru-Ykraya.com-2.jpg?fit=1080%2C1080&ssl=1',
  //   imageAlt: "Front of men's Basic Tee in black.",
  //   price: 'Rp140.000',
  //   color: 'Blue',
  // },
  // {
  //   id: 6,
  //   name: 'Sepatu Kodachi Kuning',
  //   href: '/product-detail/4',
  //   imageSrc: 'https://i0.wp.com/www.sepatukodachi.com/wp-content/uploads/2019/02/Sepatu-Kodachi-8115-kuning-ykraya.com-12.jpg?fit=1080%2C1080&ssl=1',
  //   imageAlt: "Front of men's Basic Tee in black.",
  //   price: 'Rp140.000',
  //   color: 'Yellow',
  // },
]

export default function Example() {
  return (
    <div className="bg-white pb-11">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
