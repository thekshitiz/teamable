function handleEditProfile() {

    // new datepicker('#birthday');

    // getting value form placeholder to edit

    var name = document.getElementById('name').textContent
    var inputName = document.getElementById('input-name')
    inputName.value = name

    var email = document.getElementById('email').textContent
    var inputEmail = document.getElementById('input-email')
    inputEmail.value = email

    var interest = document.getElementById('interest').textContent
    var inputInterest = document.getElementById('input-interest')
    inputInterest.value = interest

    document.getElementById('edit-view').style.display = 'block'
    document.getElementById('display-view').style.display = 'none'

    
}

function handleUpdateProfile() {
    // getting value from input & overwriting them

    var updatedNames = document.getElementById('input-name').value
    var name = document.getElementById('name')

    var updatedEmail = document.getElementById('input-email').value
    var email = document.getElementById('email')
    if (validator.isEmail(updatedEmail)) {
        email.textContent = updatedEmail
    }
    else 
    {
        alert("Invalid email format !!")
    }



    var updatedInterest = document.getElementById('input-interest').value
    var interest = document.getElementById('interest')

    name.textContent = updatedNames
    email.textContent = updatedEmail
    interest.textContent = updatedInterest

    document.getElementById('edit-view').style.display = 'none'
    document.getElementById('display-view').style.display = 'block'
}
