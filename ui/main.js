console.log('Loaded!');
var img=document.getElementById('mainimg');
var marginleft=0;
function move(){
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
    request.onreadystatechange = function(){
        if (request.readyState===XMLHttpRequest.DONE){
            if (request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter;
            }
        }
    };
    request.open('GET','http://mayankkr96.imad.hasura-app.io/counter',true);
    request.send(null);
};
var NameInput = document.getElementById('name');
var name = NameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    var names = ['shalini','loves','mayank'];
    var list = '';
    for(var i = names.length - 1; i>-1; i--){
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('nameList');
    ul.innerHTML = list;    
};