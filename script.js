let updated = false;

function handleSubmit(event){
    if(updated){
         let inpElt = document.querySelector('.LeadDateInput');
        if(inpElt){
            let opElt = document.querySelector('.LeadDateOutput');
            if(opElt){
                let leadDate = new Date(inpElt.value).toLocaleDateString('en-US');
                opElt.value = leadDate;
                console.log('Test modified');
            }
        }
    }
    else{
        alert('Please update the captcha!!');
        event.preventDefault();
    }
   
}

 function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 

 function updateCaptcha(){
    updated = true;
 }