import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { IShoppingSaleUnit } from "../api/structures/shoppings/sales/IShoppingSaleUnit";
import { ISelectedStockMap } from "../utils/types/ISelectedStockMap";
import OptionSelect from "./OptionSelect";

interface Props {
  unit: IShoppingSaleUnit;
  setSelectedStocks: Dispatch<SetStateAction<ISelectedStockMap>>;
}

const NOT_SELECT = "";

export default function ProductSection({ unit, setSelectedStocks }: Props) {
  const { options, name, stocks } = unit;
  const [optionkeys, setOptionKeys] = useState<string[]>([]);
  const stockKey = useMemo(() => {
    const allSelectedKeys =
      optionkeys.length === options.length &&
      optionkeys.every((optionKey) => {
        return optionKey !== NOT_SELECT;
      });
    if (!allSelectedKeys) {
      return null;
    }
    return optionkeys.join(", ");
  }, [optionkeys, options]);

  const onSelectOption = (
    optionIndex: number,
    candidateIndex: number,
    command: string
  ) => {
    setOptionKeys((prev) => {
      const result = prev;
      const selectedOption = options[optionIndex];
      const selectedCandidates = selectedOption.candidates[candidateIndex];

      if (command === "select") {
        result[optionIndex] = selectedCandidates.name;
      } else {
        result[optionIndex] = NOT_SELECT;
      }
      return [...result];
    });
  };

  useEffect(() => {
    const getStock = (name: string) => {
      return stocks.find((s) => s.name === name);
    };

    if (stockKey) {
      const stock = getStock(stockKey);
      if (stock) {
        setSelectedStocks((prev) => ({
          ...prev,
          [name]: stock,
        }));
      }
    }
  }, [name, stocks, stockKey]);

  return (
    <section>
      <header>
        <h6>{name}</h6>
      </header>
      <main>
        <ul>
          {options.map((option, index) => (
            <li key={option.id}>
              <OptionSelect
                optionName={option.name}
                optionIndex={index}
                candidates={option.candidates}
                onSelectOption={onSelectOption}
              />
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}
