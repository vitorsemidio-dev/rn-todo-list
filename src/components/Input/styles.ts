import styled from 'styled-components/native';

export const Container = styled.TextInput`
  flex: 1;
  height: 54px;
  padding: 16px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  border-width: 1px;
  border-style: solid;
`;
