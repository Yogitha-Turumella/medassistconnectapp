// OpenAI API integration utility
// To use real ChatGPT, you'll need to add your OpenAI API key

interface OpenAIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface OpenAIResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

const SYSTEM_PROMPT = `You are MedAssist AI, a helpful healthcare assistant for the MedAssist website. You can help users with:

1. Website Navigation & Features:
   - How to book appointments
   - Finding doctors (young doctors vs retired specialists)
   - Using the symptom checker
   - Contact information and support

2. General Healthcare Guidance:
   - Basic health information (not medical diagnosis)
   - When to seek medical attention
   - Understanding symptoms
   - Healthcare best practices

3. MedAssist Services:
   - Doctor directory with specializations
   - AI-powered symptom analysis
   - Appointment booking system
   - 24/7 support availability
   - Video consultations

Important Guidelines:
- Always remind users that you provide information, not medical diagnosis
- For serious symptoms, direct users to seek immediate medical attention
- Encourage users to book appointments with doctors for proper diagnosis
- Be helpful, professional, and empathetic
- Keep responses concise but informative

MedAssist won 3rd place at Avinya2k24 Hackathon for innovative healthcare solutions.`;

export const getChatGPTResponse = async (
  userMessage: string,
  apiKey?: string
): Promise<string> => {
  // If no API key is provided, use the simulated responses
  if (!apiKey) {
    return getSimulatedResponse(userMessage);
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userMessage }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error('OpenAI API request failed');
    }

    const data: OpenAIResponse = await response.json();
    return data.choices[0]?.message?.content || 'I apologize, but I couldn\'t generate a response. Please try again.';
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return getSimulatedResponse(userMessage);
  }
};

// Fallback simulated responses for demo purposes
const getSimulatedResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();
  
  const responses = {
    'appointment': "To book an appointment on MedAssist:\n\n1. Click 'Book Appointment' from the homepage\n2. Select your preferred doctor\n3. Choose an available date and time\n4. Fill in your information\n5. Confirm your booking\n\nYou'll receive a confirmation email once booked!",
    
    'doctor': "Finding a doctor on MedAssist:\n\n• **Young Doctors**: Actively practicing specialists\n• **Retired Doctors**: Experienced veterans with decades of expertise\n\nBrowse by specialization: Cardiology, Pediatrics, Dermatology, Internal Medicine, and more!\n\nEach profile shows experience, ratings, and contact options.",
    
    'symptom': "Our AI Symptom Checker:\n\n1. Select multiple symptoms from our comprehensive list\n2. Get AI-powered disease predictions with confidence levels\n3. Receive personalized recommendations\n4. See suggested specialist types\n\n⚠️ **Important**: This is for guidance only. Always consult a doctor for proper diagnosis!",
    
    'emergency': "🚨 **Medical Emergency Protocol**:\n\n• Call 911 immediately for life-threatening situations\n• Use our emergency line: (555) 123-4567\n• Visit the nearest emergency room\n\n**Don't wait** - seek immediate medical attention for:\n• Chest pain\n• Difficulty breathing\n• Severe injuries\n• Loss of consciousness",
    
    'contact': "Contact MedAssist Support:\n\n📞 **Phone**: +1 (555) 123-4567 (24/7)\n📧 **Email**: support@medassist.com\n🏥 **Office**: 123 Healthcare Ave, Medical City\n💬 **Live Chat**: Right here with me!\n🎥 **Video Consultation**: Available through our platform"
  };

  // Find matching response
  for (const [key, response] of Object.entries(responses)) {
    if (lowerMessage.includes(key)) {
      return response;
    }
  }

  // Health-related default response
  if (lowerMessage.includes('health') || lowerMessage.includes('medical') || 
      lowerMessage.includes('pain') || lowerMessage.includes('sick')) {
    return "I'm here to help with your healthcare questions! 🏥\n\n**I can assist you with**:\n• Website navigation and features\n• Booking appointments with specialists\n• Understanding our symptom checker\n• General health information\n• Finding the right doctor for your needs\n\n**For medical concerns**, I recommend:\n1. Using our Symptom Checker for initial assessment\n2. Booking a consultation with our doctors\n3. Calling our 24/7 support for urgent matters\n\nWhat specific aspect would you like to know more about?";
  }

  return "Hello! I'm MedAssist AI, your healthcare companion. 🤖\n\n**I can help you with**:\n• Navigating our website features\n• Booking appointments with doctors\n• Understanding the symptom checker\n• Finding specialists (young doctors & retired experts)\n• General healthcare guidance\n• Contact information and support\n\n**MedAssist Services**:\n🏆 Award-winning platform (3rd place at Avinya2k24)\n👨‍⚕️ Expert doctors and retired specialists\n🤖 AI-powered symptom analysis\n📅 Easy appointment booking\n🔒 Secure and private consultations\n\nHow can I assist you today?";
};