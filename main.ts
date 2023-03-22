input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showNumber(score)
})
input.onGesture(Gesture.Shake, function () {
    while (true) {
        enemy = game.createSprite(randint(0, 4), 0)
        for (let index = 0; index < 5; index++) {
            basic.pause(300)
            enemy.change(LedSpriteProperty.Y, 1)
        }
        if (player.isTouching(enemy)) {
            score += 1
        }
        enemy.delete()
    }
})
let enemy: game.LedSprite = null
let player: game.LedSprite = null
let score = 0
basic.showString("CATCH THE ENEMY")
basic.showString("A AND B TO MOVE")
score = 0
player = game.createSprite(2, 4)
