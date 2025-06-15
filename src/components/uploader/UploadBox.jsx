import { useState, useRef } from 'react'
import './uploadBox.css'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import { IoDocumentTextOutline } from "react-icons/io5";
import txtImg from '../../assets/txtImg.png';
import { MdOutlineUploadFile } from "react-icons/md";
import {Outlet, Link, useNavigate,Form, redirect, useLoaderData} from 'react-router-dom';
import { AiOutlineFileSearch } from "react-icons/ai";



/*export async function uploadAction({request,params})
{
    const formData = await request.formData();
    const uploadData = Object.fromEntries(formData);
    console.log('inside search action');
    console.log(uploadData);
    let response = await fetch('/upload',
        {
            method : 'POST',
            headers: {
                'Content-Type' : 'multipart/form-data'
            },
            body : formData

        }
        
    );
    let docId = await response.text()

    redirect(`search/${docId}/${uploadData.query}`);

} */

function UploadBox() {
    const submitRef = useRef();
    const [txtDocument, setTxtDocument] = useState(null)
    const [fileName, setFileName] = useState("No selected file")
    const [query, setQuery] = useState(null);
  return (
    <div className='upload-container'>
        <form onSubmit={()=>setTxtDocument(null)} method='post' encType='multipart/form-data' style={{display: 'flex', flexBasis: '95%' , flexDirection: 'column' ,
        justifyContent: 'center' , alignItems: 'center', 
        border: '2px dashed #1475cf' , flexGrow : "1" , cursor: 'pointer', 
        borderRadius:'5px' , backgroundColor : 'rgb(255, 244, 240)'
        }}
        onClick={() => document.querySelector(".input-field").click()}
        >
            <input name='uploadedTxt' type="file" accept='.txt' className='input-field' hidden
            onChange={({ target: {files}}) => {
                files[0] && setFileName(files[0].name)
                if(files){
                    setTxtDocument("File: ")
                }
            }}/>
           
            {txtDocument ?
            <>
            <img src={txtImg} width={100} height={100} alt={txtDocument + fileName} />
            <button ref={submitRef} type='submit' hidden onClick={(event) => event.stopPropagation()}> Actual UPLOAD </button> 
            </>
            :
            <>
            <MdCloudUpload color='#1475cf' size={60} />
            <p>Browse Files to Upload</p>
            </>
        }

            <input value={query} type='text' name='query' placeholder='Enter your query' hidden></input>
        </form>

        <div style={{display : 'flex' ,
                    flexDirection : 'row' ,
                    
        }}>
        <section className='uploaded-row'>
            <AiFillFileImage color='#1475cf' />
            <span className='upload-content'>
                {fileName}
                <MdDelete
                onClick={() => {
                    setFileName("No Selected File")
                    setTxtDocument (null)
                }}
                />


            </span>

            
        </section>
        {txtDocument && <button className='upload-btn' onClick={()=> submitRef.current.click()} > Search  <MdOutlineUploadFile /> </button>}
        </div>
    </div>
  )
}

export default UploadBox