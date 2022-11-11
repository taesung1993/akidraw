import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import { CERESHOME_DEILIVE_CURTAIN } from "../../api/data/CERESHOME_DEILIVE_CURTAIN";
import { IShoppingSale } from "../../api/structures/shoppings/sales/IShoppingSale";
import { IShoppingSaleUnit } from "../../api/structures/shoppings/sales/IShoppingSaleUnit";

class SaleService {
  private _units: IShoppingSaleUnit[] = [];
  constructor(sale: IShoppingSale) {
    this._units = sale.units;
  }
}

export default SaleService;
