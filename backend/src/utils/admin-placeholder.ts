/*
 * Inserts test admin row in Admins database table
 */

import bcrypt from 'bcrypt'
import adminModel from '../models/admin.model'

export default async (): Promise<void> => {
  const admin = await adminModel.findOne({
    where: {
      login: 'admin'
    }
  })

  if (!admin) {
    const pass = '123'
    const salt = await bcrypt.genSalt(12)
    const hash = await bcrypt.hash(pass, salt)

    await adminModel.create({
      login: 'admin',
      password: hash,
      salt
    })

    console.log('Admin placeholder row was generated.')
  }
}
