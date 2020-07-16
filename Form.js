class Form{
    constructor(){
        this.title = createElement('h2');
    }

    display(){

        this.title.html("Guess the number on the dice");
        this.title.position(200, 200);
    }

}