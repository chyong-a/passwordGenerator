const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const passwordOneEl = document.getElementById("passwordOne")
const passwordTwoEl = document.getElementById("passwordTwo")

function generate() {
    let passwordOne = ""
    let passwordTwo = ""
    for (let i = 0; i < 15; i++) {
        passwordOne += characters[Math.floor(Math.random() * characters.length)]
        passwordTwo += characters[Math.floor(Math.random() * characters.length)]
    }
    passwordOneEl.textContent = passwordOne
    passwordTwoEl.textContent = passwordTwo
}

const passwords = document.querySelectorAll(".passwords");
passwords.forEach((password => password.addEventListener("click", function () {
    navigator.clipboard.writeText(password.value);
})))

passwordOneEl.addEventListener("click", function(){
    navigator.clipboard.writeText(passwordOne.textContent);
    alert("The left password is in your copyboard");
})

passwordTwoEl.addEventListener("click", function(){
    navigator.clipboard.writeText(passwordTwo.textContent);
    alert("The right password is in your copyboard");
})