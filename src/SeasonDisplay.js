import React from 'react';
import './SeasonDisplay.css';

const getSeason=(lat,month)=>{
    if (month>1 && month<9){
        return lat>0 ? 'summer': 'winter';
    }else{
        return lat>0 ? 'winter': 'summer';
    }

}

const SeasonDisplay=(props)=>{

    const season=getSeason(props.lat,new Date().getMonth());
    const text=  season==='winter' ?'It is winter ':'It is summer';
    const iconName=  season==='winter' ?'snowflake' :'sun';
    console.log(season);

return (
    <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}/>
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`}/>
    </div>
);
}

export default SeasonDisplay;