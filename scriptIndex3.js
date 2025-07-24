let paras = document.querySelectorAll('p');
// In line 4, we are using target to identify on which para which are clicking 
function alertPara(event){
    alert('you have clicked on ' + event.target.textContent);

//If we want that only the code will run when clciked on span text 

// if(event.target.nodeName==='Span'){
// alert('you have clicked on Span text')
// }
}

for(let i=0; i<paras.length; i++){
    // on line 9, we taking para one by one 
    let para=paras[i];

    //not so optimal approach 

    // para.addEventListener('click', function(){
    //     alert('you have clicked on the para ' +(i+1));
    // })

    para.addEventListener('click', alertPara);
}

// DOMContentloaded : 
// - When It Fires: As soon as the browser finishes reading the HTML and constructs the DOM (Document Object Model), it triggers this event.

//example of DOMContentloaded

document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM is ready!');
});
