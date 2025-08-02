# 🚨 Deployment Fix: ES Module Issue

## Problem
Your deployment failed with this error:
```
ReferenceError: require is not defined in ES module scope
```

## Root Cause
The project uses ES modules (`"type": "module"` in package.json), but the server was using CommonJS syntax (`require`).

## ✅ Solution Applied

### 1. Updated `server.js` to ES Module Syntax
```javascript
// OLD (CommonJS)
const express = require('express');
const path = require('path');

// NEW (ES Module)
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

### 2. Added Alternative Server Option
Created `server.cjs` for CommonJS compatibility if needed.

### 3. Updated Package Scripts
```json
{
  "scripts": {
    "start": "node server.js",        // ES Module server
    "start:cjs": "node server.cjs"    // CommonJS server
  }
}
```

## 🚀 Redeploy Now

### Option 1: Use Updated Code (Recommended)
1. Pull the latest changes from your repository
2. Push to GitHub:
```bash
git add .
git commit -m "Fix: Update server.js to ES module syntax"
git push
```
3. Render will auto-deploy with the fix

### Option 2: Change Start Command in Render
If you can't update the code immediately:
1. Go to your Render service dashboard
2. Go to "Settings" → "General"
3. Change "Start Command" to: `npm run start:cjs`
4. Save and redeploy

## ✅ Verification

After redeploying, your app should:
- ✅ Build successfully
- ✅ Start without errors
- ✅ Be accessible at your Render URL
- ✅ Show weather data correctly

## 🔧 Alternative Solutions

### If ES Modules Still Cause Issues:
1. **Use CommonJS Server**: Change start command to `npm run start:cjs`
2. **Remove ES Module Type**: Remove `"type": "module"` from package.json
3. **Rename Server File**: Rename `server.js` to `server.cjs`

### For Future Reference:
- ES modules use `import/export`
- CommonJS uses `require/module.exports`
- Node.js treats `.js` files as ES modules when `"type": "module"` is set
- Use `.cjs` extension for CommonJS files in ES module projects

## 📞 Need Help?

If the issue persists:
1. Check Render build logs
2. Verify all files are committed to GitHub
3. Ensure environment variables are set correctly
4. Contact Render support if needed

---

**Your weather app should now deploy successfully!** 🌤️ 