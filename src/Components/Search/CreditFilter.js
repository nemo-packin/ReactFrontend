import React from 'react'

const CreditFilter = (props) => {
    return(
        <div className=''>
            <input
                className=''
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