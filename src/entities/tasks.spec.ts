import { expect, test } from 'vitest';
import { Task } from './tasks';

test('create a task', () => {
  const task = new Task({
    id: 'id-123',
    content: 'Task',
    isCompleted: true
  })

  expect(task).toBeInstanceOf(Task)
  expect(task.content).toEqual(String(task.content))
})

