function formval()
{
    let x=document.forms["cys"]["fname"].value;
    var n=document.forms["cys"]["number"].value;
    if(x=="")
    {
        window.alert("Name must be filled");
        return false;
    }
    if(n!=21028)
    {
        window.alert("Your RollNo is 21028");
        return false;
    }
    if(x==kausal && n==21028)
    {
        window.alert("You Are Logged In");
        return false;
    }
        
    }