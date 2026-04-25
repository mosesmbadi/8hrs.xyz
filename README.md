# 8hrs.xyz - E-Learning Platform

A modern, responsive e-learning website built with NuxtJS featuring courses by Moses Mbadi.

## Features

- **Modern Design**: Beautiful gradient-based UI with smooth animations
- **Responsive Layout**: Mobile-friendly design that works on all devices
- **Course Showcase**: Interactive course cards with detailed information
- **Instructor Profile**: Complete instructor information with social media links
- **Navigation**: Simple and intuitive navbar for easy navigation

## Courses Offered

1. Self Taught Computer Science
2. Graphic Design
3. 2D Animation
4. Cyber Security
5. Networking for Beginners
6. DevOps
7. Cloud Computing
8. Computer Repair
9. Management in IT

## Instructor

**Moses Mbadi** - Tech Educator & Founder

- LinkedIn: https://www.linkedin.com/in/moses-mbadi-0b8500198/
- X (Twitter): https://x.com/mosesmbadi
- Facebook: https://www.facebook.com/mbadi.107483
- Instagram: https://www.instagram.com/mbadimoses/
- YouTube: https://www.youtube.com/@mosesmbadi

## Project Structure

```
8hrs.xyz/
├── components/          # Vue components
│   ├── Navbar.vue
│   ├── CourseCard.vue
│   └── CourseModal.vue
├── pages/              # NuxtJS pages
│   ├── index.vue       # Home page
│   ├── courses.vue     # Courses page
│   └── instructor.vue  # Instructor profile
├── data/               # Data files
│   └── courses.ts      # Course data
├── assets/             # Styles and assets
│   └── styles.css
├── public/             # Static assets
│   └── IMG_3668.jpg    # Instructor image
├── app.vue             # Root component
├── nuxt.config.ts      # NuxtJS configuration
├── package.json        # Dependencies
└── tsconfig.json       # TypeScript configuration
```

## Installation & Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Steps

1. **Navigate to the project directory:**

   ```bash
   cd "path/to/8hrs.xyz"
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run development server:**

   ```bash
   npm run dev
   ```

   The website will be available at `http://localhost:3000`

4. **Build for production:**

   ```bash
   npm run build
   ```

5. **Preview production build:**

   ```bash
   npm run preview
   ```

6. **Generate static website:**
   ```bash
   npm run generate
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run generate` - Generate static website

## Pages

### Home Page (`/`)

Welcome page with call-to-action and key features highlight.

### Courses Page (`/courses`)

Displays all 9 courses in a responsive grid. Click on any course card to view detailed information in a modal.

### Instructor Page (`/instructor`)

Complete instructor profile with photo, bio, and social media links.

## Technology Stack

- **Frontend Framework**: Vue 3
- **Framework**: NuxtJS 3
- **Language**: TypeScript
- **Styling**: CSS3
- **Features**: Responsive design, smooth animations, modular components

## Customization

### Adding New Courses

Edit `data/courses.ts` and add new course objects to the `courses` array:

```typescript
{
  id: 10,
  title: "Your Course Title",
  description: "Your course description"
}
```

### Modifying Styles

Edit `assets/styles.css` to customize colors, fonts, and layouts.

### Updating Instructor Info

Edit `pages/instructor.vue` to update instructor information and social links.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The website is optimized for:

- Fast loading times
- Smooth animations
- Mobile responsiveness
- SEO-friendly structure

## License

Free to use and modify for educational purposes.

## Contact

For more information, visit the instructor's social media profiles or explore the courses on the website.

---

Built with ❤️ by Moses Mbadi



git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:mosesmbadi/8hrs.xyz.git
git push -u origin main