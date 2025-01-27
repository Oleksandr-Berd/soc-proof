import styled from "styled-components";

export const RateList = styled.ul`
  & > li {
    padding-top: 16px;
    padding-bottom: 15px;

    background-color: #f7f2f7;

    border-radius: 8px;

    @media (min-width: 1280px) {
      display: flex;
      flex-direction: row;
      align-items: center;

      padding-left: 32px;
      padding-right: 79px;
      padding-top: 20px;
      padding-bottom: 20px;

      &:first-child {
        transform: translateX(-95px);
      }
      &:nth-child(2){
        transform: translateX(-47px);
      }
    }

    & > div {
      display: flex;
      flex-direction: row;
      justify-content: center;

      margin-bottom: 15px;

      & > svg:not(:last-child) {
        margin-right: 8px;
      }

      @media (min-width: 1280px) {
        margin-bottom: 0;
        margin-right: 32px;
      }
    }

    & > h4 {
      font-size: 17px;
      color: #512051;
    }

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;
