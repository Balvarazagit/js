// for loop

for(let i=1; i<=10; i++){
    if(i==5){
        // console.log("5 is best number");
    }
    // console.log(`Numbers : ${i}`);
}

for(let i=1; i<=10; i++){
    // console.log(`Table : ${i}`);
    
    for(let j=1; j<=10; j++){
        // console.log(`inner loop value : ${j} and outer lopp value : ${i}`);
        // console.log(i + " * " + j + " = " + i*j );
        
    }
}

const myarray =["a","b","c"];
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
}

for (let index = 1; index <= 10; index++) {
    const element = index;
    if(index==5){
        console.log("detected 5");
        break;
    }
    console.log(index);
}
for (let index = 1; index <= 10; index++) {
    const element = index;
    if(index==5){
        console.log("detected 5");
        continue;
    }
    console.log(index);
}