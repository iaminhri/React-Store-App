import React from 'react';
import classes from './MealsSummary.module.css';

const MealsSummary = () =>{
    return (
        <section className={classes.summary}>
            <h2> Delicious Food, Delivered To You. </h2>
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </p>
            <p>
                There are many variations of passages of Lorem Ipsum available, 
                but the majority have suffered alteration in some form, by injected humour.
            </p>
        </section>
    )
};

export default MealsSummary;