# THERAPIEpunkt Sünikon

React-based website for THERAPIEpunkt Sünikon physiotherapy practice in Switzerland.

## About

Professional website featuring physiotherapy services, team information, and contact details. Built with React and deployed on GitHub Pages.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Configuration

Update `homepage` in `package.json` before deployment:

```json
"homepage": "https://YOUR_USERNAME.github.io/therapiepunkt-suenikon"
```

Update `basename` in `src/App.js`:

```javascript
<BrowserRouter basename="/therapiepunkt-suenikon">
```

## Project Structure

```
src/
├── components/
│   ├── Header.js/css      # Navigation and contact bar
│   └── Footer.js/css      # Footer with contact info
├── pages/
│   ├── Home.js/css        # Landing page
│   ├── About.js/css       # Team profiles
│   ├── Services.js/css    # Treatment offerings
│   └── Location.js/css    # Location and contact
├── App.js                 # Main application
└── index.js               # Entry point
```

## Pages

- **Home** - Welcome and introduction
- **Über uns** - Team members and qualifications
- **Angebot** - Services and pricing
- **Lageplan** - Location and directions

## Tech Stack

- React 18
- React Router 6
- GitHub Pages
- CSS3 (no frameworks)

## Contact

**THERAPIEpunkt Sünikon**  
Phone: 043 540 65 69  
Email: info@therapiepunkt-suenikon.ch  
Web: www.therapiepunkt-suenikon.ch

## License

© 2023 THERAPIEpunkt Sünikon