# Quick Deploy Guide 🚀

Get your React Weather App live in 5 minutes!

## Prerequisites
- GitHub account
- Render account
- OpenWeather API key

## Step 1: GitHub Setup (2 minutes)

### 1.1 Create Repository
1. Go to [GitHub](https://github.com)
2. Click "New repository"
3. Name: `react-weather-app`
4. Make it **Public**
5. Click "Create repository"

### 1.2 Push Code
```bash
# In your project directory
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/react-weather-app.git
git branch -M main
git push -u origin main
```

## Step 2: Render Setup (3 minutes)

### 2.1 Create Account
1. Go to [Render](https://render.com)
2. Sign up with GitHub
3. Verify email

### 2.2 Deploy Service
1. Click "New +" → "Web Service"
2. Connect GitHub account
3. Select `react-weather-app` repository
4. Configure:
   - **Name**: `react-weather-app`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
5. Click "Create Web Service"

### 2.3 Add Environment Variable
1. In your service dashboard, go to "Environment"
2. Add variable:
   - **Key**: `VITE_OPENWEATHER_API_KEY`
   - **Value**: Your OpenWeather API key

## Step 3: Get Your API Key

1. Go to [OpenWeather](https://openweathermap.org/api)
2. Sign up for free account
3. Get your API key
4. Add it to Render environment variables

## Step 4: Test Your App

1. Wait for build to complete (2-3 minutes)
2. Visit your URL: `https://your-app-name.onrender.com`
3. Test the weather search!

## Troubleshooting

### Build Fails?
- Check build logs in Render
- Ensure all files are committed to GitHub
- Verify Node.js version (18+)

### API Not Working?
- Check environment variable is set correctly
- Verify API key is valid
- Test API key in browser

### App Not Loading?
- Check if `server.js` is in root directory
- Verify `package.json` has `start` script
- Check Render logs for errors

## Your App is Live! 🎉

Your weather app is now accessible worldwide at:
`https://your-app-name.onrender.com`

## Next Steps

- [ ] Test all features
- [ ] Share with friends
- [ ] Add custom domain (optional)
- [ ] Monitor performance

---

**Need help?** Check the full [DEPLOYMENT.md](DEPLOYMENT.md) guide! 