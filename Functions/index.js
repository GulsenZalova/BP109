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

// let num1=+prompt("num1")
// let num2=+prompt("num2")


//  High Order Functions 
// function Calc(num1,num2,callback){
//     let result=callback(num1,num2)
//     return result
// }

// // CallBack Functions
// function Sum(x,y){
//     return x+y
// }


// CallBack Functions
// function Cixma(a,b){
//     return a-b
// }

// console.log(Calc(num1,num2,Sum))
// console.log(Calc(num1,num2,Cixma))



const students = [
        { name: "Ali", scores: [90, 85, 92] },
        { name: "Mammal", scores: [75, 80, 85] },
        { name: "Camil", scores: [90, 95, 85] },
        { name: "Davud", scores: [100, 100, 100] }
      ];


// tələbələr array-ində tələbələrin ortalaması ən yüksək olanı, ortalaması 90-dan yuxarı olanları tapan proqram yazın



let averages=[]
for(let i=0;i<students.length;i++){
        let total=0
        let ave=0
     for(let j=0;j<students[i].scores.length;j++)  {
        total+=students[i].scores[j]
        ave=total/students[i].scores.length
     }  
     averages.push(ave)
}

// console.log(averages)


// Task Part 1 
let max=0
// 100
// for(let i=0;i<averages.length;i++){
//         if(averages[i]>max){
//         max=averages[i]
//         }

//         if(averages[i]>90){
//                 console.log(averages[i])
//         }
// }

// console.log(max)

// Task 2

// for(let i=0;i<averages.length;i++){
      
// }




let str="enene"
let reverse=""


for(let i=str.length-1;i>=0;i--){
       reverse+=str[i]
}
if(str==reverse){
console.log(`${str} palindromdur`)
}else{
console.log(`${str} palindrom deyil`)
}
console.log(reverse)