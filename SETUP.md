# Setup Instructions for Virentis Website

## Prerequisites

Before you begin, ensure you have the following installed on your system:

1. **Node.js 18 or higher** - Download from https://nodejs.org/
   - Recommended: Use the LTS (Long Term Support) version
   - This includes npm (Node Package Manager)

2. **Git** (optional) - For version control

## Installation Steps

### 1. Install Node.js

If Node.js is not installed:

1. Visit https://nodejs.org/
2. Download the LTS version for Windows
3. Run the installer and follow the prompts
4. Verify installation by opening a new PowerShell window and running:
   ```powershell
   node --version
   npm --version
   ```

### 2. Install Project Dependencies

Open PowerShell in the project directory and run:

```powershell
npm install
```

This will install all required dependencies listed in `package.json`.

### 3. Set Up Environment Variables

Copy the example environment file:

```powershell
Copy-Item .env.example .env
```

Edit `.env` if you need to change any settings (defaults work for local development).

### 4. Initialize the Database

Generate Prisma client and create the database:

```powershell
npx prisma generate
npx prisma db push
```

This creates a local SQLite database at `prisma/dev.db`.

### 5. Run the Development Server

Start the development server:

```powershell
npm run dev
```

Open your browser and navigate to http://localhost:3000

The site will automatically reload when you make changes to the code.

## Building for Production

To create an optimized production build:

```powershell
npm run build
```

This will:
- Type-check all TypeScript files
- Build optimized bundles
- Generate static pages where possible

To test the production build locally:

```powershell
npm start
```

## Viewing Database Submissions

To view demo request submissions stored in the database:

```powershell
npx prisma studio
```

This opens a web interface at http://localhost:5555 where you can browse and manage submissions.

## Troubleshooting

### "npm is not recognized"

- Ensure Node.js is installed correctly
- Close and reopen PowerShell after installing Node.js
- Check that Node.js is in your PATH environment variable

### Port 3000 already in use

If another application is using port 3000:

```powershell
npm run dev -- -p 3001
```

This starts the server on port 3001 instead.

### Build errors

If you encounter build errors:

1. Delete `node_modules` and `.next` folders:
   ```powershell
   Remove-Item -Recurse -Force node_modules, .next
   ```

2. Reinstall dependencies:
   ```powershell
   npm install
   ```

3. Try building again:
   ```powershell
   npm run build
   ```

## Project Structure

```
Vwebsite/
├── app/                  # Next.js pages and routes
│   ├── layout.tsx       # Root layout with header/footer
│   ├── page.tsx         # Home page
│   ├── platform/
│   ├── industries/
│   ├── renewable-energy/
│   ├── company/
│   ├── careers/
│   ├── partners/
│   └── book-a-demo/
├── components/          # Reusable React components
├── lib/                 # Utility functions
├── prisma/             # Database schema
├── public/             # Static assets
└── package.json        # Project dependencies
```

## Next Steps

- Customize the design by editing files in `app/` and `components/`
- Modify styles in `app/globals.css` and `tailwind.config.ts`
- Update content directly in the page files
- Add your analytics tracking ID in `.env`

## Need Help?

Refer to the main README.md for more detailed information about the project architecture and deployment options.

