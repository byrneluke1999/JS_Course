const second_hand = document.querySelector('.hand-second-hand')
const minute_hand = document.querySelector('.hand-min-hand')
const hour_hand = document.querySelector('.hand-hour-hand')

function setDate() {
  const now_date = new Date()

  const seconds = now_date.getSeconds()
  const seconds_as_degrees = ((seconds / 60 )* 360) + 90 //offset 90degree rotation (.hand)
  second_hand.style.transform = `rotate(${seconds_as_degrees}deg)`

  const mins = now_date.getMinutes()
  const mins_as_degrees = ((mins / 60) * 360) + 90
  minute_hand.style.transform = `rotate(${mins_as_degrees}deg)`

  const hours = now_date.getHours()
  const hours_as_degrees = ((hours / 12) * 360) + 90
  hour_hand.style.transform = `rotate(${hours_as_degrees}deg)`

}

setInterval(setDate, 1000) //Gets Date every second(1000 ms)