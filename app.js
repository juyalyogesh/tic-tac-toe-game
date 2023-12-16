let chance=1;
let audiok=document.getElementById("ad")

document.getElementById("one").value="1";
document.getElementById("two").value="2";
document.getElementById("three").value="3";
document.getElementById("four").value="4";
document.getElementById("five").value="5";
document.getElementById("six").value="6";
document.getElementById("seven").value="7";
document.getElementById("eight").value="8";
document.getElementById("nine").value="9";
//re..
function rst(){
window.location=""
}
function one(){
    if(chance%2==0)
{
document.getElementById("one").value="0"
    
}
else{

document.getElementById("one").value="X"
}
document.getElementById("one").disabled="disabled"
chance=chance+1
ad.play()
win()
}
function two(){

if(chance%2==0)
{
document.getElementById("two").value="0"
}
else{

document.getElementById("two").value="X"
}
document.getElementById("two").disabled="disabled"
chance=chance+1
ad.play()
win()
}

function three(){

if(chance%2==0)
{
document.getElementById("three").value="0"
}
else{

document.getElementById("three").value="X"
}
document.getElementById("three").disabled="disabled"

chance=chance+1
ad.play()
win()

}

function four(){

if(chance%2==0)
{
document.getElementById("four").value="0"
}
else{

document.getElementById("four").value="X"
}
document.getElementById("four").disabled="disabled"
chance=chance+1
ad.play()
win()

}

function five(){

if(chance%2==0)
{
document.getElementById("five").value="0"
}
else{

document.getElementById("five").value="X"
}
document.getElementById("five").disabled="disabled"
chance=chance+1
ad.play()
win()

}

function six(){

if(chance%2==0)
{
document.getElementById("six").value="0"
}
else{

document.getElementById("six").value="X"
}
document.getElementById("six").disabled="disabled"
chance=chance+1
ad.play()
win()

}

function seven(){

if(chance%2==0)
{
document.getElementById("seven").value="0"
}
else{

document.getElementById("seven").value="X"
}
document.getElementById("seven").disabled="disabled"
chance=chance+1
ad.play()
win() 

}

function eight(){

if(chance%2==0)
{
document.getElementById("eight").value="0"
}
else{

document.getElementById("eight").value="X"
}
document.getElementById("eight").disabled="disabled"
chance=chance+1
ad.play()
win()

}

function nine(){

if(chance%2==0)
{
document.getElementById("nine").value="0"
}

else{

document.getElementById("nine").value="X"
}
document.getElementById("nine").disabled="disabled"
chance=chance+1
ad.play()
win()
}

function win(){

let one=document.getElementById("one").value
let two=document.getElementById("two").value
let three=document.getElementById("three").value
let four=document.getElementById("four").value
let five=document.getElementById("five").value
let six=document.getElementById("six").value
let seven=document.getElementById("seven").value
let eight=document.getElementById("eight").value
let nine=document.getElementById("nine").value

if(chance==9){
    wd.play()
    document.getElementById("zz").innerHTML= "DRAW"
} 

if(one==two && one==three || one==four && one==seven ||one==five && one==nine)
{
bv.play()
document.getElementById("zz").innerHTML=(one + "-win");
}
else if( two==one && two==three || two==five && two==eight){
bv.play()
document.getElementById("zz").innerHTML=(two + "-win")

}
else if(three==six && three==nine || three==one && three==two || three==five && three==seven) {
bv.play()
document.getElementById("zz").innerHTML=(three + "-win")
}
else if(four==one && four==seven || four==five && four==six){
bv.play()
document.getElementById("zz").innerHTML=(four + "-win")
}
else if (five==one && five==nine || five==three && five==seven || five==four && five==six || five==two && five==eight){
document.getElementById("zz").innerHTML=(five + "-win")
}
else if( six==three && six==nine || six==four && six==five){
document.getElementById("zz").innerHTML=(six + "-win")
}
else if (seven==eight && seven==nine || seven==three && seven==five || seven==one && seven==four) {
document.getElementById("zz").innerHTML=(seven + "-win")
}
else if(eight==two && eight==five || eight==seven && eight==nine){
document.getElementById("zz").innerHTML=(eight + "-win")
}
else if(nine==three && nine==six || nine==seven && nine==eight || nine==one && nine==five){
document.getElementById("zz").innerHTML=(nine + "-win")
}
}
