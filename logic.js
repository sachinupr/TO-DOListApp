
let enter=document.querySelector('#data');
let val=document.querySelector('#add');
let field=document.querySelector('#box');
val.addEventListener('click',fun);
let restart=document.querySelector('#reset');
restart.addEventListener('click',erase);

function erase()
{
    field.innerHTML="";
}

function fun()
{
    let a=enter.value;
    let newitem=document.createElement('p');
    newitem.textContent=a;
    newitem.style.marginTop=5+'px';
    newitem.style.marginBottom=5+'px';
    newitem.style.backgroundColor='black';
    newitem.style.height=30+'px';
    newitem.style.paddingLeft=20+'px';
    newitem.style.color='white';
    let val=newitem.innerText;
    if(val.length > 0)
    box.appendChild(newitem);
    enter.value="";
}



