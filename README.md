# Soham Katlariwala — MAIRI Portfolio

**Medical AI Research Institute**  
Student Researcher in AI & Medical Data Science  
IIT Madras · UC Berkeley · Texas A&M · MIT Critical Data

🌐 **Live site:** `https://sohamkatlariwala.github.io`

---

## 🚀 Deploy to GitHub Pages — Step by Step

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click **"New repository"** (top-right `+` button)
3. **Repository name:** `sohamkatlariwala.github.io`
   > ⚠️ This EXACT name is required for GitHub Pages to work as your main site
4. Set visibility to **Public**
5. Do **NOT** initialize with README (you'll push files yourself)
6. Click **"Create repository"**

---

### Step 2: Upload Files to GitHub

**Option A — Upload via GitHub Website (easiest)**

1. Open your new repository on GitHub
2. Click **"uploading an existing file"** link
3. Drag and drop these files/folders:
   ```
   index.html
   css/
     style.css
   js/
     main.js
   README.md
   ```
4. Scroll down, add commit message: `Initial portfolio deploy`
5. Click **"Commit changes"**

**Option B — Using Git (command line)**

```bash
# Navigate to the folder containing your files
cd path/to/mairi-portfolio

# Initialize git
git init

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/sohamkatlariwala.github.io.git

# Add all files
git add .

# Commit
git commit -m "Initial portfolio deploy"

# Push to GitHub
git push -u origin main
```

---

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll to **"Pages"** in the left sidebar
4. Under **"Source"** → select **"Deploy from a branch"**
5. Branch: **main** | Folder: **/ (root)**
6. Click **Save**

---

### Step 4: Access Your Live Site

- Wait **1–2 minutes** for GitHub to build
- Visit: `https://sohamkatlariwala.github.io`
- 🎉 Your portfolio is live!

---

## 📁 File Structure

```
sohamkatlariwala.github.io/
├── index.html          ← Main portfolio page
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Interactions & animations
└── README.md           ← This file
```

---

## ✏️ How to Update Content

| What to change | Where to edit |
|---|---|
| Name, bio, description | `index.html` — `#hero` and `#about` sections |
| Experience entries | `index.html` — `#experience` section |
| Research cards | `index.html` — `#research` section |
| Publications | `index.html` — `#publications` section |
| Colors/fonts | `css/style.css` — `:root` variables |
| Contact email/links | `index.html` — search `href="mailto:` |

---

## 🎨 Customization

Change the accent color in `css/style.css`:

```css
:root {
  --teal: #64ffda;   /* Change this to your preferred color */
  --navy: #0a1628;   /* Background color */
}
```

---

## 📬 Contact

- Email: 24f1000637@ds.study.iitm.ac.in  
- LinkedIn: [linkedin.com/in/soham-katlariwala](https://www.linkedin.com/in/soham-katlariwala/)  
- Google Scholar: [scholar.google.com](https://scholar.google.com/citations?user=znR2Im0AAAAJ&hl=en)

---

*Built for Medical AI Research Institute (MAIRI)*
