require('./server/mongooseConn')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const LessonRouter = require('./routes/lessonRoute')
const SquadRouter = require('./routes/squadRoute')

const app = express();
app.use(bodyParser.json())
app.use(cors({ origin: '*' }))

app.listen(3000, () => console.log("Server started at port 3000"))


app.use('/lessons',LessonRouter)
app.use('/squads',SquadRouter)