const quiz_form= document.querySelector(".form-quiz")

const submit_button= document.querySelector("#submit-button")

const showOutput= document.querySelector("#output")

const answers= ["90°", "right angle"]

function calculateScore(){
    let score=0;
    let index=0;

    const form_result= new FormData(quiz_form)

    for(let result of form_result.values()){
        if(result === answers[index]){
            
            score = score + 1;
        }
        index = index + 1 ;
        //console.log(result)
    }
    showOutput.innerText="Your score is: " + score
}

submit_button.addEventListener("click", calculateScore )