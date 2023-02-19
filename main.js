function setSubmit(add) {
  add.preventDefault();
}
let cars = [];

class Car {
  constructor(marka, model, year, description, chck, btn) {
    this.marka = marka;
    this.model = model;
    this.year = year;
    this.description = description;
    this.chck = chck;
    this.btn = btn;
  }
}

function addCar() {
  const marka = document.querySelector(".marka").value;
  const model = document.querySelector(".model").value;
  const year = document.querySelector(".year").value;
  const description = document.querySelector(".description").value;
  const chck = document.querySelector(".chck").checked;
  const tbody=document.querySelector(".tbody");

  let newCar = new Car(marka, model, year, description,chck);
  cars.push(newCar);
  cars.map((car)=>{
tbody.innerHTML+=`<tr>
<td>${car.marka}</td>
<td>${car.model}</td>
<td>${car.year}</td>
<td>${car.description}</td>
<td>${car.chck}</td>
</tr>`

  })
}



const btn = document.querySelector(".btn");
const form = document.querySelector(".form");
form.addEventListener("submit", setSubmit);
btn.addEventListener("click", addCar);
console.log({ cars });
