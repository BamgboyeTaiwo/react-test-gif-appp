import React, {useState, useEffect} from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import Image from 'next/image'

import Axios from 'axios';
import styles from './main.module.css';


function HomePage() {

// using React function UseState to manage state 
const [giphyy, setGiphy] = useState(false)
const [searchTerm, setSearchItem] = useState()
const [resData, setData] = useState([])
const [showDetails, setSingleGif] = useState()
const [singleView, setSingleView] = useState(false)
const [isLoading, setIsLoading] = useState(false)

// Handle finder function
async function HandleSubmit (e) {
  e.preventDefault();
  setIsLoading(true)
  setGiphy(false)
  try{  
  const response = await Axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=7SVgiay9MnyNJn3NIBjlaUfa12WW4iHr&limit=24`)

  if(response.data){ 
   let responseData = JSON.stringify(response.data.data)
   localStorage.setItem('gif', responseData)
   setGiphy(true)
   setIsLoading(false)
  }
}
catch(err){
  console.log(err)
  setIsLoading(false)
}

}

function getGif(e) {
  // e.preventDefault();
  let selectGif =   
  resData.filter((i) => {
    return i.id === e;
  })
  console.log(selectGif);
  setSingleGif(selectGif[0])
  let responseData = JSON.stringify(selectGif)
  localStorage.setItem('SingleGif', responseData)
  setGiphy(false)
  setSingleView(true)
}

function HandleBack () {
  setSingleView(false)
  setGiphy(true)
}


useEffect(() => {
 if (giphyy){

  function saveData () {
    if (giphyy) { 
    localStorage.getItem('gif')
    setData(JSON.parse(localStorage.getItem('gif')))
  } else {
    localStorage.removeItem('gif')
  }
}
  return saveData()
 }

}, [giphyy])



  return (
    <div className="App" style={{paddingTop: '3em' }}>
      <header className="App-header">
      <div className={`mx-auto container ${styles.cont}`}>
        <div className='flex grid-cols-12 justify-content-center'>
          <div className='col-span-7 mx-auto' >
        <form onSubmit={HandleSubmit}> 
         
        <h4 className='text-center text-bold'>RIBY GIPHY APP by Bamgboye Taiwo </h4>
       
        { singleView ? ( <button className={`btn btn-danger ${styles.backbtn} ` } onClick={HandleBack}> &larr; G0 BACk  </button> ) : 
        ( 
            <>
            <div className='flex grid-col-12 w-50 mx-auto justify-center mt-7'>

                <div className='col-span-9'>
                <input onChange={e => setSearchItem(e.target.value)}  name='searchItem' className={`p-4 form-control ${styles.input} `} required type='text' placeholder='Search Gifs' />

                </div>
                <div className='col-span-3'>
                {isLoading ? ( <button className='btn btn-default' disabled='disable' type='submit'> Loading...</button>) : 
                    (
                        <button className={` px-4 py-4 ${styles.search} `} type='submit'>Search Now</button>
                    )}

                </div>

            </div>

            </>

          
        )}

       </form>
       <br/>

          </div>
        </div>

            
        {giphyy ? (

         <div className='grid grid-cols-12'>
        
         {resData.map( (gif, index) => {
            return (
              <div className='col-span-3  mx-2' key={gif.id} > 
           
              <a onClick={() => getGif(gif.id)}>       
              {/* <Pane elevation={2} style={{marginTop: '1em'}}> */}
                <img 
                src={gif.images.downsized.url} 
                alt={gif.slug}   
                width='250'           
                height='200'           
                />
              {/* </Pane> */}
              </a>
              
              </div>
            )
            
         }) }
         </div>
    
       ) : '' }

       {singleView ? (
         <>
        <div className='grid grid-cols-12 justify-content-center'>
          <div className='col-span-4 md:col-span-3 sm:col-span-12 lg:col-span-3'  md={4}>            <img 
                src={showDetails.images.downsized.url} 
                alt='yes'   
                width='100%'           
                />
            {/* <Pane>

            </Pane> */}
          </div>
          <div className='col-span-8 ml-2' md={7}>
          <div className='border' style={{padding: '1em'}}>


          <table className={`table-fixed border-separate ${styles.table}`}>
                {/* <thead>
                    <tr>
                    <th>Tag</th>
                    <th>Details</th>

                    </tr>
                </thead> */}
                <tbody className='p-2'>
                    <tr className=''>
                    <th>id</th>
                    <td>{showDetails.id}</td>
                    </tr>

                    <tr>
                    <th>Import Date</th>
                    <td>{showDetails.import_datetime}</td>

                    </tr>

                    <tr>
                    <th>Title</th>
                    <td>Earth, Wind, and Fire</td>
                    </tr>

                    <tr>
                    <th>Url</th>
                    <td>{showDetails.url}</td>
                    </tr>
                    <tr>
                    <th>Embed_url</th>
                    <td>{showDetails.embed_url} </td>
                    </tr>
                    <tr>
                    <th>Rating</th>
                    <td>{showDetails.rating}</td>
                    </tr>
                </tbody>
            </table>
        
          
         
          </div>

          
          </div>
        </div>
        
         
          
         </>
       ) : ''}
        
       
      </div>
 
      </header>
    </div>
  );
}

export default HomePage;