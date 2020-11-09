"use strict"
var coffeeArray = [
    "coffee.flip1.jpeg",
    "coffee.flip2.jpeg",
    "coffee.flip3.jpeg",
    "coffee.flip4.jpeg",
    "coffee.flip5.jpeg",
    "coffee.flip6.jpeg",
    "coffee.flip7.jpeg",
    "coffee.flip8.jpeg",
    "coffee.flip9.jpeg",
    "coffee.flip10.jpeg",
    "coffee.flip11.jpeg",
    "coffee.flip12.jpeg",
    "coffee.flip13.jpeg",
    "coffee.flip14.jpeg",
    "coffee.flip16.jpeg",
    "coffee.flip15.jpeg",
    "coffee.flip16.jpeg",
    "coffee.flip17.jpeg",
    "coffee.flip18.jpeg",
    "coffee.flip19.jpeg",
    "coffee.flip20.jpeg",
    "coffee.flip21.jpeg",
    "coffee.flip22.jpeg"
]
var globalCoffeeImageCounter = 0;
function renderCoffee(coffee) {
    var html = '<div class="coffee flip-box col-4 ">';
    html += '<div class="flip-box-inner">';
    html += '<div class="flip-box-front">';
    html += '<img src="img/' + coffeeArray[globalCoffeeImageCounter] + '" alt="coffee grounds" class ="w-100">';
    html += '</div>';
    html += '<div class="flip-box-back">';
    html += '<h5>' + coffee.name + '</h5>';
    html += '<p>' + coffee.roast + '</p>';
    html += '<p>' + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid atque cum dolorem dolorum,  temporibus totam veniam veritatis voluptatibus?' + '</p>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    globalCoffeeImageCounter += 1;
    if (globalCoffeeImageCounter > coffees.length){
        globalCoffeeImageCounter = 0;
    }
    return html;
    // array of images 0-13
    //function gives random number 0-13
    //another function return the image from the array of images
    // Math.floor(Math.random() * 13) + 1
    // function getRandImg(){
    //     Math.floor(Math.random() * 16) + 1
    // }

    //JUSTINS FAST CODE

    // var html = ' <div class="flip-box">\n' +
    //     '        <div class="flip-box-inner">\n' +
    //     '            <div class="flip-box-front">\n' +
    //     '                <img src="img/coffee-2.jpeg" alt="Paris" style="width:300px;height:200px">\n' +
    //     '            </div>\n' +
    //     '            <div class="flip-box-back">\n' +
    //     '                <h2>Paris</h2>\n' +
    //     '                <p>What an amazing city</p>\n' +
    //     '            </div>\n' +
    //     '        </div>\n' +
    //     '    </div>';

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
coffees = coffees.reverse();
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
        console.log(document.getElementById("added-roast-selection").value)
    var newCoffee = document.getElementById('added-roast-name').value;
        console.log(document.getElementById('added-roast-name').value);
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


    var coffee_search = document.querySelector('#searchbar');
    coffee_search.addEventListener('keyup',search_coffees)

function search_coffees() {
    console.log("TEST")
    var searched_coffees = [];
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementById('coffees');
    for (let i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toLowerCase().includes(input)) {
            searched_coffees.push(coffees[i])
        }
    }
    tbody.innerHTML = renderCoffees(searched_coffees);
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