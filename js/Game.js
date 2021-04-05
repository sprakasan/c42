class Game{
    constructor(){}
    
    getState(){
        var stateRef = database.ref('gameState')
        stateRef.on("value", (data)=>{
            gameState = data.val()
        })
    }
update(state){
    database.ref('/').update({
        gameState:state
    })
}
async start(){
    if(gameState === 0){
        player = new Player()
        var playerRef = await database.ref('playerCount').once("value")
        if(playerRef.exists()){
            playerCount=playerRef.val()
            player.getCount() 
        }

        form = new Form()
        form.display()
    }
    car1 = createSprite(100,200)
    car1.addImage(c1)
    car2 = createSprite(300,200)
    car2.addImage(c2)
    car3 = createSprite(500,200)
    car3.addImage(c3)
    car4 = createSprite(700,200)
    car4.addImage(c4)
    cars =[car1,car2,car3,car4]

}

play(){
    form.hide()
    textSize(30)
    text("Game Start",120,100)     
    Player.getPlayerInfo()           
    if(allPlayers!==undefined){
        background(0);
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
        var x = 200
        var index = 0
        var y
        //var display_position = 113
        for(var plr in allPlayers){
            index = index+1 
            x = 200+(index*200)+allPlayers[plr].xPos
            y = displayHeight - allPlayers[plr].distance
            cars[index-1].x = x
            cars[index-1].y = y
            if(index === player.index){
            cars[index-1].shapeColor="red"
            camera.position.x= displayWidth/2
            camera.position.y=cars[index-1].y
            }
            //else {
            //fill("white")
            //}

        //display_position+=20
        //textSize(15)
        //text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position)
    }
}
    if(player.distance<3000){
    if(keyIsDown(38)&& player.index!==null){
        yVel+=0.9
        if(keyIsDown(37)){
            xVel-=0.2
        }
         if (keyIsDown(39)){
             xVel+=0.2
         }
    }
}
    player.distance+=yVel
    yVel*=0.98
    player.xPos+=xVel
    xVel*=0.985
    player.update()
    
    drawSprites();
    }
    end(){
        console.log("Game Over!")
    }
    }

