
food1 =document.getElementById("food1")
food1X = 400
food1Y = 200
food1.style.top = food1Y + "px"
food1.style.left = food1X + "px"


food2 =document.getElementById("food2")
food2X = 200
food2Y = 400
food2.style.top = food2Y + "px"
food2.style.left = food2X + "px"

food3 =document.getElementById("food3")
food3X = 700
food3Y = 100
food3.style.top = food3Y + "px"
food3.style.left = food3X + "px"

player=document.getElementById("player")
playerY=0
playerX=0

step = 10

pointsCounter = 0

points = document.getElementById("points")

food1Encontrado = false;
food2Encontrado = false;
food3Encontrado = false;

jogoAcabado = false;

document.addEventListener("keydown",function(event){
    console.log(event.key)
    if(event.key== "s" || event.key== "S"){
        console.log("VAMOS PARA BAIXO")

        playerY = playerY + step

    }
    if(event.key== "w" || event.key== "W"){
        console.log("VAMOS PARA CIMA")

        playerY = playerY - step

    }

    if(event.key== "a" || event.key== "A"){
        console.log("VAMOS PARA Esquerda")

        playerX = playerX - step

    }
    if(event.key== "d" || event.key== "D"){
        console.log("VAMOS PARA Direita")

        playerX = playerX + step

    }
    player.style.left = playerX + "px"
    player.style.top = playerY + "px"

    if(playerY == food1Y && playerX == food1X && food1Encontrado == false){
        console.log("ESTAMOS EM CIMA DO FOOD 1 !!!!! ")
        food1.remove()
        player.style.backgroundColor = "blue"
        pointsCounter = pointsCounter + 1
        points.innerHTML = "Pontos :" + pointsCounter;
    }

    if(playerY == food2Y && playerX == food2X && food2Encontrado == false){
        console.log("ESTAMOS EM CIMA DO FOOD 2 !!!!! ")
        food2.remove()
        player.style.backgroundColor = "green"
        pointsCounter = pointsCounter + 1
        points.innerHTML = "Pontos :" + pointsCounter;
    }
    if(playerY == food3Y && playerX == food3X && food3Encontrado == false){
        console.log("ESTAMOS EM CIMA DO FOOD 3 !!!!! ")
        food3.remove()
        player.style.backgroundColor = "hotpink"
        pointsCounter = pointsCounter + 1
       points.innerHTML = "Pontos :" + pointsCounter;
    }

    if(pointsCounter >= 3 && jogoAcabado == false){
        jogoAcabado = true;
        alert("PARABENS");
    }
    
})
