function sleepNow(){
    text1=document.getElementById("text1").value;
    if(text1==1 || text1==2 || text1==3){
        document.getElementById("output1").innerHTML = "Your child should sleep for 11-14 hrs";
    }
    else if(text1==4 || text1==5 || text1==6){
        document.getElementById("output1").innerHTML = "Your child should sleep for 10.5-11.5 hrs";
    }
    else{
       document.getElementById("output1").innerHTML = "Your child should sleep for 10-11 hrs";
    }
}


function nfood(){
    text2=document.getElementById("text2").value;
    if(text2 == 4||text2 == 5|| text2 ==6){
        document.getElementById("output2").innerHTML = "Your child should eat fresh vegetables and fruits, low-fat dairy products, lean proteins (beans, tofu, eggs), and whole-grain cereals and bread.";
    }
    else{
       document.getElementById("output2").innerHTML = "Your child should eat seafood, lean meat, eggs, beans, peas, soy products, and unsalted nuts and seeds.";
    }
}

function outdoor(){
    text3=document.getElementById("text3").value;
    if(text3 == 4||text3==5||text3==6){
        document.getElementById("output3").innerHTML = "Your child can play Water balloon,Chalk obstacle course,Hula hoop race & catch,Treasure hunt,Toy-made obstacle course,Kitchen utensil,bubble wands.";
    }
    else{
       document.getElementById("output3").innerHTML = "Your child can play Obstacle Course, Scooter Races,Animal Tag,FourSquare,Bicycle Fun, Kick the Can and Opinion Tag,outdoor games like basketball,football etc";
    }
}

function goals(){
    text4=document.getElementById("text4").value;
    if(text4 == 4||text4 ==5||text4 ==6){
        document.getElementById("output4").innerHTML = "Your child's goals should be Sing songs,Skip and hop on one foot,Catch and throw a ball overhand,Walk downstairs alone,Draw a person with three separate body parts,Build a block tower with 10 blocks,Understand the difference between fantasy and reality,Draw a circle and square.";
    }
    else{
       document.getElementById("output4").innerHTML = "Your child's goals should be Start a diary/journal,Train for and run a 5K,Write your first story,Learn how to cook one of your grandmother's recipes,Travel abroad.";
    }
}

function timeM(){
    text5=document.getElementById("text5").value;
    if(text5 == 4||text5 ==5||text5==6){
        document.getElementById("output5").innerHTML = "Your child can have time management by Making It Fun. Start Young,Measure Time,Create a Family Calendar,Create Individual Calendars,Stay on Task,Don't Overschedule,Schedule Free Time.";
    }
    else{
       document.getElementById("output5").innerHTML = "Your child can have time management by Write down his/her schedule,Avoid nagging,Encourage to develop routines,Time management tools for time management,Help him/her to set goals,Help him/her prioritise activities,Model good time management habits.";
    }
}

function motivation(){
    text6=document.getElementById("text6").value;
    if (text6 ==1||text6==2||text6==3){
        document.getElementById("output6").innerHTML = "Your child can get motivated by Encouraging them to play more games and learn more words."
    }
    else if(text6 ==4||text6==5||text6==6){
        document.getElementById("output6").innerHTML = "Your child can get motivated by praising them, positive feedback, or improvement suggestions in place of tangible rewards.";
    }
    else{
       document.getElementById("output6").innerHTML = "Your child can get motivated by Rewarding effort rather than outcome,Help them see the big picture,Let them make mistakes,Get outside help.";
    }
}
