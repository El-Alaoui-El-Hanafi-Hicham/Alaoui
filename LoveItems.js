function SetLovedItems(loveButton){
    let id=loveButton.id
    if(CheckIfLSExist()==true){
    
        if(CheckIfIdExistInLS(id)==true){
            console.log(CheckIfIdExistInLS(id))
            RemoveIdFromLS(id)
        }
    else{
        console.log(CheckIfIdExistInLS(id))
        // console.log(CheckIfIdExistInLS(id)) 
        ADDValueToLS(id)
        let button=document.getElementById(`${id}`)
        button.innerHTML=`<i class="fa-sharp fa-solid fa-heart"></i>`
    }        
    }else{
        console.log(CheckIfLSExist()) 
                let array=[loveButton.id]
                let button=document.getElementById(`${id}`)

                button.innerHTML=`<i class="fa-sharp fa-solid fa-heart"></i>`
                window.localStorage.setItem('LovedItems',JSON.stringify(array))
            }
}

function CheckIfLSExist(){

if(localStorage.getItem("LovedItems")!=null){
return true;
}else{
return false
}
}
function CheckIfIdExistInLS(id){
let LovedItems=localStorage.getItem("LovedItems"); 
LovedItems=JSON.parse(LovedItems)
for(let i=0;i<LovedItems.length;i++){
console.log(id)
    
    if(LovedItems[i]===id){
    console.log("it's true")
        return true
    }
}
}
function RemoveIdFromLS(id){
 let array=localStorage.getItem("LovedItems"); 
 let button=document.getElementById(`${id}`)
 array=JSON.parse(array)

for(let i=0;i<array.length;i++){
if(array[i]===id){
    console.log('there is')
    button.innerHTML=`<i class="fa-regular fa-heart"></i>`
    array.splice(i,1)
}
}
if(array.length==0){
localStorage.removeItem("LovedItems")
}else{

localStorage.setItem('LovedItems',JSON.stringify(array))
}
}
function  ADDValueToLS(id){
let array=localStorage.getItem("LovedItems"); 
array=JSON.parse(array)
array.push(id)
localStorage.setItem('LovedItems',JSON.stringify(array))

}
setTimeout(()=>{
    let button=document.querySelectorAll('.LoveItem')
    let array=localStorage.getItem("LovedItems"); 
    if(array){
    array=JSON.parse(array)
    array.forEach(item=>{

        button.forEach(button=>{
           
          
            if(button.id===item){

            button.innerHTML=`<i class="fa-sharp fa-solid fa-heart"></i>`
        }
    })
})
    }
 } ,5000)