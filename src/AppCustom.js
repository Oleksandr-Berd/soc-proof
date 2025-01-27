import styled from "styled-components";

import mobTop from "./assets/pics/bg-pattern-top-mobile.svg";
import mobButton from "./assets/pics/bg-pattern-bottom-mobile.svg";
import deskTop from "./assets/pics/bg-pattern-top-desktop.svg";
import deskBottom from "./assets/pics/bg-pattern-bottom-desktop.svg";

export const AppCustom = styled.div`
  height: 100vh;

  padding-left: 24px;
  padding-right: 24px;
  padding-top: 82px;
  padding-bottom: 99px;

  text-align: center;

  font-family: "Spartan";
  background: url(${mobTop}), url(${mobButton});
  background-repeat: no-repeat;

  @media (min-width: 1280px) {
    height: auto;

    padding-left: 141px;
    padding-right: 141px;
    padding-top: 118px;
    padding-bottom: 132px;

    background: url(${deskTop}), url(${deskBottom});
    background-repeat: no-repeat;
  }
`;
