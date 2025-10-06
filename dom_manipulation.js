// //  adding elements to the page
// const body = document.body

// // append is more varsatile
// body.append("Hello World","Bye") // this will show the string but appendchild will not

// body.appendChild("Hello World")


// // adding string is not the only thing i have to do we will add the elements into our page



// // we have created a div element 
// const div = document.createElement('div')
// // now we have to add it into the page (IMPORTANT)
// body.append(div) // since here we dont have anything in the div tag


// div.innerText = "Hello world"
// div.textContent = "Hello world 2"

// body.append(div)

// // innertext and textContent are almost similar 


// const strong = document.createElement("div")
// div.innerHTML = "<strong> hello world "



// APPEND can be used with anything ex, body , div , ....


// querySelector() is a method in JavaScript used to select and retrieve the first element within a document (or a specific element) that matches a specified CSS selector or a group of selectors. It is a part of the Document Object Model (DOM) API

const body = document.body
const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#Bye")


spanBye.remove() // deleted permanently (directly)
// div.removeChild(spanHi) // dleete it (indriectly using the relations)

console.log(spanHi.getAttribute('id'))
console.log(spanHi.setAttribute('id' , "sdfghhjkl"))
console.log(spanHi.getAttribute('title'))

// to remove elemenets
// spanHi.removeAttribute("id")

console.log(spanHi.dataset.test)

console.log(spanHi.dataset.longerName) // longer-name is converted to camel case (longerName)

spanHi.dataset.newName = "hiiii"


// to add new class
spanHi.classList.add("new-class")

// to remove the hi1 class
spanHi.classList.remove("hi1")

// toggle will remove if it exist or add if it does not
spanHi.classList.toggle('hi3') 
spanHi.classList.toggle('hi3', false) // it will remove this class 
spanHi.classList.toggle('hi3', true) // it will add this class 


// Modifying the style color
spanHi.style.backgroundColor = "black"
spanHi.style.color = "red"