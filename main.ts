function game_3 () {
    scene.setBackgroundColor(10)
}
function doSomething () {
    random = list._pickRandom()
    if (random == "game 1 ") {
        game_1()
    }
    if (random == "game 2 ") {
        game_2()
    }
    if (random == "game 3") {
        game_3()
    }
}
function game_2 () {
    scene.setBackgroundColor(6)
}
function game_1 () {
    scene.setBackgroundColor(9)
}
let random = ""
let list: string[] = []
list = ["game 1 ", "game 2 ", "game 3"]
