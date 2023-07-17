const calAge = document.getElementById("calAge");
const birthdate = document.getElementById('birthdate');
const yourageIs = document.getElementById('yourage');


function calculateAge(){
    // console.log("kitane k huye..")
    const birthDate = birthdate.value;
    if(birthDate===""){
        alert("please enter your Age.");
    }
    else{
        const age = getAge(birthDate);
        yourageIs.innerText = `Your age is ${age} ${age>1?'years':'year'} old`;
    }
}



function getAge(birthDate){
    const PresentDate = new Date();
    const birthdate = new Date(birthDate);
    let age = PresentDate.getFullYear() - birthdate.getFullYear();
    return age;
}


calAge.addEventListener("click", calculateAge)