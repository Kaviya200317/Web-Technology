const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password =document.getElementById('password');
const cpass=document.getElementById('cpass'); 
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
});
function validateInputs(){
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.toString().trim();
    const cpassVal=cpass.value.toString().trim();
    if (usernameVal===''){
        setError(username,'Username is required');
    }
    else{
        setSuccess(username);
    }
    if(emailVal === ''){
        setError(email,'Enter a email');
    }
    else{
        setSuccess(email);
    }
    if(passwordVal === ''){
        setError(password,'Enter your password');
    }
    else if(passwordVal.length < 8){
        setError(password,'password length must contain 8 charaters');
    }
    else{
        setSuccess(password);
    }
    if(cpassVal!=passwordVal){
        setError(cpass,'password is not matched');
    }
    else{
        setSuccess(cpass);
    }
}
const setError=(element,message)=>{
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');
    errorElement.innerText=message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}
const setSuccess=(element)=>{
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');
    errorElement.innerText='';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
    console.log('success');
}