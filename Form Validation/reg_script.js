function formval()
{
    let name =document.forms["cys"]["uname"].value;
    let num =document.forms["cys"]["num"].value;
    let pswd =document.forms["cys"]["pswd"].value;
    let cpswd =document.forms["cys"]["cpswd"].value;
    let email =document.forms["cys"]["email"].value;
    let phno =document.forms["cys"]["phno"].value;
    let mail = document.forms["cys"]["email"].value;
    let at=mail.IndexOf("@");
    let dot=mail.IndexOf(".");

    if(at<1 || dot<at+2 || dot+2>=x.length)
    {
        window.alert("Please enter a valid email");
    }

    //for non empty parameters
    if(name=="" || num=="" || pswd=="" || cpswd=="" || email=="" || phno=="")
    {
        window.alert("Name must be filled");
        return false;
    
    }

    //password length
    if(pswd.length<8)
    {
        window.alert("Password Is Too Short");
        return false;
    }

    //confirm password
    if(pswd==cpswd)
    {
        return true;
    }
    else
    {
        window.alert("Your Passwords are not same");
    }   

    //phone number length
    if(phno.length<10 || phno.length>10)
    {
        window.alert("Your Phone Number is Either Too Long Or Too Short");
    }

}