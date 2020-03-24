const ingredients = document.querySelector('.ingredients')
const btnListRecallIng = document.querySelector('#btn-recall-ing')
const btnListExpIng = document.querySelector('#btn-expand-ing')

btnListRecallIng.addEventListener("click", function(){

    ingredients.classList.add('disactive')

    btnListRecallIng.classList.remove('active')
    btnListExpIng.classList.add('active')

})

btnListExpIng.addEventListener("click", function(){

    ingredients.classList.remove('disactive')

    btnListExpIng.classList.remove('active')
    btnListRecallIng.classList.add('active')

})

// ===== PREPARATION

const preparation = document.querySelector('.preparation')
const btnListRecallPrep = document.querySelector('#btn-recall-prep')
const btnListExpPrep = document.querySelector('#btn-expand-prep')

btnListRecallPrep.addEventListener("click", function(){

    preparation.classList.add('disactive')

    btnListRecallPrep.classList.remove('active')
    btnListExpPrep.classList.add('active')

})

btnListExpPrep.addEventListener("click", function(){

    preparation.classList.remove('disactive')

    btnListExpPrep.classList.remove('active')
    btnListRecallPrep.classList.add('active')

})

// ===== INFO ADD

const infoadd = document.querySelector('.infoadd')
const btnListRecallInfo = document.querySelector('#btn-recall-info')
const btnListExpInfo = document.querySelector('#btn-expand-info')

btnListRecallInfo.addEventListener("click", function(){

    infoadd.classList.add('disactive')

    btnListRecallInfo.classList.remove('active')
    btnListExpInfo.classList.add('active')

})

btnListExpInfo.addEventListener("click", function(){

    infoadd.classList.remove('disactive')

    btnListExpInfo.classList.remove('active')
    btnListRecallInfo.classList.add('active')

})