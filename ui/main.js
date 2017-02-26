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
var counter=0;
var button=doucment.getElementById('counter');
button.onclick=function(){
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};