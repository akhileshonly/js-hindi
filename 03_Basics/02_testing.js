//Question 1: write a program to find the area of a trinage if the three sides are 5, 6, 7?

var a = 5;
var b = 6;
var c = 7;

//var s = (a+b+c)/2
//const l = (s*((s-a)*(s-b)*(s-c)))
// if (l==216){
// console.log("i am OK")
// }
//var area = Math.sqrt(l)
//console.log(area)

// function permiter(a, b, c){
// } return

//Question 2: how to print the window content.

{/* <html>
<body>
    <p>click here to print this page</p>
    <button onclick ="myfn()">"print this"</button>
    
    <script>function myfn(){
    window.print();
}
</script>
</body></html> */}

function myfn(){

    window.print();
}

//Question 3: write a JS program to find the current date in mm/dd/yyyy format and time.

// const date = new Date();
//console.log(date.toLocaleString())
//console.log(Date.now());
//console.log(date.toLocaleDateString())

//Question 4: Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
const date = new Date();
const day =  date.getDay();
const daylist = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"]

//console.log(daylist[day])

console.log("Today is" + " : " + daylist[day]);

//Question 5: Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front
const agh1 = "w3resource"

function myfunc(){
return agh1.replace('w', " ")
} //console.log(myfunc(agh1));

// Question 6: Print number 1 to 10

//for (let i=1; i<=10; i++)//{ //without function
// console.log(i);
//     }
// with function
    // function prit(){
    //     for (let i=0; i<=10; i++){
    //         console.log(i);
    //     }
    // } return prit();

// Question 7: Reverse the give string 

// function myfunic(str){

//     //var str = "akhil"
//     var newarr = str.split('') // break the string into an empty array
//     //console.log(newarr)
//     var newrevspiltarr = newarr.reverse()
//     var newrevrsedarr = newrevspiltarr.join('')
//   //console.log(nwstr)
//   return newrevrsedarr
// }
// console.log(myfunic('akhil'));

function stringrev(str1){

var newary2 = str1.split('')
var nw3arr = newary2.reverse()
var comparr = nw3arr.join('')

return comparr
} stringrev('akhilesh yadav')

// Question 8: 


if((clss3[0]&&clss3[1]!=null) && singleprice !=null)
  
    {
     //alert('Hi this works')
     
    };
  
(function (){}) // local function
function name1 (){} // simple function
( () => { }) // arrow function