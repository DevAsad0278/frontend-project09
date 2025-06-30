import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, Search, MoreVertical, Phone, Video, 
  Paperclip, Smile, User, Building 
} from 'lucide-react';

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'HR Manager',
      company: 'TechCorp Inc.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      lastMessage: 'Thanks for your interest in the Frontend Developer position!',
      time: '2 min ago',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Engineering Manager',
      company: 'StartupXYZ',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      lastMessage: 'When would be a good time for a technical interview?',
      time: '1 hour ago',
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Talent Acquisition',
      company: 'DataFlow Solutions',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      lastMessage: 'Your profile looks great! Let\'s schedule a call.',
      time: '3 hours ago',
      unread: 1,
      online: true
    }
  ];

  const messages = [
    {
      id: 1,
      senderId: 1,
      senderName: 'Sarah Johnson',
      content: 'Hi! Thanks for applying to our Frontend Developer position. I\'ve reviewed your resume and I\'m impressed with your experience.',
      timestamp: '10:30 AM',
      isOwn: false
    },
    {
      id: 2,
      senderId: 'me',
      senderName: 'You',
      content: 'Thank you for reaching out! I\'m very excited about this opportunity. The role seems like a perfect fit for my skills.',
      timestamp: '10:32 AM',
      isOwn: true
    },
    {
      id: 3,
      senderId: 1,
      senderName: 'Sarah Johnson',
      content: 'That\'s great to hear! I\'d love to schedule a call to discuss the role in more detail. Are you available this week?',
      timestamp: '10:35 AM',
      isOwn: false
    },
    {
      id: 4,
      senderId: 'me',
      senderName: 'You',
      content: 'Absolutely! I\'m available Tuesday through Thursday afternoon. What time works best for you?',
      timestamp: '10:37 AM',
      isOwn: true
    },
    {
      id: 5,
      senderId: 1,
      senderName: 'Sarah Johnson',
      content: 'Perfect! How about Wednesday at 2 PM? I\'ll send you a calendar invite with the meeting details.',
      timestamp: '10:40 AM',
      isOwn: false
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle sending message
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const selectedConversation = conversations.find(conv => conv.id === selectedChat);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          style={{ height: 'calc(100vh - 8rem)' }}
        >
          <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-1/3 border-r border-gray-200 flex flex-col">
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Messages</h1>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search conversations..."
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Conversations List */}
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conversation) => (
                  <motion.div
                    key={conversation.id}
                    whileHover={{ backgroundColor: '#f8fafc' }}
                    onClick={() => setSelectedChat(conversation.id)}
                    className={`p-4 cursor-pointer border-b border-gray-100 ${
                      selectedChat === conversation.id ? 'bg-blue-50 border-blue-200' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img
                          src={conversation.avatar}
                          alt={conversation.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        {conversation.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-900 truncate">{conversation.name}</h3>
                          <span className="text-xs text-gray-500">{conversation.time}</span>
                        </div>
                        <p className="text-sm text-gray-600">{conversation.role}</p>
                        <p className="text-sm text-gray-500 truncate">{conversation.company}</p>
                        <p className="text-sm text-gray-600 truncate mt-1">{conversation.lastMessage}</p>
                      </div>
                      {conversation.unread > 0 && (
                        <div className="w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                          {conversation.unread}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {selectedConversation ? (
                <>
                  {/* Chat Header */}
                  <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img
                          src={selectedConversation.avatar}
                          alt={selectedConversation.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        {selectedConversation.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900">{selectedConversation.name}</h2>
                        <p className="text-sm text-gray-600">{selectedConversation.role} at {selectedConversation.company}</p>
                        <p className="text-xs text-gray-500">
                          {selectedConversation.online ? 'Online' : 'Last seen 2 hours ago'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Phone className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Video className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-xs lg:max-w-md ${msg.isOwn ? 'order-2' : 'order-1'}`}>
                          <div className={`px-4 py-2 rounded-2xl ${
                            msg.isOwn 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-gray-100 text-gray-900'
                          }`}>
                            <p>{msg.content}</p>
                          </div>
                          <p className={`text-xs text-gray-500 mt-1 ${msg.isOwn ? 'text-right' : 'text-left'}`}>
                            {msg.timestamp}
                          </p>
                        </div>
                        {!msg.isOwn && (
                          <img
                            src={selectedConversation.avatar}
                            alt={selectedConversation.name}
                            className="w-8 h-8 rounded-full object-cover order-1 mr-2"
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-6 border-t border-gray-200">
                    <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
                      <button
                        type="button"
                        className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Paperclip className="w-5 h-5" />
                      </button>
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Type a message..."
                          className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <Smile className="w-5 h-5" />
                        </button>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        disabled={!message.trim()}
                        className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Send className="w-5 h-5" />
                      </motion.button>
                    </form>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No conversation selected</h3>
                    <p className="text-gray-600">Choose a conversation from the sidebar to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Chat;