import React from 'react'

const ProfFilter = (props) => {
    return(
        <div className=''>
            <input
                className=''
                type='search'
                placeholder='Professor Filter'
                onChange={(e) => {
                    props.setProfFilter(e.target.value)
                }}
            />
        </div>
    )
}

export default ProfFilter;