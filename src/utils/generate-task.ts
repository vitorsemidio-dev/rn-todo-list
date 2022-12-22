import { Task } from 'src/models/Task';
import { generateTaskId } from './generate-task-id';

type GenerateTaskParams = {
  description: string;
};

export function generateTask({ description }: GenerateTaskParams): Task {
  return {
    id: generateTaskId(),
    description,
    isCompleted: false,
  };
}
