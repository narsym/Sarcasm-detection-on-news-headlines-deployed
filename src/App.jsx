import React, { useState } from 'react';
import axios from 'axios'

const App = () => {
    const [headline, setHeadline] = useState();

    const inputEvent = (event) => {
        setHeadline(event.target.value);
        console.log(headline);
    }

    const detect = async() => {
        try{
        const url = `https://mlmodelsapi.herokuapp.com/sarcasm?headline=${headline}`;
        axios.get(url,{
            header: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(res=>{
            console.log(res);
            console.log(res.data.result);
            const result = document.getElementById('result');
            result.innerHTML = res.data.result;
        })
        .catch(err=>console.log('err -> ',err))
            
        }
        catch(err) {
            console.log(err);
        }
        
    }
    return (
        <React.Fragment>
            <div className="background">
                <h1>Sarcasm detection on news headlines</h1>
                <div className="content">
                    <div className="search">
                        <input type="text" placeholder="enter news headline to check sarcasm" onChange = {inputEvent}/>
                        <button onClick = {detect}>find out !!!</button>
                    </div>
                    <h1 id = 'result'>see your result here</h1>
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;