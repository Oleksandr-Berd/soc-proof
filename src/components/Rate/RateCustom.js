import styled from "styled-components";

export const RateList = styled.ul`
  & > li {
    padding-top: 16px;
    padding-bottom: 15px;

    background-color: #f7f2f7;

    border-radius: 8px;

    & > div {
      display: flex;
      flex-direction: row;
      justify-content: center;

      margin-bottom: 15px;

      & > svg:not(:last-child) {
        margin-right: 8px;
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
