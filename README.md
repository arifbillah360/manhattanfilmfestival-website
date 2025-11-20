# Manhattan Film Festival 2026 Website

Official website for the Manhattan Film Festival's 20th Anniversary celebration.

## Overview

The Manhattan Film Festival 2026 website celebrates 20 years of independent cinema in New York City. This modern, responsive website showcases the festival's heritage, programming, and provides easy access for filmmakers to submit their work.

## Design Features

### Visual Identity
- **Primary Color**: Red (#C41E3A) - representing passion, creativity, and NYC energy
- **Accent Color**: Gold (#D4AF37) - highlighting the 20th Anniversary prestige
- **Typography**:
  - Playfair Display - Elegant serif for headlines
  - Montserrat - Clean sans-serif for body text

### Homepage Sections

1. **Hero Section**
   - 20th Anniversary badge prominently displayed
   - Festival dates: June 12-22, 2026
   - Multiple call-to-action buttons (Submit, Book Screening, Watch Trailer)
   - Cinematic background with overlay effects

2. **Quick Links Bar**
   - Easy access to: Submit, Book a Screening, Program, Trailer
   - Icon-based navigation cards

3. **Highlights Section**
   - Festival highlights video/reel
   - Past winners showcase (2025 winners)
   - Festival statistics (20 years, 500+ films, 50+ countries, 10K+ attendees)

4. **Why MFF Section**
   - NYC Heritage
   - Filmmaker-First approach
   - Industry Access
   - Innovation focus

5. **Announcements**
   - Featured 20th Anniversary special offers
   - Early bird deadline information

6. **Sponsors Section**
   - Partner logos display
   - Call-to-action for new sponsors

7. **Newsletter Signup**
   - Stay connected form
   - Email subscription

## Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript** - Interactive features without dependencies

## Features

### Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px
- Touch-friendly navigation

### Animations
- Smooth scroll effects
- Fade-in on scroll for content sections
- Counter animations for statistics
- Parallax hero background
- Hover effects on interactive elements

### Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast ratio for text

## File Structure

```
manhattanfilmfestival-website/
├── index.html           # Homepage
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── main.js         # Interactive functionality
├── images/             # Image assets (to be added)
│   ├── hero-bg.jpg
│   ├── festival-reel-poster.jpg
│   ├── winner-1.jpg
│   ├── winner-2.jpg
│   └── winner-3.jpg
└── README.md           # This file
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd manhattanfilmfestival-website
   ```

2. **Open locally**
   - Simply open `index.html` in a web browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

3. **Add Images**
   - Place image files in the `/images` directory
   - Update image references in HTML as needed

## Planned Pages

Based on the website structure requirements:

- [ ] About (about.html)
- [ ] Genres (genres.html)
- [ ] Submit (submit.html)
- [ ] Book Screening (book-screening.html)
- [ ] Advertise (advertise.html)
- [ ] Sponsor Login (sponsor-login.html) - Password protected
- [ ] Press (press.html)
- [ ] Contact (contact.html)

## Customization

### Colors
Update the CSS variables in `css/styles.css`:
```css
:root {
    --primary-red: #C41E3A;
    --accent-gold: #D4AF37;
    /* ... other variables */
}
```

### Content
- Update text directly in `index.html`
- Modify navigation links as additional pages are created
- Add actual image files to replace placeholders

### Newsletter Integration
Update the form submission handler in `js/main.js` to connect to your email service provider (Mailchimp, SendGrid, etc.)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized CSS with minimal dependencies
- Lazy loading ready for images
- Minimal JavaScript footprint
- Fast page load times

## Next Steps

1. Add remaining pages (About, Genres, Submit, etc.)
2. Replace placeholder images with actual festival photos
3. Integrate video player for festival highlights
4. Connect newsletter form to email service
5. Add password protection to Sponsor section
6. Implement FilmFreeway submission integration
7. Add analytics tracking
8. SEO optimization

## Contributing

This is the official Manhattan Film Festival website. For questions or suggestions, please contact the festival team.

## License

© 2026 Manhattan Film Festival. All rights reserved.
