import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';


export default function Page1() {
    // const[icons, setIcons]=useState([]);
    // const dispatch = useDispatch()

    // useEffect(()=> {
    //     axios.get('')
    // })
  return (
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
                    <div className='page1Text'>
                       <h1 className='h1Page1'>Eng ilg'or <br/> Apple Watch hali.</h1>
                       <p className='page1h4'>Barcha so'nggi ko'rinishlarda.</p>
                       <button className='shoppingButton'>Xarid qilish</button>
                    </div>
                    
                </div>
                <div className='col-6'>
                    <div class="swiffy-slider">
                       <ul class="slider-container">
                          <img src="kindpng_1342298 1.png" />
                        </ul>
                    </div>    
                </div>
            </div>
        </div> 
    </div>
  )
}
