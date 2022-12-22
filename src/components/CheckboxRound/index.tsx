import { CheckboxProps } from 'expo-checkbox';
import { Container } from './styles';

type CheckboxRoundProps = CheckboxProps;

export function CheckboxRound({ ...rest }: CheckboxRoundProps) {
  return <Container {...rest} />;
}
