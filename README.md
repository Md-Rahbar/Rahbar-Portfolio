# Portfolio
Just a simple cv that shows me and my skills and ability to learn as well.😀

A modern, fully responsive portfolio website built with React, Vite, and Tailwind CSS. Showcase your skills, projects, and experience with a sleek, animated interface.

## Features

- **Responsive Design** - Mobile-first approach with smooth layouts across all devices
- **Smooth Animations** - Framer Motion integration for elegant transitions and interactions
- **Project Showcase** - Display your projects with modals, descriptions, and links
- **Skills Section** - Present your technical expertise in an organized manner
- **Contact Section** - Easy way for visitors to get in touch
- **Modern Styling** - Tailwind CSS for utility-first, customizable design
- **Fast Performance** - Vite for rapid development and optimized builds
- **Icon Support** - React Icons and FontAwesome for beautiful, scalable icons

## Tech Stack

- **React 19.2.0** - JavaScript library for building user interfaces
- **Vite** - Next-generation frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library for React
- **React Router** - Client-side routing for seamless navigation
- **React Icons** - Popular icon library
- **FontAwesome** - Comprehensive icon library

## Project Structure

```
src/
├── components/
│   ├── Footer.jsx        # Footer component
│   ├── Navbar.jsx        # Navigation bar
│   ├── ProjectCard.jsx   # Individual project card
│   ├── ProjectModal.jsx  # Modal for project details
│   └── Starter.jsx       # Hero/starter section
├── pages/
│   ├── About.jsx         # About section
│   ├── Contact.jsx       # Contact section
│   ├── Projects.jsx      # Projects showcase
│   └── Skills.jsx        # Skills section
├── App.jsx               # Main application component
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Md-Rahbar/Rahbar-Portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another available port).

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Customization

### Colors & Styling

Edit the Tailwind configuration in [tailwind.config.js](tailwind.config.js) to customize colors, fonts, and other design tokens.

### Content

Update the individual page components in `src/pages/` to add your own:
- About information
- Skills and technologies
- Projects and portfolio items
- Contact details

### Fonts

Custom fonts (Bitcount Single and Macondo) are included in the `public/fonts/` directory.

## Build & Deployment

To create a production build:
```bash
npm run build
```

The optimized files will be in the `dist/` directory, ready to deploy to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## Browser Support

This portfolio works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

This project is open source and available under the MIT License.

## Contact

For questions or feedback, feel free to reach out through the contact section on the portfolio.


"""
- add paddings to navbar elements 
- close project div on pressing escape 
- or chahe to jb projects p hover kr rhe h to border de de to or highlight ho jaye vo
"""