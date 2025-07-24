let paras = document.querySelectorAll('p');

for(let i=0; i<paras.length; i++){
    // on line 5, we taking para one by one 
    let para=paras[i];

    //not so optimal approach  
    para.addEventListener('click', function(){
        alert('you have clicked on the para ' +(i+1));
    })
}