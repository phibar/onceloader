//@ts-ignore
import { Word } from "ior://https://woda.phibar.one/Word.js"
import { IOR } from "./IOR.js";
import { Thing } from "./Thing.js";

//No intellisense because typescript doesn't know this stuff
const word1 = new Word();
console.log("\n\nWORD1: ")
word1.start()  

//Workaround define type
// now you can access interface ;) as thougt of in OOP
// (so IOR class should check if interface is implemented and handle not found errors ...)
const word2:Thing =new Word();
console.log("\nWORD2: ")
word2.start()

// of course this is also working dynamic
async function ASYNC() {
    console.log("\n\n")

    //@ts-ignore 
    const DynamicWord = (await import("ior://https://woda.phibar.one/Word.js")).Word
    const word3:Thing = new DynamicWord();
    console.log("WORD3: ")
    word3.start()

    // or with an "IOR" class and hidden ts-ignore
    console.log("\n\n")
    const IORWORD = await IOR.load<Thing>("ior://https://woda.phibar.one/Word.js","Word")
    if(IORWORD){ // could be undefined when not loadable
        const word4 = new IORWORD()
        console.log("WORD4: ")
        word4.start()
    }
    console.log("\n\n")
}

ASYNC()