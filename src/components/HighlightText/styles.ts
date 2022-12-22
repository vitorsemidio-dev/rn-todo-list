import styled from 'styled-components/native';

export type HightlightTextType = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: HightlightTextType;
};

export const Container = styled.Text<Props>`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.BLUE : theme.COLORS.PURPLE};
`;
