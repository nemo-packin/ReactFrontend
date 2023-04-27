import React from 'react'

const TimeFilter = (props) => {
    return(
        <div className=''>
            <input
                className=''
                type='search'
                placeholder='Time Filter'
                onChange={(e) => {
                    props.setTimeFilter(e.target.value)
                }}
            />
        </div>
    )
}

export default TimeFilter;