function handleFormSubmit(event){
    event.preventDefault();
  
    var userDetails = {
      "expenseAmount": event.target.amount.value,
      "description": event.target.descrip.value,
      "expensesCategory": event.target.expensesCategory.value,
    };
       
    let keyname = event.target.expensesCategory.value;
    localStorage.setItem(keyname, JSON.stringify(userDetails));

let fulist = document.querySelector("#expenseList");
  
let dltBtn=document.createElement("button");
let btntext = document.createTextNode("delete");
dltBtn.appendChild(btntext);
dltBtn.className="deleteBtn";
dltBtn.style.marginLeft="20px"


let edtBtn=document.createElement("button");
let edtbtntext = document.createTextNode("edit");
edtBtn.appendChild(edtbtntext);
edtBtn.className="deleteBtn";
edtBtn.style.marginLeft="20px"


let li = document.createElement("li");
li.innerHTML=`${userDetails.expenseAmount} - ${userDetails.expensesCategory} - ${userDetails.description}`;

li.append(dltBtn);
li.append(edtBtn);
fulist.append(li);
li.style.margin="20px";


dltBtn.addEventListener("click",(event)=>{
    event.stopPropagation;
        const listToDelete=event.target.parentElement;
        listToDelete.remove();
})

edtBtn.addEventListener("click",(event)=>{
    event.stopPropagation;
    let popUp = document.querySelector("#popUp");
    popUp.style.display="initial";
    const listToDelete=event.target.parentElement;
    listToDelete.remove();
})

}




/// Edit functionality


function handleEditSubmit(event){
    event.preventDefault();
  
    var userDetails = {
      "expenseAmount": event.target.amount.value,
      "description": event.target.descrip.value,
      "expensesCategory": event.target.expensesCategory.value,
    };
       
    let keyname = event.target.expensesCategory.value;
    localStorage.setItem(keyname, JSON.stringify(userDetails));

let fulist = document.querySelector("#expenseList");
  
let dltBtn=document.createElement("button");
let btntext = document.createTextNode("delete");
dltBtn.appendChild(btntext);
dltBtn.className="deleteBtn";
dltBtn.style.marginLeft="20px"


let edtBtn=document.createElement("button");
let edtbtntext = document.createTextNode("edit");
edtBtn.appendChild(edtbtntext);
edtBtn.className="deleteBtn";
edtBtn.style.marginLeft="20px"


let li = document.createElement("li");
li.innerHTML=`${userDetails.expenseAmount} - ${userDetails.expensesCategory} - ${userDetails.description}`;

li.append(dltBtn);
li.append(edtBtn);
fulist.append(li);
li.style.margin="20px";

let popUp = document.querySelector("#popUp");
popUp.style.display="none";
}