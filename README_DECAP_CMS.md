# Decap CMS Setup Guide

## What You Need to Do

Your Decap CMS is now configured to use **Netlify OAuth** for authentication. To complete the setup, follow these steps:

### 1. Enable OAuth in Netlify Dashboard

1. Go to your Netlify site dashboard: https://app.netlify.com
2. Navigate to **Site settings** → **Access control** → **OAuth**
3. Click **Install provider** and select **GitHub**
4. Authorize Netlify to connect to your GitHub account
5. Verify that your GitHub repo is connected

### 2. Enable Git Gateway

1. In your Netlify dashboard, go to **Site settings** → **Access control**
2. Under **Git Gateway**, click **Enable Git Gateway**
3. This allows Decap CMS to authenticate through Netlify

### 3. Deploy Your Site

Push your changes to GitHub:

```bash
git add .
git commit -m "Configure Decap CMS with Netlify OAuth"
git push
```

Your site will auto-deploy on Netlify.

### 4. Access the CMS

Once deployed, visit: `https://your-netlify-site.netlify.app/admin`

You should now see a **Login with Netlify** button. Click it and authorize with your GitHub account.

## Troubleshooting

**Still seeing "not found"?**

- Clear your browser cache and hard refresh (`Cmd + Shift + R` on Mac)
- Make sure Git Gateway is enabled in Netlify dashboard
- Check that your `site_domain` in `config.yml` matches your actual Netlify domain

**Login loop or redirect errors?**

- Verify that Netlify OAuth provider is installed
- Check that your GitHub repo settings are correct in `config.yml`

## File Structure

```
admin/
  ├── index.html      # CMS UI (with Netlify Identity widget)
  └── config.yml      # CMS configuration (GitHub backend via Netlify OAuth)

content/
  └── events/         # Where event content is stored

netlify.toml          # Netlify build & deploy config
```

## Next Steps

Once logged in:

1. Go to the **Events** collection
2. Click **New Event** to add an event
3. Fill in the details (title, date, time, description, image)
4. Click **Publish** to save changes

Events will appear on your homepage automatically!
