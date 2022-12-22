import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 8px;
`;

type TextTaskType = 'DEFAULT' | 'COMPLETED';

type Props = {
  type: TextTaskType;
};

export const TextTask = styled.Text<Props>`
  flex: 1;
  color: ${({ theme, type }) =>
    type === 'DEFAULT' ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_300};
  text-decoration-line: ${({ type }) =>
    type === 'DEFAULT' ? 'none' : 'line-through'};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;
