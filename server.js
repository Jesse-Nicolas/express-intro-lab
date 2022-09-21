//Import modules
import express from 'express'
import { students } from './data/student-data.js'



//Create express app
const app = express()



//Config the app (app.set)
app.set('view engine', 'ejs')



//Mount Middleware (app.use)




//Mount routes
app.get('/', function(req, res) {
  res.render('home')
})
app.get('/students', function(req, res) {
  res.render('students', {
    students: students
  })
})




//Tell the app to listen to port 30000
app.listen(3000, function() {
  console.log('Listening on port 3000, dude.')
})