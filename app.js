let estrellas = document.getElementById('estrellas')
let luna = document.getElementById('luna')
let nube1 = document.getElementById('nube1')
let nube2 = document.getElementById('nube2')
let nube3 = document.getElementById('nube3')
let nube4 = document.getElementById('nube4')
let text = document.getElementById('text')
let btn = document.getElementById('btn')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    estrellas.style.left = value * 0.25 + 'px';
    luna.style.marginLeft = value * 0.2 + 'px';
    luna.style.marginTop = value * 0.7 + 'px';
    nube1.style.left = value * 0.25 + 'px';
    nube2.style.left = value * 0.4 + 'px';
    nube3.style.left = value * 0.2 + 'px';
    nube4.style.left = value * 0.1 + 'px';
    text.style.marginBottom = value * 2 + 'px';
    text.style.marginRight = value * 0.5 + 'px';
    btn.style.marginTop = value * 0.25 + 'px';
})