document.getElementById('evaluation').addEventListener('click', e => {
    e.preventDefault();
    const num = document.getElementById('number').value;
    const len = document.getElementById('length').value;
    giveWhatisAsked(num, len);
})

function giveWhatisAsked(num, len)
{
    ansArray = [];

    for(let i = 1; i <= len; i++)
        ansArray.push(parseInt(num) * i);

    document.getElementById('outputbox').value = ansArray;
}