import UserModel from '../models/user-model'

export function getUsers (req, res) {
  return res.status(200).json({
    message: 'User Controller'
  })
}

export function getUserById (req, res) {
  UserModel.findById({
    id: req.params.id
  }).exec()
    .then(user => {
      if (!user) {
        return res.status(404).json()
      }

      return res.status(200).json({
        user: user
      })
    })
    .catch(error => {
      return res.status(500).json(error)
    })
}

export function getUserByEmail (req, res) {
  UserModel.find({
    email: req.params.email
  }).exec()
    .then(user => {
      if (!user) {
        return res.status(404).json()
      }

      return res.status(200).json({
        user: user
      })
    }).catch(error => {
      return res.status(500).json(error)
    })
}

export function createUser (req, res) {
  const user = getUserModel(req.body.user)

  user.save((error) => {
    if (error) {
      return res.status(500).json(error)
    }

    return res.status(201).json(user)
  })
}

export function updateUser (req, res) {
  const user = getUserModel(req.body.user)

  UserModel.findByIdAndUpdate({
    id: req.params.id
  }, user, error => {
    if (error) {
      return res.status(500).json(error)
    }

    return res.status(204).json(user)
  })
}

function getUserModel (user) {
  return new UserModel(user)
}
