const btnEl = document.getElementById("btn");
const bdayEl = document.getElementById("birthday");
const pEl = document.getElementById("res");

const calculateAge = () => {
    const bdayValue = bdayEl.value;
    if(bdayValue === ""){
        alert("please enter your birthday");
    }else{
        let age = getAge(bdayValue);
        pEl.innerText = `Your are ${age} ${age > 1 ? "year's" : "year" } old`; 
    }
}

const getAge = (birthdayValue) => {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if( month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
        age --;
    }
    return age;
}



btnEl.addEventListener("click",calculateAge);