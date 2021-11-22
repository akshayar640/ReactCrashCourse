import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, toggleAddText }) => {
    const location = useLocation()
    return (
        <header className='header'>
           <h1>{title}</h1> 
         {location.pathname === '/' && (<Button color={toggleAddText ? 'red' : 'green'} text={toggleAddText ? 'Close' : 'Add'} onClick={onAdd}></Button>)}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

//CSS in JS
// const headingStyle = {
//     color: 'red', backgroundColor: 'black'
// }

export default Header
