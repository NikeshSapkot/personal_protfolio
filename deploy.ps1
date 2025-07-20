# PowerShell script to deploy portfolio to GitHub
Write-Host "🚀 Starting Portfolio Deployment..." -ForegroundColor Green

# Remove existing git repository if it exists
if (Test-Path ".git") {
    Write-Host "🗑️ Removing existing git repository..." -ForegroundColor Yellow
    Remove-Item ".git" -Recurse -Force -ErrorAction SilentlyContinue
}

# Initialize new git repository
Write-Host "📁 Initializing new git repository..." -ForegroundColor Yellow
git init

# Add remote origin
Write-Host "🔗 Adding remote origin..." -ForegroundColor Yellow
git remote add origin https://github.com/NikeshSapkot/personal_protfolio.git

# Add all files (excluding node_modules)
Write-Host "📦 Adding files to git..." -ForegroundColor Yellow
git add .

# Commit changes
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
git commit -m "🎉 Complete portfolio update with real projects and information"

# Force push to replace everything in the repository
Write-Host "🚀 Force pushing to GitHub..." -ForegroundColor Yellow
git push -f origin main

Write-Host "✅ Deployment completed successfully!" -ForegroundColor Green
Write-Host "🌐 Your portfolio is now live at: https://nikeshsapkot.github.io/personal_protfolio/" -ForegroundColor Cyan 