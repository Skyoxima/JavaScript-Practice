function display(toDisplay)
{
    document.getElementById('mainscreen').value += toDisplay;
}

function clearScreen()
{
    document.getElementById('mainscreen').value = "";
}

function solve()
{
    let x = document.getElementById('mainscreen').value;
    let y = eval(x);
    document.getElementById('mainscreen').value = y;
}