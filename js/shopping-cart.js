
var n=0;
function increaseNumber(){
    n++;
    document.getElementById('number').innerHTML=n;
    zeroNumber();
} 
function zeroNumber(){
    if(document.getElementById('number').innerHTML==0){
            document.getElementById('box').style.display="none";
    }
    else {
        document.getElementById('box').style.display="block";
    }
}

