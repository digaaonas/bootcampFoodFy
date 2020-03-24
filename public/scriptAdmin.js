// SCRIPT PAGE INDEX

const btnSee = document.querySelectorAll('.btn-see')

for (see of btnSee) {
    
    const seeID = see.getAttribute("id")
    
    see.addEventListener("mouseover", function(){
        document.getElementById(seeID).classList.add('active')
    })

    see.addEventListener("mouseout", function(){
        document.getElementById(seeID).classList.remove('active')
    })

}

// SCRIPT PAGE CREATE

const addIngredients = document.querySelector('#add-Ing')
const addPreparation = document.querySelector('#add-Prep')
const fieldIngredients = document.querySelector('#field-Ing')
const fieldPreparation = document.querySelector('#field-Prep')


addIngredients.addEventListener('click', function(){
    
    const createInput = document.createElement('input')
    const createDiv = document.createElement('div')
    createInput.name = 'ingredients'
    createInput.classList = 'input-list'
    fieldIngredients.appendChild(createDiv).appendChild(createInput)

    
})

addPreparation.addEventListener('click', function(){
    
    const createInput = document.createElement('input')
    const createDiv = document.createElement('div')
    createInput.name = 'preparation'
    createInput.classList = 'input-list'
    fieldPreparation.appendChild(createDiv).appendChild(createInput)

    
})

//SCRIPT MODAL APRESENTATION RECIPE FOR ADMIN

const checkActiveModal = document.querySelector('#check-modal--user')
const activeModalAdmin = document.querySelector('#modal-admin--only')
const activeModalAdminUser = document.querySelector('#modal-admin--user')


checkActiveModal.addEventListener('click', function(){
    
    if (checkActiveModal.checked) {
        activeModalAdminUser.classList.add('active')
        activeModalAdmin.classList.add('disactive')
    } 
    else{
        activeModalAdminUser.classList.remove('active')
        activeModalAdmin.classList.remove('disactive')
    }

})

