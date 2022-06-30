import sequelize from '../utils/database'
import Admin from './admin.model'
import Task from './task.model'
import initAdmin from '../utils/admin-placeholder'

const init = async () => {
  await sequelize.sync({ alter: true })
  await initAdmin()
  console.log('Database is ready.')
}

export default {
  sequelize,
  init,
  adminModel: Admin,
  taskModel: Task
}
