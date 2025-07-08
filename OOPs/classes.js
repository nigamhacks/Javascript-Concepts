class Human {
    //properties
    age=26;
    weight=90;
    height=190;
    #eyes='blue';
    //we can # to define private member
    //behaviour 
    walking(){
        console.log("I am walking");
    }

    running(){
        console.log('I am running');
    }

    get fetchEyeColor(){
        return this.#eyes;
    }

    set editEyeColor(val){
        this.#eyes=val;
    }
}

let obj=new Human();
obj.walking();

console.log('My eye color is',obj.fetchEyeColor);

//we use getter and sette is used to use private data memeber of the class outside the class