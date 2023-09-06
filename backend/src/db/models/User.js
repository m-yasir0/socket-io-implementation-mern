'use strict'
module.exports = (mongoose) => {
  const newSchema = new mongoose.Schema(
    {
      name: {
        type: String,
      },
      email: {
        type: String,
        unique: true,
        validate: {
          validator: function (v) {
            return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)
          },
          message: 'Please enter a valid email',
        },
        required: [true, 'Email required'],
      },
    },
    {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
    },
  )
  const User = mongoose.model('User', newSchema)
  return User
}
