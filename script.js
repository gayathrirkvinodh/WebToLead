function handleSubmit(event){
    let inpElt = document.querySelector('.LeadDateInput');
    if(inpElt){
        let opElt = document.querySelector('.LeadDateOutput');
        if(opElt){
            let leadDate = new Date(inpElt.value).toLocaleDateString('en-US');
            opElt.value = leadDate;
            console.log('Test');
        }
    }
}
