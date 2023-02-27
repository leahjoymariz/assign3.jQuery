function login(){
    //get the values from the HTML (username, password)
    let uname=$("#txtUserName").val();
    let pass=$("#txtPassword").val();
    let flag=true;
    
    //get the users from the LS
    let users = readUsers();

    //travel the usersArray
    for(let i=0;i<users.length;i++){
        let user = users [i];
        if(pass==user.password &&
            uname==user.username){
                window.location="users.html";
            }else{
                flag=false;
            }
    }
    if(!flag){
        $("#alert-error").removeClass("hide");
        setTimeout(function(){
            $("#alert-error").addClass("hide");
        },3000);
    }
   
     
}