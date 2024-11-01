// function decleration

// f(2)=2x+4
//  parametr, argument
//   return, void


// let name=prompt("adini yaz")
// function SayHello(ad){
//     return (`Salam ${ad}`)
// }

// let num1= +prompt("ilk eded")
// let num2= +prompt("ikinci eded eded")

// function Sum(num1=0,num2=0){
//     let total=num1+num2
//     return this
// }



// let result=SayHello(name)
// console.log(result)
// SayHello()
// SayHello()
// SayHello()
// console.log("hello")






// function expression, anonim function




// let SayHello= function(ad){
//     return (this)
// }


// let result=SayHello("Nigar")


// console.log(result)




// arrow functions



// let SayHello=(name)=>name
// let result=SayHello("Murad")
// console.log(result)




// start, end [start......end]


// let start=1
// let end=10
// let arr=[]
// function Range(start, end){
//     for(let i=start;i<=end;i++){
//         arr.push(i)
       
//     }

//     return arr

//     console.log(arr)
    
// }



// let result=Range(start,end)

// console.log(result)




// arraydeki butun reqemler tekdirmi

// let odds=[1,3,5,7,10]
// let count=0
// // 4
// let FindOdd= function(odds){
//     for(let i=0;i<odds.length;i++){
//         if(odds[i]%2!==0){
//             count++
//         }
//     }

//     if(count==odds.length){
//         return true
//     }else{
//         return false
//     }
// }


// console.log(FindOdd(odds))






// CallBack Functions(basqa funksiyaya argument kimi gonderilen funksiya)
//  High Order Functions (basqa funksiyani parametr kimi qebul eden funksiya)

let num1=+prompt("num1")
let num2=+prompt("num2")


//  High Order Functions 
function Calc(num1,num2,callback){
    let result=callback(num1,num2)
    return result
}

// CallBack Functions
function Sum(x,y){
    return x+y
}


// CallBack Functions
function Cixma(a,b){
    return a-b
}

console.log(Calc(num1,num2,Sum))
console.log(Calc(num1,num2,Cixma))
