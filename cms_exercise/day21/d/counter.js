const EventEmitter = require('events');

class Timer extends EventEmitter{
    constructor(num) {
        super()
        this.second = num;
    }
    time() {
        let that = this
        let counting = setInterval(function () {
            that.second--;
            console.log(that.second)

            if (that.second < 2) {
                clearInterval(counting)
                console.log("kaboom")
            }
        }, 1000)
    }

     tick(){
         //console.log('Start Counting')
         this.on('tick',this.time)
     }
}



module.exports = Timer;