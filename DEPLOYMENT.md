# Deployment Guide

This guide will help you deploy the Notes App to production.

## Environment Variables Setup

### Frontend Environment Variables

The frontend uses environment variables to connect to the backend API.

**For Local Development:**
- File: `frontend/.env.local`
- Variable: `NEXT_PUBLIC_API_URL=http://localhost:4000`

**For Production Deployment:**

1. **On Vercel/Netlify/Other Platform:**
   - Go to your project settings
   - Add environment variable:
     - Name: `NEXT_PUBLIC_API_URL`
     - Value: Your deployed backend URL (e.g., `https://your-backend.herokuapp.com` or `https://your-backend.onrender.com`)

2. **Example Production URLs:**
   ```
   NEXT_PUBLIC_API_URL=https://notes-api-production.herokuapp.com
   NEXT_PUBLIC_API_URL=https://notes-api.onrender.com
   NEXT_PUBLIC_API_URL=https://notes-api-abc123.railway.app
   ```

### Backend Environment Variables

**For Production:**
- `PORT`: The port your backend will run on (usually set by the hosting platform)
- `NODE_ENV`: Set to `production`
- `CORS_ORIGIN`: Set to your frontend URL (e.g., `https://your-app.vercel.app`)

## Deployment Platforms

### Option 1: Deploy Frontend to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Set the following:
   - **Framework Preset**: Next.js
   - **Root Directory**: `frontend`
   - **Environment Variables**: 
     - `NEXT_PUBLIC_API_URL` = Your backend URL
5. Click "Deploy"

### Option 2: Deploy Frontend to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. New site from Git
4. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/.next`
   - **Environment Variables**:
     - `NEXT_PUBLIC_API_URL` = Your backend URL
5. Click "Deploy"

### Option 3: Deploy Backend to Render

1. Go to [render.com](https://render.com)
2. New Web Service
3. Connect your GitHub repository
4. Configure:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start:prod`
   - **Environment Variables**:
     - `PORT`: Auto-set by Render
     - `NODE_ENV`: `production`
     - `CORS_ORIGIN`: Your frontend URL
5. Click "Create Web Service"

### Option 4: Deploy Backend to Railway

1. Go to [railway.app](https://railway.app)
2. New Project → Deploy from GitHub repo
3. Select your repository
4. Configure:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start:prod`
   - **Environment Variables**:
     - `NODE_ENV`: `production`
     - `CORS_ORIGIN`: Your frontend URL
5. Deploy

### Option 5: Deploy Backend to Heroku

1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set buildpack: `heroku buildpacks:set heroku/nodejs`
5. Set environment variables:
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set CORS_ORIGIN=https://your-frontend.vercel.app
   ```
6. Deploy:
   ```bash
   git subtree push --prefix backend heroku main
   ```

## Backend CORS Configuration

Update `backend/src/main.ts` to use environment variable for CORS:

```typescript
app.enableCors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
});
```

## Deployment Checklist

### Before Deploying:

- [ ] Backend code is production-ready
- [ ] Frontend code is production-ready
- [ ] Environment variables are configured
- [ ] CORS settings allow your frontend domain
- [ ] Code is pushed to GitHub

### Deploy Backend First:

- [ ] Deploy backend to your chosen platform
- [ ] Note the deployed backend URL
- [ ] Test backend endpoints with Postman/curl

### Deploy Frontend:

- [ ] Set `NEXT_PUBLIC_API_URL` to your backend URL
- [ ] Deploy frontend to your chosen platform
- [ ] Test the application end-to-end

### Post-Deployment:

- [ ] Verify all features work in production
- [ ] Check browser console for errors
- [ ] Test creating notes
- [ ] Test viewing notes
- [ ] Test AI summary generation

## Recommended Stack

**Simple & Free:**
- **Frontend**: Vercel (Best for Next.js)
- **Backend**: Render or Railway (Free tier available)

**Why?**
- Vercel is optimized for Next.js
- Render/Railway have generous free tiers
- Both platforms auto-deploy on git push
- Easy environment variable management

## Troubleshooting

### Issue: Frontend can't connect to backend

**Solution:** 
- Verify `NEXT_PUBLIC_API_URL` is set correctly
- Check if backend is running and accessible
- Verify CORS settings on backend

### Issue: CORS errors in production

**Solution:**
- Update backend CORS origin to include your frontend URL
- Restart backend service after updating environment variables

### Issue: Environment variables not working

**Solution:**
- Make sure variable name starts with `NEXT_PUBLIC_` for frontend
- Rebuild and redeploy after changing environment variables
- Check platform-specific environment variable syntax

## Example Full Deployment Flow

1. **Deploy Backend to Render:**
   - URL: `https://notes-backend-xyz.onrender.com`

2. **Configure Frontend:**
   - Set `NEXT_PUBLIC_API_URL=https://notes-backend-xyz.onrender.com`

3. **Deploy Frontend to Vercel:**
   - URL: `https://notes-app-abc.vercel.app`

4. **Update Backend CORS:**
   - Set `CORS_ORIGIN=https://notes-app-abc.vercel.app`

5. **Test:**
   - Visit `https://notes-app-abc.vercel.app`
   - Create a note
   - Verify it appears in the list
   - Test AI summary

---

**You're ready to deploy! 🚀**
