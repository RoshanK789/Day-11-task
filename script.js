//* dom create function
function Domcreation(tag,attr,atttrcontent,content)
{
    const element= document.createElement(tag);
    element.setAttribute(attr,atttrcontent)
    element.innerHTML=content;
    return element;
}

function btndom(tag,attr,atttrcontent)
{
    const element= document.createElement(tag);
    element.setAttribute(attr,atttrcontent)
    return element;
}

//* Header element creation.

const header=document.createElement("header");
const h1=Domcreation("h1","id","title","Dom manipulation");
const p=Domcreation("p","id","description","Calculator");

header.append(h1,p)
document.body.append(header)

//* Calculator design section

const input=Domcreation("input","id","result","0");
input.innerHTML="0";
input.setAttribute("readonly","true");


const btn1=Domcreation("button","id","1","1")
const btn2=Domcreation("button","id","2","2")
const btn3=Domcreation("button","id","3","3")
const btn4=Domcreation("button","id","4","4")

const btn5=Domcreation("button","id","5","5")
const btn6=Domcreation("button","id","6","6")
const btn7=Domcreation("button","id","7","7")
const btn8=Domcreation("button","id","8","8")

const btn9=Domcreation("button","id","9","9")
const btn0=Domcreation("button","id","0","0")
const btn00=Domcreation("button","id","00","00")

const add=Domcreation("button","id","add","+");
const subtract=Domcreation("button","id","subtract","-");
const mul=Domcreation("button","id","mul","x");
const div=Domcreation("button","id","div","/");

const equal=Domcreation("button","id","equal","=");
const dot=Domcreation("button","id","dot",".");
const del=Domcreation("button","id","<-","←");
const clear=Domcreation("button","id","clear","c");

const maindiv=btndom("div","class","container");

const container=btndom("div","class","container");
const con=btndom("div","class","container");
const con1=btndom("div","class","container");
const con2=btndom("div","class","container");
const con3=btndom("div","class","container");
const con4=btndom("div","class","container");

const crow=btndom("div","class","row");
const crow1=btndom("div","class","row");
const crow2=btndom("div","class","row");
const crow3=btndom("div","class","row");
const crow4=btndom("div","class","row");
const crow5=btndom("div","class","row");

//* setAttribute

btn1.setAttribute("onclick","display(1)");
btn2.setAttribute("onclick","display(2)");
btn3.setAttribute("onclick","display(3)");
btn4.setAttribute("onclick","display(4)");
btn5.setAttribute("onclick","display(5)");
btn6.setAttribute("onclick","display(6)");
btn7.setAttribute("onclick","display(7)");
btn8.setAttribute("onclick","display(8)");
btn9.setAttribute("onclick","display(9)");
btn0.setAttribute("onclick","display(0)");
btn00.setAttribute("onclick","display('00')");
add.setAttribute("onclick","display('+')");
subtract.setAttribute("onclick","display('-')");
mul.setAttribute("onclick","display('*')");
div.setAttribute("onclick","display('/')");
dot.setAttribute("onclick","display('.')");
clear.setAttribute("onclick","clearScreen()");
equal.setAttribute("onclick","cal()");
del.setAttribute("onclick","dels()");
maindiv.setAttribute("id","style");
maindiv.setAttribute("class","m-auto p-4")
input.setAttribute("class","p-3")
header.setAttribute("class","text-center")



container.append(input);
crow.append(container);
con.append(clear,del,dot,mul);
crow1.append(con);
con1.append(btn7,btn8,btn9,div);
crow2.append(con1);
con2.append(btn4,btn5,btn6,subtract);
crow3.append(con2);
con3.append(btn1,btn2,btn3,add);
crow4.append(con3);
con4.append(btn0,btn00,equal);
crow5.append(con4);

maindiv.append(crow,crow1,crow2,crow3,crow4,crow5);
document.body.append(maindiv);
document.getElementById('result').value ="0"

//* clear function

function dels()
{
    let x=document.getElementById('result').value;
    const arr=x.split('');
    arr.pop()
    var str=arr.toString();
    str=arr.join("");
    document.getElementById('result').value=str;

}

//* display function

function display(val){
     if(document.getElementById('result').value==0)
     {
        document.getElementById('result').value = val
     }
    else{
        document.getElementById('result').value += val
    }
    return val

}

//* clear screen function

function clearScreen(){

    document.getElementById('result').value = '0'

}

//* cal function

function cal(){
    let x = document.getElementById('result').value
    
    x=x.replace("+"," + ")
        .replace("-"," - ")
        .replace("*"," * ")
        .replace("/"," / ");
    let array1 = x.split(' ');
    var num1,op,num2;
    var value;
    var i=0;
    var ts;
    
    for(i=0;i<array1.length;i++)
    {
        if(i==0)
        {
            num1=array1[i];
            i++;
        }
        else{
            num1=ts;
                
        }
        op=array1[i];
        i++;
        num2=array1[i];
        value=num1+op+num2;
        ts=eval(value);
    }
    document.getElementById('result').value = ts
    return ts
}
