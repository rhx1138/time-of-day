setInterval(function(){
    var date=new Date();
    document.getElementById("clock").innerHTML=date.toLocaleTimeString();
    },1000);

    setInterval(function(){
        var date=new Date();
        var hour=date.getHours();
        var img;
        if(hour>=7&&hour<12)img="./images/morning1.jpg";
        else if(hour>=12&&hour<17)img="./images/noon1.jpg";
        else if(hour>=17&&hour<19)img="./images/dusk1.jpg";
        else img="./images/night1.jpg";
        document.body.style.backgroundImage="url("+img+")";
      },1000);
    

  