# Trivia Hack
> Jeopard style trivia game!



## General info
Trivia Hack is a trivia game designed similar to Jeopardy that allows you to sign in wit user authentication.

## Intro Video
[Trivia Hack on YouTube](https://youtu.be/DIpY4xsaWpo)

## Technologies
* Firebase
* Javascript 
* HTML
* CSS



## Setup
To run this project, first, install it locally by typing the following in the terminal:
```
git clone https://github.com/brettneedham88/Mod-3-Project
```
Then CD into "frontend" and run the following:
```
lite-server
```

## Code Examples
```
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
```

## Features
* Create an account with email and password
* Login to your account
* See your account details 
* Play a simple family friendly trivia game
* Fail miserably at trivia if you are me! 😂


To-do list:
* Refactor code
* Refactor how the trivia game works by adding points system and making the game multiplayer across the internet
* Add leaderboards
* Be able to choose your specific category
* Add more account features like logging in with Google, Facebook, Instagram, and Github
* Add profile pictures, unique display names for the game
* Add messaging in game once multiplayer is activated


## Status
Project needs more time, would love to make it fully functioning with the To-do list above 


## Inspiration
I'm a video game nerd and wanted to see what making a trivia game would be like even though I'm horrible at trivia ❌


## Contact
Created by [Brett Needham](https://github.com/brettneedham88)
* Email: brettneedham88@gmail.com
* [Linkedin](https://github.com/brettneedham88)

