console.log('Loaded!');
//document.getElementById("maintext").innerHTML='Welcome';
var img=document.getElementById('mainimg');
var marginleft=0;
function move()
{
    marginleft=marginleft+1;
    img.style.marginLeft=marginleft + 'px';
}
img.onclick = function(){
 var interval=setInterval(move , 25);   
};

var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange=function(){
        if request.readystate===(XMLHttpRequest.DONE){
            if (request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET','http://mayankkr96.imad.hasura-app.io',true);
    request.send(null);
   
};