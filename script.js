const form = document.getElementById('contact-form');

function submitfun(e){
    // 1. You MUST prevent the default refresh
    e.preventDefault(); 
    
    alert('Form submitted successfully!');
    
    // Optional: Clear the form inputs
    // form.reset(); 
}

// 2. Pass the function NAME, do not use ()
form.addEventListener('submit', submitfun);