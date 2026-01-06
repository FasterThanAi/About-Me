const form=document.getElementById('contact-form')

function submitfun(e){
    // e.preventDefault()
    alert('form submitted')
    form.reset();
}
form.addEventListener('submit',submitfun());
