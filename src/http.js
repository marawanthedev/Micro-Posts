
// East HTTP library

// library for making http requests
// @version 2.0.0
// @author Marwan Mostafa
// using es6 ,fecthing and arrow fucntions


class EasyHttp{

    // make a http get request
  async  get(url){
  
        const d= await fetch(url);

        const data=await d.json();

        return data;
    }
  
    // make a http post request
  
    async  post(url,data){
  
     const p= await fetch(url,{
         method:"POST",
         headers:{"Content-type":"application/json"},
         body:JSON.stringify(data)
     });
     const po_data=await p.json();

     return po_data;

    }
  
    // Make an http PUT Request
  
    async put(url,data){
        
        const p= await fetch(url,{
            method:"PUT",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(data)
        })
        const pu_data= await p.json();
        return pu_data;
  
    }
  
    // delete request
  
    async delete(url){
  
     
        const d= await fetch(url,{

            method:"DELETE",
            headers:{"Content-type":"application/json"}
        });

        const  de_data=d.json();
  
        if(de_data!==undefined){

            return `Resource delete`;
        }
        else{
            return `Request not complete`
        }
  
  
  }
}

export const http=new EasyHttp();