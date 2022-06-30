import { DataTypes, Model } from 'sequelize'
import sequelize from '../utils/database'

class Task extends Model {
  declare id: number
  declare user: string
  declare email: string
  declare description: string
  declare completed: boolean
}

Task.init({
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  user: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, { sequelize })

export default Task
