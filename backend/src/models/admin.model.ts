import { DataTypes, Model } from 'sequelize'
import sequelize from '../utils/database'

class Admin extends Model {
  declare id: number
  declare login: string
  declare password: string
}

Admin.init({
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize })

export default Admin
