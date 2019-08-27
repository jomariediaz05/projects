import mongoose from 'mongoose'

export function connectToDb () {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false
  }, error => {
    if (error) {
      console.log(error)
      throw error
    } else {
      console.log(`Connected to MongoDb in url ${process.env.DB_URL}`)
    }
  })
}
