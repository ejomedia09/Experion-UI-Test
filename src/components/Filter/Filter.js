import React from 'react';
import CloseIcon from './Images/close.svg'
 

/* Function - showing the filter panel */  
let showPanel = ()=> {
    let panel = document.querySelector(".filter-right-panel");
    let backDrop = document.querySelector(".backDrop");
    panel.classList.add("showPanel");
    backDrop.classList.add("shadow");
}
/* Function - closing the filter panel */  
let closePanel = ()=>{
    let panel = document.querySelector(".filter-right-panel");
    let backDrop = document.querySelector(".backDrop");
    panel.classList.remove("showPanel");
    backDrop.classList.remove("shadow");
}

const Filter = () => {
    return <>
    <div className='filter col-divide-2'>
        <div className='backDrop'></div> {/* overlay drop shadow */}
        <div className='filter-menu'> {/* filter menu right side panel */}
            <button className='clear-btn' type="button">Clear All</button>
            <button className='filter-btn' onClick={showPanel} type="button">Filters</button>
        </div>
        <div className='filter-right-panel'>
            <div className='close-panel' onClick={closePanel}> <img src={CloseIcon} alt='close'></img> </div>
            <h3>Filters</h3>
                <div className='panel-wraper scrollbar'>
                <div className='panel-row gender'>
                    <div className='col'>
                        <input type="checkbox" id="men" name="men" value="men"></input>
                        <label htmlFor="men"> Men</label><br />
                        <input type="checkbox" id="women" name="women" value="women"></input>
                        <label htmlFor="women"> Women</label>
                    </div>
                    <div className='col-1'>
                        <input type="checkbox" id="boys" name="boys" value="boys"></input>
                        <label htmlFor="boys"> Boys</label><br />
                        <input type="checkbox" id="girls" name="girls" value="girls"></input>
                        <label htmlFor="girls"> Girls</label>
                    </div>
                </div>

                <div className='panel-row Price'>
                    <h4>Price</h4>
                    <div className='col'>
                        <input type="checkbox" id="p1" name="p1" value="p1"></input>
                        <label htmlFor="p1"> Rs. 1997 to Rs. 6172 <span className='count'>(166)</span></label><br />
                        <input type="checkbox" id="p2" name="p2" value="p2"></input>
                        <label htmlFor="p2"> Rs. 10347 to Rs. 14522 <span className='count'>(43)</span></label>
                    </div>
                    <div className='col'>
                        <input type="checkbox" id="p3" name="p3" value="p3"></input>
                        <label htmlFor="p3"> Rs. 6172 to Rs. 10347 <span className='count'>(32)</span></label><br />
                        <input type="checkbox" id="p4" name="p4" value="p4"></input>
                        <label htmlFor="p4"> Rs. 14522 to Rs. 18697 <span className='count'>(87)</span></label>
                    </div>
                    <div className='col-1'>
                        <input type="checkbox" id="p5" name="p5" value="p5"></input>
                        <label htmlFor="p5"> Rs. 10347 to Rs. 14522  <span className='count'>(217)</span></label><br />
                        <input type="checkbox" id="p6" name="p6" value="p6"></input>
                        <label htmlFor="p6"> Rs. 14522 to Rs. 18697  <span className='count'>(321)</span></label>
                    </div>
                </div>

                <div className='panel-row categories'>
                    <h4>Categories</h4>
                    <div className='col'>
                        <input type="checkbox" id="Tshirts" name="Tshirts" value="Tshirts"></input>
                        <label htmlFor="Tshirts"> Tshirts</label><br />
                        <input type="checkbox" id="Track Pants" name="Track Pants" value="Track Pants"></input>
                        <label htmlFor="Track Pants"> Track Pants  <span className='count'>(187)</span></label>
                    </div>
                    <div className='col'>
                        <input type="checkbox" id="SportsShoes" name="SportsShoes" value="SportsShoes"></input>
                        <label htmlFor="SportsShoes"> Sports Shoes  <span className='count'>(43)</span></label><br />
                        <input type="checkbox" id="Tights" name="Tights" value="Tights"></input>
                        <label htmlFor="Tights"> Tights <span className='count'>(21)</span></label>
                    </div>
                    <div className='col-1'>
                        <input type="checkbox" id="CasualShoes" name="CasualShoes" value="CasualShoes"></input>
                        <label htmlFor="CasualShoes"> CasualShoes <span className='count'>(87)</span></label><br />
                        <input type="checkbox" id="Sweatshirts" name="Sweatshirts" value="Sweatshirts"></input>
                        <label htmlFor="Sweatshirts"> Sweatshirts <span className='count'>(217)</span></label>
                    </div>

                    <div className='col-1'>
                        <input type="checkbox" id="Shorts" name="Shorts" value="Shorts"></input>
                        <label htmlFor="Shorts"> Shorts <span className='count'>(117)</span></label><br />
                        <input type="checkbox" id="Tops" name="Tops" value="Tops"></input>
                        <label htmlFor="Tops"> Tops <span className='count'>(32)</span></label>
                    </div>
                    <div className='more-items'>
                        <button id='more'>+ 18 more</button>
                    </div>

                </div>

                <div className='panel-row Colors'>
                    <h4>Color</h4>
                    <div className='col-100'>
                    <input type="checkbox" id="clrBlack" name="clrBlack" value="clrBlack"></input>
                        <label htmlFor="clrBlack"> <span className='color-box black-clr'></span>Black  <span className='count'>(87)</span></label><br />

                        <input type="checkbox" id="clrWhite" name="clrWhite" value="clrWhite"></input>
                        <label htmlFor="clrWhite"> <span className='color-box white-clr'></span>White <span className='count'>(123)</span></label><br />

                        <input type="checkbox" id="clrBlue" name="clrBlue" value="clrBlue"></input>
                        <label htmlFor="clrBlue"> <span className='color-box blue-clr'></span>Blue <span className='count'>(25)</span></label><br />

                        <input type="checkbox" id="clrPink" name="clrPink" value="clrPink"></input>
                        <label htmlFor="clrPink"> <span className='color-box pink-clr'></span>Pink <span className='count'>(117)</span></label><br />
                        
                    </div>
                </div>
                </div>
                <div className='col-100 panel-row action-btn-wrapper'>
                <button className='clearall-btn'>Clear All</button>
                <button className='apply-btn'>Apply</button>
                </div>
        </div>
    </div>
</>;

}

 

export default Filter;