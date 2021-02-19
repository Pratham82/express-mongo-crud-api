const User = require('../models/Users')

//@PUT
//Upadte one user
const updateUser = async (req, res) => {
  const { name, age, designation } = req.body

  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name,
          age,
          designation,
        },
      }
    )
    res.json({
      status: 'Successful',
      data: {
        updatedUser,
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

module.exports = updateUser
