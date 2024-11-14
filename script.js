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
        case (amountSpent >= 1000 && amountSpent <= 2499):
            if(milestone1)
            {
                SlotMachineSays("You already spent past $1,000 huh? That could have bought you 125,165 v-bucks, 250 happy meals, and 2 PS5s.", 8);
                milestone1 = false;
            }
        break;

        case (amountSpent >= 2500 && amountSpent <= 4999):
            if(milestone2)
            {
                SlotMachineSays("It must be fun pressing a button. You have already spent past $2,500. That's about 1,370,55 Robux, 5,597 cosmic brownies, 21 tickets to Disney world. Truly a child's nightmarish paradise, isn't it?", 10);
                milestone2 = false;
            }
        break;

        case (amountSpent >= 10000 && amountSpent <= 14999):
            if(milestone3)
            {
                SlotMachineSays("Yippee! You have lost $10,000 and your time playing this \"game\". You should quit now! :D", 10);
                milestone3 = false;
            }
        break;

        case (amountSpent >= 120000 && amountSpent <= 139999):
            if(milestone4)
            {
                SlotMachineSays("Big number go brrrr. What's debt?", 5);
                milestone4 = false;
            }
        break;
    }
}