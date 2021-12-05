const angles= document.querySelectorAll(".input-angle")
const check_button= document.querySelector("#triangle-check")

const output_box= document.querySelector("#output-box")

function anglesSum(angle1, angle2, angle3){
    const sum= angle1 + angle2 + angle3
    // console.log(sum)
    return sum;
}

function isTriangle(){
    //console.log("rakhi")
    const sumOfAngle= anglesSum(Number(angles[0].value),Number(angles[1].value),Number(angles[2].value))
  //console.log( Number(angles[0].value),Number(angles[1].value),Number(angles[2].value))
  console.log(sumOfAngle)

  if(sumOfAngle === 180)
  {
      output_box.innerText= "Yeah!! It's a triangle !! "
  } else { 
      output_box.innerText= "Ooops! It's not a triangle !! "

  }
}

check_button.addEventListener("click", isTriangle)