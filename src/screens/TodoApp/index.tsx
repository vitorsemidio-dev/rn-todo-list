import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Logo } from '@components/Logo';
import { Container, Content, FormAddTodo } from './styles';

export function TodoApp() {
  return (
    <Container>
      <Logo />
      <Content>
        <FormAddTodo>
          <Input placeholder="Adicione uma nova tarefa" />
          <ButtonIcon icon="add-circle-outline" style={{ marginLeft: 4 }} />
        </FormAddTodo>
      </Content>
    </Container>
  );
}
