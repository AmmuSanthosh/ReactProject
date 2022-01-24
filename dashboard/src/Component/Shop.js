import React from 'react';
import './Dashboard.css';

function Shop() {
    return (
        <div>
            <h1>Shop page</h1>
            <div>
                <h3>Items</h3>
                <ul className='shop-ul'>
                    <li>Foot wears</li>
                    <li>Appliances</li>
                    <li>Electronics</li>
                    <li>Essentials</li>
                </ul>
            </div>
        </div>
    )
}

export default Shop;
