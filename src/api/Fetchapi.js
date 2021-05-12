
import React,{useState} from 'react'

function Fetchapi() {
  const url='https://raw.githubusercontent.com/invictustech/test/main/README.md'
  
  const [data,setData] = useState([]);

   const apiGet=()=>{
    fetch(url)
    .then((response)=>response.text())
    .then((json)=>{
      setData(json);
     });
    };

    var s=data.toString();

    var k=s.split(" ");
    
    var output= [{}]   // contain freq and word

  function wordfrequency(){
    for (var i=0; i < k.length; i++) {
      var word = k[i];
      if (output[word] === undefined) {
        output[word] = 1;
      } else {
         output[word] += 1;
            }  
         }  
         for(const x in output){
           if(isNaN(x))
           console.log(x,output[x]);
         }  
      }

  return (
    <div>
      <input type="number" name="number"></input> <br/>
       <button onClick={apiGet}>submit</button>
       <br/>
       {wordfrequency()}
    <div>

      <ul>

      </ul>
    </div>
    </div> 
  );
}

export default Fetchapi
