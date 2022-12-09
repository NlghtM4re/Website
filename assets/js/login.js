function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="NightM4re"&& password=="123")
{
    alert("login succefully");
    window.location.href = "https://www.google.com"
    return false;

}
else
{
    alert("login failed");
}


}