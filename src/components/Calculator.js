


export const Calculator = ()=>{   

    return(
        <div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <input placeholder="Input 1" type="number"
                    />
                <select>
                    {['+','-','*','/'].map((op)=> <option >{op}</option>)}
                </select>
                
                <input placeholder="Input 2" type="number"
                />
                <p style={{marginLeft:'10px'}}>=</p>
                <h2 style={{marginLeft:'20px'}}></h2>
            </div>

            <div style={{border:'1px solid', maxHeight:'200px',textAlign:'center', maxWidth:'25%', marginLeft:'32%', marginTop:'10px'}}>
                <div>
                   {
                    ['1','2','3'].map((num)=> <button>{num}</button>)
                   }
                </div>
                <div>
                {
                    ['4','5','6'].map((num)=> <button >{num}</button>)
                   }
                </div>
                <div>
                {
                    ['7','8','9'].map((num)=> <button>{num}</button>)
                   }
                </div>
                <div>
                    <button>0</button>
                    <button >C</button>
                     <button >S</button>
                   
                </div>
            </div>
        </div>
    );
};