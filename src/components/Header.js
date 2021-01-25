import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd}) => {
    
    return (
        <header className = "header">
            <h1>{title}</h1>   
            <Button text = "Add" color = 'blue' onClick = {onAdd}/>   
                 

            
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
