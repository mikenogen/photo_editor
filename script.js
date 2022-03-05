//Image
let img = document.getElementById(`img`)
//Side Panel
let sidePanel = document.getElementById(`sidePanel`)
//Width Buttons 
let width100Button = document.getElementById(`width100Button`)
let width200Button = document.getElementById(`width200Button`)
let width300Button = document.getElementById(`width300Button`)
//Opacity Buttons
let opacity25Button = document.getElementById(`opacity25Button`)
let opacity50Button = document.getElementById(`opacity50Button`)
let opacity75Button = document.getElementById(`opacity75Button`)
//Rotation Buttons
let rotation0Button = document.getElementById(`rotation0Button`)
let rotation90Button = document.getElementById(`rotation90Button`)
let rotation180Button = document.getElementById(`rotation180Button`)
let rotation270Button = document.getElementById(`rotation270Button`)
//Paragraph
let widthParagraph = document.getElementById(`widthParagraph`)
let opacityParagraph = document.getElementById(`opacityParagraph`)
let rotationParagraph = document.getElementById(`rotationParagraph`)

//Width Buttons
width100Button.addEventListener(`click`, showWidth100)
width200Button.addEventListener(`click`, showWidth200)
width300Button.addEventListener(`click`, showWidth300)
//Opacity Buttons
opacity25Button.addEventListener(`click`, showOpacity25)
opacity50Button.addEventListener(`click`, showOpacity50)
opacity75Button.addEventListener(`click`, showOpacity75)
//Rotation Buttons
rotation0Button.addEventListener(`click`, showRotation0)
rotation90Button.addEventListener(`click`, showRotation90)
rotation180Button.addEventListener(`click`, showRotation180)
rotation270Button.addEventListener(`click`, showRotation270)

//Width Functions
function showWidth100() {
    img.style.width = `100px`
    widthParagraph.innerHTML = `Selected Width: 100 pixels`
}
function showWidth200() {
    img.style.width = `200px`
    widthParagraph.innerHTML = `Selected Width: 200 pixels`
}
function showWidth300() {
    img.style.width = `300px`
    widthParagraph.innerHTML = `Selected Width: 300 pixels`
}
//Opacity Function
function showOpacity25() {
    img.style.opacity = `25%`
    opacityParagraph.innerHTML = `Selected Opacity: 25%`
}
function showOpacity50() {
    img.style.opacity = `50%`
    opacityParagraph.innerHTML = `Selected Opacity: 50%`
}
function showOpacity75() {
    img.style.opacity = `75%`
    opacityParagraph.innerHTML = `Selected Opacity: 75%`
}
//Rotation Function
function showRotation0() {
    img.style.transform = `rotate(0deg)`
    rotationParagraph.innerHTML = `Selected Rotation: 0 degree`
}
function showRotation90() {
    img.style.transform = `rotate(90deg)`
    rotationParagraph.innerHTML = `Selected Rotation: 90 degrees`
}
function showRotation180() {
    img.style.transform = `rotate(180deg)`
    rotationParagraph.innerHTML = `Selected Rotation: 180 degrees`
}
function showRotation270() {
    img.style.transform = `rotate(270deg)`
    rotationParagraph.innerHTML = `Selected Rotation: 270 degrees`
}