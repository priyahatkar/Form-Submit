console.log("hello world!");

const cl = console.log;

const signInForm = document.getElementById("signInForm");

const email = document.getElementById("email");

const password = document.getElementById("password");

let emailFormDB = "jhone@wick.com";
let passwordFormDB = "Jhon123@";

const onSignHandler =(eve) =>{
    eve.preventDefault();
    // cl("sign In !!!");
    let emailVal = email.value;
    let passwordVal = password.value;
    if(emailVal === emailFormDB && passwordVal === passwordFormDB){
        // alert(`sign in successfully`);
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'sign in successfully',
            showConfirmButton: true,
            timer: 3000
        })
        signInForm.reset();
        return true;
    }else{
        // alert(`invalid Username or password`);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
        signInForm.reset();
        return false;
    }
}

signInForm.addEventListener("submit",onSignHandler)



