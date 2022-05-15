import React from 'react';
import './Loadding.css';

interface LoaddingProps {
    show?: boolean
}


export const Loadding = (props: LoaddingProps) => {

    return (
        props.show ? <div className='loadding'>
            <div>
                <div style={{color: 'black'}}>
                    正在加载中，请稍等……
                </div>
            </div>
        </div> : null
    )
}