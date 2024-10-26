A simple X themed profile or "link in bio" type page so you can link to your projects, social, blog posts, or whatever you want.

It's in SvelteKit so I can expand on it with more routes, but you could also just create a static index.html file.

## Local setup

```bash
git clone git@github.com:loopsandvariables/x-themed-profile.git
cd x-themed-profile
npm install
npm run dev
```

## Customize

1. Edit the `src/app.config.js` file - update with your own details.
2. Add your own favicons and icons
3. Update the main page content in `src/routes/+page.svelte`

## Deploy with Vercel

1. Sign up for a free Vercel account.
2. Add new project
3. Import from GitHub repository
4. Deploy
