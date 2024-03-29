import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Container } from './styles';

type InputProps = TextInputProps;

export function Input({ ...rest }: InputProps) {
  const theme = useTheme();
  return <Container {...rest} placeholderTextColor={theme.COLORS.GRAY_300} />;
}
