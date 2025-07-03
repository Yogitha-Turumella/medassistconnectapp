# MedAssist Healthcare Platform

A comprehensive healthcare website connecting patients with doctors, featuring AI-powered symptom checking and integrated ChatGPT assistance.

## Features

### 🏥 Core Healthcare Services
- **Doctor Directory**: Browse young doctors and retired specialists
- **AI Symptom Checker**: Get preliminary health assessments
- **Appointment Booking**: Schedule consultations with preferred doctors
- **Secure Messaging**: Communicate with healthcare providers
- **24/7 Support**: Round-the-clock assistance

### 🤖 AI-Powered ChatBot
- **Intelligent Assistant**: ChatGPT-powered healthcare companion
- **Website Navigation**: Help with using platform features
- **Health Guidance**: General healthcare information and advice
- **Instant Support**: Real-time answers to user questions
- **Emergency Protocols**: Quick access to emergency resources

### 📱 User Experience
- **Responsive Design**: Optimized for all devices
- **Modern UI**: Clean, professional healthcare interface
- **Accessibility**: WCAG compliant design
- **Fast Performance**: Optimized loading and interactions

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **AI Integration**: OpenAI ChatGPT API (configurable)

## ChatBot Integration

### Features
- Floating chat interface accessible from all pages
- Minimizable/maximizable chat window
- Real-time message exchange
- Quick question suggestions
- Healthcare-focused responses
- Emergency contact information

### Configuration
The chatbot can work in two modes:

1. **Demo Mode** (Default): Uses simulated responses for demonstration
2. **Production Mode**: Integrates with OpenAI ChatGPT API

To enable ChatGPT API:
```typescript
// Add your OpenAI API key
<ChatBot apiKey="your-openai-api-key" />
```

### Supported Queries
- Website navigation and features
- Appointment booking process
- Doctor finding and selection
- Symptom checker usage
- Contact information
- Emergency procedures
- General healthcare guidance

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer with contact info
│   └── ChatBot.tsx         # AI chatbot component
├── pages/
│   ├── HomePage.tsx        # Landing page
│   ├── DoctorsPage.tsx     # Doctor directory
│   ├── SymptomCheckerPage.tsx # AI symptom analysis
│   ├── AppointmentPage.tsx # Booking system
│   └── ContactPage.tsx     # Contact form
├── utils/
│   └── openai.ts          # ChatGPT API integration
└── App.tsx                # Main application component
```

## Awards & Recognition

🏆 **3rd Place Winner** at Avinya2k24 Hackathon for innovative healthcare solutions

## Future Enhancements

- Real-time video consultations
- Electronic health records integration
- Prescription management
- Insurance verification
- Multi-language support
- Mobile app development

## Support

For technical support or questions:
- **Email**: support@medassist.com
- **Phone**: +1 (555) 123-4567
- **Emergency**: Call 911 for medical emergencies

---

*MedAssist - Your Healthcare Companion* 🏥