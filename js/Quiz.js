class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
   

    question.hide();
    background("Yellow");
    textSize(28);
    text("Result of the Quiz",350,50);
    Contestant.getPlayerinfo();
    if(allContestants !== undefined){
    debugger;
    var display_Answers = 230;
    fill("Blue");
    textSize(20);
    text("The Correct One is the odd one",130,230);
    for(var plr in allContestants){
        debugger;
       var correctAns = "2";
        if(correctAns === allContestants[plr].answer){
     fill("Green");
        }
        else{
            fill("black");
        }
        display_Answers += 30
        textSize(25);
        text(allContestants[plr].name+": "+allPlayers[plr].answer,200,display_Answers);

    }


    }
    
}
}

    
