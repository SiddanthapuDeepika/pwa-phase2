function getfile(file,callback)
{
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("Application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200")
		{
			callback(xhr.responseText);
		}
	}
	xhr.send(null);
}
getfile("dynamic.json",function(text){
	var data=JSON.parse(text);
	console.log(data);
	profile(data.profile);
	career(data.career);
	education(data.education);
	languages(data.languages);
})
var left=document.querySelector(".left");
var left1=document.querySelector(".left1");
var left2=document.querySelector(".left2");
function profile(e){
	var img=document.createElement("img");
	img.src=e.img;
	left1.appendChild(img);
	var h2=document.createElement("h2");
	h2.textContent=e.name;
	left2.appendChild(h2);
	var h21=document.createElement("h3");
	h21.textContent=e.roll;
	left2.appendChild(h21);
	var h22=document.createElement("h2");
	h22.textContent=e.place;
	left2.appendChild(h22);
}
var right=document.querySelector(".right");
function career(e)
{
	var h1=document.createElement("h1");
	h1.innerHTML="RESUME BUILDING";
	right.appendChild(h1);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	var h2=document.createElement("h2");
	h2.innerHTML="Career Objective";
	right.appendChild(h2);
	var p=document.createElement("p");
	p.textContent=e.info;
	right.appendChild(p);
	var hr=document.createElement("hr");
	right.appendChild(hr);
}
function education(e)
{
   var h2=document.createElement("h2");
   h2.innerHTML="Educational Details";
   right.appendChild(h2);
    var table=document.createElement("table");
    table.border="2";
    var tr1="<tr><th>S.no</th><th>Institute</th><th>Course</th><th>Percentage</th><th>YOP</th></tr>";
    var tr2="";
    for(i=0;i<e.length;i++)
    {
    	tr2=tr2+"<tr><td>"+e[i].sno+"</td><td>"+e[i].degree+"</td><td>"+e[i].institute+"</td><td>"+e[i].per+"</td><td>"+e[i].yop+"</td></tr>";
    }
    table.innerHTML=tr1+tr2;
    right.appendChild(table);
    var hr=document.createElement("hr");
	right.appendChild(hr);
}