input.onButtonPressed(Button.A, function () {
    radio.sendNumber(x)
    basic.showString("")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(x)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(x)
    basic.showString("")
})
let x = 0
radio.setGroup(20)
x = 0
