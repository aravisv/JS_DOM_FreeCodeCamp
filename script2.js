document.querySelector(".box-1").lastElementChild.addEventListener("click",()=>{
    console.log("button clicked")
});

document.querySelector(".box-2").addEventListener("mouseover",()=>{
    document.querySelector(".box-2").style.backgroundColor = 'grey';
});

document.querySelector(".box-2").addEventListener("mouseout",setDefaultBackgroundColor);

function setDefaultBackgroundColor(){
    document.querySelector(".box-2").style.backgroundColor = 'white';
    console.log("white");
}

let content= document.querySelector('.content');
content.addEventListener("click",showContent);

function showContent(){
    document.querySelector('.container2').classList.remove('initial-position');
    document.querySelector('.container2').firstElementChild.classList.remove('initial-position');
    document.querySelector('.container2').firstElementChild.classList.remove('initial-visibility');
    document.querySelector('.container2').firstElementChild.classList.add('hide-btn-flex');

    document.querySelector('.container2').lastElementChild.classList.remove('initial-position');
    document.querySelector('.container2').lastElementChild.lastElementChild.classList.remove('initial-visibility');

    document.querySelector('.container2').lastElementChild.firstElementChild.textContent = '';
}

let hideContentSection = document.querySelector('.hide-content-section');
hideContentSection.addEventListener("click",hideContent);

function hideContent(){
   
    document.querySelector('.container2').classList.add('initial-position');
    document.querySelector('.container2').firstElementChild.classList.add('initial-position');
    document.querySelector('.container2').firstElementChild.classList.add('initial-visibility');    
    document.querySelector('.container2').firstElementChild.classList.remove('hide-btn-flex');

    document.querySelector('.container2').lastElementChild.classList.add('initial-position');
    document.querySelector('.container2').lastElementChild.lastElementChild.classList.add('initial-visibility');

    document.querySelector('.container2').lastElementChild.firstElementChild.textContent = 'Tap me to reveal';
}

/*
//capturing phase
window.addEventListener("click",()=>{
    console.log("window");
},true);

document.addEventListener("click",()=>{
    console.log("document");
},true);

document.querySelector('.container3').addEventListener("click",()=>{
    console.log("container3");
},true);

document.querySelector(".div2").addEventListener("click",(e)=>{
    //e.stopPropagation();
    console.log("div2");
},true);

document.querySelector(".div1").addEventListener("click",()=>{
    console.log("div1");
},true);

document.querySelector(".button3").addEventListener("click",(abc)=>{
    console.log(abc.target);
},true);

*/

//default. bubbling phase
window.addEventListener("click",()=>{
    console.log("window");
},false);

document.addEventListener("click",()=>{
    console.log("document");
},false);

document.querySelector('.container3').addEventListener("click",(e)=>{
    console.log("container3");
},false);

document.querySelector(".div2").addEventListener("click",()=>{
    console.log("div2");
},{once:true})

document.querySelector(".div1").addEventListener("click",()=>{
    console.log("div1");
},false)

document.querySelector(".button3").addEventListener("click",()=>{
    console.log("clicked the button");
},false)

document.querySelector(".link-to-nothing").addEventListener("click",(abc)=>{
    abc.preventDefault();
    if(abc.target.matches('a'))             //or '.link-to-nothing'
    console.log(abc.target);
},false)