import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
// import { hashString } from 'react-hash-string';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const USER_REQ_REGEX = /^[a-zA-Z][a-zA-X0-9-_]{4,23}$/;
const PASSWORD_REQ_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&]){1,24}/;
const INT_LIMIT_REGEX = /^\d{1,6}$/;
const NAME_REGEX = /^[a-zA-Z0-9]*$/;


const Register = () => {
    const { handleSubmit } = useForm()

    const userRef = useRef();
    const errRef = useRef();
    //vairables for other account stuff input field
    const [name, setName] = useState('');
    const [validName, setValidName] = useState(false)
    const [nameFocus, setNameFocus] = useState(false)
    const [iD, setID] = useState(0)
    const [validID, setValidID] = useState(false)
    const [idFocus, setIDFocus] = useState(false)
    const [year, setYear] = useState(0)
    const [validYear, setValidYear] = useState(false)
    const [yearFocus, setYearFocus] = useState(false)
    const [major, setMajor] = useState('Undeclared')
    const [minor, setMinor] = useState('Undeclared')
    const majorOptions = ['Undeclared', 'Applied Science & Engineering', 'Biblical and Religious Studies', 'Philosophy', 'Biology', 'Economics', 'Entrepreneurship', 'Management', 'Marketing', 'Chemistry', 'Communication & Visual Arts', 'Computer Science', 'Data Science', 'Education', 'Electrical Engineering', 'Computer Engineering', 'English', 'Theater', 'Exercise Science', 'History', 'Mechanical Engineering', 'Modern Languages', 'Music', 'Nursing', 'Physics', 'Political Science', 'Psychology', 'Social Work', 'Sociology', 'Writing'];
    const minorOptions = ['None', 'Applied Science & Engineering', 'Biblical and Religious Studies', 'Philosophy', 'Biology', 'Economics', 'Entrepreneurship', 'Management', 'Marketing', 'Chemistry', 'Communication & Visual Arts', 'Computer Science', 'Data Science', 'Education', 'Electrical Engineering', 'Computer Engineering', 'English', 'Theater', 'Exercise Science', 'History', 'Mechanical Engineering', 'Modern Languages', 'Music', 'Nursing', 'Physics', 'Political Science', 'Psychology', 'Social Work', 'Sociology', 'Writing'];


    // variables for username input field 
    const [user, setUser] = useState('');
    const [validUsername, setValidUsername] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    // variables for password input field
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    // variables for password confim. input field
    const [confirmPwd, setConfirmPwd] = useState('');
    const [validConfirmPwd, setValidConfirm] = useState(false);
    const [confirmPwdFocus, setConfirmFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])


    useEffect(() => {
        const result = NAME_REGEX.test(name)
        if(name === ''){
            setValidName(false)
        }else{
            setValidName(result)
        }
    }, [name])

    useEffect(() => {
        const result = INT_LIMIT_REGEX.test(iD)
        if(iD === 0){
            setValidID(false)
        }
        else {setValidID(result)}
    }, [iD])

    useEffect(() => {
        const result = INT_LIMIT_REGEX.test(year)
        if(year === 0 ){
            setYear(false)
        }
        else{setValidYear(result)}
    }, [year])

    // checks if the username input fits the requirements
    useEffect(() => {
        const result = USER_REQ_REGEX.test(user);
        setValidUsername(result);
    }, [user])

    // checks if the password input fits the requirements
    useEffect(() => {
        const result = PASSWORD_REQ_REGEX.test(pwd);
        setValidPwd(result);
        const match = pwd === confirmPwd;
        setValidConfirm(match);
    }, [pwd, confirmPwd])

    // clears error message when user is typing in the field
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, confirmPwd])

    function submit() {
        axios.post('http://localhost:8080/api/register', {
            id: iD,
            name: name,
            username: user,
            password: pwd,
            year: year,
            major: major,
            minor: minor
        })
            .then(response => {
                // Handle the response data here
                console.log(response)
            })
            .catch(error => {
                // Handle the error here
                console.log(error)
            });
    }


    return (
        <>
            {success ? (
                <section>
                    <h1>Account Created Successfully!</h1>
                    {/* <p>
                        <Link to='/'>Sign In</Link>
                    </p> */}
                </section>
            ) : (
                <section>
                    {/* {console.log(PASSWORD_REQ_REGEX.test('aA1'))} */}
                    <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit(() => {
                        const v1 = USER_REQ_REGEX.test(user);
                        const v2 = PASSWORD_REQ_REGEX.test(pwd);
                        const v3 = INT_LIMIT_REGEX.test(iD);
                        const v4 = INT_LIMIT_REGEX.test(year);
                        const v5 = NAME_REGEX.test(name);
                        if (!v1 || !v2 || !v3 || !v4 || !v5 || pwd !== confirmPwd) {
                            console.log('registration is not filled out!')
                            return
                        }
                        console.log('submitting')
                        submit();
                        setSuccess(true)
                    })}>
                        <div>
                            <label htmlFor='name'>
                                Name:
                                <span className={validName ? 'valid' : 'hide'}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validName || !name ? 'hide' : 'invalid'}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>  
                            </label>
                            <input
                                className='text-black border-solid border-2 border-grey-light'
                                type='text'
                                id='name'
                                ref={userRef}
                                autoComplete='off'
                                onChange={(e) => setName(e.target.value)}
                                required
                                aria-invalid={validName ? 'false' : 'true'}
                                aria-describedby='namenote'
                                onFocus={() => setNameFocus(true)}
                                onBlur={() => setNameFocus(false)}
                            />
                            <p id='namenote' className={nameFocus && !validName ? 'instructions' : 'offscreen'}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                Name cannot have spaces of special characters <br />
                                Only letters and numbers are allowed <br />
                            </p>
                        </div>

                        <div>
                            <label htmlFor='id'>
                                ID:
                                <span className={validID ? 'valid' : 'hide'}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validID || !iD ? 'hide' : 'invalid'}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>
                            <input
                                className='text-black border-solid border-2 border-grey-light'
                                type='number'
                                id='id'
                                autoComplete='off'
                                onChange={(e) => setID(e.target.value)}
                                required
                                aria-invalid={validID ? 'false' : 'true'}
                                aria-describedby='idnote'
                                onFocus={() => setIDFocus(true)}
                                onBlur={() => setIDFocus(false)}
                            />
                            <p id='idnote' className={idFocus && !validID ? 'instructions' : 'offscreen'}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                Max ID: 6 digits <br />
                            </p>
                        </div>

                        <div>
                            <label htmlFor='year'>
                                Graduation Year:
                                <span className={validYear ? 'valid' : 'hide'}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validYear || !year ? 'hide' : 'invalid'}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>
                            <input
                                className='text-black border-solid border-2 border-grey-light'
                                type='number'
                                id='year'
                                autoComplete='off'
                                onChange={(e) => setYear(e.target.value)}
                                required
                                aria-invalid={validYear ? 'false' : 'true'}
                                aria-describedby='idnote'
                                onFocus={() => setYearFocus(true)}
                                onBlur={() => setYearFocus(false)}
                            />
                            <p id='idnote' className={yearFocus && !validYear ? 'instructions' : 'offscreen'}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                Year cannot be  more than 6 digits <br />
                            </p>
                        </div>

                        <div>
                            <label htmlFor="major">Major: </label>
                            <select id="major" value={major} onChange={(e) => setMajor(e.target.value)}>
                            {majorOptions.map((option) => (
                                <option key={option}>
                                {option}
                                </option>
                            ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="minor">Minor: </label>
                            <select id="minor" value={minor}  onChange={(e) => setMinor(e.target.value)}>
                            {minorOptions.map((option) => (
                                <option key={option}>
                                {option}
                                </option>
                            ))}
                            </select>
                        </div>

                        {/* Username */}
                        <div>
                            <label htmlFor='username'>
                                Username:
                                <span className={validUsername ? 'valid' : 'hide'}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validUsername || !user ? 'hide' : 'invalid'}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>
                            <input
                                className='text-black border-solid border-2 border-grey-light'
                                type='text'
                                id='username'
                                autoComplete='off'
                                onChange={(e) => setUser(e.target.value)}
                                required
                                aria-invalid={validUsername ? 'false' : 'true'}
                                aria-describedby='uidnote'
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                            />
                            <p id='uidnote' className={userFocus && !user && !validUsername ? 'instructions' : 'offscreen'}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                4 to 24 characters. <br />
                                Must begin with a letter. <br />
                                Letters, numbers, underscores, hyphens allowed.
                            </p>
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor='password'>
                                Password:
                                <span className={validPwd ? 'valid' : 'hide'}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validPwd || !pwd ? 'hide' : 'invalid'}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>
                            <input
                                className='text-black border-solid border-2 border-grey-light'
                                type='password'
                                id='password'
                                onChange={(e) => setPwd(e.target.value)}
                                required
                                aria-invalid={validPwd ? 'false' : 'true'}
                                aria-describedby='pwdnote'
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)}
                            />
                            <p id='pwdnote' className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                8 to 24 characters. <br />
                                Must include uppercase and lowercase letters, a number and a special character. <br />
                                Allowed special characters: <span aria-label='exclamation mark'>!</span> <span aria-label='at symbol'>@</span>
                                <span aria-label='hashtag'>#</span> <span aria-label='dollar sign'>$</span> <span aria-label='percent'>%</span>
                                <span aria-label='and symbol'>&</span>
                            </p>
                        </div>

                        <div>
                            <label htmlFor='confirm-pass'>
                                Confirm Password:
                                <span className={validConfirmPwd && confirmPwd ? 'valid' : 'hide'}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validConfirmPwd || !confirmPwd ? 'hide' : 'invalid'}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>
                            <input
                                className='text-black border-solid border-2 border-grey-light'
                                type='password'
                                id='confirm-pass'
                                onChange={(e) => setConfirmPwd(e.target.value)}
                                required
                                aria-invalid={validConfirmPwd ? 'false' : 'true'}
                                aria-describedby='confirmnote'
                                onFocus={() => setConfirmFocus(true)}
                                onBlur={() => setConfirmFocus(false)}
                            />
                            <p id='confirmnote' className={confirmPwdFocus && !validConfirmPwd ? 'instructions' : 'offscreen'}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                Must match the first password input field
                            </p>
                        </div>

                        <button type='submit' className='bg-green-600 m-2 w-100 rounded-none' disabled={!validID || !validYear || !validUsername || !validPwd || !validConfirmPwd ? true : false}>Sign Up</button>
                    </form>
                    {}
                    {/* <p>
                        Already registered? <br />
                        <span className='line'> */}
                    {/* put router link here */}
                    {/* <Link to='/'>Sign In</Link>
                        </span>
                    </p> */}
                </section>
            )}
        </>
    )
}
export default Register