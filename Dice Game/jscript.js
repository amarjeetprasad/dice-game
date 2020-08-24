

function myFunc()
{

    var num1=Math.floor(Math.random()*6)+1;
    var num2=Math.floor(Math.random()*6)+1;
    var dice1=document.querySelector(".img1").setAttribute("src",`images/dice${num1}.png`);
    var dice2=document.querySelector(".img2").setAttribute("src",`images/dice${num2}.png`);
    var heading=document.querySelector("h1");


    if(num1===num2)
    {
        heading.innerHTML="Drawn Match!";
    }
    else if(num1>num2)
    {
        heading.innerHTML="🚩 Player 1 Wins!";
    }
    else
    {
        heading.innerHTML="Player 2 Wins! 🚩";
    }


}

