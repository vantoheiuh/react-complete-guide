import React from 'react';
import PropTypes from 'prop-types';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';
import Spinner from '../../UI/Spinner/Spinner';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }    
];

const buildControls = props => {

    const controlsOrSpinner = props.disabledInfo ? (
        <div className = { classes.BuildControls }>
            <p className = { classes.CurrentPrice }>Current Price: <strong>{ props.price.toFixed(2) }</strong></p>
            { controls.map(({ label, type }) => (                           
                <BuildControl 
                key = { label }
                label = { label }
                ingredientAdded = { () => props.ingredientAdded(type) }
                ingredientRemoved = { () => props.ingredientRemoved(type) }
                disabledInfo = { props.disabledInfo[type] } />            
            )) }
            <button 
            disabled = { props.isDisabled }
            className = { classes.OrderButton }
            onClick = { props.isAuth ? props.purchase : props.authenticate }>{ props.isAuth ? 'ORDER NOW!' : 'SIGN IN TO ORDER' }</button>
        </div>
    ) : <Spinner />

    return controlsOrSpinner
};

buildControls.propTypes = {
    price: PropTypes.number.isRequired,
    ingredientAdded: PropTypes.func.isRequired,
    ingredientRemoved: PropTypes.func.isRequired,
    disabledInfo: PropTypes.shape({
        'meat': PropTypes.bool,
        'salad': PropTypes.bool,
        'bacon': PropTypes.bool,
        'cheese': PropTypes.bool
    }),
    isDisabled: PropTypes.bool.isRequired,
    purchase: PropTypes.func.isRequired
}
export default buildControls;