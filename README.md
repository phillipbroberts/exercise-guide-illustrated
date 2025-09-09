# Exercise Guide - Interactive Illustrated Training System

A comprehensive exercise guide system that bridges traditional printed materials with modern interactive demonstrations through QR code integration.

## 🚀 Features

- **Interactive Animations**: Smooth exercise demonstrations with play/pause controls
- **Print-Ready Materials**: Professional illustrated guides with embedded SVG graphics
- **QR Code Integration**: Seamless connection between print and digital experiences
- **Mobile PWA**: Installable progressive web app for offline access
- **Comprehensive Testing**: 80%+ test coverage with TDD methodology
- **Multiple Deploy Options**: Netlify, Vercel, Docker, or traditional hosting

## 📱 Live Demo

[View Live Demo](https://your-domain.com)

## 🏗️ Quick Start

```bash
# Clone repository
git clone https://github.com/phillipbroberts/exercise-guide-illustrated.git
cd exercise-guide-illustrated

# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

## 🎯 Usage

### For End Users
1. **Print the illustrated guide** for workout reference
2. **Scan QR codes** with your phone for detailed demonstrations
3. **Install the PWA** for offline exercise access
4. **Follow animations** for proper form guidance

### For Developers
1. **Add new exercises** in `src/data/exercises.js`
2. **Create illustrations** in `src/components/exercises/`
3. **Generate QR codes** with `npm run generate-qr`
4. **Test thoroughly** with `npm run test:coverage`

## 📦 Deployment

### Netlify (Recommended)
```bash
npm run build
npx netlify deploy --prod --dir=build
```

### Vercel
```bash
npx vercel --prod
```

### Docker
```bash
docker-compose up --build
```

## 🧪 Testing

- **Unit Tests**: `npm test`
- **Coverage Report**: `npm run test:coverage`
- **Lint Check**: `npm run lint`

## 📖 Documentation

- [Deployment Guide](docs/DEPLOYMENT.md)
- [Testing Guide](docs/TESTING.md)
- [Component API](docs/API.md)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Write tests for new functionality
4. Commit changes (`git commit -m 'Add amazing feature'`)
5. Push to branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Phillip Roberts**
- Portfolio: [philliproberts.dev](https://philliproberts.dev)
- GitHub: [@phillipbroberts](https://github.com/phillipbroberts)

## 🙏 Acknowledgments

- Built with React and modern web technologies
- Illustrations designed for clarity and accessibility
- QR code integration for seamless user experience
- TDD methodology ensuring reliability

---

**Perfect bridge between traditional printed workout guides and modern interactive demonstrations!**
