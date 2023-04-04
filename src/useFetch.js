//custom hooks
import { useState,useEffect } from "react";

const useFetch = (url) =>{     //useFetch is named because the file name is useFetch (name cannot differ for custom hooks)
    const [Data,SetData] = useState(null);
    const [isLoading,SetisLoading] = useState(true);
    const [error,Seterror] = useState(null);
    
    useEffect(()=>{
        const abortCrtl = new AbortController();

      fetch(url,{signal:abortCrtl.signal})   //this fetch returns a promise
      .then(res=>{
        if(!res.ok){throw Error("Couldn't fetch data from server")};     //if the endpoint is wrong/shutdown/couldn't fetch for some reason this error message is displayed
        return res.json();
      })       //res here is "respone" and not resolve
      .then(data=>{
        SetData(data);
        SetisLoading(false);  //if data is loaded we set isLaoding to false
        Seterror(null)
        })
        .catch(err =>{
            if (err.name === 'AbortError')
            {
                console.log("Abort fetched")
            }
            else{
            SetisLoading(false);
            Seterror(err.message + '  <-- error name')
            }
        })                 //if data couldn't be fetched, catch handles the network/connection exception
    
        return () => abortCrtl.abort();
    },[url]);
    return {Data,isLoading,error};
}

export default useFetch;