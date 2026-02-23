# Portfolio Website

A modern, responsive portfolio website showcasing projects, experience, and professional expertise. Built with React and featuring smooth animations, dynamic content, and a professional design using Tailwind CSS.

## ✨ Features

- **Responsive Design**: Mobile-first approach that looks great on all devices
- **Dynamic Typewriter Effect**: Animated role display on the home page
- **Modern UI**: Built with Tailwind CSS for a clean, professional aesthetic
- **Smooth Animations**: ScrollReveal integration for engaging scroll animations
- **Multi-page Navigation**: React Router for seamless page transitions
- **Icon Library**: Comprehensive icon support with React Icons
- **Professional Layout**: Includes Navbar, Footer, and dedicated sections for projects and experience
- **Resume Integration**: Embedded resume files in the public directory

## 🛠️ Tech Stack

- **React** 19.2.4 - UI library
- **React Router** 7.13.0 - Client-side routing
- **Tailwind CSS** 4.1.18 - Utility-first CSS framework
- **React Icons** 5.5.0 - Icon component library
- **ScrollReveal** 4.0.9 - Scroll animation library
- **CSS** 3 - Component-specific styling

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── Navbar.js        # Navigation header
│   ├── Navbar.css
│   ├── Footer.js        # Footer section
│   └── Footer.css
├── pages/               # Page components
│   ├── Home.js          # Landing page with typewriter effect
│   ├── Home.css
│   ├── Projects.js      # Project showcase
│   ├── Projects.css
│   ├── Experience.js    # Work experience
│   └── Experience.css
├── App.js               # Main app component
├── App.css              # Global app styles
├── index.js             # React entry point
└── index.css            # Global styles

public/
├── index.html           # HTML template
├── manifest.json        # PWA manifest
└── resume/              # Resume files
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```### Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 💻 Running the Application

### Development Mode

```bash
npm start
```

The application will automatically open at [http://localhost:3000](http://localhost:3000). The page will reload when you make changes.

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `build/` folder, ready for deployment.

### Testing

```bash
npm test
```

Runs the test suite in interactive watch mode.

## 📋 Pages Overview

- **Home** - Introduction with animated typewriter effect showcasing professional roles
- **Projects** - Portfolio of completed projects and work samples
- **Experience** - Professional experience, skills, and achievements

## 🎨 Customization Guide

### Updating Content

**Home Page**
- Edit the `roles` array in [src/pages/Home.js](src/pages/Home.js#L13) to customize the typewriter text
- Modify personal introduction and profile information

**Projects Page**
- Add/remove projects in [src/pages/Projects.js](src/pages/Projects.js)
- Update project descriptions, links, and images

**Experience Page**
- Update work experience details in [src/pages/Experience.js](src/pages/Experience.js)
- Add skills, certifications, and achievements

### Styling

- **Global Styles**: Edit [src/index.css](src/index.css) for site-wide changes
- **Component Styles**: Each component has its own CSS file (e.g., [src/pages/Home.css](src/pages/Home.css))
- **Tailwind CSS**: Use Tailwind classes in JSX for utility-first styling

### Resume

- Place your resume file in `public/resume/` directory
- Link to it from components for download functionality

## 📱 Responsive Design

The website is fully responsive and optimized for all screen sizes:
- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px

Uses Tailwind CSS media queries for responsive layouts.

## 🚀 Deployment

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Connect your repository to Netlify and deploy the `build/` folder

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to GitHub Pages

Update `package.json` with your repository URL and run:
```bash
npm run build
npm install gh-pages -- save-dev
npm run deploy
```

## 🛠️ Available Scripts

- `npm start` - Run development server
- `npm run build` - Create production build
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App (irreversible)

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [ScrollReveal Documentation](https://scrollrevealjs.org)

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# On macOS/Linux
lsof -i :3000
kill -9 <PID>
```

**Animations not displaying?**
- Clear browser cache (Ctrl+Shift+Delete)
- Ensure ScrollReveal library is installed: `npm install scrollreveal`
- Check browser console for errors

**Build fails?**
- Clear `node_modules/` and reinstall: `rm -rf node_modules && npm install`
- Ensure Node.js version is v14 or higher: `node --version`

## 📝 License

ISC

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve the portfolio.

## 👤 Author

Rudra Bhagat

---

**Built with ❤️ using React and Tailwind CSS**

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
