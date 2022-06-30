import sequelize from '../utils/database'
import Admin from './admin.model'
import Task from './task.model'

await sequelize.sync({ alter: true })

export default {
  sequelize,
  adminModel: Admin,
  taskModel: Task
}
