const btn = document.getElementById('submit-button')

const rstbtn = document.getElementById("reset-button")

btn.addEventListener('click', function(evt){
  const li = document.createElement('li')
  const inp = document.getElementById("comment")
  li.textContent = inp.value
  if (inp.value !== ""){
    document.getElementById("todo-list").appendChild(li)
    inp.value = ""
  }
})

rstbtn.addEventListener('click', function(clearResult){
document.getElementById("todo-list").innerHTML = "";
document.getElementById("comment").value = "";
})

