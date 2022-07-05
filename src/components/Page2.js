import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Page2() {
  return (
    <div>
        <div className='row'>
        <div className='col-1'>
            <ul>
                <li><SearchIcon/></li>
                <li><SearchIcon/></li>
                <li><SearchIcon/></li>
                <li><SearchIcon/></li>
                <li><SearchIcon/></li>
                <li><SearchIcon/></li>
            </ul>
        </div>
        <div className='col-11'>
            <div className='Right'>
                <ul>
                    <li className='Logo'><img src='Vector (1).png'/></li>
                    <li><input className='searchInput'/></li>
                    <li><button className='searchButton'><span><SearchIcon/></span></button></li>
                </ul>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className='cardPag2'>
                        <div className='imgPage2'>
                            <div className='rightBack'>
                               <ArrowBackIcon/>
                            </div>                                             
                            <img src='page2Col-6..png' alt='imgpage2'/>
                        </div>
                       <div className='titlePage2Col6'>
                          <div className='namePriceP2'>
                            <div>
                              <p className='nameProduct'>SONY 200mm Zoom </p>
                              <p className='priceProduct'>$6000</p>
                            </div>
                            <div className='rating'>
                               <span className='starPage2'><StarIcon/></span>
                               <p>4.5</p>
                            </div>
                          </div>
                          
                          
                          <p className='lorem'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                       </div>
                       
                    </div>
                    
                </div>
                <div className='col-6'>
                    <div class="row">
                        <h1>Products</h1>
                       <div className='col-6'>
                        <div className='card'>   
                            <div className='ratingCard'>
                               <span className='starPage2'><StarIcon/></span>
                               <p>4.5</p>
                            </div>                     
                            <img src='image 279.png'/>
                            <div className='buttonPage2'><ArrowForwardIcon/></div>
                        </div>
                       </div>
                       <div className='col-6'>
                        <div className='card'>  
                            <div className='ratingCard'>
                               <span className='starPage2'><StarIcon/></span>
                               <p>4.5</p>
                            </div>                      
                            <img src='image 279.png' />
                            <div className='buttonPage2'><ArrowForwardIcon/></div>
                        </div>
                       </div>
                       <div className='col-6'>
                        <div className='card'> 
                            <div className='ratingCard'>
                               <span className='starPage2'><StarIcon/></span>
                               <p>4.5</p>
                            </div>                       
                        <img src='image 279.png' />
                        <div className='buttonPage2'><ArrowForwardIcon/></div>
                        
                        </div>
                       </div>
                       <div className='col-6'>
                        <div className='card'>
                            <div className='ratingCard'>
                               <span className='starPage2'><StarIcon/></span>
                               <p>4.5</p>
                            </div>                      
                            <img src='image 279.png' />
                            <div className='buttonPage2'><ArrowForwardIcon/></div>

                        </div>
                       </div>
                    </div>    
                </div>
            </div>
        </div> 
    </div>
    </div>
  )
}
