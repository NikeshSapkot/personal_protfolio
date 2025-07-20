# 🚀 Portfolio Deployment Guide

## 📋 **Your Updated Portfolio is Ready!**

Your portfolio has been successfully updated with your personal information:

### ✅ **Updated Content:**
- **Name**: Nikesh Sapkota
- **Title**: Computer Science Student & Software Developer
- **Location**: Jacksonville, Alabama
- **University**: Jacksonville State University
- **Skills**: Python, Django, Java, C++, Swift, Data Analysis
- **Experience**: IEEE Secretary, NSO Secretary, Technical Support roles
- **Projects**: Student-focused projects matching your background

---

## 🔄 **GitHub Repository Management**

### **Step 1: Initialize Git (if not already done)**
```bash
git init
git add .
git commit -m "Initial portfolio setup with personal information"
```

### **Step 2: Connect to Your GitHub Repository**
```bash
git remote add origin https://github.com/NikeshSapkot/personal_protfolio.git
```

### **Step 3: Clear Old Content and Push New**
```bash
# Force push to overwrite old content
git push -f origin main
```

### **Alternative: Clean Repository Approach**
```bash
# Clone fresh repository
git clone https://github.com/NikeshSapkot/personal_protfolio.git
cd personal_protfolio

# Remove all existing files
rm -rf *

# Copy your new portfolio files here
# (Copy all files from your current portfolio directory)

# Add and commit
git add .
git commit -m "Complete portfolio redesign with personal information"

# Push to GitHub
git push origin main
```

---

## 🌐 **Deploy to GitHub Pages**

### **Option 1: GitHub Pages (Free)**
1. Go to your repository settings
2. Scroll to "Pages" section
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

### **Option 2: Netlify (Recommended)**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your portfolio folder
3. Get instant live URL

### **Option 3: Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Automatic deployment

---

## 📝 **Customization Checklist**

### **Personal Information to Update:**
- [x] Name: Nikesh Sapkota
- [x] Title: Computer Science Student & Software Developer
- [x] Location: Jacksonville, Alabama
- [x] University: Jacksonville State University
- [x] Skills: Python, Django, Java, C++, Swift
- [x] Experience: IEEE, NSO, Technical Support roles
- [x] Projects: Student-focused projects
- [ ] **Email**: Update with your real email
- [ ] **Social Links**: Update with your actual profiles
- [ ] **Profile Picture**: Add your photo
- [ ] **Real Project Links**: Add actual GitHub/portfolio links

### **Optional Enhancements:**
- [ ] Add real project screenshots
- [ ] Include actual GitHub repositories
- [ ] Add LinkedIn profile link
- [ ] Include resume download
- [ ] Add blog section
- [ ] Include testimonials

---

## 🎯 **Next Steps**

1. **Update Contact Information**: Replace placeholder email with your real email
2. **Add Social Links**: Update GitHub, LinkedIn, and other social profiles
3. **Add Real Projects**: Link to your actual GitHub repositories
4. **Add Profile Picture**: Replace placeholder with your photo
5. **Deploy**: Choose your preferred hosting platform
6. **Share**: Share your portfolio with potential employers

---

## 🔧 **Quick Commands**

```bash
# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Check status
git status
```

---

## 📞 **Need Help?**

If you encounter any issues:
1. Check the console for error messages
2. Ensure all dependencies are installed
3. Verify Git configuration
4. Check GitHub repository permissions

Your portfolio is now ready to showcase your skills and experience! 🎉 