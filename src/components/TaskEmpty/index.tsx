import clipboardImg from '@assets/clipboard.png';
import { Container, Image, Text } from './styles';

export function TaskEmpty() {
  return (
    <Container>
      <Image source={clipboardImg} />
      <Text style={{ fontWeight: 'bold' }}>
        Você ainda não tem tarefas cadastradas.
      </Text>
      <Text>Crie tarefas e organize seus itens a fazer.</Text>
    </Container>
  );
}
