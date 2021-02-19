// this will listen for auth status changes 
auth.onAuthStateChanged(user => {
    if (user) {
        setupUI(user)
    } else {
        setupUI()
    }
})

// sign up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (event) => {
    event.preventDefault()

    // gets user info 
    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    auth.createUserWithEmailAndPassword(email, password).then(cred => {

        const modal = document.querySelector('#modal-signup')
        M.Modal.getInstance(modal).close()
        signupForm.reset()
        signupForm.querySelector('.error').innerHTML = ""
    }).catch(err => {
        signupForm.querySelector('.error').innerHTML = err.message
    })
})

// logout
const logout = document.querySelector('#logout')
logout.addEventListener('click', (event) => {
    event.preventDefault()
    auth.signOut()
    alert('You have been logged out')
})

// login
const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const email = loginForm['login-email'].value
    const password = loginForm['login-password'].value

    auth.signInWithEmailAndPassword(email, password).then(cred => {

        const modal = document.querySelector('#modal-login')
        M.Modal.getInstance(modal).close()
        loginForm.reset()
        loginForm.querySelector('.error').innerHTML = err.message
    }).catch(err => {
        loginForm.querySelector('.error').innerHTML = err.message
    })
})