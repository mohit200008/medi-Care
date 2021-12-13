import React from 'react'
import './Footer.css';

export default function Footer() {
    return (
        <section class="footer">
        
        <ul class="list">
            <li class="nav-links"><a href="#">Home</a></li>
            <li class="nav-links"><a href="#">Disease Prediction</a></li>
            <li class="nav-links"><a href="#">Health</a></li>
            <li class="nav-links"><a href="#">Doctor</a></li>
        </ul>
        <div class="social">
            <a href="https://github.com/mohit200008/medi-Care"><i class="fab fa-github"></i></a>
            </div>
        <p class="copyright">
            Copyright &copy; medicare @2021 . All rights reserved
        </p>
    </section>
    )
}
