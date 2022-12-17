setInterval(function(){
    var date=new Date();
    document.getElementById("clock").innerHTML=date.toLocaleTimeString();
    },1000);

    setInterval(function(){
        var date=new Date();
        var hour=date.getHours();
        var img;
        if(hour>=7&&hour<12)img="morning.jpg";
        else if(hour>=12&&hour<17)img="noon.jpg";
        else if(hour>=17&&hour<19)img="evening.jpg";
        else img="night.jpg";
        document.body.style.backgroundImage="url("+img+")";
      },1000);
    