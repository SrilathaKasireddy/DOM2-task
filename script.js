var div1=creatediv("div","id","container")
var div2=creatediv("div","id","calculator")
var button1=createbutton("input","id","output-screen","")
var br7=createbreak();
var button2=createbutton("button","id","delete","DEL")
button2.addEventListener("click",clear)
var button3=createbutton("button","id","percn","%")
button3.addEventListener("click",disperc)
var br1=createbreak();
var button4=createbutton("button","id","divs","/")
button4.addEventListener("click",disdiv)
var button5=createbutton("button","id","seven","7")
button5.addEventListener("click",dis7)
var button6=createbutton("button","id","eight","8")
button6.addEventListener("click",dis8)
var br2=createbreak();
var button7=createbutton("button","id","nine","9")
button7.addEventListener("click",dis9)
var button8=createbutton("button","id","mul","x")
button8.addEventListener("click",dismul)
var button9=createbutton("button","id","four","4")
button9.addEventListener("click",dis4)
var br3=createbreak()
var button10=createbutton("button","id","five","5")
button10.addEventListener("click",dis5)
var button11=createbutton("button","id","six","6")
button11.addEventListener("click",dis6)
var button12=createbutton("button","id","minus"," - ")
button12.addEventListener("click",dismin)
var br4=createbreak()
var button13=createbutton("button","id","one","1")
button13.addEventListener("click",dis1)
var button14=createbutton("button","id","two","2")
button14.addEventListener("click",dis2)
var button15=createbutton("button","id","three","3")
button15.addEventListener("click",dis3)
var br5=createbreak()
var button16=createbutton("button","id","plus","+")
button16.addEventListener("click",displus)
var button17=createbutton("button","id","zero","0")
button17.addEventListener("click",dis0)
var button18=createbutton("button","class","equal","=")
button18.addEventListener("click",solve)
var br6=createbreak()
document.body.append(div1,div2,button1)
document.body.append(br7,button2,button3,br1,button4,
	button5,button6,br2,button7,button8,button9,br3,button10,button11,button12,br4,
	button13,button14,button15,br5,button16,button17,button18,br6
	);

function creatediv(tagname,attributename,attributevalue){
var div =document.createElement(tagname);
div.setAttribute(attributename,attributevalue);
return div ;
}
function createp(tagname,attributename,attributevalue){
	var p =document.createElement(tagname);
	p.setAttribute(attributename,attributevalue);
	return p;

	}
	function createbutton(tagname,attributename1,attributevalue1,value){
		var button =document.createElement(tagname);
		button.setAttribute(attributename1,attributevalue1);
		button.innerHTML=value
		return button;
		}
		function createbreak(){
			var br=document.createElement("br");
			return br;
		}

//function for displaying values
function dis1()
{
document.getElementById("output-screen").value+=1
 
 }
	function dis2()
{
document.getElementById("output-screen").value+=2
 
 }
	function dis3()
{
document.getElementById("output-screen").value+=3
 
 }
	function dis4()
{
document.getElementById("output-screen").value+=4
 
 }
	function dis5()
{
document.getElementById("output-screen").value+=5
 
 }
	function dis6()
{
document.getElementById("output-screen").value+=6
 
 }
	function dis7()
{
document.getElementById("output-screen").value+=7
 
 }
function dis8()
{
document.getElementById("output-screen").value+=8
 
 }
	function dis9()
{
document.getElementById("output-screen").value+=9
 
 }
	function dis0()
{
document.getElementById("output-screen").value+=0
 
 }

	function disdiv()
{
document.getElementById("output-screen").value+="/"
 
 }

	function displus()
{
document.getElementById("output-screen").value+="+"
 
 }

	function dismin()
{
document.getElementById("output-screen").value+="-"
 
 }
	function dismul()
{
document.getElementById("output-screen").value+="*"
 
 }
	function disperc()
{
document.getElementById("output-screen").value+="%"
 
 }
//function for evaluation
function solve()
{
let x = document.getElementById("output-screen").value
let y = eval(x)
document.getElementById("output-screen").value = y
}
//function for clearing the display
function clear()
{
document.getElementById("output-screen").value = ""
}
