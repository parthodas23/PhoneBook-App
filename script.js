let addBtn = document.querySelector(".add-contact");
let container = document.querySelector(".container");
let container2 = document.querySelector(".container2");
let savebtn = document.querySelector(".submit");
let num = document.querySelector(".num");
let numb = document.querySelector(".numb");

addBtn.addEventListener("click", () => {
  setTimeout(() => {
    container.classList.add("hide");
    container2.classList.remove("hide");
  }, 500);
});

savebtn.addEventListener("click", () => {
  setTimeout(() => {
    addValue();
    container.classList.remove("hide");
    container2.classList.add("hide");

    num.value = "";
    numb.value = "";
  }, 500);
});
const addValue = () => {
  let name = num.value;
  let number = numb.value;

  let divAdd = document.createElement("div");
  divAdd.classList.add("add");
  container.appendChild(divAdd);

  let ul = document.createElement("ul");
  divAdd.appendChild(ul);

  let li = document.createElement("li");
  ul.appendChild(li);

  let p = document.createElement("p");
  p.classList.add("name");
  p.textContent = name;
  li.appendChild(p);

  let pp = document.createElement("p");
  pp.classList.add("number");
  pp.textContent = number;
  divAdd.appendChild(pp);

  let btn = document.createElement("button");
  btn.classList.add("delete");
  btn.textContent = "DEL";
  divAdd.appendChild(btn);
  btn.addEventListener("click", () => {
    container.removeChild(divAdd);
  });
};
