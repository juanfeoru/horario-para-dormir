const boton = document.getElementById('getHours')
const infoS = document.getElementById('infoBox')
const hoursBox = document.getElementById('hoursBox')

const currentDate = new Date()
const newDate = new Date()

for (let i = 1; i <= 6; i++) {
    newDate.setTime(currentDate.getTime() + ((90 + 14) * i * 60 * 1000))
    const hourToSleep = `${newDate.getHours()}:${newDate.getMinutes()}`

    li = document.createElement('li')
    li.innerText = hourToSleep
    hoursBox.appendChild(li)
  }

boton.addEventListener('click', function () {
    if (infoS.style.display === "none") {
        infoS.style.display = "block";
    } else {
        infoS.style.display = "none"
    }
});