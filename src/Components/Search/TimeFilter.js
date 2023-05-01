import React from 'react'

const TimeFilter = (props) => {
    return(
        <div className=''>
            <input
                className='text-black border-solid border-2 border-grey-light'
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