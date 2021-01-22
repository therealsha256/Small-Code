class Cat{
    //cons is a method/function
    constructor(name, age){          //will create properties using cons inputs
        this.name = name;
        this.age = age;
    }
    meow() {
    console.log(`${this.name}, age ${this.age} says Meow`);

    }
}
    // let melow = new Cat('melow', 5);
    // let silvester = new Cat('silvester', 4);
    // console.log(melow);

    function main(arr){
    //empty arr to hold cat objects
    let cats = [];
    
    for(let i = 0; i < arr.length; i++){
        let catData = arr[i].split(' ');

        let name = catData[0];
        let age = catData[1];

        cats.push(new Cat(name, age));
    }

    //arr.forEach( (cat) =>{
        for(let i = o; i < cats.length; i++) {
            cats[i].meow();
        }
    }



main(['Mellow' 2, 'Tom' 5]);