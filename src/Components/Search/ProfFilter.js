import React from 'react'

const ProfFilter = (props) => {
    return(
        <div className=''>
            <input
                className='text-black border-solid border-2 border-grey-light'
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