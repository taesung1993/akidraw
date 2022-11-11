import { Dispatch, SetStateAction } from "react";
import { IShoppingPrice } from "../api/structures/shoppings/systematic/IShoppingPrice";
import { ISelectedStockMap } from "../utils/types/ISelectedStockMap";

type Props = {
  unitNames: string[];
  selectedStocks: ISelectedStockMap;
};

export default function SelectedUnits({ selectedStocks }: Props) {
  const list = Object.values(selectedStocks);
  const totalPrice = (price: IShoppingPrice) => {
    const total = Math.floor(price.real + price.real - price.tax_ratio);
    return total.toLocaleString();
  };

  return (
    <section>
      <ul>
        {list.map((stock) => (
          <li key={stock.id}>
            <section>
              <div>{stock.name}</div>
              <div>
                <button>삭제</button>
              </div>
            </section>
            <section>
              <div>
                <button>-</button>1<button>+</button>
              </div>
              <div>{totalPrice(stock.price)}원</div>
            </section>
          </li>
        ))}
      </ul>
    </section>
  );
}
