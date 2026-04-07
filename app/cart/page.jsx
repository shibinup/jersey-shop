import CartProductCard from "../component/CartCard"

export default function Cartpage(){

    const Cartproducts = [
  {
    id: 1,
    title: "Classic White T-Shirt",
    price: 19.99,
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 2,
    title: "Black Oversized Hoodie",
    price: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
  },
  {
    id: 3,
    title: "Blue Denim Jacket",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
  },]

    return(
        <div>
             {/* here heading my shopping cart */}
            <div>
                <h1 className="font-bold text-3xl text-center pt-3">MY SHOPPING CART</h1>
            </div>
             {/* here shows the carts */}
             <div className="flex flex-col gap-3">
                        {Cartproducts.map((item)=>(

                           <CartProductCard
                            key ={item.id}
                            title ={item.title}
                            imageUrl= {item.imageUrl}
                           />
                        ))}
             </div>
        </div>
    )
}