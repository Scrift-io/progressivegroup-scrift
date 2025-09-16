
import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! Welcome to Progressive Group. How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const predefinedResponses: { [key: string]: string } = {
    'hello': 'Hello! How can I assist you with Progressive Group today?',
    'hi': 'Hi there! What would you like to know about our company?',
    'about': 'Progressive Group has been serving Pakistan since 1954 with excellence in manufacturing, trading, and distribution across multiple industries.',
    'contact': 'Head Office: LC-40, Landhi Industrial Area, Karachi. Lahore: 60th Mall Road. Rawalpindi: House No. 51, Street #5, Khan Avenue. Email: info@pgtraders.com',
    'careers': 'We offer exciting career opportunities! Visit our Careers page or check our LinkedIn for current openings.',
    'products': 'We manufacture and distribute products through our divisions: Power Plus (FMCG), Pak Ghiza (Food Ingredients), and Industrial & Building Materials.',
    'help': 'I can help you with information about our company, products, careers, contact details, and more. What would you like to know?'
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = { type: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);

    // Simple keyword matching for responses
    const input = inputValue.toLowerCase();
    let response = "Thank you for your message! For specific inquiries, please contact us at info@pgtraders.com or call +92-123-4567890.";
    
    Object.keys(predefinedResponses).forEach(keyword => {
      if (input.includes(keyword)) {
        response = predefinedResponses[keyword];
      }
    });

    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
    }, 1000);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'bg-gray-600 hover:bg-gray-700' : 'bg-pg-red hover:bg-red-700'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col animate-scale-in">
          {/* Header */}
          <div className="bg-pg-red text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Progressive Group Assistant</h3>
            <p className="text-sm opacity-90">Ask me anything about our company!</p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg text-sm ${
                    message.type === 'user'
                      ? 'bg-pg-red text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pg-red focus:border-transparent"
              />
              <button
                onClick={handleSend}
                className="bg-pg-red text-white p-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
