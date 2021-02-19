const User = require('../models/Users')

//@GET
//GetAll users
const getAllUsers = async (_, res) => {
  try {
    const allUsers = await User.find()
    res.json({
      status: 'Successful',
      data: allUsers,
    })
  } catch (err) {
    /* handle error */
    res.json({
      status: 'Unsuccessful',
      message: err.message,
    })
  }
}

module.exports = getAllUsers
