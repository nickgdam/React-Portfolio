import React from 'react'

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div class="container">
      <a class="navbar-brand" href="index.html">
            Nick Damario
          </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="index.html">About
                  <span class="sr-only">(current)</span>
                </a>
                <span class="hr"></span>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="portfolio.html">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
    )
}
