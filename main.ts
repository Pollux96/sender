radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(4)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
basic.showString("Musik ")
radio.setGroup(1)
radio.sendNumber(0)
