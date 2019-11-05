const Twit = require('twit')
const fs = require('fs')
const config = require('./config')

const T = new Twit(config)

fs.readFile('./data/nounlist.txt', 'utf-8', (err, data) => { 
  if (err) throw err; 
  const textArray = data.toString().split('\n')
  setInterval(() => {
    const random = Math.floor(Math.random() * textArray.length -1)
    console.log(random)
    T.post('statuses/update', {status: `Death by ${textArray[random]}`}, tweetCheck)
  }, 18000)
}) 


tweetCheck = (err, data, res) => {
  if (err) {
    console.log("Error: ")
    console.log(err)
  }
  console.log("tweeting now...")
}


