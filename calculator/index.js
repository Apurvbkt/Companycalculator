let Rate = 20.50								; //1st Rate
let quntity =23; //2nd Rate

if (Rate < 12) {
    console.log(` rate = ${(Rate * 2.55).toFixed(2)}   ${(Rate * 2.55 * quntity).toFixed(2)}  `)
}
else if (Rate >= 12) {
    console.log(` rate = ${(Rate * 1.05).toFixed(2)}   ${(Rate * 1.05 * quntity).toFixed(2)}  `)
}
else {
    console.log('not a valid number')
}

//bell crank    17.30
//LHD  11
//Chember BKT Mo M20 (RH) 19.5  

// console.log(25.68*1.05)


// let fr = 'kirti'
// for (let i = 0; i < fr.length; i++) {
    
//     console.log(i);
    
    
// }

