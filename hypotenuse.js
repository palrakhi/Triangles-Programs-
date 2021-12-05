const angles= document.querySelectorAll(".angle")
const submit_button= document.querySelector("#submit-button")
const show_output= document.querySelector("#output")

function calculateHypotenuse(){
    const sumOfsquaresOfsides= sumOfsquares(Number(angles[0].value),Number(angles[1].value))
    
    const hypotenuse_length= Math.sqrt(sumOfsquaresOfsides)
    
    //console.log(hypotenuse_length)

    show_output.innerText="Your output is: " + hypotenuse_length
}

function sumOfsquares(a,b){
    const sumOfsquaresOfsides= a*a + b*b;
    return sumOfsquaresOfsides
}

submit_button.addEventListener("click", calculateHypotenuse)

// function calculateHypotenuse(){
//     const sumOfsquaresOfsides= sumOfsquares(Number(angles[0].value),Number(angles[1].value))
//     const squareRoot= Math.sqrt (sumOfsquaresOfsides)

//     show_output.innerText= "Your output is: " + squareRoot
 
// }

// function sumOfsquares(a,b){
//     const sumOfsquaresOfsides= a*a + b*b
//     return sumOfsquaresOfsides;
//     }

// submit_button.addEventListener("click", calculateHypotenuse)