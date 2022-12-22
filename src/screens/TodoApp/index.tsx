import { ButtonIcon } from '@components/ButtonIcon';
import { HeaderStats } from '@components/HeaderStats';
import { Input } from '@components/Input';
import { Logo } from '@components/Logo';
import { TaskEmpty } from '@components/TaskEmpty';
import { TaskItem } from '@components/TaskItem';
import { Task } from '@models/Task';
import { generateTask } from '@utils/generate-task';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Container, Content, FormAddTodo } from './styles';

export function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState<string>('');

  const numberOfCreated = tasks.length;
  const numberOfCompleted = tasks.filter((todo) => todo.isCompleted).length;

  const handleAddTask = () => {
    if (!newTaskText.trim()) return;
    const newTask: Task = generateTask({ description: newTaskText });
    setTasks((oldState) => [...oldState, newTask]);
    setNewTaskText('');
  };

  const handleRemoveTask = (id: string) => {
    setTasks((oldState) => oldState.filter((task) => task.id !== id));
  };

  const handleToggleTaskCompletion = (id: string) => {
    setTasks((oldState) =>
      oldState.map((task) =>
        task.id === id
          ? {
              ...task,
              isCompleted: !task.isCompleted,
            }
          : task,
      ),
    );
  };

  return (
    <Container>
      <Logo />
      <Content>
        <FormAddTodo>
          <Input
            placeholder="Adicione uma nova tarefa"
            onChangeText={setNewTaskText}
            value={newTaskText}
          />
          <ButtonIcon
            icon="add-circle-outline"
            style={{ marginLeft: 4 }}
            onPress={handleAddTask}
          />
        </FormAddTodo>

        <HeaderStats
          numberOfCreated={numberOfCreated}
          numberOfCompleted={numberOfCompleted}
        />

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onRemove={() => handleRemoveTask(item.id)}
              onToggleComplete={() => handleToggleTaskCompletion(item.id)}
            />
          )}
          ListEmptyComponent={() => <TaskEmpty />}
          style={{ marginTop: 20 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingBottom: 100 },
            tasks.length === 0 && { flex: 1 },
          ]}
        />
      </Content>
    </Container>
  );
}
