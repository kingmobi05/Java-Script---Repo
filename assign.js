// let btn = document.createElement("button");
// btn.innerHTML = "Click Me";
// document.body.appendChild(btn)

// btn.addEventListeners("Click", () => {
// 	let coloring = document.getElementsByTagName("body")[0];
// 	coloring.innerHTML = "change background color";
// 	body.style.background = "red";
// })



let data = [
    {
        id: 1,
        name: "tunde",
        email: "tunde@gmail.com"
    },
    {
        id: 2,
        name: "olamide",
        email: "olamide@gmail.com"
    },
    {
        id: 3,
        name: "prosper",
        email: "prosper@gmail.com"
    },
];

readAll = () => {
    localStorage.setItem("object", JSON.stringify(data));
    let prosper = document.querySelector(".data_table");
    let myObject = localStorage.getItem("object");
    let myData = JSON.parse(myObject);
    // console.log(myData)
    let element = "";
    myData.map(x => (
        element += `
            <tr>
            <td>${x.id}</td>
            <td>${x.name}</td>
            <td>${x.email}</td>
            <td><button onclick="myEdit(${x.id})">Edit</button></td>
            <td><button onclick="myDelete(${x.id})">Delete</button></td>
            </tr>
        `
    )
    )
    prosper.innerHTML = element;

}

function myCreate(){
    document.querySelector(".create-form").style.display="block";
    document.querySelector(".add_div").style.display="none";
    
}

function myAdd(){
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;
    let myclass = Math.floor(Math.random() * 1000)
    var myObject = {id:myclass, name:name, email:email}
    data.push(myObject)
    document.querySelector(".create-form").style.display="none";
    document.querySelector(".add_div").style.display="block";
    readAll()
}

function myEdit(id){
    document.querySelector(".update_form").style.display="block";
    let myGet = data.find(x => x.id == id);
    document.querySelector(".uid").value = myGet.id;
    document.querySelector(".uname").value = myGet.name;
    document.querySelector(".uemail").value = myGet.email;
}
 
function myUpdate(){
    let id = document.querySelector(".uid").value;
    let name = document.querySelector(".uname").value;
    let email = document.querySelector(".uemail").value;
    let myIndex = data.findIndex(x => x.id == id);
    data[myIndex] = {id:id, name:name, email:email}
    readAll()
    document.querySelector(".uname").value = "";
    document.querySelector(".uemail").value = "";
}

function myDelete(id){
    let myIndex = data.findIndex(x => x.id == id);
    data.splice(myIndex, 1);
    readAll()
}