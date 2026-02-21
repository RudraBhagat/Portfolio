# Portfolio Website

A modern, full-stack portfolio website built with React and Express. Showcase your projects, experience, and allow visitors to contact you with an integrated email system.

## 🌟 Features

- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Modern UI**: Built with Tailwind CSS for a clean, professional appearance
- **Smooth Animations**: ScrollReveal integration for engaging page animations
- **Multi-page Navigation**: React Router for seamless page transitions
- **Contact Form**: Fully functional contact form with email integration
- **Spam Protection**: Honeypot field to prevent bot submissions
- **Icon Library**: Comprehensive icon support with React Icons
- **Backend API**: Express server with nodemailer for email notifications

## 🛠️ Tech Stack

### Frontend
- **React** 19.2.4 - UI library
- **React Router** 7.13.0 - Client-side routing
- **Tailwind CSS** 4.1.18 - Utility-first CSS framework
- **React Icons** 5.5.0 - Icon component library
- **ScrollReveal** 4.0.9 - Scroll animation library

### Backend
- **Express** 5.2.1 - Web framework
- **Nodemailer** 8.0.1 - Email service
- **CORS** 2.8.6 - Cross-origin resource sharing
- **dotenv** 17.3.1 - Environment variable management

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
└── backend/                 # Express server
    ├── Server.js            # Main server file
    └── package.json
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

3. **Install backend dependencies**
   ```bash
   cd ../backend
   npm install
   ```

### Environment Setup

Create a `.env` file in the `backend` folder with the following variables:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Note:** For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password.

## 💻 Running the Application

### Development Mode

**Terminal 1 - Frontend**
```bash
cd frontend
npm start
```
The frontend will open at [http://localhost:3000](http://localhost:3000)

**Terminal 2 - Backend**
```bash
cd backend
npm start
```
The backend server will run on [http://localhost:5000](http://localhost:5000) (or your configured port)

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
- **Contact**: Contact form for visitors to reach you

## 📧 Contact Form

The contact form on the Contact page:
- Collects name, email, subject, and message
- Includes honeypot spam protection
- Sends emails via nodemailer
- Provides user feedback on submission status

## 🔄 API Endpoints

### POST /api/contact
Submits a contact form request and sends an email notification.

**Request Body:**
```json
{
  "name": "visitor name",
  "email": "visitor@email.com",
  "subject": "inquiry subject",
  "message": "message content",
  "botField": ""
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

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

**Email not sending?**
- Verify EMAIL_USER and EMAIL_PASS in `.env`
- Check your Gmail app password is correctly set
- Ensure backend server is running

**CORS errors?**
- Check that backend is running on the correct port
- Verify CORS is enabled in Server.js

**Animations not showing?**
- Clear browser cache
- Ensure ScrollReveal library is properly installed

## 📝 License

ISC

## 🤝 Contributing

Feel free to submit issues or pull requests to improve the portfolio.

## 👤 Author

Your Name Here

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
