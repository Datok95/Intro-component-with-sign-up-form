const firstNameInput = document.querySelector(".firstName")
const lastNameInput = document.querySelector(".lastName")
const emailInput = document.querySelector(".email")
const paswordInput = document.querySelector(".password")
const submitBtn = document.querySelector("button")

const form = document.querySelector("form")





submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
  if(checkEmptyFields()){
    notifyUser("Please fill all fields", false)
    return
  }

  if(!isValidEmail(emailInput.value)){
    notifyUser("Please enter a valid Email", false)
    return
  }
    form.reset()
  
})




function checkEmptyFields(){
    return firstNameInput.value.trim() ==="" ||
            lastNameInput.value.trim() ==="" ||
            emailInput.value.trim() ==="" ||
            paswordInput.value.trim() ==="" 
}

function notifyUser(message, isValid){

    if(document.querySelector(".alert")){return}
    const alertDiv = document.createElement("div")
    alertDiv.classList.add("alert")
    alertDiv.textContent = message
    submitBtn.insertAdjacentElement("afterend", alertDiv)

    setTimeout(() => {
        alertDiv.remove()
    },2500)
}

//chatgpt
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}



