// A compile-time error, also known as a compilation error, occurs when the compiler encounters syntax or semantic issues in the source code during the compilation process

//A runtime error is an error that occurs while your program is running.

try { 
    var errorCode =100;
    console.log(x);
    //Optional. Statement(s) where an error can occur. Can be a compound statement.
    
} catch (error) {
    //it throw an error message 
    // console.log("Error Found =>: ",error);

    // throw new Error("First Declare the variable");
    if(errorCode==100){
        throw new Error("Invalid JSON");
    }
}
finally{
    console.log("I run all times");
}

//We can throw our error by'throw' block 

