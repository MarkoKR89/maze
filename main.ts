namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.over(true)
    info.startCountdown(10)
})
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f f 2 2 f f f . . . . . . . . 
. . . . . . . f f f 2 2 2 2 f f f . . . . . . . 
. . . . . . f f f e e e e e e f f f . . . . . . 
. . . . . . f f e 2 2 2 2 2 2 e e f . . . . . . 
. . . . . . f e 2 f f f f f f 2 e f . . . . . . 
. . . . . . f f f f e e e e f f f f . . . . . . 
. . . . . f f e f b f 4 4 f b f e f f . . . . . 
. . . . . f e e 4 1 f d d f 1 4 e e f . . . . . 
. . . . . . f f f f d d d d d e e f . . . . . . 
. . . . . f d d d d f 4 4 4 e e f . . . . . . . 
. . . . . f b b b b f 2 2 2 2 f 4 e . . . . . . 
. . . . . f b b b b f 2 2 2 2 f d 4 . . . . . . 
. . . . . . f c c f 4 5 5 4 4 f 4 4 . . . . . . 
. . . . . . . f f f f f f f f . . . . . . . . . 
. . . . . . . . . f f . . f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tiles.createTilemap(
            hex`10001000030404040504050405040504040504060d1313131313131313131313071313070d131a0a0a1913131a0a1913071313100c130713130d131307130c13071313070d130713130d131307130d13071313070d13071313010a0a09130d13071313070d1307131313131313130d13071313070c131b040419130404041813071313080d131313130d131313131313131313070d131313130d130a0a0a1313131313070d131313130d131313071307130713070c1303040418130713071307130713080d130d131313130713071307130713070c130d131a0a0a0913071307130713070e130d13071313131307130713071308010a0a0b0a0a0a0b0a0a0b0a0b0a0a09`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . 2 . . 2 
2 . 2 2 2 2 . . 2 2 2 . 2 . . . 
2 . 2 . . 2 . . 2 . 2 . 2 . . 2 
2 . 2 . . 2 . . 2 . 2 . 2 . . 2 
2 . 2 . . 2 2 2 2 . 2 . 2 . . 2 
2 . 2 . . . . . . . 2 . 2 . . 2 
2 . 2 2 2 2 . 2 2 2 2 . 2 . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . . . . 2 . 2 2 2 . . . . . 2 
2 . . . . 2 . . . 2 . 2 . 2 . 2 
2 . 2 2 2 2 . 2 . 2 . 2 . 2 . 2 
2 . 2 . . . . 2 . 2 . 2 . 2 . 2 
2 . 2 . 2 2 2 2 . 2 . 2 . 2 . 2 
. . 2 . 2 . . . . 2 . 2 . 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.doorClosedWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.stairEast,sprites.dungeon.stairSouth,sprites.dungeon.stairWest,sprites.dungeon.greenOuterWest2,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairEast)
scene.cameraFollowSprite(mySprite)
