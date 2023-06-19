import styled from "styled-components";

export const ResponsiveTable = styled.ul`
  min-width: 0;
  & > .col-1 {
    flex-basis: 5%;
  }
  & > .col-2 {
    flex-basis: 15%;
  }
  & > .col-3 {
    flex-basis: 25%;
  }
  & > .col-4 {
    flex-basis: 25%;
  }
  & > .col-5 {
    flex-basis: 20%;
  }

  & > .table-row {
    background-color: #fff;
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
    font-family: FiraSans-Light;
  }

  & > .table-header {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    font-family: FiraSans-Light;
  }

  & > li {
    border-radius: 3px;
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    @media screen and (max-width: 1070px) and (min-width: 590px) {
      padding: 10px 10px;
    }
  }

  @media all and (max-width: 767px) {
    & > .table-header {
      display: none;
    }
    & > li {
      display: block;
    }
    & > .col {
      flex-basis: 100%;
    }
    & > .col {
      display: flex;
      padding: 10px 0;
    }
    & .col-1 {
      display: flex;
      justify-content: center;
    }
    & .col-2 {
      justify-content: center;
    }

    & > .col:before {
      color: #6c7a89;
      padding-right: 10px;
      content: attr(data-label);
      flex-basis: 50%;
      text-align: right;
    }
  }
`;

export const TableHeader = styled.li`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-family: FiraSans-Light;
`;

export const TableRow = styled.li`
  background-color: #fff;
  width: 940px;
  padding: 5px;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  font-family: FiraSans-Light;
  &:hover {
    background-color: #eee;
  }
  @media screen and (max-width: 1070px) {
    width: 435px;
  }
  @media screen and (max-width: 590px) {
    width: 200px;
  }
  @media all and (max-width: 767px) {
    height: 170px;
  }
`;

export const TableColumn1 = styled.div`
  flex-basis: 10%;
`;
export const TableColumn2 = styled.div`
  flex-basis: 25%;
  display: flex;
  text-align: center;
  justify-content: left;
  align-items: center;
  @media screen and (max-width: 1070px) and (min-width: 590px) {
    text-align: center;
    font-size: 12px;
    justify-content: center;
  }
`;
export const TableColumn3 = styled.div`
  flex-basis: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1070px) and (min-width: 590px) {
    text-align: center;
    font-size: 12px;
  }
`;
export const TableColumn4 = styled.div`
  flex-basis: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1070px) and (min-width: 590px) {
    text-align: center;
    font-size: 12px;
  }
`;
export const TableColumn5 = styled.div`
  flex-basis: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1070px) and (min-width: 590px) {
    text-align: center;
    font-size: 12px;
  }
`;
