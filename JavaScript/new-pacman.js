let canvas = document.querySelector('#gameCanvas')
    canvas.width = 300
    canvas.height = 300
let ctx = canvas.getContext('2d')
let animationId = 0;
let player = {
    x: 10,
    y: 10,
    w: 20,
    h: 20,
    speed: 10
}
/* Do this last
// let bricks = [
//     {
//         x: 50,
//         y: 50,
//         w: 60,
//         h: 40,
//     }
// ]
// let wallCollide = true
// function drawWall() {
//     bricks.forEach((brick, i) => {
//         ctx.strokeRect(brick.x, brick.y, brick.w,  brick.h)
//     })
// }
// function wallCollision() {
//     bricks.forEach(brick => {
//         if(player.x + player.w + player.speed <= brick.x){
//             wallCollide = false
//         }
//     })
// } Do this last */
function move(e){
    if(e.key === "ArrowUp"){
        if(player.y - player.speed >= 0){
            player.y -= player.speed
        }
    } else if(e.key === "ArrowDown"){
        if(player.y + player.h + player.speed <= canvas.height){
            player.y += player.speed
        }
    } else if(e.key === "ArrowLeft"){
        if(player.x - player.speed >= 0){
            player.x -= player.speed
        }
    } else if(e.key === "ArrowRight"){
        if(player.x + player.w + player.speed <= canvas.width){
            player.x += player.speed
        }
    }
}
function animationLoop(){
    animationId = window.requestAnimationFrame(animationLoop)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect(player.x, player.y, player.w, player.h)
    // ctx.strokeRect(30, 30, 5, 5)
    // when the game is window.cancelAnimationFrame(animationId)
}
document.onkeydown = move
animationLoop()
// Create coins and draw coins evenly on canvas
// Make coins disappear when you touch them
// Create ghost and draw them
// When you touch ghost game over
// Make ghost follow you
// Create and draw walls
// Collision detection for walls