setInterval(function(){
    var date=new Date();
    document.getElementById("clock").innerHTML=date.toLocaleTimeString();
    },1000);

    setInterval(function(){
        var date=new Date();
        var hour=date.getHours();
        var img;
        if(hour>=7&&hour<12)img="morning1.jpg";
        else if(hour>=12&&hour<17)img="noon1.jpg";
        else if(hour>=17&&hour<19)img="dusk1.jpg";
        else img="night1.jpg";
        document.body.style.backgroundImage="url("+img+")";
      },1000);
    