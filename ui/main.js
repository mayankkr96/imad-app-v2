console.log('Loaded!');
//document.getElementById("maintext").innerHTML='Welcome';
var img=document.getElementById('');
var marginleft=0;
function move()
{
    marginleft=marginleft+1;
    img.style.marginLeft=marginleft + 'px';
}
img.onclick = function(){
 var interval=setInterval(move , 25);   
};
