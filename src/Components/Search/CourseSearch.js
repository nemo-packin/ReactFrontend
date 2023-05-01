import React from 'react'

const CourseSearch = (props) => {
    return(
        <div className=''>
            <input
                className='text-black border-solid border-2 border-grey-light'
                type='search'
                placeholder='Search Course'
                onChange={(e) => {
                    props.setCourseSearch(e.target.value)
                }}
            />
        </div>
    )
}

export default CourseSearch;