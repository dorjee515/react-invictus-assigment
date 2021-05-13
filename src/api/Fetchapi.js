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

  const dtos=data.toString().split(" ");
  const output=[]

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
 const sortable = Object.fromEntries(
 Object.entries(output).sort(([,a],[,b]) => b-a));

     var cnt=0;
      for(const e of Object.keys(sortable)){
        if(cnt!==a){
        console.log(`${e} : ${sortable[e]}`)
         cnt+=1;  
       } 

     }
   


 return (
   <div>
   <input type="number" id="inp" name="number"></input> <br/>
   <button onClick={apiGet} >submit</button><br/> 
   </div>
  )
}


export default Fetchapi
