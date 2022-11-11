import { IShoppingSaleUnitStock } from "../../api/structures/shoppings/sales/IShoppingSaleUnitStock";

export interface ISelectedStockMap {
  [key: string]: IShoppingSaleUnitStock;
}
