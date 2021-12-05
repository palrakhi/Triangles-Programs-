const base_height= document.querySelectorAll(".baseHeight")
const area_button= document.querySelector("#submit")
const show_output= document.querySelector("#output")

function calculate_area(){
    const Area= find_area(Number(base_height[0].value), Number(base_height[1].value))
    show_output.innerText= "The area of the triangle is " + Area + "cm2"
   // console.log("rakhi")
//    const find_area= 
//console.log(Area)

}

function find_area(b,h){
    const Area= 1/2 * b*h
    return Area

}

area_button.addEventListener("click", calculate_area)