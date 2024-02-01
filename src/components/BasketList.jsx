import { useSelector, useDispatch } from "react-redux";
import {
  incrementProduct,
  decrementProduct,
  total,
  removeProduct,
} from "../redux/features/basketSlice";

function BasketList({ item }) {
  const {} = useSelector((state) => state.products);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col md:justify-between md:flex-row items-center gap-3 md:gap-0 shadow-md rounded-lg text-center p-5">
      <img
        className="rounded-lg object-cover"
        src={item.thumbnail}
        alt={item.title}
        width={300}
        height={250}
      />
      <div>
        <h2 className="text-xl font-bold">{item.title}</h2>
        <h4 className="text-lg mb-2">${item.price.toLocaleString("en-Us")}</h4>
        <button onClick={()=>dispatch(removeProduct(item.id))} className="px-2 py-1 border rounded-md text-red-500 cursor-pointer">
          Remove
        </button>
      </div>
      <div className="flex items-center gap-1 border px-2 py-2 rounded-md">
        <button
          onClick={() => {
            if (item.amount === 1) {
              dispatch(removeProduct(item.id));
            } else {
              dispatch(decrementProduct(item.id));
            }
          }}
          className="py-1 px-3 rounded-md hover:bg-black hover:text-white"
        >
          -
        </button>
        <span className="text-xl">{item.amount}</span>
        <button
          onClick={() => dispatch(incrementProduct(item.id))}
          className="py-1 px-3 rounded-md hover:bg-black hover:text-white"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default BasketList;
