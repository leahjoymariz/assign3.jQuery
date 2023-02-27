function display(usersArray){
    const TABLE= $("#users");
    let tr="";
    //travel the array
    for(let i=0; i<usersArray.length; i++){
        let user = usersArray[i];
        //create the tr
        tr=`
        <tr>
        <td>${user.email}</td>
        <td>${user.fname}</td>
        <td>${user.lname}</td>
        <td>${user.age}</td>
        <td>${user.gender}</td>
        <td>${user.phone}</td>
        <td>${user.payment}</td>
        <td>${user.color}</td>
        <td style="background-color:${user.color}"></td>
        </tr>`;
        //append() the tr into the HTML
        TABLE.append(tr);
    }
}

function init(){
    console.log("Listing users...");
    let users = readUsers();
    display(users);
}
window.onload=init;