import React from 'react'

const DayFilter = (props) => {
    return(
        <div className=''>
            <input
                className='text-black border-solid border-2 border-grey-light'
                type='search'
                placeholder='Day Filter'
                onChange={(e) => {
                    props.setDayFilter(e.target.value)
                }}
            />
        </div>
    )
}

export default DayFilter;