let userinput = document.getElementById("userinput");
let msg = document.getElementById("alertmsg");
console.log("hello");

function submit(){
    let userdata  = userinput.value;
    let ilength = userdata.length;
    
    if((ilength >= 6) && (userdata[ilength-1] == "#")){
        msg.textContent = "Valid Password";
    }else{
        msg.textContent= "Invalid Password";
    }
}
