import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabaseUrl = 'https://nbnjdavbpslzkuvjtvyk.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ibmpkYXZicHNsemt1dmp0dnlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3ODU1NTUsImV4cCI6MjA1NDM2MTU1NX0.oIJOLputS9zRHpp-2rScYG-fYrQfYw2rJPhGQk4k65c"
const supabase = createClient(supabaseUrl, supabaseKey)

    


// Selecting Elements
// Login
const EmailL = document.getElementById("Email-L")
const PasswordL = document.getElementById("Password-L");
const LoginBTN = document.getElementById("Login");

let Email
let Password

//Login-Validation
EmailL.addEventListener("keyup", () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(EmailL.value)) {
        EmailL.style.color = "red";
    } else {
        EmailL.style.color = "white";
    }
});

PasswordL.addEventListener("keyup", () => {
    if (PasswordL.value.length < 8) {
        PasswordL.style.color = "red";
    } else {
        PasswordL.style.color = "white";
    }
});

LoginBTN.addEventListener("click", (event) => {
    event.preventDefault();
    if (EmailL.value.length >= 9 && PasswordL.value.length >= 8) {
        // Perform login action
        console.log("Form is valid. Proceed with login.");
        Email = EmailL.value
        Password = PasswordL.value
        supabase.auth.signInWithPassword({
            email: Email,
            password: Password
        }).then(({ data, error }) => {
            if (error) {
                alert("Form is invalid. Please check your inputs.");
            } else {
                window.location.href = "../HTML/home.html";
            }
        });
    } else {
        alert("Form is invalid. Please check your inputs.");
    }
});
//Sign-up Validation
