document.getElementById('mainbutton').addEventListener('click', e => {
    e.preventDefault();
    doubleit();
})

function doubleit()
{
    const inString = document.getElementById('inputbox').value;
    var inList = inString.trim().split(" ");
    for(var i = 0; i < inList.length; i++)
        inList[i] = inList[i] * 2;
    
    document.getElementById('outputbox').value = inList;
}