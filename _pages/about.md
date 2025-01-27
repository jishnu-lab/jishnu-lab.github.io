---
layout: page
title: 
description: 
permalink: /Contact-us/
---

<style>
.container {
  max-width: fit-content;
  width:100%;
  margin: 0 auto;
}

.page-section-head {
  margin-top: 40px;
  margin-bottom: 60px;
  padding-bottom: 60px;
  border-bottom: 1px solid var(--border-color);
}

.page-title {
  font-size: 80px;
  margin-bottom: 16px;
  width: 1500px;s
}

.page-description {
  font-size: 18px;
}

.contact-info {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.contact-info-item {
  width: 100%;
  align-content: center;
  text-align: center;
}

.contact-info-item h2 {
  margin-bottom: 10px;
}

.gallery {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}

.page__info {
  display: none;
}

.iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.nine{
  width:100%;
  height:100%;
  max-width:100%;
  margin-top:20px
}
.gallery img {
  max-width: 100%;
  height: auto;
}
/* Responsive Styles */

/* Tablet View */
@media (max-width: 1024px) {
  .page-title {
    font-size: 48px; /* Smaller font size for tablets */
  }

  .page-section-head {
    margin-bottom: 40px;
    padding-bottom: 20px;
  }

  .contact-info-item h2 {
    font-size: 20px; /* Slightly smaller text */
  }

  .gallery {
    gap: 12px; /* Reduce spacing */
  }
}

/* Mobile View */
@media (max-width: 768px) {
  .page-title {
    font-size: 36px; /* Adjust font size for mobile */
  }

  .page-description {
    font-size: 16px; /* Slightly smaller font for mobile */
  }

  .contact-info {
    align-items: flex-start; /* Adjust alignment for smaller screens */
  }

  .contact-info-item {
    margin-bottom: 12px;
  }

  .gallery img {
    width: 100%; /* Make images full-width on mobile */
  }
}
</style>

<div class="container">
  <div class="page-section-head">
    <h1 class="page-title">Contact Us</h1>
  </div>

  <div class="contact-info">
    <div class="contact-info-item">
      <h2>Address and Contact Info</h2>
      <p>Room 4012 and 4011 <br>
      The Assembly<br>
      5051 Centre Avenue,<br>
      Pittsburgh, PA 15213</p>
      <p>Email: jishnu@pitt.edu<br>
      Phone: 412-624-5530</p>
    </div>
  </div>

  <div class="button-container">
    <a class="tag-button" href="https://scholar.google.com/citations?user=61wI3HMAAAAJ&hl=en" target="_blank">Google Scholar</a>
    <a class="tag-button" href="https://github.com/jishnu-lab" target="_blank">GitHub</a>
    <a class="tag-button" href="https://twitter.com/jishnu1729" target="_blank">Twitter</a>
  </div>

  <iframe class = "nine" style="width: 95%; height: 600px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.9222785433276!2d-79.94718492394952!3d40.454857153317924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f34f6212ade3%3A0x18f7f9a7b1d0f338!2sThe%20Assembly!5e0!3m2!1sen!2sus!4v1714092409211!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>


