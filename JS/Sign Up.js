import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabaseUrl = 'https://nbnjdavbpslzkuvjtvyk.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ibmpkYXZicHNsemt1dmp0dnlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3ODU1NTUsImV4cCI6MjA1NDM2MTU1NX0.oIJOLputS9zRHpp-2rScYG-fYrQfYw2rJPhGQk4k65c"
const supabase = createClient(supabaseUrl, supabaseKey)


const NameS = document.getElementById("Name-s");
const EmailS = document.getElementById("Email-S");
const PasswordS = document.getElementById("Password-S");
const ConfPasswordS = document.getElementById("Conf-Password-S");
const SignupBTN = document.getElementById("Signup");

let Name
let Email
let Password

NameS.addEventListener("keyup", () => {
    if (NameS.value.length < 9) {
        NameS.style.color = "red";
    } else {
        NameS.style.color = "white";
    }
});

EmailS.addEventListener("keyup", () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(EmailS.value)) {
        EmailS.style.color = "red";
    } else {
        EmailS.style.color = "white";
        
    }
});

PasswordS.addEventListener("keyup", () => {
    if (PasswordS.value.length < 8) {
        PasswordS.style.color = "red";
    } else {
        PasswordS.style.color = "white";
    }
});

ConfPasswordS.addEventListener("keyup", () => {
    if (ConfPasswordS.value !== PasswordS.value) {
        ConfPasswordS.style.color = "red";
    } else {
        ConfPasswordS.style.color = "white";
    }
});
SignupBTN.addEventListener("click", (event) => {
    event.preventDefault();
    if (NameS.value.length >= 9 && PasswordS.value.length >= 8 && ConfPasswordS.value == PasswordS.value ) {
        // Perform login action
        console.log("Form is valid. Proceed with login.");
        Name = NameS.value
        Email = EmailS.value
        Password = PasswordS.value
        supabase.auth.signUp({
            email: Email,
            password: Password
        }).then(({ data, error }) => {
            if (error) {
                alert("Errooooor Y Falla7")
                console.error("Error signing up:", error.message);
            } else {
                console.log("Sign up successful:", data);
                window.location.href = "../HTML/login.html";
            }
        });
    } else {
        console.log("Form is invalid. Please check your inputs.");
    }
});