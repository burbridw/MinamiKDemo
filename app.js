const nameInput = document.getElementById("nameinput")
const mailInput = document.getElementById("mailinput")
const memoInput = document.getElementById("memoinput") 

const displayBox = document.querySelector(".display-box")

const submitBtn = document.getElementById("submit-btn")

const allInfo = []

submitBtn.addEventListener("click",()=>{
    const user = {}
    user.name = nameInput.value
    nameInput.value = ""
    user.mail = mailInput.value
    mailInput.value = ""
    user.memo = memoInput.value
    memoInput.value = ""
    allInfo.push(user)
    showInfo()
})

function showInfo() {
    const newUser = allInfo[allInfo.length-1]
    const name = newUser.name
    const mail = newUser.mail
    const memo = newUser.memo
    console.log(name, mail, memo)

    displayBox.innerHTML += `<div>${name} ${mail} ${memo}</div>`

}