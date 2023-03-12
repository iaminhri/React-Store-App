import {useContext, useEffect, useState} from "react";
import CartContext from "../../Store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const [buttonHightlight, setButtonHighlight] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${buttonHightlight ? classes.bump : ''}`;

    useEffect( () => {
        if(items.length === 0){
            return;
        }
        setButtonHighlight(true);
        const timer = setTimeout( () => {
            setButtonHighlight(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClickCustom}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span> Your Cart </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}; 

export default HeaderCartButton;
