import logoImg from '@assets/logo.png';
import { Container, Image } from './styles';

export function Logo() {
  return (
    <Container>
      <Image source={logoImg} />
    </Container>
  );
}
