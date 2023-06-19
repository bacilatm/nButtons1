// In this function we choose a random winner button
function randomWinner(max) {
    return Math.floor(Math.random() * max + 1);
}

// We use this function to display the messages according to each case
function displayMessage(clickedBttn, bttnsNo) {
    let winnerBttn = "button" + randomWinner(bttnsNo);
    if (clickedBttn === winnerBttn) {
        alert("Winner Button!🎉");
    } else {
        alert("Try again!😁");
    }
}

// In this function we generate the number of buttons writen by the user
function generateButtons(nBttns) {
    for (let i = 1; i <= nBttns; ++i) {
        const bttn = document.createElement('button');
        bttn.id = 'button' + i;
        let size = 'lg';
        bttn.className = 'btn btn-primary' +(size ? ' btn-' + size : '');
        let bttns = document.getElementById('bttns');
        bttns.appendChild(bttn);
    }
}

bttns.addEventListener("click", function(event) {
    const clickedBttn = event.target.id;
    const bttnsNo = bttns.querySelectorAll('*').length;
    displayMessage(clickedBttn, bttnsNo);
});

generate.addEventListener("click", function() {
    const buttons = bttns.querySelectorAll('button');
    buttons.forEach(button => {
        button.remove();
    });
    const nBttns = buttonsNo.value;
    if (1 < nBttns && nBttns < 1001) {
        generateButtons(nBttns);
    } else {
        alert("Minimum buttons generated: 2 \nMaximum buttons generated: 1000");
    }
});