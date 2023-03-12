import { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = props => {

    const [amountIsValid, setAmoundIsValid] = useState(true);

    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumer = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumer < 1 || enteredAmountNumer > 5){
            setAmoundIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumer);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                ref={amountInputRef}
                label="Amount" 
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
            }}/>
            <button> + Add</button>
            {!amountIsValid && <p> Please Enter A Valid Amount </p>}
        </form>
    )
};

export default MealItemForm;