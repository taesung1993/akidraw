import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { IShoppingSale } from "./api/structures/shoppings/sales/IShoppingSale";
import ProductSection from "./components/ProductSection";
import { IShoppingSaleUnitStock } from "./api/structures/shoppings/sales/IShoppingSaleUnitStock";
import { ISelectedStockMap } from "./utils/types/ISelectedStockMap";
import SelectedUnits from "./components/SelectedUnits";
interface Props {
  sale: IShoppingSale;
}

function App({ sale }: Props) {
  const [selectedStocks, setSelectedStocks] = useState<ISelectedStockMap>({});
  const unitNames = sale.units.map((unit) => unit.name);

  const totalPrice = Object.values(selectedStocks).reduce(
    (result, { price }) => {
      return result + Math.floor(price.real + price.real - price.tax_ratio);
    },
    0
  );

  return (
    <div className="App">
      <form>
        <ul>
          {sale.units.map((unit) => (
            <li key={unit.id}>
              <ProductSection
                unit={unit}
                setSelectedStocks={setSelectedStocks}
              />
            </li>
          ))}
        </ul>
        <SelectedUnits unitNames={unitNames} selectedStocks={selectedStocks} />
        <section>
          <div>주문 금액</div>
          <div>{totalPrice.toLocaleString()}원</div>
        </section>
        <footer>
          <button>장바구니</button>
          <button>바로구매</button>
        </footer>
      </form>
    </div>
  );
}

export default App;
