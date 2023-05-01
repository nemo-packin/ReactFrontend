import React from 'react'

const DepartmentFilter = (props) => {
    return(
        <div className=''>
            <input
                className='text-black border-solid border-2 border-grey-light'
                type='search'
                placeholder='Department Filter'
                onChange={(e) => {
                    props.setDepartmentFilter(e.target.value)
                }}
            />
        </div>
    )
}

export default DepartmentFilter;