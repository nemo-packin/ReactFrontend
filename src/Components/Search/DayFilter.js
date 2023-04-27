import React from 'react'

const DayFilter = (props) => {
    return(
        <div className=''>
            <input
                className=''
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