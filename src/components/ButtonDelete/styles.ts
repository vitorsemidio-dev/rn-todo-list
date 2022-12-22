import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_300,
  size: 20,
}))``;
