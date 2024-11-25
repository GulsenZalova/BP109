// Fetch javascriptin oz methodudu, axios kenardan daxil edilir

// async function GetData() {
//  let res = await  fetch("https://northwind.vercel.app/api/categories")
//  let data = await res.json()
//  console.log(data)
// }
// GetData()
// Get


//  axios , async-await , try-catch

// async function GetData(){
// try{
//     let res= await axios.get("https://northwind.vercel.app/api/cate")
//     console.log(res.data)
// }catch(err){
//     console.log(err)
// }
// }

// GetData()




// GetById


// axios.get("https://northwind.vercel.app/api/catego")
// .then(res=>console.log(res.data))
// .catch(err=>console.log(err))


// Delete


// fetch("https://northwind.vercel.app/api/categories/4",{
//     method:"DELETE"
// })
// .then(res=>res.json())
// .then(data=>console.log(data))



axios.delete("https://northwind.vercel.app/api/categories/11")
.then(res=>console.log(res.data))



// Post


// let newCategory={
//     name:"new sonuncu",
//     description:"new new"
// }


// axios.post("https://northwind.vercel.app/api/categories",newCategory)
// .then(res=>console.log(res.data))


// Put

// let UpdateCategory={
//     name:"update new",

// }

// axios.put("https://northwind.vercel.app/api/categories/8",UpdateCategory)
// .then(res=>console.log(res.data))