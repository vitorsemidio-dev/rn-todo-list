import { ButtonDelete } from '@components/ButtonDelete';
import { CheckboxRound } from '@components/CheckboxRound';
import { Task } from '@models/Task';
import { useTheme } from 'styled-components/native';
import { Container, TextTask } from './styles';

type TaskItemProps = {
  task: Task;
  onRemove: () => void;
  onToggleComplete: () => void;
};

export function TaskItem({ task, onRemove, onToggleComplete }: TaskItemProps) {
  const theme = useTheme();
  return (
    <Container>
      <CheckboxRound
        value={task.isCompleted}
        color={task.isCompleted ? theme.COLORS.PURPLE_DARK : undefined}
        onValueChange={onToggleComplete}
      />
      <TextTask type={!task.isCompleted ? 'DEFAULT' : 'COMPLETED'}>
        {task.description}
      </TextTask>
      <ButtonDelete icon="delete" onPress={onRemove} />
    </Container>
  );
}
