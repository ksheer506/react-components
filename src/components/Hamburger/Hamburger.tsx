import { ReactNode } from "react";

import { HamburgerBox, Patty, PattyButton } from "./style";

export interface HamburgerProps {
  size?: number;
  thickness?: number;
  isClicked: boolean;
  onClick: () => void;
  menu: ReactNode;
}

const Hamburger = ({
  size,
  thickness,
  isClicked,
  onClick,
  menu,
}: HamburgerProps) => {
  return (
    <>
      <HamburgerBox size={size} onClick={onClick}>
        <PattyButton thickness={thickness} isClicked={isClicked}>
          {[0, 1, 2].map((e) => (
            <Patty thickness={thickness} key={e} />
          ))}
        </PattyButton>
      </HamburgerBox>

      {menu}
    </>
  );
};

export default Hamburger;
