import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () =>{
        console.log("Click")
    }
    return (
        <header className = "header">
            <h1>{title}</h1>   
            <Button text = "Add" color = 'blue' onClick = {onClick}/>   
                 

            
        </header>
    )
}

Header.defaultProps = {
    title : "Contact"
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}

// CSS in js 
// const HeaderStyle = {
//     color : 'blue',
//     backgroundColor : 'red',

// }

export default Header
