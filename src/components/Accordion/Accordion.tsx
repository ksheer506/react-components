/* eslint-disable consistent-return */
import { ReactNode, SyntheticEvent, useCallback } from "react";
import { FlattenSimpleInterpolation } from "styled-components";

import {
  ArrowDownSVG,
  ArrowUpSVG,
  SCardBox,
  SContentsBox,
  STitleBox,
  STitleButton,
  STitleH3,
} from "./style";
import useToggleFolding from "./useToggleFolding";

interface ExtraStyles {
  cardBox?: FlattenSimpleInterpolation;
  titleBox?: FlattenSimpleInterpolation;
  title?: FlattenSimpleInterpolation;
}

export interface AccordionProps {
  title: string;
  isCollapsable: boolean;
  children: ReactNode;
  extraStyles?: ExtraStyles;
}

type FixedTitleProps = Pick<AccordionProps, "title"> &
  Record<"titleStyle", ExtraStyles["title"]>;

interface ExpandableTitleProps extends FixedTitleProps {
  isCollapsed: boolean | null;
  onClick: () => void;
}

const ExpandableTitle = ({
  title,
  isCollapsed,
  titleStyle,
  onClick,
}: ExpandableTitleProps) => {
  return (
    <>
      <STitleButton extraStyles={titleStyle} onClick={onClick}>
        {title}
        {isCollapsed ? <ArrowDownSVG /> : <ArrowUpSVG />}
      </STitleButton>
    </>
  );
};

const FixedTitle = ({ title, titleStyle }: FixedTitleProps) => {
  return <STitleH3 extraStyles={titleStyle}>{title}</STitleH3>;
};

const Accordion = ({
  title,
  isCollapsable,
  extraStyles,
  children,
}: AccordionProps) => {
  const { title: titleStyle, titleBox, cardBox } = extraStyles || {};
  const { contentRef, isCollapsed, setIsCollapsed } =
    useToggleFolding<HTMLDivElement>();

  const alwaysOpen = useCallback(
    ({ target }: SyntheticEvent<HTMLDetailsElement>) => {
      if (!(target instanceof HTMLDetailsElement)) return;

      target.open = true;
    },
    []
  );

  return (
    <SCardBox extraStyles={cardBox} onToggle={alwaysOpen}>
      <STitleBox extraStyles={titleBox}>
        {isCollapsable ? (
          <ExpandableTitle
            title={title}
            isCollapsed={isCollapsed}
            titleStyle={titleStyle}
            onClick={() => setIsCollapsed((prev) => !prev)}
          />
        ) : (
          <FixedTitle title={title} titleStyle={titleStyle} />
        )}
      </STitleBox>

      <SContentsBox isCollapsable={isCollapsable} ref={contentRef}>
        {children}
      </SContentsBox>
    </SCardBox>
  );
};

export default Accordion;
