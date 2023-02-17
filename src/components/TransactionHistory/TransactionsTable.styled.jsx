import styled from 'styled-components';

export const TransactionsTable = styled.table`
  margin-top: ${p => p.theme.space[6]}px;
  width: 640px;
  border: ${p => p.theme.borders.normal} #d1d1d1;
  border-collapse: collapse;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.main};
`;

export const TableHead = styled.thead`
  height: 60px;
  background-color: #55bad2;
  color: white;
`;

export const Th = styled.th`
  :not(:first-child) {
    border-left: ${p => p.theme.borders.normal} ${p => p.theme.colors.white};
  }
`;

export const Td = styled.td`
  :not(:first-child) {
    border-left: ${p => p.theme.borders.normal} ${p => p.theme.colors.grey};
  }
  vertical-align: middle;
`;

export const Tr = styled.tr`
  height: 30px;
  border: ${p => p.theme.borders.normal} #d1d1d1;
  :nth-child(even) {
    background-color: #edf1f3;
  }
  text-align: center;
  :hover {
    background-color: #ffe7e6;
  }
`;
