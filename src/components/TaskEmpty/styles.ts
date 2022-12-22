import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 48px 20px;
  justify-content: center;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-top-style: solid;
`;

export const Image = styled.Image`
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  line-height: 20px;
`;
