export interface Task {
  id: number
  user: string
  email: string
  description: string
  completed: boolean
  edited: boolean
}

export interface TaskUpdate {
  id: number
  description: string
  completed: boolean
}

export interface TaskListResponse {
  tasks: Task[]
  total: number
}

export interface TaskResponse {
  task: Task
  total: number
}
