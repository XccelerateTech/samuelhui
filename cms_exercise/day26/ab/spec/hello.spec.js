describe("stupid ass test", function(){
    it("first block",function(){
        console.log("1 block")
    })
    it("2 block",function(){
        console.log("2 block")
    })
    it("3 block",function(){
        console.log("3 block")
    })
    it("4 block",function(){
        console.log("4 block")
    })
    it("5 block",function(){
        console.log("5 block fail your dumb ass")
        throw new Error()
    })
})