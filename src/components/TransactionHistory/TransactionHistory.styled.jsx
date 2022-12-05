import styled from 'styled-components';

export const TransactionsTable = styled.table`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
`;

export const HeadTable = styled.thead`
  height: 40px;
  color: #fff;
  text-align: center;
  background-color: cyan;
`;

export const CellTable = styled.td`
  width: 300px;
  height: 30px;
  text-align: center;
  background-color: ${props => {
    return props.idx % 2 === 0 ? '#c1c1c1' : '#ffffff';
  }};
`;

export const FirstCellTable = styled.td`
  width: 300px;
  height: 30px;
  padding-left: 80px;
  background-color: ${props => {
    return props.idx % 2 === 0 ? '#c1c1c1' : '#ffffff';
  }};
`;
