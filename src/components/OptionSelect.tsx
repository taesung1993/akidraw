import { IShoppingSaleUnitOptionCandidate } from "../api/structures/shoppings/sales/IShoppingSaleUnitOptionCandidate";

type Props = {
  optionName: string;
  optionIndex: number;
  candidates: IShoppingSaleUnitOptionCandidate[];
  onSelectOption: (
    optionIndex: number,
    candidateIndex: number,
    command: string
  ) => void;
};

export default function OptionSelect({
  optionName,
  optionIndex,
  candidates,
  onSelectOption,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = e;

    const index = +value;
    const command = value ? "select" : "no-select";
    onSelectOption(optionIndex, index, command);
  };

  return (
    <select onChange={handleChange}>
      <option value="">상품을 선택해주세요.</option>
      {candidates.map((candidate, index) => (
        <option key={candidate.id} value={index}>
          {`${optionName} / ${candidate.name}`}
        </option>
      ))}
    </select>
  );
}
