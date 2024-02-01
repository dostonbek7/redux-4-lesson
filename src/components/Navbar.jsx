import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const { amount } = useSelector((state) => state.products);

  return (
    <div className="mx-auto px-4 min-w-[400px] md:max-w-[700px] lg:max-w-[1000px] py-10 flex justify-between items-center">
      <h1 className="text-3xl font-bold">Uzum</h1>
      <div className="indicator">
        <span className="text-2xl mr-1">
          <FaShoppingCart />
        </span>
        <span className="badge badge-sm badge-primary indicator-item">{amount}</span>
      </div>
    </div>
  );
}

export default Navbar;
