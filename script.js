let currentBetAmount = 0;
let totalSpent = 0;
let totalRoll = 0;
let currentBalance = 10000;
let textSize = 24;

let timeout;
let buttonHoldTime;

let imageArray = new Array();
imageArray[0] = "images/BAR_slot_Expanded.png";
imageArray[1] = "images/Bell_slot_Expanded.png";
imageArray[2] = "images/Cherry_slot_Expanded.png";
imageArray[3] = "images/Diamond_slot_Expanded.png";
imageArray[4] = "images/Grape_slot_Expanded.png";
imageArray[5] = "images/Lemon_slot_Expanded.png";
imageArray[6] = "images/Orange_slot_Expanded.png";
imageArray[7] = "images/Seven_slot_Expanded.png";

let milestone1 = true;
let milestone2 = true;
let milestone3 = true;
let milestone4 = true;
let milestone5 = true;
let milestone6 = true;
let milestone7 = true;
let milestone8 = true;
let milestone9 = true;
let milestone10 = true;

function Roll()
{
    currentBalance -= currentBetAmount;
    DebtMilestone();
    document.getElementById("SlotResult1").innerHTML = "";
    document.getElementById("SlotResult2").innerHTML = "";
    document.getElementById("SlotResult3").innerHTML = "";

    if(currentBetAmount != 0)
    {
        var num1 = Math.floor(Math.random() * 8);
        var num2 = Math.floor(Math.random() * 8);
        var num3 = Math.floor(Math.random() * 8);
        while(num1 == num2 && num2 == num3)
        {
            num3 = Math.floor(Math.random() * 8);
        }
        totalSpent += currentBetAmount;
        totalRoll++;

        var img = imageArray[num1];
        document.getElementById("SlotResult1").innerHTML = ('<img src="' + img + '" width="250px">')

        img = imageArray[num2];
        document.getElementById("SlotResult2").innerHTML = ('<img src="' + img + '" width="250px">')

        img = imageArray[num3];
        document.getElementById("SlotResult3").innerHTML = ('<img src="' + img + '" width="250px">')
        
        displayBalance();
    }
    else
    {
        SlotMachineSays("Place in a bet to roll!", 3);
    }
}

function startButtonHoldTime(method)
{
    buttonHoldTime = setInterval(method, 200);
}

function resetButtonHoldTime()
{
    clearInterval(buttonHoldTime);
}

function Add()
{
    if(currentBetAmount < 1000)
    {
        currentBetAmount += 50;
    }
    displayBet();
}

function Sub()
{
    if(currentBetAmount > 0)
    {
        currentBetAmount -= 50;
    }
    displayBet();
}

function displayBet()
{
    BetAmount.innerHTML = currentBetAmount;
}

function displayBalance()
{
    let balanceString = "$"
    if(currentBalance < 0)
    {
        balanceString = "-$"
        MoneyDisplay.style.color = "#ff0000";
        MoneyDisplay.style.fontSize = (textSize + Math.floor(Math.abs(currentBalance) / 5000)) + "px";
    }
    balanceString += Math.abs(currentBalance);
    MoneyDisplay.innerHTML = balanceString;
}

function SlotMachineSays(line, time)
{
    window.clearTimeout(timeout);
    SpeechBubble.style.visibility = "visible";
    SlotSays.innerHTML = line;
    timeout = setTimeout(CloseSpeechBubble, time * 1000);
}

function CloseSpeechBubble()
{
    SpeechBubble.style.visibility = "hidden";
    SlotSays.innerHTML = "";
}

function DebtMilestone()
{
    let amountSpent = 10000 - currentBalance;
    switch(true)
    {
        case (amountSpent >= 1000 && amountSpent < 2500):
            if(milestone1)
            {
                SlotMachineSays("You already spent $1000 huh? That could have bought you 125,165 v-bucks, 250 happy meals, and 2 PS5s.", 8);
                milestone1 = false;
            }
        break;

        case (amountSpent >= 2500 && amountSpent < 10000):
            if(milestone2)
            {
                SlotMachineSays("It must be REAL fun pressing a button...You have already spent past $2500. That's about 1,370,55 Robux, 5,597 cosmic brownies, 21 tickets to Disney world. Truly a child's nightmarish paradise, isn't it?", 10);
                milestone2 = false;
            }
        break;

        case (amountSpent >= 10000 && amountSpent < 18000):
            if(milestone3)
            {
                SlotMachineSays("Yippee! You have wasted all your money and your time playing this \"game\". You should quit NOW! :D", 10);
                milestone3 = false;
            }
        break;

        case (amountSpent >= 18000 && amountSpent < 30000):
            if(milestone4)
            {
                SlotMachineSays("Did you know that RED means DEBT?! You're gonna eventually pay them all...Right?", 5);
                milestone4 = false;
            }
        break;

        case (amountSpent >= 30000 && amountSpent < 50000):
            if(milestone5)
            {
                SlotMachineSays("There's no turning back at this point, you need to WIN something. Go big or go home!", 10);
                milestone5 = false;
            }
        break;

        case (amountSpent >= 50000 && amountSpent < 80000):
            if(milestone6)
            {
                SlotMachineSays("You're definitely going bankrupt. You're not winning this.", 5);
                milestone6 = false;
            }
        break;

        case (amountSpent >= 80000 && amountSpent < 120000):
            if(milestone7)
            {
                SlotMachineSays("I wasn't joking about the last one. YOU'RE NOT WINNING THIS.", 5);
                milestone7 = false;
            }
        break;

        case (amountSpent >= 120000 && amountSpent < 180000):
            if(milestone8)
            {
                SlotMachineSays("This whole thing is a sham. You were never meant to win anything since the beginning. LEAVE. there's nothing to be gain here.", 10);
                milestone8 = false;
            }
        break;

        case (amountSpent >= 180000 && amountSpent < 350000):
            if(milestone9)
            {
                SlotMachineSays("I hope you're happy with this decision.", 5);
                milestone9 = false;
            }
        break;

        case (amountSpent >= 350000):
            if(milestone10)
            {
                SlotMachineSays("Big number go brrrr. What's debt?", 5);
                milestone10 = false;
            }
        break;
    }
}

window.addEventListener('click', function () {
    
    let audio = document.getElementById("Jazz");
    audio.volume = 0.2;
    audio.loop = true;
    audio.play();
});