var Timer = require('./counter')
let timer = new Timer(10)
timer.tick()
timer.emit("tick")