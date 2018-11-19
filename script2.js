var weight;
var height;
var age;
var gender;
var foodarray;
let count = 0;

var foodCalories = {
    apple:80 , banana:101 , grape:2 , mango:135 , orange:71
}
var queryString = decodeURIComponent(window.location.search)
queryString = queryString.substring(1);
var queries = queryString.split("?")



//extract the para values intp respective variables
// the order of the parameter passsed from index.html is as follows;
for (var i = 0; i < queries.length; i++) {
  weight = queries[0];
  height = queries[1];
  age = queries[2];
  gender = queries[3];
  foodarray = queries[4];
}

document.getElementById("page3").innerHTML= weight +"<br>" + height + "<br>" +age + "<br>" + gender + "<br>" + foodarray + "<br>";


weight = parseInt(weight.replace("weight=",""));
height = parseInt(height.replace("height=",""));
age = parseInt(age.replace("age=",""));
gender = gender.replace("gender=","");
foodarray = foodarray.replace("foodarray=","");
console.log("list", foodarray);

if(gender == "M"){

    console.log("weight inside", weight);
    let bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5; //10*150 + 6.25 * 150 - 5*100 +5

    console.log("bmr for male", bmr);

    // alert("bmr for male");
}else{
    let bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    console.log("bmr for female", bmr);
}

//  str ="app,ban";
let arr = [];
arr =foodarray.split(',');
console.log("arr", arr);

for(let i=0; i<arr.length; i++){
    
 count = count + foodCalories[arr[i]];
 
}
alert(count);