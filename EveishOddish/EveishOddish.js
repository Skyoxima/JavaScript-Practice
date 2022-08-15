document.getElementById('evaluationbutton').addEventListener('click', e => {
    e.preventDefault();
    inNumString = document.getElementById('numberbox').value;
    if(inNumString.length > 0)
        tell_if_eveish_or_oddish(inNumString);
    else
        console.log("Empty field!");
});

function tell_if_eveish_or_oddish(inNumString)
{
    inNumList = inNumString.trim().split("").map(Number);
    const statusbox = document.getElementById('statusbox');
    statusbox.style.fontWeight = 600;
    
    listSum = inNumList.reduce((sum, num) => sum + num, 0)
    if(listSum % 2 == 0)
    {        
        statusbox.value = "Number is Even-ish.";
        statusbox.style.color = "skyblue";
    }
    else
    {
        statusbox.value = "Number is Odd-ish.";
        statusbox.style.color = "orange";
    }
}