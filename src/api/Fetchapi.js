import React,{useState} from 'react'
function Fetchapi() {
  const url='https://raw.githubusercontent.com/invictustech/test/main/README.md'
  const [data,setData] = useState([]);

  const [n,f]=useState([]);
  const apiGet=()=>{
    fetch(url)
    .then((response)=>response.text())    
    .then((text)=>{
      setData(text);
     });
     f(document.getElementById("inp").value); 
    }
    //converting raw text into string and removing all unesssary spaces and special characters from the
  const dtos=data.toString().toLowerCase().replace(/  [^a-zA-Z ]/g, "").split(" "); 
  const output=[]

  //finding frequency of each words
  for(var i=0;i<dtos.length;i++){
   var word=dtos[i];
      if(isNaN(word)){
        if(output[word]===undefined){
          output[word]=1;
        }else {
           output[word]+=1;
          }
       }
    }

 var a=parseInt(n);
 //sorting object with frequency in decreasing order
 const sortable = Object.fromEntries(
  Object.entries(output).sort(([,a],[,b]) => b-a));

 //making an object which contain n words and frequency
   const pp=[]
    var c=0;
    
    for(const e of Object.keys(sortable)){
      if(c!==a){
        pp[e]=sortable[e];
         c+=1;  
         }
      else {
           break;
          }
       }
      
 //css part1 
 const mystyle1={
  backgroundColor: "lightgrey",
  width: "30%",
   border: "5px solid black",
  padding: "40px",
  margin: "30px",
 };

// css 2 for table
 const mystyle2={
  border: "1px solid black",
  width:"60%",
 marginLeft:"70px"
    };

 return (
   <div>
     <h1 style={{fontFamily:"sans-serif"}}>Ranking words with there frequency</h1>
   <b>Number:</b><input style={{marginLeft:"20px",height:"17px"}}type="number" id="inp" name="number"></input> <br/>
   <button style={{marginLeft:"20px",marginTop:"5px",backgroundColor:"red",borderRadius:"70px"}}onClick={apiGet} >submit</button><br/> 
   <div style={mystyle1}>
   <table style={mystyle2}>
    <thead>
      <tr>
       <th style={mystyle2}>Words</th>
       <th style={mystyle2}>Frequency</th>
       </tr>
    </thead>
    <tbody>
      {Object.entries(pp).map(([key,value])=>(
     <tr style={mystyle2} key={key}>{key} <td  style={mystyle2}> {value}</td></tr>
    ))}
    </tbody>
</table>
   </div>
   </div>
  )
}


export default Fetchapi
