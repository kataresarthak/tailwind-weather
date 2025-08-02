# Deployment Guide: React Weather App

This guide will walk you through deploying your React Weather App to Render using GitHub.

## Prerequisites

- GitHub account
- Render account
- Node.js installed locally (for testing)

## Step 1: Prepare Your Project

### 1.1 Install Dependencies
```bash
npm install
```

### 1.2 Test Locally
```bash
npm run dev
```
Make sure everything works correctly at `http://localhost:5173`

### 1.3 Test Production Build
```bash
npm run build
npm start
```
Test the production build at `http://localhost:3000`

## Step 2: Set Up GitHub Repository

### 2.1 Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: React Weather App"
```

### 2.2 Create GitHub Repository
1. Go to [GitHub](https://github.com)
2. Click "New repository"
3. Name it `react-weather-app`
4. Make it public or private (your choice)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### 2.3 Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/react-weather-app.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Render

### 3.1 Create Render Account
1. Go to [Render](https://render.com)
2. Sign up with your GitHub account
3. Verify your email

### 3.2 Create New Web Service
1. In Render dashboard, click "New +"
2. Select "Web Service"
3. Connect your GitHub account if not already connected
4. Select your `react-weather-app` repository

### 3.3 Configure the Service
Fill in the following details:

- **Name**: `react-weather-app` (or your preferred name)
- **Environment**: `Node`
- **Region**: Choose closest to your users
- **Branch**: `main`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`

### 3.4 Advanced Settings (Optional)
- **Auto-Deploy**: Enable (recommended)
- **Health Check Path**: `/` (default)

### 3.5 Create Service
Click "Create Web Service"

## Step 4: Environment Variables (Important!)

### 4.1 Add API Key
1. In your Render service dashboard, go to "Environment"
2. Add the following environment variable:
   - **Key**: `VITE_OPENWEATHER_API_KEY`
   - **Value**: Your OpenWeather API key

### 4.2 Update API Key in Code
Update `src/hooks/useWeatherData.js`:
```javascript
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || "your-fallback-key";
```

## Step 5: Deploy and Test

### 5.1 First Deployment
- Render will automatically start building your app
- Monitor the build logs for any errors
- Once complete, you'll get a URL like: `https://your-app-name.onrender.com`

### 5.2 Test Your App
1. Visit your deployed URL
2. Test the search functionality
3. Verify dark mode toggle works
4. Check responsive design on mobile
5. Test all weather features

## Step 6: Custom Domain (Optional)

### 6.1 Add Custom Domain
1. In Render dashboard, go to "Settings"
2. Click "Custom Domains"
3. Add your domain
4. Update DNS records as instructed

## Troubleshooting

### Common Issues

#### Build Fails
- Check build logs in Render dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

#### API Key Issues
- Make sure environment variable is set correctly
- Check if API key is valid
- Verify the key name matches your code

#### Routing Issues
- Ensure `_redirects` file is in `public/` folder
- Check that `server.js` handles all routes correctly

#### Performance Issues
- Enable caching headers in `server.js`
- Optimize images and assets
- Consider using CDN for static assets

#### ES Module Issues (Fixed)
If you encounter `require is not defined` errors:
- The project uses ES modules (`"type": "module"` in package.json)
- `server.js` has been updated to use ES module syntax
- Alternative: Use `npm run start:cjs` for CommonJS server

### Debug Commands
```bash
# Check build locally
npm run build

# Test production server locally
npm start

# Alternative server (CommonJS)
npm run start:cjs

# Check for linting issues
npm run lint
```

## Monitoring and Maintenance

### 1. Monitor Performance
- Use Render's built-in monitoring
- Check response times
- Monitor error rates

### 2. Update Dependencies
```bash
npm update
git add .
git commit -m "Update dependencies"
git push
```

### 3. Environment Variables
- Keep API keys secure
- Use different keys for development/production
- Rotate keys regularly

## Security Considerations

### 1. API Key Security
- Never commit API keys to Git
- Use environment variables
- Consider API key rotation

### 2. HTTPS
- Render provides HTTPS by default
- Ensure all external requests use HTTPS

### 3. CORS
- Configure CORS if needed
- Restrict to specific domains

## Cost Optimization

### 1. Render Free Tier
- 750 hours/month free
- Sleeps after 15 minutes of inactivity
- Perfect for personal projects

### 2. Upgrade Options
- $7/month for always-on service
- Better performance and features

## Support

### Render Support
- [Render Documentation](https://render.com/docs)
- [Render Community](https://community.render.com)

### GitHub Support
- [GitHub Guides](https://guides.github.com)
- [GitHub Community](https://github.community)

---

## Quick Deployment Checklist

- [ ] Project builds locally (`npm run build`)
- [ ] Production server works (`npm start`)
- [ ] Git repository created and pushed
- [ ] Render service created
- [ ] Environment variables set
- [ ] API key updated in code
- [ ] App deployed and tested
- [ ] Custom domain configured (optional)
- [ ] Monitoring set up

Your React Weather App should now be live and accessible to users worldwide! 🌍 