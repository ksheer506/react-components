/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { forwardRef, ReactNode, RefObject, useCallback, useState } from "react";

import { ScrollSVG, SOption, SSelect, SUList } from "./style";
import useToggleFolding from "./useToggleFolding";

interface Item {
  value: string;
  content?: ReactNode;
  color?: string;
}

interface OptionProps extends Item {
  onClick(): void;
}

export interface OptionListProps {
  expand: boolean;
  ref: RefObject<HTMLUListElement>;
}

interface SelectBoxProps {
  options: Item[];
  placeholder: string;
  defaultValue?: string;
  onSelected?(value: string): void;
}

const Option = forwardRef<HTMLLIElement, OptionProps>(function Option(
  { value, content, color, onClick },
  ref
) {
  return (
    <SOption color={color} onClick={onClick} ref={ref}>
      {content || value}
    </SOption>
  );
});

const SelectBox = forwardRef<HTMLLIElement, SelectBoxProps>(function SelectBox(
  { options, defaultValue, placeholder, onSelected },
  ref
) {
  const [selected, setSelected] = useState(defaultValue || placeholder);
  const { contentRef, isCollapsed, setIsCollapsed } =
    useToggleFolding<HTMLUListElement>();

  const onClick = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  const handleSelect = useCallback(
    (value: string) => {
      setSelected(value);
      if (onSelected) {
        onSelected(value);
      }
    },
    [onSelected]
  );

  return (
    <SSelect onClick={onClick}>
      <ScrollSVG />
      <span>{selected}</span>

      <SUList expand={!!isCollapsed} ref={contentRef}>
        {options.map(({ value, content, color }, i) => (
          <Option
            value={value}
            content={content}
            color={color}
            onClick={() => handleSelect(value)}
            ref={ref}
            key={i}
          />
        ))}
      </SUList>
    </SSelect>
  );
});

export default SelectBox;
