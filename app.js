var total=Number(document.getElementById('total').innerHTML)
var plusBtns=document.querySelectorAll('.plus-btn')

var minusBtns=document.querySelectorAll('.minus-btn')
// add product
for (const btn of plusBtns) {
    btn.addEventListener("click",function(){
    var qty=Number(btn.previousElementSibling.innerHTML)
    qty++;
    btn.previousElementSibling.innerHTML=qty
    var price=Number(btn.parentNode.children[1].children[0].innerHTML)
    total+=price
    document.getElementById('total').innerHTML=total
    })
    
}

// delete item
for (const btn of minusBtns) {
    btn.addEventListener("click",function(){
    var qty=Number(btn.nextElementSibling.innerHTML)
    console.log(qty)
    if(qty>0){
    qty--;
    btn.nextElementSibling.innerHTML=qty
    var price=Number(btn.previousElementSibling.children[0].innerHTML)
    console.log(price)
    total-=price
    document.getElementById('total').innerHTML=total}
  
    })
    
}

// like btn*

var likeBtns=document.querySelectorAll('.icon')
console.log(likeBtns)
for (const heart of likeBtns) {
    heart.addEventListener('click',function(){
if(heart.style.color=='black'){
    heart.style.color="red"

}else {
    heart.style.color="black"
}
    })
    
}