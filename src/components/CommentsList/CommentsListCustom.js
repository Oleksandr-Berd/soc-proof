import styled from "styled-components";

export const CommentsListCustom = styled.ul`
  & > li:not(:last-child) {
    margin-bottom: 16px;
  }

  & > li {
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 40px;
    padding-bottom: 35px;

    text-align: left;

    background-color: #512051;
    color: #fff;

    border-radius: 8px;

    & > div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      margin-bottom: 24px;

      & > img {
        width: 40px;
        height: 40px;

        margin-right: 24px;

        border-radius: 50%;
      }

      & h5 {
        margin-bottom: 4px;

        font-size: 17px;
      }

      & h6 {
        font-size: 17px;
        font-weight: 400;
        color: #ee69a4;
      }
    }

    & p {
        font-size: 17px;
        line-height: 1.29;
        letter-spacing: -0.3px;
    }
  }
`;
