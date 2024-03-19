input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    연산 += 1
    if (연산 == 4) {
        연산 = 0
    }
})
input.onButtonPressed(Button.A, function () {
    수 += -1
    if (수 == -1) {
        수 += 9
    }
})
input.onButtonPressed(Button.AB, function () {
    if (순서 == 0) {
        basic.showIcon(IconNames.Yes)
        앞수 = 수
    } else if (순서 == 2) {
        basic.showIcon(IconNames.Yes)
        뒷수 = 수
    }
    순서 += 1
    if (순서 == 4) {
        basic.showIcon(IconNames.Chessboard)
        순서 = 0
    }
})
input.onButtonPressed(Button.B, function () {
    수 += 1
    if (수 == 10) {
        수 = 0
    }
})
let 결과 = 0
let 뒷수 = 0
let 앞수 = 0
let 순서 = 0
let 연산 = 0
let 수 = 0
수 = 0
연산 = 0
순서 = 0
basic.forever(function () {
    if (순서 == 0 || 순서 == 2) {
        if (수 == 0) {
            basic.showNumber(0)
        } else if (수 == 1) {
            basic.showNumber(1)
        } else if (수 == 2) {
            basic.showNumber(2)
        } else if (수 == 3) {
            basic.showNumber(3)
        } else if (수 == 4) {
            basic.showNumber(4)
        } else if (수 == 5) {
            basic.showNumber(5)
        } else if (수 == 6) {
            basic.showNumber(6)
        } else if (수 == 7) {
            basic.showNumber(7)
        } else if (수 == 8) {
            basic.showNumber(8)
        } else if (수 == 9) {
            basic.showNumber(9)
        }
    } else if (순서 == 1) {
        if (연산 == 0) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                `)
        } else if (연산 == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
        } else if (연산 == 2) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        } else if (연산 == 3) {
            basic.showLeds(`
                . . # . .
                . . . . .
                # # # # #
                . . . . .
                . . # . .
                `)
        }
    } else if (순서 == 3) {
        if (연산 == 0) {
            결과 = 앞수 + 뒷수
        } else if (연산 == 1) {
            결과 = 앞수 - 뒷수
        } else if (연산 == 2) {
            결과 = 앞수 * 뒷수
        } else if (연산 == 3) {
            if (뒷수 == 0) {
                결과 = 0
            } else {
                결과 = 앞수 / 뒷수
            }
        }
        basic.showNumber(결과)
    }
})
