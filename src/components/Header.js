import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd,showAdd}) => {
    
    return (
        <header className = "header">
            <h1>{title}</h1>   
            <Button 
            text = {showAdd ? 'Close':'Add'} 
            color = {showAdd ? 'Green': 'Blue'}
            onClick = {onAdd}
            />   
                 

            
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
