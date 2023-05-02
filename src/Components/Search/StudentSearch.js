import { React, useState, useEffect } from 'react'

const StudentSearch = () => {
    const [student, setStudent] = useState('')

    return (
        <div className=''>
            <input
                className='text-black border-solid border-2 border-grey-light'
                type='search'
                placeholder='Student Search'
                onChange={(e) => {setStudent(e.target.value)}}
            />
        </div>
    )
}

export default StudentSearch 