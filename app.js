// var a = [];
// a.push(JSON.parse(localStorage.getItem("session")));
// localStorage.setItem("session", JSON.stringify(a));
// localStorage.removeItem("data");
// let todos = JSON.parse(localStorage.getItem("todos"));
// if (todos) {
//   todos.forEach((element) => {
//     todo(element);
//   });
// }
let task = {
  title: "",
  isCompleted: false,
};
const addLocalStorage = (taskData) => {
  //adding input text in array
  if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", "[]");
  }
  let old_data = JSON.parse(localStorage.getItem("data"));
  old_data.push(taskData);
  localStorage.setItem("data", JSON.stringify(old_data));
};
const element = document.querySelector(".addBtn");
element.addEventListener("click", () => {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let todoText = document.createTextNode(inputValue);
  li.appendChild(todoText);
  //li.className = "myList";
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Click on a close button to hide the current list item
  let close = document.getElementsByClassName("close");
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
  let checkVar = false;
  let task = {
    title: inputValue,
    isCompleted: checkVar,
  };
  // Add a "checked" symbol when clicking on a list item
  let list = document.getElementById("myUL");
  list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  });
  let task = {
    title: inputValue,
    isCompleted: checkVar,
  };
  console.log(task);
  document.getElementById("myInput").value = "";
});

// function updateClass() {
//   let ptag = document.querySelectorAll(".for_li");
//   let arr = [];
//   ptag.forEach((element) => {
//     arr.push({
//       text: myInput.innerText,
//       complete: element.classList.contains("checked"),
//     });
//   });
//   localStorage.setItem("todos", JSON.stringify(arr));
// }

// let form = document.querySelector("form");
// let text = document.getElementById("text");
// let todoCon = document.querySelector(".todo_con");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   addtodo();
// });
// function addtodo() {
//   let addToDo = document.createElement("div");
//   let todoText = text.value;
//   addToDo.innerHTML = ` <div class="todo_con new_con">
//               <div class="todo_list">
//                 <button class="check">
//                   <img src="images/icon-check.svg" />
//                 </button>
//                 <p class="ptext">${todoText}</p>
//                 <div class="close"><img src="images/icon-cross.svg" /></div>
//               </div>
//             </div>`;
//   todoCon.appendChild(addToDo);
//   let close = addToDo.querySelector(".close");
//   close.addEventListener("click", () => {
//     addToDo.remove();
//   });

//   let check = addToDo.querySelector(".check");
//   check.addEventListener("click", () => {
//     check.classList.toggle("active-check");
//     addToDo.children[0].classList.add("complete");
//   });
// }

// function updateLs() {
//   let ptext = document.querySelectorAll(".ptext");
//   let arr = [];
//   ptext.forEach((element) => {
//     arr.push({
//       text: element.innertext,
//       complete: element.classList.contains("complete"),
//     });
//   });
//   localStorage.setItem("todos", JSON.stringify(arr));
// }
