var tWidth='30%';
var tHeight='25px';
var tcolour='FFFFFF';               // background colour:
var moStop=false;                     // pause on mouseover (true or false)
var fontfamily = 'arial,sans-serif'; // font for content
var tSpeed=3;   
let parar = "nada";                     // scroll speed (1 = slow, 5 = fast)

// enter your ticker content here (use \/ and \' in place of / and ' respectively)
let content='¡Queremos que compre!';

var cps=-tSpeed; var aw, mq; var fsz = parseInt(tHeight) - 4; 
function startticker(){
    if (parar == "parar"){
        return;
    }
    if (document.getElementById) 
    {var tick = '<div style="position:relative;width:'+tWidth+';height:'+tHeight+';overflow:hidden;background-color:'+tcolour+'"'; 
    tick +='><div id="mq" style="position:absolute;right:0px;top:0px;font-family:'+fontfamily+';font-size:'+fsz+'px;white-space:nowrap;"><\/div><\/div>'; document.getElementById('ticker').innerHTML = tick; mq = document.getElementById("mq"); mq.style.right=(10+parseInt(tWidth))+"px"; mq.innerHTML='<span id="tx">'+content+'<\/span>'; aw = document.getElementById("tx").offsetWidth; lefttime=setInterval("scrollticker()",80);}} 

function scrollticker(){
    mq.style.right = (parseInt(mq.style.right)>(-10 - aw)) ?
    mq.style.right = parseInt(mq.style.right)+cps+"px": parseInt(tWidth)+10+"px";} 

window.onload=startticker;

function entra(labelx){
    if (labelx == "label1"){
        content = "Este producto es el mejor de la lista";
    }
    else if (labelx == "label2"){
        content = "Este producto es de la mejor calidad";
    }
    else if (labelx == "label3"){
        content = "Este producto es barato, barato, barato";
    }
    parar = "parar";
    startticker();
    parar = "nada";
    startticker();
}

function sale(botonx){
    content = "¡Queremos que compre!";
    parar = "parar";
    startticker();
    parar = "nada";
    startticker();
}