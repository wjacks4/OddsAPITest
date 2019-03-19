console.log('Lets flip some fucking tickets')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')
const app = express()

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

// require('./routes')(app)

console.log(config.port)
console.log(config.db.host)
console.log(config.db.database)
console.log(config.db.user)
console.log(config.db.password)

sequelize.sync({force: false})
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })





const axios = require('axios')

// An api key is emailed to you when you sign up to a plan
const APIKEY = '8bea125afa5311311ec1d10122688e51'

// Get a list of in season sports
axios.get('https://api.the-odds-api.com/v3/sports', {
    params: {
        api_key: APIKEY
    }
}).then(response => {

    console.log(
        `Successfully got ${response.data.data.length} sports.`,
        `Here's the first sport:`
    )

    console.log(response.data.data[0])
})
.catch(error => {
    console.log('Error status', error.response.status)
    console.log(error.response.data)
})



const Tickets_key = '8bea125afa5311311ec1d10122688e51'

axios.get('https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=OrCBYA46Xdvtl7RFfU88egw4L8HDPRW3', {
}).then(response=> {
    console.log(
        `SUCCESS!`
    )
})
.catch (error=> {
    console.log('Error status', error.response.status)
})
