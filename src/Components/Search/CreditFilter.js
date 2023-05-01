import React from 'react'

const CreditFilter = (props) => {
    return(
        <div className=''>
            <input
                className='text-black border-solid border-2 border-grey-light'
                type='search'
                placeholder='Credit Filter'
                onChange={(e) => {
                    props.setCreditFilter(e.target.value)
                }}
            />
        </div>
    )
}

export default CreditFilter;