import React from 'react'

const DepartmentFilter = (props) => {
    return(
        <div className=''>
            <input
                className=''
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