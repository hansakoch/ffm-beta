import React, { useState, useRef } from 'react'
import { 
  Image, 
  Video, 
  FileText, 
  Paperclip, 
  Smile, 
  Bold, 
  Italic, 
  Link,
  X,
  Upload,
  Play,
  Eye,
  EyeOff,
  Globe,
  Users,
  Crown,
  DollarSign,
  Clock,
  Calendar,
  Tag,
  Palette,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Underline,
  List,
  Hash,
  AtSign,
  Zap,
  Target,
  Award,
  Sparkles
} from 'lucide-react'

interface UploadedFile {
  id: string
  file: File
  preview: string
  type: 'image' | 'video' | 'document'
  progress: number
  size: string
}

interface ContentCreatorProps {
  onPublish?: (content: any) => void
  placeholder?: string
  maxCharacters?: number
}

const ContentCreator: React.FC<ContentCreatorProps> = ({ 
  onPublish, 
  placeholder = "Write something...", 
  maxCharacters = 3000 
}) => {
  const [content, setContent] = useState('')
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [isPinned, setIsPinned] = useState(false)
  const [visibility, setVisibility] = useState('public')
  const [price, setPrice] = useState('')
  const [enableTips, setEnableTips] = useState(true)
  const [scheduledDate, setScheduledDate] = useState('')
  const [tipGoal, setTipGoal] = useState('')
  const [tipGoalDescription, setTipGoalDescription] = useState('')
  const [contentTags, setContentTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState('')
  const [contentCategory, setContentCategory] = useState('Fitness')
  const [targetAudience, setTargetAudience] = useState('All Levels')
  const [contentDuration, setContentDuration] = useState('')
  const [contentDifficulty, setContentDifficulty] = useState('Beginner')
  const [allowComments, setAllowComments] = useState(true)
  const [allowSharing, setAllowSharing] = useState(true)
  const [contentWarning, setContentWarning] = useState('')
  const [isExclusive, setIsExclusive] = useState(false)
  const [exclusiveUntil, setExclusiveUntil] = useState('')
  const [textStyle, setTextStyle] = useState({
    bold: false,
    italic: false,
    underline: false,
    alignment: 'left',
    fontSize: 'medium',
    color: '#ffffff'
  })
  const [showAdvancedEditor, setShowAdvancedEditor] = useState(false)
  const [mentionSuggestions, setMentionSuggestions] = useState<string[]>([])
  const [hashtagSuggestions, setHashtagSuggestions] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)
  const videoInputRef = useRef<HTMLInputElement>(null)

  const popularHashtags = ['#fitness', '#workout', '#nutrition', '#training', '#motivation']
  const popularMentions = ['@coach', '@trainer']

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const generateFileId = () => Math.random().toString(36).substr(2, 9)

  const categories = [
    'Fitness', 'Nutrition', 'Bodybuilding', 'Martial Arts', 'Combat Sports',
    'UFC/MMA', 'Boxing', 'Kickboxing', 'Jiu-Jitsu', 'Karate', 'Taekwondo',
    'Muay Thai', 'Wrestling', 'Yoga', 'Pilates', 'CrossFit', 'Powerlifting',
    'Olympic Lifting', 'Calisthenics', 'Running', 'Cycling', 'Swimming',
    'Personal Training', 'Fitness Modeling', 'Lifestyle', 'Motivation'
  ]

  const audienceLevels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced', 'Professional']
  const difficultyLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert']

  const addTag = () => {
    if (newTag.trim() && !contentTags.includes(newTag.trim()) && contentTags.length < 10) {
      setContentTags([...contentTags, newTag.trim()])
      setNewTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setContentTags(contentTags.filter(tag => tag !== tagToRemove))
  }

  const getPhotoGridLayout = (count: number) => {
    if (count === 1) return 'grid grid-cols-1'
    if (count === 2) return 'grid grid-cols-2'
    if (count === 3) return 'grid grid-cols-3'
    if (count === 4) return 'grid grid-cols-2'
    if (count === 5) return 'grid grid-cols-3'
    return 'grid grid-cols-3' // Default for more than 5
  }

  const getPhotoAspectRatio = (count: number) => {
    if (count === 1) return 'aspect-video' // Single photo gets video aspect ratio
    if (count === 2) return 'aspect-square'
    if (count === 3) return 'aspect-square'
    if (count === 4) return 'aspect-square'
    if (count === 5) return 'aspect-square'
    return 'aspect-square'
  }

  const handleFileUpload = async (files: FileList | null, type: 'image' | 'video' | 'document') => {
    if (!files) return
    
    // Limit to 5 files maximum for optimal layout
    const filesToUpload = Array.from(files).slice(0, 5)

    setIsUploading(true)
    const newFiles: UploadedFile[] = []

    for (let i = 0; i < filesToUpload.length; i++) {
      const file = filesToUpload[i]
      const fileId = generateFileId()
      
      // Create preview URL
      const preview = URL.createObjectURL(file)
      
      const uploadedFile: UploadedFile = {
        id: fileId,
        file,
        preview,
        type,
        progress: 0,
        size: formatFileSize(file.size)
      }

      newFiles.push(uploadedFile)
      setUploadedFiles(prev => [...prev, uploadedFile])

      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadedFiles(prev => 
          prev.map(f => 
            f.id === fileId 
              ? { ...f, progress: Math.min(f.progress + Math.random() * 30, 100) }
              : f
          )
        )
      }, 200)

      // Complete upload after 2-3 seconds
      setTimeout(() => {
        clearInterval(progressInterval)
        setUploadedFiles(prev => 
          prev.map(f => 
            f.id === fileId 
              ? { ...f, progress: 100 }
              : f
          )
        )
      }, 2000 + Math.random() * 1000)
    }

    setIsUploading(false)
  }

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => {
      const fileToRemove = prev.find(f => f.id === fileId)
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.preview)
      }
      return prev.filter(f => f.id !== fileId)
    })
  }

  const handlePublish = () => {
    const postData = {
      content,
      files: uploadedFiles,
      visibility,
      price: visibility === 'ppv' ? price : null,
      scheduledDate: scheduledDate || null,
      isPinned,
      enableTips,
      tipGoal: tipGoal ? parseFloat(tipGoal) : null,
      tipGoalDescription: tipGoalDescription || null,
      tags: contentTags,
      category: contentCategory,
      targetAudience,
      duration: contentDuration,
      difficulty: contentDifficulty,
      allowComments,
      allowSharing,
      contentWarning: contentWarning || null,
      isExclusive,
      exclusiveUntil: exclusiveUntil || null,
      tipGoalCurrent: 0,
      timestamp: new Date().toISOString()
    }

    if (onPublish) {
      onPublish(postData)
    }

    // Reset form
    setContent('')
    setUploadedFiles([])
    setContentTags([])
    setNewTag('')
    setContentCategory('Fitness')
    setTargetAudience('All Levels')
    setContentDuration('')
    setContentDifficulty('Beginner')
    setAllowComments(true)
    setAllowSharing(true)
    setContentWarning('')
    setIsExclusive(false)
    setExclusiveUntil('')
    setVisibility('public')
    setPrice('')
    setEnableTips(true)
    setTipGoal('')
    setTipGoalDescription('')
    setScheduledDate('')
    setShowAdvanced(false)
    setIsPinned(false)
  }

  const remainingCharacters = maxCharacters - content.length

  return (
    <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-700/50">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
            JD
          </div>
          <div className="flex-1">
            <div className="text-white font-semibold">John Doe</div>
            <div className="text-gray-400 text-sm">@johndoe</div>
          </div>
          <button 
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {showAdvanced ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Advanced Options */}
      {showAdvanced && (
        <div className="p-6 bg-gray-700/30 border-b border-gray-700/50">
          <div className="space-y-4">
            {/* Content Category & Tags */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Category
                </label>
                <select
                  value={contentCategory}
                  onChange={(e) => setContentCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-orange-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Target Audience
                </label>
                <select
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-orange-500"
                >
                  {audienceLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tags (Max 10)
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {contentTags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm flex items-center space-x-2"
                  >
                    <span>{tag}</span>
                    <button
                      onClick={() => removeTag(tag)}
                      className="text-orange-300 hover:text-orange-200"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addTag()}
                  placeholder="Add tag..."
                  className="flex-1 px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-orange-500"
                  maxLength={20}
                />
                <button
                  onClick={addTag}
                  disabled={!newTag.trim() || contentTags.length >= 10}
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg text-sm transition-colors"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Content Details */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Duration (optional)
                </label>
                <input
                  type="text"
                  value={contentDuration}
                  onChange={(e) => setContentDuration(e.target.value)}
                  placeholder="e.g., 45 minutes, 3 sets"
                  className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-orange-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Difficulty Level
                </label>
                <select
                  value={contentDifficulty}
                  onChange={(e) => setContentDifficulty(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-orange-500"
                >
                  {difficultyLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Pin Post Option */}
            <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-600/50">
              <input
                type="checkbox"
                id="pinPost"
                checked={isPinned}
                onChange={(e) => setIsPinned(e.target.checked)}
                className="w-4 h-4 text-orange-500 bg-gray-700 border-gray-600 rounded focus:ring-orange-500 focus:ring-2"
              />
              <label htmlFor="pinPost" className="text-gray-300 font-medium">
                📌 Pin this post to your profile
              </label>
              <div className="text-gray-400 text-sm">
                (Pinned posts appear at the top of your profile)
              </div>
            </div>
            
            {/* Content Settings */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold">Content Settings</h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="allowComments"
                    checked={allowComments}
                    onChange={(e) => setAllowComments(e.target.checked)}
                    className="w-4 h-4 text-orange-500 bg-gray-700 border-gray-600 rounded focus:ring-orange-500 focus:ring-2"
                  />
                  <label htmlFor="allowComments" className="text-gray-300 text-sm">
                    💬 Allow comments
                  </label>
                </div>
                
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="allowSharing"
                    checked={allowSharing}
                    onChange={(e) => setAllowSharing(e.target.checked)}
                    className="w-4 h-4 text-orange-500 bg-gray-700 border-gray-600 rounded focus:ring-orange-500 focus:ring-2"
                  />
                  <label htmlFor="allowSharing" className="text-gray-300 text-sm">
                    📤 Allow sharing
                  </label>
                </div>
              </div>
            </div>

            {/* Exclusive Content */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="isExclusive"
                  checked={isExclusive}
                  onChange={(e) => setIsExclusive(e.target.checked)}
                  className="w-4 h-4 text-orange-500 bg-gray-700 border-gray-600 rounded focus:ring-orange-500 focus:ring-2"
                />
                <label htmlFor="isExclusive" className="text-gray-300">
                  ⭐ Make this exclusive content
                </label>
              </div>
              
              {isExclusive && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Exclusive Until (optional)
                  </label>
                  <input
                    type="datetime-local"
                    value={exclusiveUntil}
                    onChange={(e) => setExclusiveUntil(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              )}
            </div>

            {/* Content Warning */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Content Warning (optional)
              </label>
              <input
                type="text"
                value={contentWarning}
                onChange={(e) => setContentWarning(e.target.value)}
                placeholder="e.g., Intense workout, Adult content"
                className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-orange-500"
                maxLength={100}
              />
            </div>

            {/* Monetization Options - Matching FansFollow Style */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold mb-3">Content Monetization</h4>
              
              {/* Public Option */}
              <div className={`p-3 rounded-xl border cursor-pointer transition-all ${
                visibility === 'public' 
                  ? 'border-green-500 bg-green-500/10' 
                  : 'border-gray-600 hover:border-gray-500'
              }`} onClick={() => setVisibility('public')}>
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="visibility"
                    checked={visibility === 'public'}
                    onChange={() => setVisibility('public')}
                    className="text-green-500"
                  />
                  <Globe size={20} className="text-green-400" />
                  <div>
                    <div className="text-white font-medium">Public Post</div>
                    <div className="text-gray-400 text-sm">Free for everyone to see</div>
                  </div>
                </div>
              </div>

              {/* Subscribers Only Option */}
              <div className={`p-3 rounded-xl border cursor-pointer transition-all ${
                visibility === 'subscribers' 
                  ? 'border-blue-500 bg-blue-500/10' 
                  : 'border-gray-600 hover:border-gray-500'
              }`} onClick={() => setVisibility('subscribers')}>
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="visibility"
                    checked={visibility === 'subscribers'}
                    onChange={() => setVisibility('subscribers')}
                    className="text-blue-500"
                  />
                  <Users size={20} className="text-blue-400" />
                  <div>
                    <div className="text-white font-medium">Subscribers Only</div>
                    <div className="text-gray-400 text-sm">Locked content for subscribers</div>
                  </div>
                </div>
              </div>

              {/* PPV Option */}
              <div className={`p-3 rounded-xl border cursor-pointer transition-all ${
                visibility === 'ppv' 
                  ? 'border-purple-500 bg-purple-500/10' 
                  : 'border-gray-600 hover:border-gray-500'
              }`} onClick={() => setVisibility('ppv')}>
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="visibility"
                    checked={visibility === 'ppv'}
                    onChange={() => setVisibility('ppv')}
                    className="text-purple-500"
                  />
                  <Crown size={20} className="text-purple-400" />
                  <div className="flex-1">
                    <div className="text-white font-medium">Set a price for this post</div>
                    <div className="text-gray-400 text-sm">Pay-per-view content</div>
                    {visibility === 'ppv' && (
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-gray-300 text-sm">Price:</span>
                        <div className="flex">
                          <span className="inline-flex items-center px-2 rounded-l-lg border border-r-0 border-gray-600 bg-gray-700/30 text-gray-400 text-sm">£</span>
                          <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-20 px-2 py-1 bg-gray-700/50 border border-gray-600 rounded-r-lg text-white text-sm focus:ring-2 focus:ring-purple-500"
                            placeholder="9.99"
                            step="0.01"
                            min="0.01"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          
            {/* Additional Options */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold">Additional Settings</h4>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Schedule Post</label>
                <input
                  type="datetime-local"
                  value={scheduledDate}
                  onChange={(e) => setScheduledDate(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-orange-500"
                />
              </div>
              
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="enableTips"
                checked={enableTips}
                onChange={(e) => setEnableTips(e.target.checked)}
                className="w-4 h-4 text-orange-500 bg-gray-700 border-gray-600 rounded focus:ring-orange-500 focus:ring-2"
              />
              <label htmlFor="enableTips" className="text-gray-300">
                💰 Enable tips on this post
              </label>
            </div>
            
            {/* Tip Goal Section */}
            {enableTips && (
              <div className="space-y-3 pt-3 border-t border-gray-700/50">
                <h4 className="text-white font-semibold">Optional Tip Goal</h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Goal Amount (£)
                    </label>
                    <input
                      type="number"
                      value={tipGoal}
                      onChange={(e) => setTipGoal(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-orange-500"
                      placeholder="100"
                      min="1"
                      step="1"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Goal Description
                    </label>
                    <input
                      type="text"
                      value={tipGoalDescription}
                      onChange={(e) => setTipGoalDescription(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-orange-500"
                      placeholder="New gym equipment"
                      maxLength={50}
                    />
                  </div>
                </div>
                
                {tipGoal && tipGoalDescription && (
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                    <div className="text-yellow-400 text-sm font-semibold mb-1">Preview:</div>
                    <div className="text-white text-sm">🎯 Goal: £{tipGoal} for {tipGoalDescription}</div>
                  </div>
                )}
              </div>
            )}
          </div>
          </div>
        </div>
      )}

      {/* Content Input */}
      <div className="p-6">
        {/* Text Formatting Toolbar */}
        <div className="flex items-center space-x-2 mb-4 pb-4 border-b border-gray-700/50">
          <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
            <Bold size={18} className="text-gray-400 hover:text-white" />
          </button>
          <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
            <Italic size={18} className="text-gray-400 hover:text-white" />
          </button>
          <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
            <Link size={18} className="text-gray-400 hover:text-white" />
          </button>
          <div className="w-px h-6 bg-gray-600 mx-2"></div>
          <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
            <Smile size={18} className="text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Text Area */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-white placeholder-gray-400 resize-none border-none outline-none text-lg leading-relaxed"
          rows={4}
          maxLength={maxCharacters}
        />

        {/* Uploaded Files Display */}
        {uploadedFiles.length > 0 && (
          <div className="mt-6">
            <div className={`gap-2 ${getPhotoGridLayout(uploadedFiles.length)}`}>
              {uploadedFiles.map((file) => (
                <div key={file.id} className="relative group">
                  <div className={`bg-gray-700/50 rounded-xl overflow-hidden border border-gray-600/50 ${getPhotoAspectRatio(uploadedFiles.length)}`}>
                    {file.type === 'image' && (
                      <img 
                        src={file.preview} 
                        alt="Upload preview"
                        className="w-full h-full object-cover"
                      />
                    )}
                    {file.type === 'video' && (
                      <div className="relative w-full h-full">
                        <video 
                          src={file.preview}
                          className="w-full h-full object-cover"
                          muted
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play size={24} className="text-white" />
                        </div>
                      </div>
                    )}
                    {file.type === 'document' && (
                      <div className="w-full h-full flex flex-col items-center justify-center">
                        <FileText size={32} className="text-gray-400 mb-2" />
                        <div className="text-white text-xs font-medium text-center px-2">
                          {file.file.name}
                        </div>
                      </div>
                    )}

                    {/* Progress Bar */}
                    {file.progress < 100 && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
                        <div className="w-full bg-gray-600 rounded-full h-1">
                          <div 
                            className="bg-gradient-to-r from-orange-500 to-purple-600 h-1 rounded-full transition-all duration-300"
                            style={{ width: `${file.progress}%` }}
                          ></div>
                        </div>
                        <div className="text-white text-xs mt-1">{Math.round(file.progress)}%</div>
                      </div>
                    )}

                    {/* File Info */}
                    {file.progress === 100 && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
                        <div className="text-white text-xs">{file.size}</div>
                      </div>
                    )}

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFile(file.id)}
                      className="absolute top-2 right-2 w-6 h-6 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={14} className="text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Advanced Editor Panel */}
        {showAdvancedEditor && (
          <div className="mt-6 bg-gray-700/30 rounded-xl p-6 border border-gray-600/50">
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Sparkles size={20} className="mr-2 text-orange-400" />
              Advanced Content Tools
            </h4>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Font Size */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Font Size</label>
                <select
                  value={textStyle.fontSize}
                  onChange={(e) => setTextStyle(prev => ({ ...prev, fontSize: e.target.value }))}
                  className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-orange-500"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="xlarge">Extra Large</option>
                </select>
              </div>
              
              {/* Text Color */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Text Color</label>
                <div className="flex space-x-2">
                  {['#ffffff', '#f97316', '#a855f7', '#22c55e', '#ef4444', '#3b82f6'].map(color => (
                    <button
                      key={color}
                      onClick={() => setTextStyle(prev => ({ ...prev, color }))}
                      className={`w-8 h-8 rounded-full border-2 ${
                        textStyle.color === color ? 'border-white' : 'border-gray-600'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Quick Hashtags */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Quick Hashtags</label>
                <div className="flex flex-wrap gap-1">
                  {popularHashtags.slice(0, 3).map(tag => (
                    <button
                      key={tag}
                      onClick={() => setContent(prev => prev + ' ' + tag)}
                      className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs hover:bg-blue-500/30 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quick Mentions */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Quick Mentions</label>
                <div className="flex flex-wrap gap-1">
                  {popularMentions.slice(0, 2).map(mention => (
                    <button
                      key={mention}
                      onClick={() => setContent(prev => prev + ' ' + mention)}
                      className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs hover:bg-purple-500/30 transition-colors"
                    >
                      {mention}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Content Templates */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Content Templates</label>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                <button
                  onClick={() => setContent('💪 Just finished an amazing workout! Here\'s what we covered today:\n\n1. \n2. \n3. \n\nWho\'s ready to train? #fitness #workout')}
                  className="p-3 bg-green-500/20 text-green-400 rounded-lg text-sm hover:bg-green-500/30 transition-colors text-left"
                >
                  🏋️ Workout Update
                </button>
                <button
                  onClick={() => setContent('🥗 Nutrition tip of the day:\n\n[Your tip here]\n\nTry this and let me know how it goes! #nutrition #health')}
                  className="p-3 bg-blue-500/20 text-blue-400 rounded-lg text-sm hover:bg-blue-500/30 transition-colors text-left"
                >
                  🥗 Nutrition Tip
                </button>
                <button
                  onClick={() => setContent('🔥 Behind the scenes from today\'s training session!\n\nSwipe to see the intensity 💪\n\n#training #behindthescenes')}
                  className="p-3 bg-orange-500/20 text-orange-400 rounded-lg text-sm hover:bg-orange-500/30 transition-colors text-left"
                >
                  📸 Behind Scenes
                </button>
                <button
                  onClick={() => setContent('🎯 Weekly challenge time!\n\nThis week we\'re focusing on:\n[Challenge details]\n\nWho\'s in? Drop a 💪 below! #challenge')}
                  className="p-3 bg-purple-500/20 text-purple-400 rounded-lg text-sm hover:bg-purple-500/30 transition-colors text-left"
                >
                  🎯 Weekly Challenge
                </button>
                <button
                  onClick={() => setContent('❓ Q&A time! Ask me anything about:\n\n• Training\n• Nutrition\n• Recovery\n• Mindset\n\nI\'ll answer in my stories! #QA')}
                  className="p-3 bg-pink-500/20 text-pink-400 rounded-lg text-sm hover:bg-pink-500/30 transition-colors text-left"
                >
                  ❓ Q&A Session
                </button>
                <button
                  onClick={() => setContent('🏆 Transformation Tuesday!\n\nSharing some incredible progress from my clients. Remember, consistency is key!\n\n#transformation #progress')}
                  className="p-3 bg-yellow-500/20 text-yellow-400 rounded-lg text-sm hover:bg-yellow-500/30 transition-colors text-left"
                >
                  🏆 Transformation
                </button>
              </div>
            </div>
            
            {/* AI Content Suggestions */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Zap size={16} className="text-purple-400" />
                <span className="text-purple-300 font-semibold text-sm">AI Content Suggestions</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="text-purple-200">💡 Your workout videos get 3x more engagement than photos</div>
                <div className="text-purple-200">💡 Posts with nutrition tips perform 40% better on weekends</div>
                <div className="text-purple-200">💡 Adding #motivation increases engagement by 25%</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-700/30 border-t border-gray-700/50">
        <div className="flex items-center justify-between">
          {/* Media Upload Buttons */}
          <div className="flex items-center space-x-2">
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => handleFileUpload(e.target.files, 'image')}
              className="hidden"
            />
            <input
              ref={videoInputRef}
              type="file"
              multiple
              accept="video/*"
              onChange={(e) => handleFileUpload(e.target.files, 'video')}
              className="hidden"
            />

            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className={`p-2 hover:bg-gray-600/50 rounded-lg transition-colors disabled:opacity-50 ${uploadedFiles.length >= 5 ? 'opacity-50 cursor-not-allowed' : ''}`}
              title="Add Photos"
            >
              <Image size={20} className="text-gray-400 hover:text-orange-400" />
            </button>
            {uploadedFiles.length >= 5 && (
              <div className="text-xs text-gray-400 ml-2">Max 5 photos</div>
            )}

            <button
              onClick={() => videoInputRef.current?.click()}
              disabled={isUploading}
              className="p-2 hover:bg-gray-600/50 rounded-lg transition-colors disabled:opacity-50"
              title="Add Video"
            >
              <Video size={20} className="text-gray-400 hover:text-orange-400" />
            </button>

            <button
              disabled={isUploading}
              className="p-2 hover:bg-gray-600/50 rounded-lg transition-colors disabled:opacity-50"
              title="Add File"
            >
              <Paperclip size={20} className="text-gray-400 hover:text-orange-400" />
            </button>

            <button
              disabled={isUploading}
              className="p-2 hover:bg-gray-600/50 rounded-lg transition-colors disabled:opacity-50"
              title="Schedule Post"
            >
              <Clock size={20} className="text-gray-400 hover:text-orange-400" />
            </button>

          </div>

          {/* Character Count & Publish */}
          <div className="flex items-center space-x-4">
            <div className={`text-sm ${remainingCharacters < 100 ? 'text-orange-400' : 'text-gray-400'}`}>
              {remainingCharacters}
            </div>

            <button
              onClick={handlePublish}
              disabled={!content.trim() && uploadedFiles.length === 0}
              className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
            >
              {scheduledDate ? 'Schedule' : 'Publish'}
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContentCreator