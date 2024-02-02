const getColor = () => {
    const randomNumber = Math.round(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode
    document.getElementById("colorcode").innerText = randomCode
    navigator.clipboard.writeText(randomCode)
}

// Event Call
document.getElementById("btn").addEventListener("click",getColor);

// Init Call
getColor();