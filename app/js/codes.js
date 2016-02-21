export class TapeMachine{
    constructor(){
        this.recordedMessage = '';
    }
    record(message){ 
        this.recordedMessage = message;
    }
    play(){ 
        console.log(this.recordedMessage);
    }
}
