// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

for(let j=1; j<=5; j++){
for (let k = 1; k <=5; k++) {
 var tble = j*k;
   // console.log(j + '*' + k + ' = ' + j*k );
   // console.log (k + 'x' + j + ' - ' +j*k)
}
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}

for (let c = 0; c < 5; c++) {
   // const element =;
   console.log(`the inner loog value is ${c}`)
    for (let d = 0; d < 5; d++) {
    //    console.log(`the outer loop value is ${d}`)
       console.log(`c + d = ${c+d}`)
    }
}

var myArray = ["flash", "batman", "superman"]

for (let l = 0; l<myArray.length; l++) {
    if(l == 2) {
    // console.log('comman executed')
    continue
     }
    // console.log(myArray[l]);

}


for (let l = 0; l < myArray.length; l++) {
    // if(myArray[0]=='flash'){
    //     console.log(myArray[0]);
    // }
  //  console.log(myArray[0]);
   break;
}
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
 //   const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
       // console.log(`Detected 5`);
        continue
    }
  // console.log(`Value of i is ${index}`);
    
}