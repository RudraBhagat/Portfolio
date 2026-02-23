# Portfolio Website

A modern, full-stack portfolio website built with React and Express. Showcase your projects, experience, and allow visitors to contact you.

## 🌟 Features

- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Modern UI**: Built with Tailwind CSS for a clean, professional appearance
- **Smooth Animations**: ScrollReveal integration for engaging page animations
- **Multi-page Navigation**: React Router for seamless page transitions
- **Icon Library**: Comprehensive icon support with React Icons

## 🛠️ Tech Stack

### Frontend
- **React** 19.2.4 - UI library
- **React Router** 7.13.0 - Client-side routing
- **Tailwind CSS** 4.1.18 - Utility-first CSS framework
- **React Icons** 5.5.0 - Icon component library
- **ScrollReveal** 4.0.9 - Scroll animation library

## 📁 Project Structure

```
Portfolio/
├── README.md
├── frontend/                 # React application
│   ├── public/              # Static files
│   │   └── resume/          # Resume files
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── Navbar.js
│   │   │   └── Footer.js
│   │   ├── pages/           # Page components
│   │   │   ├── Home.js
│   │   │   ├── Projects.js
│   │   │   ├── Experience.js
│   │   │   └── Contact.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json

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
   ```

## 💻 Running the Application

### Development Mode

**Terminal 1 - Frontend**
```bash
cd frontend
npm start
```
The frontend will open at [http://localhost:3000](http://localhost:3000)

### Production Build

**Frontend**
```bash
cd frontend
npm run build
```
This creates an optimized build in the `frontend/build` folder.

## 📋 Pages

- **Home**: Landing page with introduction
- **Projects**: Showcase of your projects and work
- **Experience**: Professional experience and skills

## 🎨 Customization

### Styling
- Modify Tailwind CSS classes in component files
- CSS modules are available in `src/components/` and `src/pages/` folders

### Content
- Update page content in the respective files in `src/pages/`
- Add/modify projects in the Projects page
- Update experience details in the Experience page

### Resume
Place your resume file in `frontend/public/resume/` for download functionality

## 📱 Responsive Design

The site is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (below 768px)

## 🐛 Troubleshooting

**Animations not showing?**
- Clear browser cache
- Ensure ScrollReveal library is properly installed

## 📝 License

ISC

## 🤝 Contributing

Feel free to submit issues or pull requests to improve the portfolio.

## 👤 Author

Rudra Bhagat

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
