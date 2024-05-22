function juice()  {


val1=document.getElementById("input12");
val2=val1.value
console.log(val2)
if (val2 != "") {
lab= document.createElement('label') ;
lab.textContent=val2;
lab.className="blass";
br12 = document.createElement('br');
document.getElementById('forText').append(lab);
document.getElementById('forText').append(br12);
console.log("success text");
val1.value="";

}
else{
    console.log("no text")
}
}