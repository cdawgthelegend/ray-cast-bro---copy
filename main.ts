controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.FacingUp))
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.toggleViewMode()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.jump(mySprite)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.FacingLeft))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.FacingRight))
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.MovingDown))
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.setViewMode(ViewMode.tilemapView)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
Render.setCeilingTilemap(tilemap`level4`)
Render.setAttribute(Render.attribute.wallZScale, 10)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(129, 86)
let spr = 1
mySprite = Render.getRenderSpriteVariable()
info.setLife(3)
let mySprite2 = sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f f c c c f f . . . . . 
    . . . . f c 2 c 2 c f . . . . . 
    . . . . f c c f c c f . . . . . 
    . . . . f f c c c f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . f . . f f f . . f . . . . 
    . . . f . . f f f . . f . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . f f . . . f f . . . . . 
    . . . f f . . . . . f f . . . . 
    `, SpriteKind.Enemy)
mySprite2.setPosition(16, 14)
mySprite2.follow(mySprite, 1)
Render.moveWithController(5, 5, 1)
game.onUpdateInterval(200, function () {
    spr += 0.1
    mySprite2.follow(mySprite, spr)
})
