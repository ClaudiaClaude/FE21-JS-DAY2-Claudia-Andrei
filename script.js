// // function crystalGazer( job_title, location, partners_name, number_childrens) {
// //   text_ = `You will be a ${job_title} in ${location} and married to ${partners_name} with ${number_childrens}`;
// //   return text_
// // }

// // document.write(crystalGazer("waiter", "Rome", "Aurora", 1));
// // console.log(crystalGazer("wtw", "here", "her", 0));


// function crystalGazer( job_title, location, partners_name, number_childrens) {
//     document.write(`You will be a ${job_title} in ${location} and married to ${partners_name} with ${number_childrens}`);
//     return 
//   }
//   crystalGazer("artist", "Florence", "none", 3);

//Age calculator// ex 2 and 3
 

function ageCalculator(birth_year, current_year){
    
    var myAge = current_year - birth_year;
    var yourAge = myAge - 1;
    return `You are either ${myAge} or ${yourAge}`;

}

document.write(ageCalculator(1989, 2021));


function ageCalculator2 (birthYear) {

    var currYear = new Date().getFullYear();
    var myAge = currYear - birthYear;
    var yourAge = myAge - 1;
    return `You are either ${myAge} or ${yourAge}`;

}
document.write("<br>")
document.write(ageCalculator2(1989));

// document.write(new Date().getFullYear());

// document.write(getFullYear());

function converter (degrees) {

    return degrees * (Math.PI / 180);
}

document.write("<br>");
document.write(converter(90));
// document.write("<br>");
// document.write(Math.PI);



