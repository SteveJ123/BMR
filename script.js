function performCheck() {
  let weight = Number(document.getElementById('weight').value);
  let height = Number(document.getElementById('height').value);
  let age = Number(document.getElementById('age').value);
  let gender = document.getElementById('gender').value;
  gender = gender.toUpperCase();


  let errors = [];

  if (!weight || !height || !age || !gender) {
    errors.push("Fill out all fields!");
    printErrorsToScreen(errors);
    return;
  }

  if (!(5 < weight && weight < 300)) {
    errors.push('Please enter a valid weight!');
  }

  if (!(20 < height && height < 300)) {
    errors.push('Please enter a valid height!');
  }

  if (!(0 < age && age < 165)) {
    errors.push('Please enter a valid age!');
  }

  if (gender != 'M' && gender != 'F') {
    errors.push('Please enter a valid gender!');
  }

  printErrorsToScreen(errors,weight,height,age,gender);
}

function printErrorsToScreen(e,weight,height,age,gender){
  let div = document.getElementById('errors');

  if (e.length == 0) {
    var queryString = "?weight=" + weight +
                        "?height=" + height +
                        "?age=" + age +
                        "?gender=" + gender;
    window.location.href = 'page2.html' + queryString;
    div.innerHTML = '';
    return;
  }


  let html = `<br>`;

  e.forEach(function(errors){
    html += `<p>${errors}</p>`
    div.innerHTML = html;
  })
}


