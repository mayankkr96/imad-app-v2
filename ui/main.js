console.log('Loaded!');
document.getElementById("maintext").innerHTML='Welcome';
var img=document.getElemntById('mainimg');
var marginleft=0;
function move()
{
    marginleft=marginleft+2;
    img.style.marginLeft=marginleft + 'px';
}
img.onclick = function(){
 var interval=setInterval(move , 20);   
};
