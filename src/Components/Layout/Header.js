import {Fragment} from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>Food Store</h1>
            <HeaderCartButton onClickCustom={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="food_img"/>
        </div>
    </Fragment>
    );
};

export default Header;