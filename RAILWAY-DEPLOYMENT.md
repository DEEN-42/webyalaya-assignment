# Railway Deployment Guide

## Step-by-Step Guide to Deploy on Railway

### Prerequisites
- GitHub account with your code pushed
- Railway account (sign up at https://railway.app)

---

## Part 1: Deploy Backend to Railway

### Step 1: Sign Up / Log In to Railway
1. Go to https://railway.app
2. Click "Login" and sign in with GitHub
3. Authorize Railway to access your GitHub repositories

### Step 2: Create New Project
1. Click "New Project" on the Railway dashboard
2. Select "Deploy from GitHub repo"
3. Choose your repository: `webyalaya-assinment`
4. Railway will detect your project

### Step 3: Configure Backend Service
1. After selecting the repo, Railway will show configuration options
2. Click on "Add variables" or go to "Variables" tab
3. Add the following environment variables:

   **Environment Variables to Add:**
   ```
   NODE_ENV=production
   PORT=4000
   ```
   
   **Note:** Don't add CORS_ORIGIN yet - we'll add it after deploying the frontend

### Step 4: Configure Build Settings
1. Go to "Settings" tab
2. Under "Build & Deploy":
   - **Root Directory**: Leave empty or set to `/`
   - **Build Command**: `cd backend && npm install && npm run build`
   - **Start Command**: `cd backend && npm run start:prod`

### Step 5: Deploy Backend
1. Click "Deploy" or Railway will auto-deploy
2. Wait for the build to complete (2-5 minutes)
3. Once deployed, you'll see "Active" status

### Step 6: Get Your Backend URL
1. In the Railway dashboard, click on your service
2. Go to "Settings" tab
3. Scroll to "Networking" section
4. Click "Generate Domain" to get a public URL
5. Your backend URL will be something like:
   ```
   https://webyalaya-assinment-production.up.railway.app
   ```
6. **Copy this URL** - you'll need it for the frontend!

### Step 7: Test Your Backend
Open your browser or use curl to test:
```bash
# Test the backend is running
curl https://your-backend-url.railway.app/notes

# You should get an empty array: []
```

---

## Part 2: Deploy Frontend to Vercel

### Step 1: Sign Up / Log In to Vercel
1. Go to https://vercel.com
2. Click "Sign Up" and sign in with GitHub
3. Authorize Vercel to access your GitHub repositories

### Step 2: Import Project
1. Click "Add New" → "Project"
2. Select "Import Git Repository"
3. Choose your repository: `webyalaya-assinment`
4. Click "Import"

### Step 3: Configure Frontend Settings
1. **Framework Preset**: Next.js (auto-detected)
2. **Root Directory**: Click "Edit" and set to `frontend`
3. **Build Command**: `npm run build` (default)
4. **Output Directory**: `.next` (default)
5. **Install Command**: `npm install` (default)

### Step 4: Add Environment Variables
In the "Environment Variables" section, add:

**Variable Name:**
```
NEXT_PUBLIC_API_URL
```

**Value:** (your Railway backend URL from Part 1, Step 6)
```
https://your-backend-url.railway.app
```

**Important:** Make sure there's NO trailing slash!

### Step 5: Deploy Frontend
1. Click "Deploy"
2. Wait for deployment (1-3 minutes)
3. Once complete, you'll get a URL like:
   ```
   https://webyalaya-assinment.vercel.app
   ```

---

## Part 3: Update Backend CORS

### Step 1: Go Back to Railway
1. Open your Railway dashboard
2. Click on your backend service

### Step 2: Add CORS Environment Variable
1. Go to "Variables" tab
2. Click "New Variable"
3. Add:
   ```
   CORS_ORIGIN=https://your-frontend-url.vercel.app
   ```
   Replace with your actual Vercel URL

### Step 3: Redeploy Backend
1. Railway will automatically redeploy with the new variable
2. Wait for redeployment to complete

---

## Part 4: Test Your Deployed Application

### Step 1: Open Your Frontend
Go to your Vercel URL: `https://your-app.vercel.app`

### Step 2: Test Features
1. **Create a Note:**
   - Enter title: "Test Note"
   - Enter content: "This is a test note from production!"
   - Click "Create Note"
   - The note should appear in the list below

2. **Test AI Summary:**
   - Click "Get AI Summary" on your note
   - You should see a summary generated

3. **Refresh the Page:**
   - **Note:** Since we're using in-memory storage, notes will be lost if the backend restarts
   - For persistence, you'd need to add a database

---

## Quick Reference

### Railway Backend Commands
```bash
# View logs
Click on "Deployments" → Click latest deployment → View logs

# Restart service
Settings → Click "Restart"

# View metrics
Click on "Metrics" tab
```

### Vercel Frontend Commands
```bash
# Redeploy
Deployments → Click "..." → Redeploy

# View logs
Deployments → Click deployment → View Function Logs
```

---

## Common Issues & Solutions

### Issue 1: CORS Error
**Error:** "Access to fetch at 'https://...' has been blocked by CORS policy"

**Solution:**
1. Go to Railway → Your backend service → Variables
2. Make sure `CORS_ORIGIN` is set to your Vercel URL
3. Make sure there's no trailing slash in the URL
4. Redeploy backend

### Issue 2: Frontend Can't Connect to Backend
**Error:** "Failed to fetch" or network errors

**Solution:**
1. Check Vercel environment variables
2. Make sure `NEXT_PUBLIC_API_URL` is set correctly
3. Make sure it's your Railway URL (not localhost)
4. Redeploy frontend on Vercel

### Issue 3: Backend Not Starting
**Error:** Build fails or service crashes

**Solution:**
1. Check Railway logs (Deployments → View logs)
2. Verify build command: `cd backend && npm install && npm run build`
3. Verify start command: `cd backend && npm run start:prod`
4. Check that all dependencies are in package.json

### Issue 4: Environment Variable Not Working
**Solution:**
1. After adding/changing variables, you MUST redeploy
2. For Vercel: Redeploy from Deployments page
3. For Railway: It auto-redeploys, but you can manual restart

---

## Alternative: Deploy Both on Railway

If you prefer to deploy both frontend and backend on Railway:

### Backend Service (as above)
- Follow Part 1

### Frontend Service
1. Click "New" → "GitHub Repo" (same repo)
2. Configure:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
3. Add environment variable:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend.railway.app
   ```
4. Generate domain for frontend service
5. Update backend CORS_ORIGIN with frontend Railway URL

---

## Cost Estimate

**Railway:**
- Free tier: $5 credit per month
- Your backend will likely use ~$5/month
- After free credit: Pay as you go

**Vercel:**
- Hobby (Free): Perfect for this project
- Unlimited bandwidth for personal projects
- 100GB bandwidth per month

**Total Cost:** FREE (with free tiers)

---

## Next Steps After Deployment

1. **Add a Database:**
   - Railway offers PostgreSQL/MongoDB databases
   - Click "New" → "Database" → Choose PostgreSQL
   - Update backend to use database instead of in-memory storage

2. **Add Custom Domain:**
   - Railway: Settings → Custom Domain
   - Vercel: Settings → Domains → Add

3. **Set Up Monitoring:**
   - Use Railway metrics
   - Set up Vercel Analytics

4. **Enable HTTPS:**
   - Automatically enabled on both platforms ✅

---

## Useful Links

- Railway Dashboard: https://railway.app/dashboard
- Railway Docs: https://docs.railway.app
- Vercel Dashboard: https://vercel.com/dashboard
- Vercel Docs: https://vercel.com/docs

---

**Congratulations! Your app is now live! 🚀**

**Share your deployed URLs:**
- Frontend: `https://your-app.vercel.app`
- Backend API: `https://your-backend.railway.app`
