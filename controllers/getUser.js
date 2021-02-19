const User = require('../models/Users')

//@GET
//Get one user
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    res.json({
      status: 'Successful',
      data: {
        user,
      },
    })
  } catch (err) {
    /* handle error */
    res.status(400).json({
      status: 'Unsuccessful',
      message: err.message,
    })
  }
}

module.exports = getUser
