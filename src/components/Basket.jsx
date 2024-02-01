import Products from ".././data";
import { useDispatch, useSelector } from "react-redux";
import BasketList from "../components/BasketList";

function Basket() {
  const { products, price } = useSelector((state) => state.products);
  return (
    <div className="mx-auto lg:max-w-[900px] py-5">
      <h1 className="text-2xl text-center mb-5">
        {products.length ? "ProductList" : "No ProductsList"}
      </h1>
      <ul className="flex flex-col gap-5 mb-4 p-8">
        {products.map((item) => {
          return <BasketList key={item.id} item={item} />;
        })}
      </ul>
      <div className="flex justify-between items-center pb-10">
        <h2 className="text-xl font-bold">Total:</h2>
        <p className="text-lg font-bold">${price.toLocaleString("en-Us")}</p>
      </div>
    </div>
  );
}

export default Basket;
