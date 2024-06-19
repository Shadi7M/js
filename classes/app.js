class Animal {
    #crawl;
    #fly;
    constructor(name, type , fly , crawl){
        this.name = name
        this.type = type
        this.#crawl = crawl
        this.#fly = fly
    }
}
    // check(){
    //     if (this.#fly == 'bird') {
    //         return 'true'
    //     }
    //     if (this.#crawl == 'true') {
    //         return 'true'
    //     }
    // }

// class Animal {
//     #crawl;
//     #fly;
//     constructor(name, type , fly , crawl){
//         this.name = name
//         this.type = type
//         this.#crawl = crawl
//         this.#fly = fly
//     }
    // checkFluOrCrawl(){
    //     if (this.type === 'bird') {
    //          return true
    //     }else{
    //         return false
    //}
     
    // if (this.#fly = 'fly') {

        
    // }

    // getFlyOrCrawl(){
    //     return this.#fly
    // }


// }

class Dog extends Animal{
    constructor(name , type , property){
        super(name , type)
        this.property = property
    }
    property(){
        return this.property
    }

} 
const dog = new Dog('panbe' , 'dog' , 'homemade');
console.log(dog);

const bird = new Animal(' tala' , 'bird' , 'true' , 'false')
console.log(bird);

const snake = new Animal('nogre' , 'snake' , 'false' , 'true')
console.log(snake);

