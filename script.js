const cont = document.getElementById('container');


for (let a=0; a < 256; a++){ 
    let him = document.createElement('div');
    him.classList.add('divi');
    him.setAttribute('style','border : solid 1px gray;')
    cont.appendChild(him);    
    him.addEventListener('mouseover', (e) => {
        him.classList.add('active');
        him.setAttribute('style','border :none;')
    })    
}

let btn = document.getElementById('reset');

btn.onclick = reseter;

   function reseter () {
  
    document.getElementById('container').remove();
   
    
    let size = prompt('SIZE');
    let new_cont = document.createElement('div');
    new_cont.setAttribute('id', 'container');
    new_cont.style.border = 'solid 1px gray';
    new_cont.style.height = '500px';
    new_cont.style.width = '500px';
    new_cont.style.marginLeft = 'auto'; 
    new_cont.style.marginRight = 'auto';
    new_cont.style.marginTop = '30px';
    new_cont.style.display = 'grid';
    new_cont.style.gridTemplateColumns = `repeat(${size},1fr)`;
    new_cont.style.gridTemplateRows = `repeat(${size},1fr)`;


    
    for (let ip = 0; ip < size*size; ip++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('divi');
        new_cont.appendChild(newDiv);
        newDiv.style.border = '1px solid gray';
        newDiv.addEventListener('mouseover', (e) => {
            newDiv.classList.add('active');
            newDiv.style.border = 'none';

        })


    }
    
    
    
    document.body.appendChild(new_cont); }
       
   

   

   





