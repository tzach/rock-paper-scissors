radio.onReceivedNumber(function (receivedNumber) {
    if (sent == 0) {
        radio.sendNumber(v)
        basic.showIcon(IconNames.SmallDiamond)
        sent = 1
        basic.pause(500)
    }
    if (v == receivedNumber) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    } else {
        if (v == 1 && receivedNumber == 2 || (v == 2 && receivedNumber == 3 || v == 3 && receivedNumber == 1)) {
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.No)
        }
    }
    basic.pause(5000)
    sent = 0
    present(v)
})
function present (num: number) {
    if (num == 1) {
        basic.showLeds(`
            # # # # .
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        if (num == 2) {
            basic.showLeds(`
                . . . . .
                . # # # .
                # # # # #
                # # # # #
                . # # # .
                `)
        } else {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                . . # . .
                `)
        }
    }
}
input.onButtonPressed(Button.A, function () {
    v += 1
    if (v == 4) {
        v = 1
    }
    present(v)
    basic.pause(100)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(v)
    sent = 1
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    v += -1
    if (v == 0) {
        v = 3
    }
    present(v)
    basic.pause(100)
})
let sent = 0
let v = 0
radio.setGroup(1)
v = 1
sent = 0
present(v)
