document.getElementById('evaluationbutton').addEventListener('click', e => {
    e.preventDefault()
    digisum();
})

function digisum()
{
    const inString = document.getElementById('numberbox').value;
    if(inString.length == 0)
        document.getElementById('errormessage').innerText = "Empty Field!";
    else
        document.getElementById('errormessage').innerText = "";
        
    const inList = inString.trim().split("").map(Number);
    document.getElementById('answerbox').innerText = inList.reduce((sum, num) => sum + num, 0);
}