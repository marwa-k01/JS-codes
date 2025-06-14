let globalVar = "This is a global varible";

function testScope() {
    let functionVar = "This is a function varible";
    if(true) {
    let blockVar = "This is a block varible";
    console.log(blockVar);
    }
console.log(functionVar);
}

testScope();

console.log(globalVar);
 

    





