let btn = document.querySelectorAll(".box");

let names = document.querySelector("#players");

let para = document.querySelector("#result");

let reset = document.querySelector("#reset");

let resetpoints = document.querySelector("#resetAll");

let finalwin = document.querySelector("#finalwinner");

let player1 = document.querySelector("#playerone");
let player2 = document.querySelector("#playertwo");

let playerone = 0;
let playertwo = 0;

              
let pressed = 0;

const winnerpair = [
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [1,4,7],
    [3,4,5]
];

btn.forEach((box) => {
    box.addEventListener( "click" , () =>{ 
      if(!pressed){
            box.innerText = "X";
            pressed = 1;
            box.style.color = "white";
            box.style.backgroundColor = "#D72638";
        }
        else{
             box.innerText = "O";
             pressed = 0;
             box.style.color = "white";
             box.style.backgroundColor = "#12355B";
        }
        box.disabled = true;

        checkwinner();
        drawcheck();
        finalwinner();
          
    });
   

});



const drawcheck = () =>{
    let temp = 0;
    btn.forEach((box) => {
      if(box.innerText=="X"||box.innerText=="O"){
            temp++;
        }
    });

    if(temp==9){
        if(para.innerText==""){
            
        para.innerText = "Draw the match...";
     }
    }
}


const disablebtn = () =>{ 
btn.forEach((box) => {
    box.disabled = true;
});
}

const checkwinner = () =>{
    for( let value of winnerpair){ 

        let pos1 = btn[value[0]].innerText;
        let pos2 = btn[value[1]].innerText;
        let pos3 = btn[value[2]].innerText;

        if(!(pos1=="" && pos2=="" && pos3=="")){
            if(pos1=="X" && pos2=="X" && pos3=="X"){
              
              para.style.color = "#D72638";
              para.innerText = "PLAYER 1 WON ";
              playerone++;

              player1.innerText = playerone ;
              
              disablebtn();
          
            }
            else if(pos1=="O" && pos2=="O" && pos3=="O"){
            
            para.style.color = "#12355B";
            para.innerText = "PLAYER 2 WON ";
            playertwo++;

            player2.innerText = playertwo;
            
            disablebtn();

            }     
        }                 
    }     

}

const finalwinner = () =>{
    if(playerone==3){
      names.style.visibility = "hidden";
      finalwin.innerText = "PLAYER ONE WON THE GAME !...";
      para.innerText = "";
}
    if(playertwo==3){
       names.style.visibility = "hidden";
       finalwin.style.color = "#12355B";
        finalwin.innerText = "PLAYER TWO WON THE GAME !...";
        para.innerText = ""; 
    }
}


reset.onclick = () =>{
    para.innerText=" ";
 
    btn.forEach((box) => {
      
        box.innerText = " ";
        box.disabled = false;
        box.style.backgroundColor = "";

    });

    pressed = 0;
}

resetAll.onclick = () =>{
    para.innerText=" ";

    btn.forEach((box) => {
      
        box.innerText = " ";
        box.disabled = false;
        box.style.backgroundColor = "";

    });

    pressed = 0;

    finalwin.innerText = "";
    names.style.visibility = "visible";

    playerone = 0;
    playertwo = 0;
    player1.innerText = "0";
    player2.innerText = "0";
}






