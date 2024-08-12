console.log("script file working")

function beforesubmit(){
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("inputdate.value",inputdate.value); //string form
    let formatedata = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formatedata;
}