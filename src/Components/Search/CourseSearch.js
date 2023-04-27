import React from 'react'

const CourseSearch = (props) => {
    return(
        <div className=''>
            <input
                className=''
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