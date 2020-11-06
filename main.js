"use strict"
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h5>' + coffee.name + '</h5>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
var userSelectedRoast = "all"
function updateCoffees(e) {
    // e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = userSelectedRoast;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if(selectedRoast === "all"){
            filteredCoffees.push(coffee)
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);

var roastAnchors = document.getElementsByClassName("dropdown-item")
for (let roast of roastAnchors){
    roast.addEventListener("click", function () {
        console.log(this);
        console.log(this.getAttribute("data-roast"));
        if (this.getAttribute("data-roast") === "all"){
           userSelectedRoast = "all"
               // display all
            // submitButton.addEventListener('click', updateCoffees);
        }
        else if (this.getAttribute("data-roast") === "light"){
            userSelectedRoast = "light"
            //    display all
        }
        else if (this.getAttribute("data-roast") === "medium"){
            userSelectedRoast = "medium"
            //    display all

        }
        else if (this.getAttribute("data-roast") === "dark"){
            userSelectedRoast = "dark"
            //    display all

        }
        updateCoffees();
    })
}
    function myFunction() {
    var newCoffeeRoastType = document.getElementById("added-roast-selection").value;
        console.log(newCoffeeRoastType.value)
    var newCoffee = document.getElementById('added-roast-name').value;
        console.log(newCoffee.value)
    var newCoffeeID = coffees.length + 1
        var addedCoffee = {
         id: newCoffeeID,
         name: newCoffee,
         roast: newCoffeeRoastType,
        }
        coffees.push(addedCoffee);
        // renderCoffee();
        updateCoffees();
    }



// function myFunction() {
//     var x = document.getElementById("frm1");
//     var text = "";
//     var i;
//     for (i = 0; i < x.length ;i++) {
//         text += x.elements[i].value + "<br>";
//     }
//     console.log(text)
// }