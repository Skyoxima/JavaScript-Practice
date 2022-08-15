document.getElementById('searchbutton').addEventListener('click', e => {
    e.preventDefault();
    performSearch();
})

function performSearch()
{
    const inString = document.getElementById('inputstring').value;
    const searchString = document.getElementById('searchstring').value;
    var re = new RegExp(searchString, "ig"); // g - global, i - insensitive  

    const finding = inString.match(re);
    if(finding != null)
        var noofoccr = finding.length
    else
        var noofoccr = 0
    document.getElementById('noofoccurrences').value = noofoccr;
}

document.getElementById('replacebutton').addEventListener('click', e => {
    e.preventDefault();
    performReplace();
})

function performReplace()
{
    const inString = document.getElementById('inputstring').value;
    const searchString = document.getElementById('searchstring').value;
    const replaceString = document.getElementById('replacestring').value;

    var re = new RegExp(searchString, "ig");
    outString = inString.replaceAll(re, replaceString);
    document.getElementById('outstring').value = outString;
}