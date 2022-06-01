let barraLat = document.getElementById('barraLat');
let elementiInterni = document.querySelectorAll('.elementoInterno');
let elementoGenericoBarraLaterale = document.querySelectorAll('.elementoGenericoBarraLaterale');
let elementoAncoraPiuInterno = document.querySelectorAll('.elementoAncoraPiuInterno');
let elementoAncoraPiuInternoEXP = document.querySelectorAll('.elementoAncoraPiuInternoEXP');
let barraSuperiore = document.getElementById('barraSup');
let elementiVerticali = document.querySelectorAll('.elementoVerticale');
let menu1Button = document.querySelector('.menu1');
let restoPag = document.querySelector('.restoPag');
let menu1 = document.querySelector('.menu1Effettivo');
let barraWrapper = document.querySelector('.barraWrapper');
let apriBarraLaterale = document.querySelector('.apriBarraLaterale');


function apriBarraLat(){
    barraLat.style.width = '300px';
    for(let i = 0; i < elementiInterni.length; i++){
        elementiInterni[i].style.width = '80%';
    }
    for(let i = 0; i < elementoAncoraPiuInterno.length; i++){
        elementoAncoraPiuInterno[i].classList.remove('nascondiElemento');
    }
    if(!barraSuperiore.classList.contains('barraSuperioreScrolled')) barraWrapper.style.width = 'calc(100% - 340px)';
    elementiVerticali.forEach(e=>{
        e.style.transform = 'rotate(0deg)';
        e.style.marginLeft = '50px';
    });
}

barraLat.addEventListener('mouseenter',apriBarraLat);
function chiudiBarraLat(){
    barraLat.style.width = '80px';
    for(let i = 0; i < elementiInterni.length; i++){
        elementiInterni[i].style.width = '100%';
    }
    for(let i = 0; i < elementoAncoraPiuInterno.length; i++){
        elementoAncoraPiuInterno[i].classList.add('nascondiElemento');
    }
    barraWrapper.style.width = 'calc(100% - 120px)';
    elementiVerticali.forEach(e=>{
        e.style.transform = 'rotate(90deg)';
        e.style.marginLeft = '0px';

    });
}
barraLat.addEventListener('mouseleave',chiudiBarraLat);




for(let i = 0; i < elementoGenericoBarraLaterale.length; i++){
    elementoGenericoBarraLaterale[i].addEventListener('mouseenter',function (){
        this.style.height = '30%';
        let s = elementoAncoraPiuInternoEXP[i].classList.remove('nascondiElemento');
        elementoAncoraPiuInterno[i].classList.toggle('nascondiElemento');
    });
}
for(let i = 0; i < elementoGenericoBarraLaterale.length; i++){
    elementoGenericoBarraLaterale[i].addEventListener('mouseleave',function (){
        this.style.height = '80px';
        elementoAncoraPiuInternoEXP[i].classList.toggle('nascondiElemento');
        elementoAncoraPiuInterno[i].classList.remove('nascondiElemento');
    });
}




//parte della gestione dello scroll della pagina 

let scrolled = false;
let scrollLinearizzato = 0;
let elementoDaFarComparire = document.getElementById('elementoDaFarComparire');
let scrollEffettivo = 0;

let scrollLinearizzato2 = 0;
let elementoDaFarComparire2 = document.getElementById('elementoDaFarComparire2');
let scrollEffettivo2 = 0;

let patenza = 200;
let arrivo = 600;

window.addEventListener('scroll',function (e){
    //movimento della barra superiore
    if(this.scrollY > 80 && scrolled == false){
        barraSuperiore.classList.toggle('barraSuperioreScrolled');
        scrolled = true;
        menu1.style.width = 'calc(100% - 400px)';
    }else if(this.scrollY < 80 ){
        barraSuperiore.classList.remove('barraSuperioreScrolled');
        scrolled = false;
        menu1.style.width = '100%';

    }


    //movimento div compare
    

    if(this.scrollY > patenza && this.scrollY < arrivo){
        scrollLinearizzato = (this.scrollY - patenza)/(arrivo-patenza); 
    }
    if(this.scrollY > arrivo) scrollLinearizzato = 1;
    if(this.scrollY < patenza) scrollLinearizzato = 0;

    scrollEffettivo = 120 - scrollLinearizzato*120;
    elementoDaFarComparire.style.transform = 'translateX(' + scrollEffettivo + '%)'; 

    elementoDaFarComparire2.style.transform = 'translateX(' + -scrollEffettivo + '%)'; 
});



let aperto = false;
menu1Button.addEventListener('click',function (){
    if(aperto == false){
        if(window.scrollY == 0) restoPag.style.marginTop = '420px';
        menu1.style.marginLeft = '';
        menu1.style.opacity = 1;
        aperto = true;
    }else{
        restoPag.style.marginTop = '100px';
        menu1.style.marginLeft = '100%';
        menu1.style.opacity = 0;
        aperto = false;
    }

});







apriBarraLaterale.addEventListener('click',function (){
    if(barraLat.classList.contains('barraSupChiusaPhone')){
        barraLat.classList.remove('barraSupChiusaPhone');
        apriBarraLat(); 
    }else{
        barraLat.classList.toggle('barraSupChiusaPhone');
        chiudiBarraLat(); 
    }
});