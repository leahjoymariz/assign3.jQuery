//create a constructor for the users
function User(email,pass,fname,lname,age,gender,phone,payment,color){
    this.email= email;
    this.password= pass;
    this.fname= fname;
    this.lname= lname;
    this.age= age;
    this.gender= gender;
    this.phone= phone;
    this.payment= payment;
    this.color= color;
}
function validation(user){
    let valid= true;

    if(user.email==""){
        valid= false;
        $ ("#txtEmail").addClass("alert-error");
    }
    if(user.password==""){
        valid= false;
        $ ("#txtPassword").addClass("alert-error");
    }
    if(user.fname==""){
        valid= false;
        $ ("#txtFirstName").addClass("alert-error");
    }
    if(user.lname==""){
        valid= false;
        $ ("#txtLastName").addClass("alert-error");
   
    }
    if(user.age==""){
        valid= false;
        $ ("#txtAge").addClass("alert-error");
    }
    if(user.gender==""){
        valid= false;
        $ ("#txtGender").addClass("alert-error");
    }
    if(user.phone==""){
        valid= false;
        $ ("#txtPhone").addClass("alert-error");
    }
    if(user.payment==""){
        valid= false;
        $ ("#selPayment").addClass("alert-error");
    }

    if(user.color=="#000000"){
        valid= false;
        $("#selColor").addClass("alert-error");
    }

    return valid;
}

function validatePass(){
    let inputPassword = $("#txtPassword"); //this is the html element
    let password = inputPassword.val(); //this is the password
    if(password.length<6){
        inputPassword.css("background-color","red"); //jquery changed the css
    }else{
        inputPassword.css("background-color","green");
    }
}



function register(){
    //get the valueform the form
    let inputEmail = $("#txtEmail").val();
    let inputPassword =  $("#txtPassword").val();
    let inputFname =  $("#txtFirstName").val();
    let inputLname =  $("#txtLastName").val();
    let inputAge =  $("#txtAge").val();
    let inputGender =  $("#txtGender").val();
    let inputPhone =  $("#txtPhone").val();
    let inputPayment =  $("#selPayment").val();
    let inputColor =  $("#selColor").val();
    //create the user using the constructor
    let newUser = new User (inputEmail,inputPassword,inputFname,inputLname,inputAge,inputGender,inputPhone,inputPayment,inputColor);
    
    
    if(validation(newUser)){
        saveUser(newUser);//this fn is under storeManager
    }
   
  

    //clear the form
    $("input").val("");
}

function init(){
    $("#btnAdd").click(register);
    $("#txtPassword").keyup(validatePass);


}

window.onload=init;

