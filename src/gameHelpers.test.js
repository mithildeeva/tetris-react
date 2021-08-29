const gameHelpers = require("./gameHelpers")
// @ponicode
describe("gameHelpers.createStage", () => {
    test("0", () => {
        let callFunction = () => {
            gameHelpers.createStage()
        }
    
        expect(callFunction).not.toThrow()
    })
})
