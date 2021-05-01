var guest_list = []
function submitguest()
{
var GuestName = document.getElementById("guestinput").value
guest_list.push(GuestName);
guest_list.sort();}
function searching()
{
 var s = document.getElementById("searchinput").value
 var found = 0;
 var j;
 for (j=0; j<guest_list.length; j++)
   {
         if(s==guest_list[j]){
             found=found+1;
   }}
document.getElementById("searchinput").innerHTML="name found"+found+"time/s";
console.log("found name"+found+"time/s");
}

function showlist()
{

    var htmldata;
    htmldata="<ol class = 'guestlist'>"
    guest_list.sort();
    for(var i=0;i<guest_list.length;i++){
     htmldata=htmldata+ "<li>" + guest_list[i] + "</li>"}
     htmldata=htmldata+"</ol>"
     document.getElementById("showbutton").innerHTML = htmldata;

}
