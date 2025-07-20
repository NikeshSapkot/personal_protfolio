# Modern Portfolio Website

A highly responsive, modern, and elegant personal portfolio website built with React and Tailwind CSS. Features smooth animations, glassmorphism effects, and a premium design aesthetic.

## ✨ Features

- **Modern Design**: Clean, minimalist design with glassmorphism effects
- **Responsive**: Mobile-first responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Framer Motion animations throughout the site
- **Interactive Elements**: Hover effects, scroll animations, and micro-interactions
- **Tech Stack Carousel**: Animated technology showcase using Swiper.js
- **Timeline**: Professional experience and education timeline
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🚀 Technologies Used

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Lucide React** - Beautiful icons
- **Swiper.js** - Touch slider
- **React Scroll** - Smooth scrolling
- **React Intersection Observer** - Scroll-based animations

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation bar
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── Projects.js     # Projects showcase
│   ├── Skills.js       # Skills and tech stack
│   ├── Experience.js   # Timeline and experience
│   ├── Contact.js      # Contact form
│   └── Footer.js       # Footer
├── contexts/           # React contexts
│   └── ThemeContext.js # Theme management
├── App.js             # Main app component
├── index.js           # Entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.js`)
   - Name, title, and description
   - Call-to-action buttons

2. **About Section** (`src/components/About.js`)
   - Personal information
   - Statistics and achievements
   - Profile image (replace placeholder)

3. **Projects Section** (`src/components/Projects.js`)
   - Project details, images, and links
   - Technologies used
   - Live and GitHub URLs

4. **Skills Section** (`src/components/Skills.js`)
   - Skill categories and proficiency levels
   - Tech stack icons and names

5. **Experience Section** (`src/components/Experience.js`)
   - Work experience and education
   - Certifications and awards

6. **Contact Section** (`src/components/Contact.js`)
   - Contact information
   - Social media links
   - Email integration

### Styling

1. **Colors**: Update the color scheme in `tailwind.config.js`
2. **Fonts**: Modify font families in the Tailwind config
3. **Animations**: Customize animation timings in components

### Email Integration

To enable email functionality:

1. **Install EmailJS** (already included)
2. **Set up EmailJS account** at [emailjs.com](https://www.emailjs.com/)
3. **Update Contact component** with your EmailJS credentials

```javascript
// In src/components/Contact.js
import emailjs from 'emailjs-com';

// Initialize EmailJS
emailjs.init('YOUR_USER_ID');

// Update handleSubmit function
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_USER_ID'
    );
    setSubmitStatus('success');
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

## 🎯 Key Features Explained

### Glassmorphism Effects
The portfolio uses glassmorphism effects throughout with:
- Backdrop blur effects
- Semi-transparent backgrounds
- Subtle borders
- Soft shadows

### Smooth Animations
- **Framer Motion**: Page transitions and component animations
- **Scroll-triggered**: Elements animate when they come into view
- **Hover effects**: Interactive elements respond to user interaction
- **Staggered animations**: Sequential element reveals

### Responsive Design
- **Mobile-first**: Designed for mobile devices first
- **Breakpoint system**: Responsive grid layouts
- **Touch-friendly**: Optimized for touch interactions
- **Performance**: Optimized for all screen sizes

### Dark/Light Mode
- **Context-based**: Uses React Context for state management
- **Persistent**: Saves user preference in localStorage
- **System preference**: Respects user's system theme
- **Smooth transitions**: Animated theme switching

## 🔧 Advanced Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to `src/App.js`
3. Update navigation in `src/components/Navbar.js`

### Custom Animations

```javascript
// Example custom animation
const customVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};
```

### Performance Optimization

- **Lazy loading**: Components load when needed
- **Image optimization**: Use optimized images
- **Code splitting**: Split large components
- **Bundle analysis**: Monitor bundle size

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide](https://lucide.dev/) for icons
- [Swiper.js](https://swiperjs.com/) for carousel
- [React Scroll](https://github.com/fisshy/react-scroll) for smooth scrolling

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Made with ❤️ using React & Tailwind CSS** 