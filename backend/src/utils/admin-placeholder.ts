// Inserts test admin row in Admins database table

import adminModel from '../models/admin.model'

export default async (): Promise<void> => {
  const admin = await adminModel.findOne({
    where: {
      login: 'admin'
    }
  })

  if (!admin) {
    await adminModel.create({
      login: 'admin',
      password: '123' // TODO: replace raw to hash result
    })
  }
}
