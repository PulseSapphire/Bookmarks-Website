import React from 'react'

import styles from './CustomerQuotes.module.css'

const profileIcon = (
    <div className={styles.profileIcon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 108 108" fill="none">
            <g filter="url(#filter0_d_69_15)">
                <circle cx="54" cy="54" r="50" fill="#1E1E1E" />
            </g>
            <defs>
                <filter id="filter0_d_69_15" x="0" y="0" width="108" height="108" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_69_15" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_69_15" result="shape" />
                </filter>
            </defs>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M25 20.8334C29.6024 20.8334 33.3334 17.1025 33.3334 12.5001C33.3334 7.89771 29.6024 4.16675 25 4.16675C20.3976 4.16675 16.6667 7.89771 16.6667 12.5001C16.6667 17.1025 20.3976 20.8334 25 20.8334Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M43.75 45.8333C43.75 35.4779 35.3553 27.0833 25 27.0833C14.6447 27.0833 6.25 35.4779 6.25 45.8333" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </div>
);

function CustomerQuotes() {
    return (
        <div className={styles.container}>
            <h2>What our customers are saying</h2>

            <div className={styles.card_container}>
                <div className={styles.card}>
                    {profileIcon}
                    <h4>username</h4>
                    <p>"asjdnsadjnsadikjasdfbjifdibjdfjjnkjdfnksdnfksndfooasidjoikasdlknnasdljknsdakjnuigiuhefihdfsibjhfsdbjhifbhklgrfbhklb"</p>
                </div>

                <div className={styles.card}>
                    {profileIcon}
                    <h4>username</h4>
                    <p>"asjdnsadjnsadikjasdfbjifdibjdfjjnkjdfnksdnfksndfooasidjoikasdlknnasdljknsdakjnuigiuhefihdfsibjhfsdbjhifbhklgrfbhklb"</p>
                </div>

                <div className={styles.card}>
                    {profileIcon}
                    <h4>username</h4>
                    <p>"asjdnsadjnsadikjasdfbjifdibjdfjjnkjdfnksdnfksndfooasidjoikasdlknnasdljknsdakjnuigiuhefihdfsibjhfsdbjhifbhklgrfbhklb"</p>
                </div>
            </div>
        </div>
    )
}

export default CustomerQuotes