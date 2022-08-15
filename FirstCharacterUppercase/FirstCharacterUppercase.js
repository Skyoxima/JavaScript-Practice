document.getElementById('evaluationbutton').addEventListener('click', e => {
    e.preventDefault()
    check_FC_case();
})

function check_FC_case()
{
    const inString = document.getElementById('stringbox').value;
    if(inString.length != 0)
    {
        document.getElementById('errormessage').innerText = "";   
        const first_char = inString[0];

        if(/[a-z]/g.test(first_char))
        {
            document.getElementById('answerbox').innerText = "Lowercase";
            document.getElementById('answerbox').style.color = "skyblue";
        }
        else
        {
            document.getElementById('answerbox').innerText = "Uppercase";
            document.getElementById('answerbox').style.color = "orange";
        }

    }        
    else
        document.getElementById('errormessage').innerHTML = "<p>Empty field!</p>";
}