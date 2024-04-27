import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createElement, useState } from 'react';
function App() {
  let downloadbtn=document.querySelector("button");
  function startdownload(filename){
    if(filename==""){
      alert("enter the url of file to download");
    }else{
    downloadbtn.innerText="Downloading file...."
    console.log("button clicked");
    fetchfile(filename)
  }
}

  function fetchfile(url){
    fetch(url).then(res=>res.blob()).then(file=>{
      let tempurl=URL.createObjectURL(file)
      let atag=document.createElement("a");
      atag.href=tempurl;
      atag.download=url.replace(/^.*[\\\/]/, '');
      document.body.appendChild(atag);
      atag.click();
      atag.remove();
      URL.revokeObjectURL(tempurl);
      downloadbtn.innerText="Download file";
      window.location.reload();
    }).catch(()=>{
      downloadbtn.innerText="Download file";
      alert("failed to download file");
    })
  }

  let [state,setstate]=useState('')
  return (
    <div>
      <div className="container">
        <h1 className='text-center mt-5 ms-4 text-white'>Photo Video And File <span className='bg-red'> Downloader</span></h1>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="main-body pt-5 mt-3 ps-3 ">
              <h6 className='mt-2 ms-2 mb-3'>Enter the url of video,photo or pdf file to download</h6>
              <input type="" onChange={(e)=>setstate(e.target.value)} />
              <br />
              <button className='mt-5 text-center btn btn-success'onClick={()=>startdownload(state)}>Download file</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
