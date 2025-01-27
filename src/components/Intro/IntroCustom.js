import styled from "styled-components";

export const IntroCustom = styled.div`

margin-bottom: 39px;

  & > h3 {
    margin-bottom: 17px;

    font-size: 40px;
    line-height: 0.8;
    letter-spacing: -1.43px;
    color: #512051;

    @media (min-width: 1280px){
        font-size: 56px;
        line-height: 0.86;
        letter-spacing: -2px;
    }
  }

  & > p {
    font-size: 19px;
    line-height: 1.32;
    letter-spacing:-0.63px;
    color: #927b91;
  }

  @media (min-width: 1280px){
    width: 445px;

    text-align: left;
  }
`;
