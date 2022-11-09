//querry selector
// parent 1d #list-dinos

let odinolist1 = document.querySelectorAll('#list-dinos li');

function olStrikeout(){
    for(let i = 0; i < odinolist1.length; i++){
        odinolist1[i].addEventListener('click', function(){
         console.log(odinolist1[i].innerText);
         odinolist1[i].style.textDecoration = "line-through";

        })
    
    
    
    }


}
olStrikeout();

//parent id "#ulist-dinos"

//querySelectorAll returns an array
let dinoList2 = document.querySelectorAll('#ulist-dinos li');

//iterate over array 
for (let i = 0; i < dinoList2.length; i++) {

    //add event listener to each li 
    dinoList2[i].addEventListener('click',function(event){ 
        dinoList2[i].style.opacity = '0';
    }); 
    
}

//selecting all the img tages under the id row
let imgs = document.querySelectorAll("#row img")

//iterating over it and adding an event listener to each
for (let i = 0; i < imgs.length; i++) {

    //add event listener to each li 
    imgs[i].addEventListener('click',function(event){ 

        imgs[i].style.width = "0px";   
    }); 
    
}
/*row.addEventListener("click", function(event){
    let rowItem = event.target;
    rowItem.style.width = "0px"

})*/

//But this last step, the Meteor Me button mass extinction, is hugely different. How do we affect ALL the items we've covered so far on one single button press? It's not actually that different. We'll just have to have a function that, when run, loops through all three sets of elements, applying the correct effect to each set. You don't need the event object here, because you don't care WHICH element was interacted with; you're gonna affect them all. Then simply attach that function as an event listener on the button, and you're done!

function executeAll(){

    for(let i = 0; i < odinolist1.length; i++){
        
         odinolist1[i].style.textDecoration = "line-through";

        }

    for(let i = 0; i < dinoList2.length; i++){

        dinoList2[i].style.opacity = '0';


        }

    for(let i = 0; i < imgs.length; i++){

        imgs[i].style.width = "0px";
    }


     
      

      

}

let button = document.querySelector('#destroy-all');
    
button.addEventListener('click', function(){
  executeAll();

})




