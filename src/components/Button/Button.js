import { Children } from 'react';
import './Button.css'
import PropTypes from 'prop-types';


export default function Button({children, varient, size, color, ...props}) {
    return (
        <>
            <button className={`button ${varient} ${size} ${color}`}
            {...props}>
                {children}
            </button>
        </>
    )
}
Button.propTypes = {
    color: PropTypes.oneOf(['blue', 'red', 'green']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    children: PropTypes.node.isRequired
};
  
Button.defaultProps = {
    varient: 'primary',
    color:'blue',
    size: 'medium',
  };
  