const sound = require("sound-play");
const moment = require("moment");

const alarmTime = moment();

let alarmHour = 7;
let alarmMinute = 20;

if(alarmTime.hour() > alarmHour) {
  alarmTime.add(1, 'day')
}
alarmTime.hour(alarmHour)
alarmTime.minute(alarmMinute)

console.log(`Alarm set to ${alarmTime.format('dddd, MMMM Do YYYY, h:mm:ss a')}`)

const round = (n) => {
  return Math.round(n * 100) /100;
}

const milliseconds = alarmTime.subtract(moment()).unix()*1000
const minutes = round(milliseconds / 1000 / 60)
const hours = round(minutes / 60)
console.log(`Alarm will ring in ${hours} hours or ${minutes} minutes`)

setTimeout(() => {
  sound.play('alarm.mp3', function (err) {
    if (err) throw err

    console.log('Playing alarm, press ctrl + c to stop it')
  })
}, milliseconds)


