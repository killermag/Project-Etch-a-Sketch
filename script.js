const cont = document.getElementById('container');
for (let a=0; a < 256; a++){ 
    let him = document.createElement('div');
    him.classList.add('divi');
    him.setAttribute('style','border : solid 1px gray;')
    cont.appendChild(him);    
}



