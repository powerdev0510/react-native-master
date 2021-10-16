const rewire = require("rewire")
const ReactNativeART = rewire("./ReactNativeART")
const arrayDiffer = ReactNativeART.__get__("arrayDiffer")
const fontAndLinesDiffer = ReactNativeART.__get__("fontAndLinesDiffer")
const childrenAsString = ReactNativeART.__get__("childrenAsString")
const extractNumber = ReactNativeART.__get__("extractNumber")
const extractTransform = ReactNativeART.__get__("extractTransform")
const extractOpacity = ReactNativeART.__get__("extractOpacity")
const insertColorIntoArray = ReactNativeART.__get__("insertColorIntoArray")
const insertColorsIntoArray = ReactNativeART.__get__("insertColorsIntoArray")
const insertOffsetsIntoArray = ReactNativeART.__get__("insertOffsetsIntoArray")
const insertColorStopsIntoArray = ReactNativeART.__get__("insertColorStopsIntoArray")
const insertDoubleColorStopsIntoArray = ReactNativeART.__get__("insertDoubleColorStopsIntoArray")
const applyBoundingBoxToBrushData = ReactNativeART.__get__("applyBoundingBoxToBrushData")
const extractBrush = ReactNativeART.__get__("extractBrush")
const extractColor = ReactNativeART.__get__("extractColor")
const extractStrokeCap = ReactNativeART.__get__("extractStrokeCap")
const extractStrokeJoin = ReactNativeART.__get__("extractStrokeJoin")
const extractSingleFontFamily = ReactNativeART.__get__("extractSingleFontFamily")
const parseFontString = ReactNativeART.__get__("parseFontString")
const extractFont = ReactNativeART.__get__("extractFont")
const extractFontAndLines = ReactNativeART.__get__("extractFontAndLines")
const extractAlignment = ReactNativeART.__get__("extractAlignment")
const LinearGradient = ReactNativeART.__get__("LinearGradient")
const Pattern = ReactNativeART.__get__("Pattern")
// @ponicode
describe("arrayDiffer", () => {
    test("0", () => {
        let param1 = [["hsl(10%,20%,40%)", "hsl(10%,20%,40%)", "#F00"], ["#F00", "hsl(10%,20%,40%)", "black"], ["red", "rgb(20%,10%,30%)", "#FF00FF"]]
        let callFunction = () => {
            arrayDiffer(param1, ["#FF00FF", "green", "green"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["hsl(10%,20%,40%)", "#F00", "rgb(20%,10%,30%)"], ["rgb(0,100,200)", "red", "hsl(10%,20%,40%)"], ["rgb(0,100,200)", "rgb(0,100,200)", "black"]]
        let callFunction = () => {
            arrayDiffer(param1, ["rgb(0.1,0.2,0.3)", "black", "red"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["#F00", "hsl(10%,20%,40%)", "green"], ["#F00", "black", "red"], ["green", "rgb(20%,10%,30%)", "hsl(10%,20%,40%)"]]
        let callFunction = () => {
            arrayDiffer(param1, ["rgb(20%,10%,30%)", "#F00", "rgb(0,100,200)"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["rgb(20%,10%,30%)", "#FF00FF", "red"], ["hsl(10%,20%,40%)", "green", "rgb(0,100,200)"], ["#F00", "rgb(0.1,0.2,0.3)", "black"]]
        let callFunction = () => {
            arrayDiffer(param1, ["rgb(0,100,200)", "#FF00FF", "#FF00FF"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["black", "rgb(0.1,0.2,0.3)", "#FF00FF"], ["#F00", "#F00", "#F00"], ["#F00", "rgb(0.1,0.2,0.3)", "rgb(20%,10%,30%)"]]
        let callFunction = () => {
            arrayDiffer(param1, ["rgb(0,100,200)", "rgb(20%,10%,30%)", "red"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            arrayDiffer(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("fontAndLinesDiffer", () => {
    test("0", () => {
        let object = [["Et aut sint aut dolor sit officiis repellendus.\nRepellendus ut voluptas nemo tenetur.\nPorro enim occaecati beatae animi error ab aut aspernatur porro.\nLaudantium eligendi iste est possimus voluptates exercitationem reiciendis rerum dolores.", "Fuga est optio sunt dicta.\nIpsum necessitatibus tempora consectetur officia occaecati exercitationem.\nMolestiae eaque modi consequatur odit libero aut qui et architecto.\nInventore beatae quidem voluptate itaque eum magni quo non.\nEa earum velit sunt at iste neque.", "Et aut sint aut dolor sit officiis repellendus.\nRepellendus ut voluptas nemo tenetur.\nPorro enim occaecati beatae animi error ab aut aspernatur porro.\nLaudantium eligendi iste est possimus voluptates exercitationem reiciendis rerum dolores."], ["Fuga est optio sunt dicta.\nIpsum necessitatibus tempora consectetur officia occaecati exercitationem.\nMolestiae eaque modi consequatur odit libero aut qui et architecto.\nInventore beatae quidem voluptate itaque eum magni quo non.\nEa earum velit sunt at iste neque.", "Fuga est optio sunt dicta.\nIpsum necessitatibus tempora consectetur officia occaecati exercitationem.\nMolestiae eaque modi consequatur odit libero aut qui et architecto.\nInventore beatae quidem voluptate itaque eum magni quo non.\nEa earum velit sunt at iste neque.", "Et aut sint aut dolor sit officiis repellendus.\nRepellendus ut voluptas nemo tenetur.\nPorro enim occaecati beatae animi error ab aut aspernatur porro.\nLaudantium eligendi iste est possimus voluptates exercitationem reiciendis rerum dolores."], ["Nostrum odit laboriosam eaque quo.\nEt voluptatem deserunt tempora et numquam deleniti.", "Nostrum odit laboriosam eaque quo.\nEt voluptatem deserunt tempora et numquam deleniti.", "Pariatur harum esse sed delectus non praesentium et natus velit.\nIste et voluptatem unde facere eius quibusdam sunt quis alias.\nReiciendis est sit dolorem voluptatibus.\nOdit beatae possimus ut.\nSed quam fugiat fuga impedit nulla corporis ut."]]
        let object2 = [["Nostrum odit laboriosam eaque quo.\nEt voluptatem deserunt tempora et numquam deleniti.", "Et aut sint aut dolor sit officiis repellendus.\nRepellendus ut voluptas nemo tenetur.\nPorro enim occaecati beatae animi error ab aut aspernatur porro.\nLaudantium eligendi iste est possimus voluptates exercitationem reiciendis rerum dolores.", "Fuga est optio sunt dicta.\nIpsum necessitatibus tempora consectetur officia occaecati exercitationem.\nMolestiae eaque modi consequatur odit libero aut qui et architecto.\nInventore beatae quidem voluptate itaque eum magni quo non.\nEa earum velit sunt at iste neque."], ["Fuga est optio sunt dicta.\nIpsum necessitatibus tempora consectetur officia occaecati exercitationem.\nMolestiae eaque modi consequatur odit libero aut qui et architecto.\nInventore beatae quidem voluptate itaque eum magni quo non.\nEa earum velit sunt at iste neque.", "Nostrum odit laboriosam eaque quo.\nEt voluptatem deserunt tempora et numquam deleniti.", "Nostrum odit laboriosam eaque quo.\nEt voluptatem deserunt tempora et numquam deleniti."], ["Pariatur harum esse sed delectus non praesentium et natus velit.\nIste et voluptatem unde facere eius quibusdam sunt quis alias.\nReiciendis est sit dolorem voluptatibus.\nOdit beatae possimus ut.\nSed quam fugiat fuga impedit nulla corporis ut.", "Molestiae dolores eos esse rem aperiam consequuntur hic iste et.\nDolores quia sint fugit qui sint sed accusamus inventore quis.\nCommodi aperiam esse consequatur aut aliquid.\nVoluptas laudantium nihil maxime qui.", "Fuga est optio sunt dicta.\nIpsum necessitatibus tempora consectetur officia occaecati exercitationem.\nMolestiae eaque modi consequatur odit libero aut qui et architecto.\nInventore beatae quidem voluptate itaque eum magni quo non.\nEa earum velit sunt at iste neque."]]
        let callFunction = () => {
            fontAndLinesDiffer({ font: { fontFamily: "#FF00FF", fontSize: 5, fontWeight: "rgb(20%,10%,30%)", fontStyle: "black" }, lines: object }, { font: { fontFamily: "green", fontSize: 5, fontWeight: "rgb(0.1,0.2,0.3)", fontStyle: "hsl(10%,20%,40%)" }, lines: object2 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [["Et aut sint aut dolor sit officiis repellendus.\nRepellendus ut voluptas nemo tenetur.\nPorro enim occaecati beatae animi error ab aut aspernatur porro.\nLaudantium eligendi iste est possimus voluptates exercitationem reiciendis rerum dolores.", "Nostrum odit laboriosam eaque quo.\nEt voluptatem deserunt tempora et numquam deleniti.", "Fuga est optio sunt dicta.\nIpsum necessitatibus tempora consectetur officia occaecati exercitationem.\nMolestiae eaque modi consequatur odit libero aut qui et architecto.\nInventore beatae quidem voluptate itaque eum magni quo non.\nEa earum velit sunt at iste neque."], ["Pariatur harum esse sed delectus non praesentium et natus velit.\nIste et voluptatem unde facere eius quibusdam sunt quis alias.\nReiciendis est sit dolorem voluptatibus.\nOdit beatae possimus ut.\nSed quam fugiat fuga impedit nulla corporis ut.", "Nostrum odit laboriosam eaque quo.\nEt voluptatem deserunt tempora et numquam deleniti.", "Fuga est optio sunt dicta.\nIpsum necessitatibus tempora consectetur officia occaecati exercitationem.\nMolestiae eaque modi consequatur odit libero aut qui et architecto.\nInventore beatae quidem voluptate itaque eum magni quo non.\nEa earum velit sunt at iste neque."], ["Molestiae dolores eos esse rem aperiam consequuntur hic iste et.\nDolores quia sint fugit qui sint sed accusamus inventore quis.\nCommodi aperiam esse consequatur aut aliquid.\nVoluptas laudantium nihil maxime qui.", "Molestiae dolores eos esse rem aperiam consequuntur hic iste et.\nDolores quia sint fugit qui sint sed accusamus inventore quis.\nCommodi aperiam esse consequatur aut aliquid.\nVoluptas laudantium nihil maxime qui.", "Pariatur harum esse sed delectus non praesentium et natus velit.\nIste et voluptatem unde facere eius quibusdam sunt quis alias.\nReiciendis est sit dolorem voluptatibus.\nOdit beatae possimus ut.\nSed quam fugiat fuga impedit nulla corporis ut."]]
        let object2 = [["Nostrum odit laboriosam eaque quo.\nEt voluptatem deserunt tempora et numquam deleniti.", "Nostrum odit laboriosam eaque quo.\nEt voluptatem deserunt tempora et numquam deleniti.", "Pariatur harum esse sed delectus non praesentium et natus velit.\nIste et voluptatem unde facere eius quibusdam sunt quis alias.\nReiciendis est sit dolorem voluptatibus.\nOdit beatae possimus ut.\nSed quam fugiat fuga impedit nulla corporis ut."], ["Molestiae dolores eos esse rem aperiam consequuntur hic iste et.\nDolores quia sint fugit qui sint sed accusamus inventore quis.\nCommodi aperiam esse consequatur aut aliquid.\nVoluptas laudantium nihil maxime qui.", "Molestiae dolores eos esse rem aperiam consequuntur hic iste et.\nDolores quia sint fugit qui sint sed accusamus inventore quis.\nCommodi aperiam esse consequatur aut aliquid.\nVoluptas laudantium nihil maxime qui.", "Fuga est optio sunt dicta.\nIpsum necessitatibus tempora consectetur officia occaecati exercitationem.\nMolestiae eaque modi consequatur odit libero aut qui et architecto.\nInventore beatae quidem voluptate itaque eum magni quo non.\nEa earum velit sunt at iste neque."], ["Molestiae dolores eos esse rem aperiam consequuntur hic iste et.\nDolores quia sint fugit qui sint sed accusamus inventore quis.\nCommodi aperiam esse consequatur aut aliquid.\nVoluptas laudantium nihil maxime qui.", "Molestiae dolores eos esse rem aperiam consequuntur hic iste et.\nDolores quia sint fugit qui sint sed accusamus inventore quis.\nCommodi aperiam esse consequatur aut aliquid.\nVoluptas laudantium nihil maxime qui.", "Fuga est optio sunt dicta.\nIpsum necessitatibus tempora consectetur officia occaecati exercitationem.\nMolestiae eaque modi consequatur odit libero aut qui et architecto.\nInventore beatae quidem voluptate itaque eum magni quo non.\nEa earum velit sunt at iste neque."]]
        let callFunction = () => {
            fontAndLinesDiffer({ font: { fontFamily: "rgb(0.1,0.2,0.3)", fontSize: 3, fontWeight: "rgb(0.1,0.2,0.3)", fontStyle: "rgb(0,100,200)" }, lines: object }, { font: { fontFamily: "black", fontSize: 3, fontWeight: "rgb(0.1,0.2,0.3)", fontStyle: "#FF00FF" }, lines: object2 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [["Nostrum odit laboriosam eaque quo.\nEt voluptatem deserunt tempora et numquam deleniti.", "Fuga est optio sunt dicta.\nIpsum necessitatibus tempora consectetur officia occaecati exercitationem.\nMolestiae eaque modi consequatur odit libero aut qui et architecto.\nInventore beatae quidem voluptate itaque eum magni quo non.\nEa earum velit sunt at iste neque.", "Nostrum odit laboriosam eaque quo.\nEt voluptatem deserunt tempora et numquam deleniti."], ["Nostrum odit laboriosam eaque quo.\nEt voluptatem deserunt tempora et numquam deleniti.", "Nostrum odit laboriosam eaque quo.\nEt voluptatem deserunt tempora et numquam deleniti.", "Et aut sint aut dolor sit officiis repellendus.\nRepellendus ut voluptas nemo tenetur.\nPorro enim occaecati beatae animi error ab aut aspernatur porro.\nLaudantium eligendi iste est possimus voluptates exercitationem reiciendis rerum dolores."], ["Molestiae dolores eos esse rem aperiam consequuntur hic iste et.\nDolores quia sint fugit qui sint sed accusamus inventore quis.\nCommodi aperiam esse consequatur aut aliquid.\nVoluptas laudantium nihil maxime qui.", "Et aut sint aut dolor sit officiis repellendus.\nRepellendus ut voluptas nemo tenetur.\nPorro enim occaecati beatae animi error ab aut aspernatur porro.\nLaudantium eligendi iste est possimus voluptates exercitationem reiciendis rerum dolores.", "Fuga est optio sunt dicta.\nIpsum necessitatibus tempora consectetur officia occaecati exercitationem.\nMolestiae eaque modi consequatur odit libero aut qui et architecto.\nInventore beatae quidem voluptate itaque eum magni quo non.\nEa earum velit sunt at iste neque."]]
        let object2 = [["Molestiae dolores eos esse rem aperiam consequuntur hic iste et.\nDolores quia sint fugit qui sint sed accusamus inventore quis.\nCommodi aperiam esse consequatur aut aliquid.\nVoluptas laudantium nihil maxime qui.", "Et aut sint aut dolor sit officiis repellendus.\nRepellendus ut voluptas nemo tenetur.\nPorro enim occaecati beatae animi error ab aut aspernatur porro.\nLaudantium eligendi iste est possimus voluptates exercitationem reiciendis rerum dolores.", "Molestiae dolores eos esse rem aperiam consequuntur hic iste et.\nDolores quia sint fugit qui sint sed accusamus inventore quis.\nCommodi aperiam esse consequatur aut aliquid.\nVoluptas laudantium nihil maxime qui."], ["Molestiae dolores eos esse rem aperiam consequuntur hic iste et.\nDolores quia sint fugit qui sint sed accusamus inventore quis.\nCommodi aperiam esse consequatur aut aliquid.\nVoluptas laudantium nihil maxime qui.", "Pariatur harum esse sed delectus non praesentium et natus velit.\nIste et voluptatem unde facere eius quibusdam sunt quis alias.\nReiciendis est sit dolorem voluptatibus.\nOdit beatae possimus ut.\nSed quam fugiat fuga impedit nulla corporis ut.", "Fuga est optio sunt dicta.\nIpsum necessitatibus tempora consectetur officia occaecati exercitationem.\nMolestiae eaque modi consequatur odit libero aut qui et architecto.\nInventore beatae quidem voluptate itaque eum magni quo non.\nEa earum velit sunt at iste neque."], ["Pariatur harum esse sed delectus non praesentium et natus velit.\nIste et voluptatem unde facere eius quibusdam sunt quis alias.\nReiciendis est sit dolorem voluptatibus.\nOdit beatae possimus ut.\nSed quam fugiat fuga impedit nulla corporis ut.", "Molestiae dolores eos esse rem aperiam consequuntur hic iste et.\nDolores quia sint fugit qui sint sed accusamus inventore quis.\nCommodi aperiam esse consequatur aut aliquid.\nVoluptas laudantium nihil maxime qui.", "Molestiae dolores eos esse rem aperiam consequuntur hic iste et.\nDolores quia sint fugit qui sint sed accusamus inventore quis.\nCommodi aperiam esse consequatur aut aliquid.\nVoluptas laudantium nihil maxime qui."]]
        let callFunction = () => {
            fontAndLinesDiffer({ font: { fontFamily: "red", fontSize: 5, fontWeight: "red", fontStyle: "rgb(0,100,200)" }, lines: object }, { font: { fontFamily: "rgb(0,100,200)", fontSize: 1, fontWeight: "#F00", fontStyle: "rgb(0.1,0.2,0.3)" }, lines: object2 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [["Et aut sint aut dolor sit officiis repellendus.\nRepellendus ut voluptas nemo tenetur.\nPorro enim occaecati beatae animi error ab aut aspernatur porro.\nLaudantium eligendi iste est possimus voluptates exercitationem reiciendis rerum dolores.", "Pariatur harum esse sed delectus non praesentium et natus velit.\nIste et voluptatem unde facere eius quibusdam sunt quis alias.\nReiciendis est sit dolorem voluptatibus.\nOdit beatae possimus ut.\nSed quam fugiat fuga impedit nulla corporis ut.", "Molestiae dolores eos esse rem aperiam consequuntur hic iste et.\nDolores quia sint fugit qui sint sed accusamus inventore quis.\nCommodi aperiam esse consequatur aut aliquid.\nVoluptas laudantium nihil maxime qui."], ["Pariatur harum esse sed delectus non praesentium et natus velit.\nIste et voluptatem unde facere eius quibusdam sunt quis alias.\nReiciendis est sit dolorem voluptatibus.\nOdit beatae possimus ut.\nSed quam fugiat fuga impedit nulla corporis ut.", "Molestiae dolores eos esse rem aperiam consequuntur hic iste et.\nDolores quia sint fugit qui sint sed accusamus inventore quis.\nCommodi aperiam esse consequatur aut aliquid.\nVoluptas laudantium nihil maxime qui.", "Et aut sint aut dolor sit officiis repellendus.\nRepellendus ut voluptas nemo tenetur.\nPorro enim occaecati beatae animi error ab aut aspernatur porro.\nLaudantium eligendi iste est possimus voluptates exercitationem reiciendis rerum dolores."], ["Et aut sint aut dolor sit officiis repellendus.\nRepellendus ut voluptas nemo tenetur.\nPorro enim occaecati beatae animi error ab aut aspernatur porro.\nLaudantium eligendi iste est possimus voluptates exercitationem reiciendis rerum dolores.", "Nostrum odit laboriosam eaque quo.\nEt voluptatem deserunt tempora et numquam deleniti.", "Pariatur harum esse sed delectus non praesentium et natus velit.\nIste et voluptatem unde facere eius quibusdam sunt quis alias.\nReiciendis est sit dolorem voluptatibus.\nOdit beatae possimus ut.\nSed quam fugiat fuga impedit nulla corporis ut."]]
        let object2 = [["Fuga est optio sunt dicta.\nIpsum necessitatibus tempora consectetur officia occaecati exercitationem.\nMolestiae eaque modi consequatur odit libero aut qui et architecto.\nInventore beatae quidem voluptate itaque eum magni quo non.\nEa earum velit sunt at iste neque.", "Molestiae dolores eos esse rem aperiam consequuntur hic iste et.\nDolores quia sint fugit qui sint sed accusamus inventore quis.\nCommodi aperiam esse consequatur aut aliquid.\nVoluptas laudantium nihil maxime qui.", "Et aut sint aut dolor sit officiis repellendus.\nRepellendus ut voluptas nemo tenetur.\nPorro enim occaecati beatae animi error ab aut aspernatur porro.\nLaudantium eligendi iste est possimus voluptates exercitationem reiciendis rerum dolores."], ["Molestiae dolores eos esse rem aperiam consequuntur hic iste et.\nDolores quia sint fugit qui sint sed accusamus inventore quis.\nCommodi aperiam esse consequatur aut aliquid.\nVoluptas laudantium nihil maxime qui.", "Molestiae dolores eos esse rem aperiam consequuntur hic iste et.\nDolores quia sint fugit qui sint sed accusamus inventore quis.\nCommodi aperiam esse consequatur aut aliquid.\nVoluptas laudantium nihil maxime qui.", "Nostrum odit laboriosam eaque quo.\nEt voluptatem deserunt tempora et numquam deleniti."], ["Fuga est optio sunt dicta.\nIpsum necessitatibus tempora consectetur officia occaecati exercitationem.\nMolestiae eaque modi consequatur odit libero aut qui et architecto.\nInventore beatae quidem voluptate itaque eum magni quo non.\nEa earum velit sunt at iste neque.", "Molestiae dolores eos esse rem aperiam consequuntur hic iste et.\nDolores quia sint fugit qui sint sed accusamus inventore quis.\nCommodi aperiam esse consequatur aut aliquid.\nVoluptas laudantium nihil maxime qui.", "Pariatur harum esse sed delectus non praesentium et natus velit.\nIste et voluptatem unde facere eius quibusdam sunt quis alias.\nReiciendis est sit dolorem voluptatibus.\nOdit beatae possimus ut.\nSed quam fugiat fuga impedit nulla corporis ut."]]
        let callFunction = () => {
            fontAndLinesDiffer({ font: { fontFamily: "rgb(20%,10%,30%)", fontSize: 50, fontWeight: "rgb(20%,10%,30%)", fontStyle: "rgb(20%,10%,30%)" }, lines: object }, { font: { fontFamily: "rgb(0.1,0.2,0.3)", fontSize: 5, fontWeight: "rgb(0.1,0.2,0.3)", fontStyle: "rgb(0,100,200)" }, lines: object2 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [["Fuga est optio sunt dicta.\nIpsum necessitatibus tempora consectetur officia occaecati exercitationem.\nMolestiae eaque modi consequatur odit libero aut qui et architecto.\nInventore beatae quidem voluptate itaque eum magni quo non.\nEa earum velit sunt at iste neque.", "Et aut sint aut dolor sit officiis repellendus.\nRepellendus ut voluptas nemo tenetur.\nPorro enim occaecati beatae animi error ab aut aspernatur porro.\nLaudantium eligendi iste est possimus voluptates exercitationem reiciendis rerum dolores.", "Pariatur harum esse sed delectus non praesentium et natus velit.\nIste et voluptatem unde facere eius quibusdam sunt quis alias.\nReiciendis est sit dolorem voluptatibus.\nOdit beatae possimus ut.\nSed quam fugiat fuga impedit nulla corporis ut."], ["Fuga est optio sunt dicta.\nIpsum necessitatibus tempora consectetur officia occaecati exercitationem.\nMolestiae eaque modi consequatur odit libero aut qui et architecto.\nInventore beatae quidem voluptate itaque eum magni quo non.\nEa earum velit sunt at iste neque.", "Fuga est optio sunt dicta.\nIpsum necessitatibus tempora consectetur officia occaecati exercitationem.\nMolestiae eaque modi consequatur odit libero aut qui et architecto.\nInventore beatae quidem voluptate itaque eum magni quo non.\nEa earum velit sunt at iste neque.", "Pariatur harum esse sed delectus non praesentium et natus velit.\nIste et voluptatem unde facere eius quibusdam sunt quis alias.\nReiciendis est sit dolorem voluptatibus.\nOdit beatae possimus ut.\nSed quam fugiat fuga impedit nulla corporis ut."], ["Nostrum odit laboriosam eaque quo.\nEt voluptatem deserunt tempora et numquam deleniti.", "Et aut sint aut dolor sit officiis repellendus.\nRepellendus ut voluptas nemo tenetur.\nPorro enim occaecati beatae animi error ab aut aspernatur porro.\nLaudantium eligendi iste est possimus voluptates exercitationem reiciendis rerum dolores.", "Molestiae dolores eos esse rem aperiam consequuntur hic iste et.\nDolores quia sint fugit qui sint sed accusamus inventore quis.\nCommodi aperiam esse consequatur aut aliquid.\nVoluptas laudantium nihil maxime qui."]]
        let object2 = [["Et aut sint aut dolor sit officiis repellendus.\nRepellendus ut voluptas nemo tenetur.\nPorro enim occaecati beatae animi error ab aut aspernatur porro.\nLaudantium eligendi iste est possimus voluptates exercitationem reiciendis rerum dolores.", "Nostrum odit laboriosam eaque quo.\nEt voluptatem deserunt tempora et numquam deleniti.", "Molestiae dolores eos esse rem aperiam consequuntur hic iste et.\nDolores quia sint fugit qui sint sed accusamus inventore quis.\nCommodi aperiam esse consequatur aut aliquid.\nVoluptas laudantium nihil maxime qui."], ["Molestiae dolores eos esse rem aperiam consequuntur hic iste et.\nDolores quia sint fugit qui sint sed accusamus inventore quis.\nCommodi aperiam esse consequatur aut aliquid.\nVoluptas laudantium nihil maxime qui.", "Fuga est optio sunt dicta.\nIpsum necessitatibus tempora consectetur officia occaecati exercitationem.\nMolestiae eaque modi consequatur odit libero aut qui et architecto.\nInventore beatae quidem voluptate itaque eum magni quo non.\nEa earum velit sunt at iste neque.", "Molestiae dolores eos esse rem aperiam consequuntur hic iste et.\nDolores quia sint fugit qui sint sed accusamus inventore quis.\nCommodi aperiam esse consequatur aut aliquid.\nVoluptas laudantium nihil maxime qui."], ["Fuga est optio sunt dicta.\nIpsum necessitatibus tempora consectetur officia occaecati exercitationem.\nMolestiae eaque modi consequatur odit libero aut qui et architecto.\nInventore beatae quidem voluptate itaque eum magni quo non.\nEa earum velit sunt at iste neque.", "Fuga est optio sunt dicta.\nIpsum necessitatibus tempora consectetur officia occaecati exercitationem.\nMolestiae eaque modi consequatur odit libero aut qui et architecto.\nInventore beatae quidem voluptate itaque eum magni quo non.\nEa earum velit sunt at iste neque.", "Pariatur harum esse sed delectus non praesentium et natus velit.\nIste et voluptatem unde facere eius quibusdam sunt quis alias.\nReiciendis est sit dolorem voluptatibus.\nOdit beatae possimus ut.\nSed quam fugiat fuga impedit nulla corporis ut."]]
        let callFunction = () => {
            fontAndLinesDiffer({ font: { fontFamily: "rgb(20%,10%,30%)", fontSize: 50, fontWeight: "#F00", fontStyle: "#FF00FF" }, lines: object }, { font: { fontFamily: "red", fontSize: 50, fontWeight: "#F00", fontStyle: "hsl(10%,20%,40%)" }, lines: object2 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            fontAndLinesDiffer({}, { font: { fontFamily: "", fontSize: -Infinity, fontWeight: "", fontStyle: "" }, lines: [] })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("childrenAsString", () => {
    test("0", () => {
        let param1 = [["Edmond", "Jean-Philippe", "Michael"], ["Pierre Edouard", "Michael", "Michael"], ["Edmond", "Jean-Philippe", "Edmond"]]
        let callFunction = () => {
            childrenAsString(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["Edmond", "Anas", "Anas"], ["Edmond", "Pierre Edouard", "Anas"], ["Edmond", "Edmond", "Pierre Edouard"]]
        let callFunction = () => {
            childrenAsString(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["Edmond", "George", "George"], ["Pierre Edouard", "Anas", "Edmond"], ["Edmond", "Anas", "Anas"]]
        let callFunction = () => {
            childrenAsString(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["Jean-Philippe", "Anas", "Anas"], ["Edmond", "Edmond", "Edmond"], ["George", "Jean-Philippe", "Michael"]]
        let callFunction = () => {
            childrenAsString(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["Michael", "Anas", "Pierre Edouard"], ["Michael", "Anas", "Michael"], ["Michael", "Edmond", "Michael"]]
        let callFunction = () => {
            childrenAsString(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            childrenAsString(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("extractNumber", () => {
    test("0", () => {
        let callFunction = () => {
            extractNumber("elio@example.com", "elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            extractNumber("Dillenberg", "Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            extractNumber("Dillenberg", "elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            extractNumber("Elio", "elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            extractNumber("Elio", "Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            extractNumber(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("extractTransform", () => {
    test("0", () => {
        let callFunction = () => {
            extractTransform({ scaleX: 10.0, scale: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", scaleY: -1.0, x: 350, y: 520, originX: 400, originY: 30, rotation: 1.0, transform: "Edmond" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            extractTransform({ scaleX: -0.5, scale: 0.5, scaleY: -0.5, x: 410, y: 320, originX: 70, originY: 1, rotation: 0.5, transform: "Michael" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            extractTransform({ scaleX: 1.0, scale: 0.1, scaleY: 10.23, x: 550, y: 70, originX: 320, originY: 400, rotation: 2.0, transform: "George" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            extractTransform({ scaleX: 0.0, scale: 1.0, scaleY: -0.5, x: 350, y: 350, originX: 380, originY: 1, rotation: 0.1, transform: "Anas" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            extractTransform({ scaleX: 10.0, scale: 2.0, scaleY: -1.0, x: 550, y: 70, originX: 30, originY: 100, rotation: 0.5, transform: "Edmond" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            extractTransform(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("extractOpacity", () => {
    test("0", () => {
        let callFunction = () => {
            extractOpacity({ visible: true, opacity: 0.0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            extractOpacity({ visible: false, opacity: -0.5 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            extractOpacity({ visible: false, opacity: 1.0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            extractOpacity({ visible: false, opacity: 10.23 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            extractOpacity({ visible: false, opacity: 0.0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            extractOpacity({ visible: true, opacity: -Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("insertColorIntoArray", () => {
    test("0", () => {
        let object = [["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"]]
        let object2 = [["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674], ["a", "b", "043", "holasenior"]]
        let object3 = [["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            insertColorIntoArray("red", param2, -1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object2 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"]]
        let object3 = [["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            insertColorIntoArray("#F00", param2, "bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653]]
        let object2 = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"]]
        let object3 = [[-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], ["a", "b", "043", "holasenior"]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            insertColorIntoArray("rgb(20%,10%,30%)", param2, "bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object2 = [["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674]]
        let object3 = [[-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], ["a", "b", "043", "holasenior"]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            insertColorIntoArray("black", param2, -10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object2 = [["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let object3 = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            insertColorIntoArray("rgb(0,100,200)", param2, -10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            insertColorIntoArray(undefined, undefined, Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("insertColorsIntoArray", () => {
    test("0", () => {
        let object = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653]]
        let object2 = [["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674]]
        let object3 = [[-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            insertColorsIntoArray([-5.48, -100, -100], param2, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"]]
        let object2 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"]]
        let object3 = [["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            insertColorsIntoArray([-100, -5.48, 100], param2, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653]]
        let object2 = [["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let object3 = [[10, -45.9, 103.5, 0.955674], ["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            insertColorsIntoArray([1, 0, 1], param2, -1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [[10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653]]
        let object2 = [["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"]]
        let object3 = [[-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            insertColorsIntoArray([-100, 0, 100], param2, -10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674]]
        let object2 = [[-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object3 = [["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            insertColorsIntoArray([0, -5.48, 0], param2, -10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            insertColorsIntoArray(undefined, undefined, NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("insertOffsetsIntoArray", () => {
    test("0", () => {
        let param1 = [[-5.48, 0, 0], [100, 0, 1], [-100, -5.48, 0]]
        let object = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object2 = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"]]
        let object3 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param2 = [object, object2, object3]
        let object4 = [[-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "foo bar"], ["foo bar", -0.353, "**text**", 4653]]
        let object5 = [["a", "b", "043", "foo bar"], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653]]
        let object6 = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "foo bar"], ["foo bar", -0.353, "**text**", 4653]]
        let param5 = [object4, object5, object6]
        let callFunction = () => {
            insertOffsetsIntoArray(param1, param2, 10, 254, param5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [[100, 100, 0], [0, 0, -5.48], [0, 1, 0]]
        let object = [["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674]]
        let object2 = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"]]
        let object3 = [["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653]]
        let param2 = [object, object2, object3]
        let object4 = [["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object5 = [["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674]]
        let object6 = [["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674]]
        let param5 = [object4, object5, object6]
        let callFunction = () => {
            insertOffsetsIntoArray(param1, param2, -1, 254, param5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [[-100, 1, -5.48], [-5.48, 0, 100], [-100, 1, 100]]
        let object = [[-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"]]
        let object2 = [[-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653]]
        let object3 = [["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"]]
        let param2 = [object, object2, object3]
        let object4 = [[10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let object5 = [[-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object6 = [["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674]]
        let param5 = [object4, object5, object6]
        let callFunction = () => {
            insertOffsetsIntoArray(param1, param2, -10, 1, param5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [[-100, -5.48, 0], [-5.48, -100, 1], [0, 1, -100]]
        let object = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653]]
        let object2 = [[-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653]]
        let object3 = [["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"]]
        let param2 = [object, object2, object3]
        let object4 = [[-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653]]
        let object5 = [[-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let object6 = [[-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "foo bar"], [10, -45.9, 103.5, 0.955674]]
        let param5 = [object4, object5, object6]
        let callFunction = () => {
            insertOffsetsIntoArray(param1, param2, 1, 142, param5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [[0, -5.48, 100], [-5.48, -5.48, -5.48], [100, 100, -100]]
        let object = [[10, -45.9, 103.5, 0.955674], ["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674]]
        let object2 = [[-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653]]
        let object3 = [["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653]]
        let param2 = [object, object2, object3]
        let object4 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object5 = [[10, -45.9, 103.5, 0.955674], ["a", "b", "043", "foo bar"], ["a", "b", "043", "foo bar"]]
        let object6 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653]]
        let param5 = [object4, object5, object6]
        let callFunction = () => {
            insertOffsetsIntoArray(param1, param2, 0, 0, param5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            insertOffsetsIntoArray(undefined, [], -Infinity, -Infinity, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("insertColorStopsIntoArray", () => {
    test("0", () => {
        let object = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674]]
        let object2 = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674]]
        let object3 = [["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            insertColorStopsIntoArray(-100, param2, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"]]
        let object2 = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653]]
        let object3 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            insertColorStopsIntoArray(-100, param2, -1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object2 = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"]]
        let object3 = [["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            insertColorStopsIntoArray(1, param2, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object2 = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653]]
        let object3 = [["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            insertColorStopsIntoArray(0, param2, -100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object2 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"]]
        let object3 = [["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            insertColorStopsIntoArray(0, param2, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            insertColorStopsIntoArray(Infinity, [], Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("insertDoubleColorStopsIntoArray", () => {
    test("0", () => {
        let object = [["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object2 = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object3 = [[10, -45.9, 103.5, 0.955674], ["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            insertDoubleColorStopsIntoArray([false, true, true], param2, 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653]]
        let object2 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674]]
        let object3 = [["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            insertDoubleColorStopsIntoArray([false, true, true], param2, 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object2 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674]]
        let object3 = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            insertDoubleColorStopsIntoArray([true, false, true], param2, -100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object2 = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"]]
        let object3 = [["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            insertDoubleColorStopsIntoArray([true, true, false], param2, 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [[-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653]]
        let object2 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"]]
        let object3 = [[10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674], ["a", "b", "043", "holasenior"]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            insertDoubleColorStopsIntoArray([true, false, false], param2, -1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            insertDoubleColorStopsIntoArray(undefined, [], Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("applyBoundingBoxToBrushData", () => {
    test("0", () => {
        let callFunction = () => {
            applyBoundingBoxToBrushData("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", { width: 5, height: 15 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            applyBoundingBoxToBrushData("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", { width: 12, height: 390 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            applyBoundingBoxToBrushData("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", { width: 64, height: 15 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            applyBoundingBoxToBrushData("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", { width: 80.0, height: 1080 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            applyBoundingBoxToBrushData("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", { width: 16, height: 255 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            applyBoundingBoxToBrushData("", { width: Infinity, height: Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("extractBrush", () => {
    test("0", () => {
        let param2 = [["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"]]
        let callFunction = () => {
            extractBrush({ _brush: "George", _bb: "Anas" }, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param2 = [["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"]]
        let callFunction = () => {
            extractBrush({ _brush: "Jean-Philippe", _bb: "George" }, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param2 = [["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"]]
        let callFunction = () => {
            extractBrush({ _brush: "Anas", _bb: "George" }, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param2 = [["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"]]
        let callFunction = () => {
            extractBrush({ _brush: "Edmond", _bb: "Jean-Philippe" }, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param2 = [["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"]]
        let callFunction = () => {
            extractBrush({ _brush: "Michael", _bb: "Edmond" }, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            extractBrush(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("extractColor", () => {
    test("0", () => {
        let callFunction = () => {
            extractColor("#F00")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            extractColor("rgb(20%,10%,30%)")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            extractColor("rgb(0.1,0.2,0.3)")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            extractColor("black")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            extractColor("#FF00FF")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            extractColor(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("extractStrokeCap", () => {
    test("0", () => {
        let callFunction = () => {
            extractStrokeCap(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            extractStrokeCap(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            extractStrokeCap(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("extractStrokeJoin", () => {
    test("0", () => {
        let callFunction = () => {
            extractStrokeJoin("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            extractStrokeJoin("miter")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            extractStrokeJoin("bevel")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            extractStrokeJoin("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            extractStrokeJoin("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            extractStrokeJoin(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("extractSingleFontFamily", () => {
    test("0", () => {
        let callFunction = () => {
            extractSingleFontFamily("foo bar,")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            extractSingleFontFamily(",Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            extractSingleFontFamily(",")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            extractSingleFontFamily("This is a Text,,This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            extractSingleFontFamily("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            extractSingleFontFamily(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("parseFontString", () => {
    test("0", () => {
        let callFunction = () => {
            parseFontString("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            parseFontString("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            parseFontString("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            parseFontString("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            parseFontString("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            parseFontString(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("extractFont", () => {
    test("0", () => {
        let callFunction = () => {
            extractFont({ fontFamily: "hsl(10%,20%,40%)", fontSize: 1, fontWeight: { toString: () => "2020-03-01" }, fontStyle: "rgb(20%,10%,30%)" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            extractFont({ fontFamily: "black", fontSize: 5, fontWeight: { toString: () => "2017-03-01" }, fontStyle: "red" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            extractFont({ fontFamily: "green", fontSize: 5, fontWeight: { toString: () => "2019-06-01" }, fontStyle: "rgb(20%,10%,30%)" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            extractFont({ fontFamily: "rgb(0,100,200)", fontSize: 1, fontWeight: { toString: () => "2019-10-01-preview" }, fontStyle: "black" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            extractFont({ fontFamily: "hsl(10%,20%,40%)", fontSize: 1, fontWeight: { toString: () => "2019-07-01" }, fontStyle: "hsl(10%,20%,40%)" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            extractFont({ fontFamily: "", fontSize: -Infinity, fontWeight: { toString: () => "" }, fontStyle: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("extractFontAndLines", () => {
    test("0", () => {
        let callFunction = () => {
            extractFontAndLines("George", "foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            extractFontAndLines("George", "Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            extractFontAndLines("Pierre Edouard", "foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            extractFontAndLines("Pierre Edouard", "Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            extractFontAndLines("Michael", "foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            extractFontAndLines(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("extractAlignment", () => {
    test("0", () => {
        let callFunction = () => {
            extractAlignment("right")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            extractAlignment("center")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            extractAlignment("left")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            extractAlignment("Invalid align: %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            extractAlignment("end")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            extractAlignment(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("LinearGradient", () => {
    test("0", () => {
        let callFunction = () => {
            LinearGradient(-100, 400, 320, 410, 350)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            LinearGradient(-5.48, 90, 100, 1, 410)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            LinearGradient(0, 320, 100, 50, 320)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            LinearGradient(-5.48, 320, 90, 410, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            LinearGradient(100, 380, 520, 30, 320)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            LinearGradient(Infinity, Infinity, undefined, Infinity, Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Pattern", () => {
    test("0", () => {
        let callFunction = () => {
            Pattern("http://base.com", 0, 12, 50, 6)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Pattern("https://croplands.org/app/a/reset?token=", 576, 6, 520, 0.5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Pattern("https://api.telegram.org/bot", 800, 1080, 50, 99)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Pattern("Www.GooGle.com", 15, 12000, 550, 30)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Pattern("http://base.com", 320, 6, 350, 287)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Pattern(undefined, -Infinity, -Infinity, -Infinity, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
