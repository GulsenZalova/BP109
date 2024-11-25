import BaseURl from "./Api/baseUrl.js"

let tbody=document.querySelector("tbody")
let addForm=document.querySelector(".add-form")
let name=document.querySelector("#name")
let desc=document.querySelector("#desc")


 async function GetData(){
     let {data} = await axios.get(BaseURl)
     ShowCategories(data)
 }

 GetData()


 function ShowCategories(categories){
    tbody.innerHTML=""
    categories.forEach(category => {
        tbody.innerHTML+=`
        
        <tr>
        <th scope="row">${category.id}</th>
        <td>${category.name}</td>
        <td>${category.description}</td>
        <td><button data-id=${category.id} class="btn btn-danger delete">Delete</button></td>
      </tr>
        `
        let deleteBtns=document.querySelectorAll(".delete")
        deleteBtns.forEach(deleteBtn=>{
            deleteBtn.addEventListener("click",()=>{
                let id=deleteBtn.getAttribute("data-id")
                DeleteCategory(id)
            })
        })
    });
 }


  async function DeleteCategory(id){
  await axios.delete(`${BaseURl}/${id}`)
   GetData()
 }



addForm.addEventListener("submit",async (e)=>{
    e.preventDefault()
    let newCategory={
        name:name.value.trim(),
        description:desc.value.trim()
    }
     await axios.post(BaseURl,newCategory)
    GetData()
})