currentBetAmount = 0;
totalSpent = 0;
totalRoll = 0;

imageArray = new Array();
imageArray[0] = 'Images/BAR_slot_Expanded.png';
imageArray[1] = 'Images/Bell_slot_Expanded.png';
imageArray[2] = 'Images/Cherry_slot_Expanded.png';
imageArray[3] = 'Images/Diamond_slot_Expanded.png';
imageArray[4] = 'Images/Grape_slot_Expanded.png';
imageArray[5] = 'Images/Lemon_slot_Expanded.png';
imageArray[6] = 'Images/Orange_slot_Expanded.png';
imageArray[7] = 'Images/Seven_slot_Expanded.png';

function Roll()
{
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
        
        displayResults();
    }
    else
    {
        const para = document.createElement("p");
        para.textContent = "Error. Place in a bet to roll!";
        document.getElementById("SlotResult1").appendChild(para);
    }
}

function Add()
{
    currentBetAmount += 100;
    displayBet();
}

function Sub()
{
    if(currentBetAmount > 0)
    {
        currentBetAmount -= 100;
    }
    displayBet();
}

function displayBet()
{
    BetAmount.innerHTML = currentBetAmount;
}

function displayResults()
{
    Amount.innerHTML = totalSpent;
    Times.innerHTML = totalRoll;
}