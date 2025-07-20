# 🖼️ Hero Image Setup Instructions

## 📸 **Adding Your Hero Image**

Your portfolio is ready for your hero image! Here's how to add it:

### **Step 1: Prepare Your Image**
- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 400x400 pixels or larger
- **Style**: Professional headshot or creative developer photo
- **Location**: Save in `public/images/` folder

### **Step 2: Update the Code**

In `src/components/About.js`, find this section:

```jsx
{/* Hero Image - Replace with your actual image */}
<div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
  <div className="text-white text-center">
    <div className="text-6xl mb-4">👨‍💻</div>
    <div className="text-lg font-semibold">Nikesh Sapkota</div>
    <div className="text-sm opacity-80">Computer Science Student</div>
  </div>
</div>
```

**Replace it with:**

```jsx
<img 
  src="/images/your-hero-image.jpg" 
  alt="Nikesh Sapkota" 
  className="w-full h-full object-cover rounded-xl"
/>
```

### **Step 3: File Structure**
```
public/
└── images/
    └── your-hero-image.jpg  ← Add your image here
```

### **Step 4: Alternative - Direct Path**
If you want to use an external image URL:

```jsx
<img 
  src="https://your-image-url.com/image.jpg" 
  alt="Nikesh Sapkota" 
  className="w-full h-full object-cover rounded-xl"
/>
```

---

## 🎨 **Image Recommendations**

### **Professional Style:**
- Clean background
- Good lighting
- Professional attire
- Friendly expression

### **Creative Style:**
- Tech-themed background
- Coding environment
- Modern aesthetic
- Professional yet approachable

### **Technical Requirements:**
- **Resolution**: 400x400px minimum
- **File size**: Under 500KB for fast loading
- **Format**: JPG for photos, PNG for graphics
- **Quality**: High quality, not pixelated

---

## ✅ **Your Portfolio is Now Complete!**

### **Updated Information:**
- ✅ **Name**: Nikesh Sapkota
- ✅ **Email**: nikeshsapkota.code@gmail.com
- ✅ **GitHub**: https://github.com/NikeshSapkot
- ✅ **LinkedIn**: https://www.linkedin.com/in/nikesh-sapkota-8405ba219/
- ✅ **Real Projects**: Blockchain Supply Chain & Fake News Detection
- ✅ **Skills**: Updated with blockchain, ML, and actual technologies
- ✅ **Experience**: IEEE, NSO, and technical roles

### **Next Steps:**
1. Add your hero image
2. Deploy to GitHub Pages or Netlify
3. Share your portfolio with potential employers!

Your portfolio now perfectly represents your skills and experience! 🚀 