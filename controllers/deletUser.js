const User = require('../models/Users')

//@DELETE
//Delet one user
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.deleteOne({ _id: req.params.id })

    res.json({
      status: 'Successful',
      data: {
        deletedUser,
      },
    })
  } catch (err) {
    /* handle error */
    res.json({
      status: 'Unsuccessful',
      message: err.message,
    })
  }
}

module.exports = deleteUser
