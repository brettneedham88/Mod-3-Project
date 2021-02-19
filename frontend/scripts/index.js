const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')
const accountDetails = document.querySelector('.account-details')

const setupUI = (user) => {
    if (user) {
        const html = `
            <div>Logged in as ${user.email}</div>
        `;
        accountDetails.innerHTML = html
        loggedInLinks.forEach(item => item.style.display = 'block')
        loggedOutLinks.forEach(item => item.style.display = 'none')
    } else {
        accountDetails.innerHTML = ''
        loggedInLinks.forEach(item => item.style.display = 'none')
        loggedOutLinks.forEach(item => item.style.display = 'block')
    }
}


// sets up materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);

});

// Trivia Game
const btnNext = document.getElementById("btnNext")
let answer = ""

btnNext.addEventListener('click', function(){
    document.getElementById("answer").innerHTML = "<button id='btnDisplayAnswer'>Show answer</button>"
    fetch('http://jservice.io/api/random')
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status)
                return
            }

            response.json().then(function(data) {
                answer = data[0].answer
                const question = data[0].question
                const category = data[0].category.title

                document.getElementById('question').innerHTML = question
                document.getElementById('category').innerHTML = "<h3>Category: " + category + "</h3>"
                document.getElementById("answer").style.display = "block"
                document.getElementById("btnDisplayAnswer").addEventListener('click', function(){
                    document.getElementById("answer").innerHTML = "<h3>Answer: " + answer + "</h3>"
                })
            })
        }
    )
})  

function showAnswerButton(){
    document.getElementById('answer').style.display = "block"
    document.getElementById("answer").innerHTML = "<button id='btnDisplayAnswer'>Display Answer</button>"
}
