var weight;
var height;
var age;
var gender;
var queryString = decodeURIComponent(window.location.search)
queryString = queryString.substring(1);
var queries = queryString.split("?")


let foodarray = [];
let count = 0;
let matched = false;

//extract the para values intp respective variables
// the order of the parameter passsed from index.html is as follows;
for (var i = 0; i < queries.length; i++) {
  weight = queries[0];
  height = queries[1];
  age = queries[2];
  gender = queries[3];
}

document.getElementById("userinfo").innerHTML = weight + "<br>" + height + "<br>" + age + "<br>" + gender + "<br>";




let foodInfo = ["apple", "banana", "grape", "mango", "orange"]

function addFood() {
  let foodentered = document.getElementById("foodInput").value;
  foodentered = foodentered.toLowerCase();
  for (let j = 0; j < foodInfo.length; j++) {

    if (foodInfo[j] === foodentered) {

      matched = true;

    }
  }

  if (matched == true) {
    foodarray.push(foodentered);
  }

  if (matched == false) {
    alert("Please enter a valid food");
  }


  if (matched == true) {
    for (let i = count; i < foodarray.length; i++) {
      console.log(foodarray[i]);
      count = count + 1;

      let liElement = document.createElement("li");
      let liText = document.createTextNode(foodarray[i]);
      liElement.appendChild(liText);
      let divFood = document.getElementById("listfood");
      divFood.appendChild(liElement);
      //  let z = document.createElement("li");
      //  z.innerHTML=[i];

    }
  }
  matched = false;
}

function newPage3() {
  var queryString = "?" + weight + "?" +
    height + "?" +
    age + "?" + 
    gender +
    "?foodarray=" + foodarray;
  window.location.href = ("page3.html") + queryString;
}
