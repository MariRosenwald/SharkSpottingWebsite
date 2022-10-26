import * as React from 'react';
import './Navbar.css';

function Navbar() {
    return(
        <section>
            <section className='About-sec'>
                <a href="/" className="About">about</a>
            </section>
            <section className='Teams-sec'>
                <a href="/" className="Teams">teams</a>
            </section>
            <section className='Memebers-sec'>
                <a href="/" className="Members">members</a>
            </section>
            <section className='News-sec'>
                <a href="/" className="News">news</a>
            </section>
        </section>
    );
}

export default Navbar; 