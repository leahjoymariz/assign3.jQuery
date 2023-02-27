//JS vs Query
//select an html element and hide it
//ID
document.getElementById("txtEmail").style.display="none";

$("#txtPassword").hide();

//Tagname
for(let i=0; i<9;i++){
    document.getElementsByTagName("label") [i].style.display="none";
}
$("label").hide();

//className
document.getElementsByClassName("menu")[0].style.display="none";
$(".menu a:first").hide();

$("#btnAdd").click(example);

function example(){
    $(".form").hide();
}