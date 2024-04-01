const mongoose = require('mongoose')
im

const password = require('./password.js')
//const password = process.argv[2]

const url =
  `mongodb+srv://fullstackopen:${password}@fullstackopen.d0bqfmo.mongodb.net/?retryWrites=true&w=majority&appName=fullstackopen`
mongoose.set('strictQuery',false)

mongoose.connect(url).then(()=>{
  const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
  })
  const Note = mongoose.model('Note', noteSchema)

  const note = new Note({
    content: 'HTML is x',
    important: true,
  })

  Note.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })

})

/*
note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})
*/