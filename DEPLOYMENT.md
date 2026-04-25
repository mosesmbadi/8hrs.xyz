# 🌐 Deployment Guide

Deploy your 8hrs.xyz e-learning platform to the internet in minutes!

## Option 1: Vercel (Easiest - Recommended for NuxtJS)

### Free tier includes:

- Automatic deployments from Git
- Free SSL certificate
- Global CDN
- Zero-config NuxtJS deployment

### Steps:

1. Push your project to GitHub/GitLab/Bitbucket
2. Go to https://vercel.com and sign up
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects NuxtJS - just click "Deploy"
6. Your site goes live instantly!

### Your URL will be: `your-project.vercel.app`

---

## Option 2: Netlify

### Free tier includes:

- Automatic Git deployments
- Free SSL
- Global CDN

### Steps:

1. Push to GitHub/GitLab
2. Go to https://netlify.com and sign up
3. Click "New site from Git"
4. Choose your repository
5. Set build command: `npm run build`
6. Set publish directory: `.output/public`
7. Deploy!

---

## Option 3: GitHub Pages (Static Generation)

### Steps:

1. Generate static files:

   ```bash
   npm run generate
   ```

2. Push the generated `dist` folder to GitHub

3. Go to your repo Settings → Pages

4. Choose "Deploy from a branch"

5. Select `main` branch and `/root` folder

6. Your site is now live at: `username.github.io/repository`

---

## Option 4: Traditional Hosting (GoDaddy, Bluehost, etc.)

### Steps:

1. Build your project:

   ```bash
   npm run build
   ```

2. Upload the `.output` folder to your hosting

3. Set Node.js version on your hosting panel (18+)

4. Start the application via:
   ```bash
   node .output/server/index.mjs
   ```

---

## Option 5: Docker (Advanced)

### Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
```

### Build and run:

```bash
docker build -t 8hrs-elearning .
docker run -p 3000:3000 8hrs-elearning
```

---

## Option 6: AWS Amplify

### Steps:

1. Push to GitHub
2. Go to AWS Amplify Console
3. Connect your repository
4. Accept default settings
5. Amplify auto-detects NuxtJS
6. Deploy automatically

---

## Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All dependencies installed: `npm install`
- [ ] Local build succeeds: `npm run build`
- [ ] No console errors: `npm run dev`
- [ ] Image displays on instructor page
- [ ] All links work correctly
- [ ] Mobile layout looks good
- [ ] Courses load properly

---

## Environment Variables

If you need to add environment variables:

1. Create `.env` file locally (already in `.gitignore`)

2. Add to your deployment service:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Build & Deploy → Environment
   - **GitHub Pages**: Secrets & variables → Repository secrets

Example variables in `.env.example` are ready to use!

---

## Domain Setup

After deployment, you can connect your own domain:

### Vercel:

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records at your domain provider

### Netlify:

1. Domain Settings → Custom domains
2. Point your domain's DNS to Netlify

### GitHub Pages:

1. Settings → Pages → Custom domain
2. Update DNS on your domain provider

---

## Monitoring & Analytics

### Google Analytics:

Add to `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: ["@nuxtjs/google-analytics"],
  googleAnalytics: {
    id: "YOUR_GA_ID",
  },
});
```

### Monitoring:

- Vercel Analytics: Built-in, no setup needed
- Netlify Analytics: Enable in site settings
- Sentry: For error tracking

---

## Performance Optimization Tips

- Images are auto-optimized
- Code splitting is automatic
- Caching is handled by CDN
- Consider: WebP images for faster loading

---

## Troubleshooting Deployment

### Build fails?

1. Check Node.js version (must be 18+)
2. Clear cache and rebuild
3. Check `.gitignore` isn't excluding important files

### Image not showing?

- Ensure `public/IMG_3668.jpg` is in public folder
- Use correct path: `/IMG_3668.jpg`

### Site is slow?

- Check if build succeeded
- Use Vercel Analytics to identify bottlenecks
- Optimize images if needed

---

## Recommended Setup

**Best combination for beginners:**

1. **Code hosting**: GitHub (free)
2. **Deployment**: Vercel (auto-deploy on push)
3. **Domain**: Namecheap or GoDaddy (~$2/year)

**Benefits:**

- Zero downtime deployments
- Automatic SSL
- Global CDN
- Free tier is generous
- Push code, site updates automatically

---

## Cost Estimates

| Service      | Cost            | Notes                    |
| ------------ | --------------- | ------------------------ |
| Vercel       | Free            | Perfect for this project |
| Netlify      | Free            | Also great option        |
| GitHub Pages | Free            | Needs static generation  |
| Domain       | $1-15/year      | Optional                 |
| **Total**    | **~$0-15/year** | Very affordable!         |

---

## Support Resources

- [Nuxt Deployment Docs](https://nuxt.com/docs/getting-started/deployment)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Guide](https://pages.github.com)

---

**Your website is ready to serve students worldwide!** 🚀

Choose your deployment platform and get live today!
