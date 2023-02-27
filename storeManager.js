function saveUser(user){
    let oldUsers = readUsers();
    oldUsers.push(user);
   let val = JSON.stringify(oldUsers);
    console.log(val);
    localStorage.setItem("users",val);//this fn sends elements to localStorage
    
}

function readUsers(){
    let users = localStorage.getItem("users"); //this fn get elements from localStorage
    console.log(users);
    if(!users){

        return[];
    }else{
        let listUsers = JSON.parse(users)
        console.log(listUsers);
        return listUsers;
    }
  


}