import React, { useState } from 'react'
import {
  Send,
  Edit,
  Search,
  MoreVertical,
  Image as ImageIcon,
  Smile,
  Paperclip,
  ArrowLeft
} from 'lucide-react'
import { Link } from 'react-router-dom'

interface Conversation {
  id: string
  user: {
    name: string
    username: string
    avatar: string
    isOnline: boolean
  }
  lastMessage: string
  timestamp: string
  unread: boolean
}

interface Message {
  id: string
  senderId: string
  text: string
  timestamp: string
}

const MessagesPage: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null)
  const [messageText, setMessageText] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const conversations: Conversation[] = [
    {
      id: '1',
      user: {
        name: 'lezzieM',
        username: '@lezziem',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
        isOnline: true
      },
      lastMessage: 'I saw that she liked my comment a...',
      timestamp: '3 months ago',
      unread: true
    },
    {
      id: '2',
      user: {
        name: 'Mike Rashid',
        username: '@mikerashid',
        avatar: 'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=100',
        isOnline: false
      },
      lastMessage: 'Thanks for the workout tips!',
      timestamp: '1 week ago',
      unread: false
    },
    {
      id: '3',
      user: {
        name: 'Sarah K.',
        username: '@sarahk',
        avatar: 'https://images.pexels.com/photos/3768582/pexels-photo-3768582.jpeg?auto=compress&cs=tinysrgb&w=100',
        isOnline: true
      },
      lastMessage: 'When is your next coaching session?',
      timestamp: '2 days ago',
      unread: true
    },
    {
      id: '4',
      user: {
        name: 'Jessica',
        username: '@jessica',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
        isOnline: false
      },
      lastMessage: 'Great content as always!',
      timestamp: '1 month ago',
      unread: false
    }
  ]

  const messages: Message[] = selectedConversation
    ? [
        {
          id: '1',
          senderId: 'other',
          text: 'Hey! I saw that she liked my comment and wanted to reach out.',
          timestamp: '10:30 AM'
        },
        {
          id: '2',
          senderId: 'me',
          text: 'Thanks for reaching out! How can I help you?',
          timestamp: '10:32 AM'
        },
        {
          id: '3',
          senderId: 'other',
          text: "I'm interested in your training program. Can you tell me more about it?",
          timestamp: '10:35 AM'
        }
      ]
    : []

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.user.username.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#0f172a] pt-[72px]">
      {/* HEADER */}
      <header className="sticky top-[72px] z-50 bg-[#1e293b] border-b border-[#334155]">
        <div className="max-w-full px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link to="/feed" className="flex items-center space-x-2">
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                FFM
              </div>
            </Link>
            <Link
              to="/feed"
              className="bg-gradient-to-r from-[#f97316] to-[#9333ea] hover:opacity-90 text-white font-bold px-4 sm:px-5 py-2 rounded-lg transition-opacity text-sm sm:text-base min-h-[44px] flex items-center"
            >
              <span className="hidden sm:inline">Back to Dashboard</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT - Split Panel Layout */}
      <div className="flex h-[calc(100vh-72px-73px)]">
        {/* LEFT PANEL - Conversations List */}
        <div className={`w-full md:w-[400px] border-r border-[#334155] bg-[#0f172a] flex flex-col ${
          selectedConversation ? 'hidden md:flex' : 'flex'
        }`}>
          {/* Messages Header */}
          <div className="p-6 border-b border-[#334155]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[#e2e8f0]">Messages</h2>
              <button className="p-2 hover:bg-[#1e293b] rounded-lg transition-colors">
                <Edit size={20} className="text-[#9ca3af] hover:text-[#e2e8f0]" />
              </button>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]" size={18} />
              <input
                type="text"
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#1e293b] rounded-lg text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500 border border-[#334155]"
              />
            </div>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation.id)}
                className={`w-full p-4 border-b border-[#334155] hover:bg-[#1e293b] transition-colors text-left ${
                  conversation.unread ? 'bg-[#fef3c7]/10' : ''
                } ${selectedConversation === conversation.id ? 'bg-[#1e293b]' : ''}`}
              >
                <div className="flex items-start space-x-3">
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <img
                      src={conversation.user.avatar}
                      alt={`${conversation.user.name} - Creator Profile Picture`}
                      className="w-12 h-12 rounded-full object-cover"
                      width="48"
                      height="48"
                      loading="lazy"
                    />
                    {conversation.user.isOnline && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0f172a]"></div>
                    )}
                  </div>

                  {/* Message Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3
                        className={`font-bold truncate ${
                          conversation.unread ? 'text-[#e2e8f0]' : 'text-[#e2e8f0]'
                        }`}
                      >
                        {conversation.user.name}
                      </h3>
                      <span className="text-xs text-[#9ca3af] flex-shrink-0 ml-2">
                        {conversation.timestamp}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p
                        className={`text-sm truncate ${
                          conversation.unread ? 'text-[#e2e8f0] font-medium' : 'text-[#9ca3af]'
                        }`}
                      >
                        {conversation.lastMessage}
                      </p>
                      {conversation.unread && (
                        <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 ml-2"></div>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL - Message Thread or Empty State */}
        <div className={`flex-1 flex flex-col bg-[#0f172a] ${
          selectedConversation ? 'flex' : 'hidden md:flex'
        }`}>
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-[#334155] bg-[#1e293b]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {/* Mobile Back Button */}
                    <button
                      onClick={() => setSelectedConversation(null)}
                      className="md:hidden p-2 hover:bg-[#334155] rounded-lg transition-colors min-w-[44px] min-h-[44px]"
                    >
                      <ArrowLeft size={20} className="text-[#e2e8f0]" />
                    </button>
                    <img
                      src={
                        conversations.find((c) => c.id === selectedConversation)?.user.avatar
                      }
                      alt="User"
                      className="w-10 h-10 rounded-full object-cover"
                      width="40"
                      height="40"
                      loading="lazy"
                    />
                    <div>
                      <h3 className="font-bold text-[#e2e8f0]">
                        {conversations.find((c) => c.id === selectedConversation)?.user.name}
                      </h3>
                      <p className="text-sm text-[#9ca3af]">
                        {conversations.find((c) => c.id === selectedConversation)?.user.username}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-[#334155] rounded-lg transition-colors min-w-[44px] min-h-[44px]">
                    <MoreVertical size={20} className="text-[#9ca3af]" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-4 ${
                        message.senderId === 'me'
                          ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea] text-white'
                          : 'bg-[#1e293b] text-[#e2e8f0] border border-[#334155]'
                      }`}
                    >
                      <p className="mb-1">{message.text}</p>
                      <span
                        className={`text-xs ${
                          message.senderId === 'me' ? 'text-white/70' : 'text-[#9ca3af]'
                        }`}
                      >
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-[#334155] bg-[#1e293b]">
                <div className="flex items-end space-x-3">
                  <div className="flex-1 bg-[#0f172a] rounded-lg border border-[#334155] overflow-hidden">
                    <textarea
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      placeholder="Type a message..."
                      className="w-full px-4 py-3 bg-transparent text-[#e2e8f0] placeholder-[#9ca3af] resize-none focus:outline-none max-h-32"
                      rows={1}
                    />
                    <div className="flex items-center space-x-2 px-4 pb-3">
                      <button className="p-1 hover:bg-[#1e293b] rounded transition-colors">
                        <ImageIcon size={20} className="text-[#9ca3af]" />
                      </button>
                      <button className="p-1 hover:bg-[#1e293b] rounded transition-colors">
                        <Paperclip size={20} className="text-[#9ca3af]" />
                      </button>
                      <button className="p-1 hover:bg-[#1e293b] rounded transition-colors">
                        <Smile size={20} className="text-[#9ca3af]" />
                      </button>
                    </div>
                  </div>
                  <button
                    className="bg-gradient-to-r from-[#f97316] to-[#9333ea] hover:opacity-90 text-white p-3 rounded-lg transition-opacity flex-shrink-0 disabled:opacity-50"
                    disabled={!messageText.trim()}
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </>
          ) : (
            // Empty State
            <div className="flex-1 flex items-center justify-center p-8">
              <div className="text-center max-w-md">
                <div className="w-24 h-24 bg-[#1e293b] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Send size={40} className="text-[#9ca3af]" />
                </div>
                <h3 className="text-2xl font-bold text-[#e2e8f0] mb-2">Messages</h3>
                <p className="text-[#9ca3af] mb-6">Inbox of your messages</p>
                <button className="bg-gradient-to-r from-[#f97316] to-[#9333ea] hover:opacity-90 text-white font-bold px-6 py-3 rounded-lg transition-opacity flex items-center space-x-2 mx-auto">
                  <Edit size={18} />
                  <span>New message</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MessagesPage
