import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
  width: 52px;
  height: 52px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_100,
  size: 20,
}))``;
