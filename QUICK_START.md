# 🚀 Quick Start Guide

## Getting Your E-Learning Website Up and Running in 5 Minutes

### Step 1: Open Terminal

Navigate to your project folder:

```bash
cd "C:\Users\Mbadi\Desktop\Self-Taught Computer Science\8hrs.xyz"
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages (Vue 3, NuxtJS, TypeScript, etc.)

### Step 3: Start Development Server

```bash
npm run dev
```

You should see output like:

```
Nuxt 3.x.x with Nitro
  ➜ Local:    http://localhost:3000/
  ➜ API:      http://localhost:3000/api
  ➜ press h + enter to show help
```

### Step 4: Open in Browser

Visit: **http://localhost:3000**

## What You'll See

### Home Page (`/`)

- Welcome banner with call-to-action
- Features highlight
- "Explore Courses" button

### Courses Page (`/courses`)

- 9 course cards in a responsive grid
- Click any card to see detailed course information
- Beautiful modal popup with course description

### Instructor Page (`/instructor`)

- Instructor profile with photo
- Bio and social media links
- LinkedIn, X (Twitter), Facebook, Instagram, YouTube

## Navbar

Available on all pages at the top:

- 🏠 Home - Back to welcome page
- 📚 Courses - View all courses
- 👤 Instructor - See instructor profile

## File Structure Explained

```
📁 components/      - Reusable Vue components
  └─ Navbar.vue     - Navigation bar
  └─ CourseCard.vue - Individual course card
  └─ CourseModal.vue - Course detail modal

📁 pages/           - NuxtJS pages (auto-routed)
  └─ index.vue      - Home page (/)
  └─ courses.vue    - Courses page (/courses)
  └─ instructor.vue - Instructor page (/instructor)

📁 data/            - Data files
  └─ courses.ts     - All course information

📁 assets/
  └─ styles.css     - Global styles

📁 public/
  └─ IMG_3668.jpg   - Instructor image

📄 app.vue          - Root component
📄 nuxt.config.ts   - NuxtJS configuration
📄 package.json     - Dependencies list
```

## Customization Examples

### Add a New Course

Edit `data/courses.ts`:

```typescript
{
  id: 10,
  title: "Your New Course",
  description: "Course description here..."
}
```

### Change Colors

Edit `assets/styles.css` - Look for gradient colors:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Update Instructor Info

Edit `pages/instructor.vue`:

- Change name, bio, social links
- Update image path if needed

## Building for Production

When ready to deploy:

```bash
# Build optimized version
npm run build

# Preview the build locally
npm run preview

# Or generate static HTML files
npm run generate
```

## Deployment Tips

The website can be deployed to:

- **Vercel** (recommended for NuxtJS)
- **Netlify**
- **GitHub Pages**
- **Any static hosting** (if using `npm run generate`)

## Troubleshooting

### Port 3000 is already in use?

```bash
npm run dev -- -p 3001
```

### Image not showing on instructor page?

Make sure `public/IMG_3668.jpg` exists (it should already be copied)

### Need help with NuxtJS?

- Visit: https://nuxt.com
- Documentation: https://nuxt.com/docs

## Common Commands

| Command            | What it does             |
| ------------------ | ------------------------ |
| `npm run dev`      | Start development server |
| `npm run build`    | Build for production     |
| `npm run preview`  | Preview production build |
| `npm run generate` | Create static website    |
| `npm install`      | Install dependencies     |

## Features Included

✅ Beautiful responsive design
✅ 9 comprehensive courses
✅ Course detail modals
✅ Instructor profile
✅ Social media integration
✅ Mobile-friendly layout
✅ Smooth animations
✅ Modern gradient styling
✅ TypeScript support
✅ SEO-friendly structure

---

**Ready to go!** Your e-learning platform is now ready to serve students from anywhere. Happy teaching! 🎓
