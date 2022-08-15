function present()
{
    listitems = document.getElementById('dropdownmenu').innerText
    console.log(listitems)
    alert("The list items are: \n" + listitems + "\n" + "No of items: " + document.getElementById('dropdownmenu').length)
}