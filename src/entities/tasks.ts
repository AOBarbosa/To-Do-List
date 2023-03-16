import { TaskProps } from "../components/TaskArea";

export class Task {
  private props: TaskProps

  get id() {
    return this.props.id
  }

  get content() {
    return this.props.content
  }

  get isCompleted() {
    return this.props.isCompleted
  }

  constructor (props: TaskProps) {
    this.props = props
  }
}