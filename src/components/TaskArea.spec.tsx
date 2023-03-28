import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { TaskArea } from './TaskArea'

const taskAreaId = 'taskArea'

describe('TaskArea', () => {
  test('should be able to render the task area', () => {
    const { getByTestId } = render(<TaskArea />)

    expect(getByTestId(taskAreaId)).toBeInTheDocument()
  })

  test('should be able to render text area', () => {
    const { getByPlaceholderText } = render(<TaskArea />)

    expect(getByPlaceholderText('Add a new task')).toBeInTheDocument()
  })

  test('should not be able to add a new task with an empty content', () => {
    render(<TaskArea />)

    const addTaskButton = screen.getByTestId('add-task-button')

    fireEvent.click(addTaskButton)

    expect(screen.queryByTestId('task')).not.toBeInTheDocument()

    const taskInput = screen.getByPlaceholderText('Add a new task')

    fireEvent.change(taskInput, {
      target: {
        value: 'Desafio ReactJS Ignite',
      },
    })

    fireEvent.click(addTaskButton)

    const addedFirstTaskTitle = screen.getByText('Desafio ReactJS Ignite')

    expect(addedFirstTaskTitle).toHaveTextContent('Desafio ReactJS Ignite')
  })

  test('should be able to add a new task', () => {
    render(<TaskArea />)

    const taskInput = screen.getByPlaceholderText('Add a new task')
    const addTaskButton = screen.getByTestId('add-task-button')

    fireEvent.change(taskInput, {
      target: {
        value: 'Essa é minha primeira task',
      },
    })
    fireEvent.click(addTaskButton)

    const addedFirstTaskTitle = screen.getByText('Essa é minha primeira task')

    expect(addedFirstTaskTitle).toHaveTextContent('Essa é minha primeira task')
    expect(addedFirstTaskTitle.parentElement).not.toHaveClass('completed')
  })

  test('should be able to remove a task', async () => {
    render(<TaskArea />)

    const taskInput = screen.getByPlaceholderText('Add a new task')
    const addTaskButton = screen.getByTestId('add-task-button')

    fireEvent.change(taskInput, {
      target: {
        value: 'Desafio ReactJS Ignite',
      },
    })
    fireEvent.click(addTaskButton)

    fireEvent.change(taskInput, {
      target: {
        value: 'Beber água',
      },
    })
    fireEvent.click(addTaskButton)

    const addedFirstTaskTitle = screen.getByText('Desafio ReactJS Ignite')
    const addedSecondTaskTitle = screen.getByText('Beber água')

    expect(addedFirstTaskTitle).toBeInTheDocument()
    expect(addedSecondTaskTitle).toBeInTheDocument()

    const [addedFirstTaskRemoveButton] =
      screen.getAllByTestId('remove-task-button')

    fireEvent.click(addedFirstTaskRemoveButton)

    expect(addedFirstTaskTitle).not.toBeInTheDocument()
    expect(addedSecondTaskTitle).toBeInTheDocument()
  })

  // test('should be able to check a task', () => {
  //   render(<TaskArea />)

  //   const taskInput = screen.getByPlaceholderText('Add a new task')
  //   const addTaskButton = screen.getByTestId('add-task-button')

  //   fireEvent.change(taskInput, {
  //     target: {
  //       value: 'Desafio ReactJS Ignite',
  //     },
  //   })
  //   fireEvent.click(addTaskButton)

  //   fireEvent.change(taskInput, {
  //     target: {
  //       value: 'Beber água',
  //     },
  //   })
  //   fireEvent.click(addTaskButton)

  //   const [addedFirstTask, addedSecondTask] = screen.getAllByTestId('task')

  //   if (addedFirstTask.firstChild) {
  //     fireEvent.click(addedFirstTask.firstChild)
  //   }

  //   expect(addedFirstTask).toBeInTheDocument()
  //   // expect(addedFirstTask).toHaveClass('completed');

  //   expect(addedSecondTask).toBeInTheDocument()
  //   // expect(addedSecondTask).not.toHaveClass('completed');
  // })
})
