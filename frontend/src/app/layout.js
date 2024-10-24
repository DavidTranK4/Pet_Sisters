import "./globals.css";
import React from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import { Inter } from "next/font/google";

import Script from "next/script"; // Import Script từ next
import "../../public/bootstrap/css/bootstrap.min.css";

import "../../public/css/animate.min.css";
import "../../public/css/magnific-popup.css";
import "../../public/css/fontawesome-all.min.css";
import "../../public/css/flaticon_pet_care.css";
import "../../public/css/odometer.css";
import "../../public/css/swiper-bundle.min.css";
import "../../public/css/select2.min.css";
import "../../public/css/jquery-ui.css";
import "../../public/css/aos.css";
import "../../public/css/default.css";
import "../../public/css/main.css";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.png"/>
        <Script src="/js/vendor/jquery-3.6.0.min.js"></Script>
        <Script src="/js/bootstrap.bundle.min.js"></Script>
        <Script src="/js/jquery.magnific-popup.min.js"></Script>
        <Script src="/js/jquery.odometer.min.js"></Script>
        <Script src="/js/jquery.appear.js"></Script>
        <Script src="/js/swiper-bundle.min.js"></Script>
        <Script src="/js/jquery.countdown.min.js"></Script>
        <Script src="/js/svg-inject.min.js"></Script>
        <Script src="/js/select2.min.js"></Script>
        <Script src="/js/jquery-ui.min.js"></Script>
        <Script src="/js/ajax-form.js"></Script>
        <Script src="/js/wow.min.js"></Script>
        <Script src="/js/aos.js"></Script>
        <Script src="/js/main.js"></Script>

      </body>
    </html>
  );
}
