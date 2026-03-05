import React, { useState } from 'react'
import ContentCreator from './ContentCreator'
import PostDisplay from './PostDisplay'
import StoryRing from './StoryRing'
import StoryViewer from './StoryViewer'

const ContentFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: '1',
      author: {
        name: 'FFM-Martin',
        username: 'FFM-Martin',
        avatar: 'FM',
        verified: true
      },
      content: 'Test',
      files: [
        {
          id: 'f1',
          type: 'image' as const,
          url: '/website-header-3000-1500 original.png',
          size: '2.1 MB'
        }
      ],
      visibility: 'public' as const,
      timestamp: new Date().toISOString(),
      tags: [],
      category: 'Fitness',
      targetAudience: 'All Levels',
      duration: null,
      difficulty: 'Beginner',
      allowComments: true,
      allowSharing: true,
      contentWarning: null,
      isExclusive: false,
      exclusiveUntil: null,
      tipGoal: null,
      tipGoalCurrent: 0,
      tipGoalDescription: null,
      likes: 0,
      comments: 0,
      shares: 0,
      tips: 0,
      totalTipped: 0,
      isLiked: false,
      isBookmarked: false
    }
  ])

  const [stories, setStories] = useState([
    {
      id: '1',
      author: {
        name: 'Marcus Johnson',
        username: 'marcus_beast',
        avatar: 'MJ',
        verified: true
      },
      type: 'text' as const,
      content: 'Just finished an amazing workout! 💪 Ready to help you reach your goals!',
      backgroundColor: '#6366f1',
      textColor: '#ffffff',
      fontSize: 'text-2xl',
      textAlign: 'center',
      visibility: 'public' as const,
      duration: 24,
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
      views: 234,
      likes: 45,
      isLiked: false,
      hasUnseenStories: true
    },
    {
      id: '2',
      author: {
        name: 'Dr. Luna Chen',
        username: 'dr_luna',
        avatar: 'LC',
        verified: true
      },
      type: 'media' as const,
      mediaUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      mediaType: 'image' as const,
      content: 'Healthy meal prep for the week! 🥗',
      visibility: 'subscribers' as const,
      duration: 24,
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
      views: 156,
      likes: 32,
      isLiked: true,
      hasUnseenStories: false
    }
  ])

  const [showStoryViewer, setShowStoryViewer] = useState(false)
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
  const [showStoryCreator, setShowStoryCreator] = useState(false)

  const handlePublish = (content: any) => {
    const newPost = {
      id: Date.now().toString(),
      author: {
        name: 'John Doe',
        username: 'johndoe',
        avatar: 'JD',
        verified: false
      },
      content: content.content,
      files: content.files.map((file: any) => ({
        id: file.id,
        type: file.type,
        url: file.preview,
        size: file.size,
        name: file.file.name
      })),
      visibility: content.visibility,
      price: content.price,
      isPinned: content.isPinned,
      timestamp: content.timestamp,
      likes: 0,
      comments: 0,
      shares: 0,
      tips: 0,
      totalTipped: 0,
      isLiked: false,
      isBookmarked: false
    }

    setPosts(prev => [newPost, ...prev])
  }

  const handleLike = (postId: string) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1
          }
        : post
    ))
  }

  const handleComment = (postId: string) => {
    console.log('Comment on post:', postId)
  }

  const handleShare = (postId: string) => {
    console.log('Share post:', postId)
  }

  const handleBookmark = (postId: string) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, isBookmarked: !post.isBookmarked }
        : post
    ))
  }

  const handlePurchase = (postId: string) => {
    console.log('Purchase post:', postId)
  }

  const handleTip = (postId: string, amount: number) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            tips: post.tips + 1,
            totalTipped: post.totalTipped + amount
          }
        : post
    ))
    console.log(`Tipped £${amount} to post ${postId} with animation`)
  }

  const handleCreateStory = () => {
    setShowStoryCreator(true)
  }

  const handleViewStory = (index: number) => {
    setCurrentStoryIndex(index)
    setShowStoryViewer(true)
    
    // Mark stories as seen
    setStories(prev => prev.map((story, i) => 
      i === index ? { ...story, hasUnseenStories: false } : story
    ))
  }

  const handleNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(prev => prev + 1)
    } else {
      setShowStoryViewer(false)
    }
  }

  const handlePreviousStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(prev => prev - 1)
    }
  }

  const handleStoryLike = (storyId: string) => {
    setStories(prev => prev.map(story => 
      story.id === storyId 
        ? { 
            ...story, 
            isLiked: !story.isLiked,
            likes: story.isLiked ? story.likes - 1 : story.likes + 1
          }
        : story
    ))
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Stories Ring */}
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6">
        <h3 className="text-white font-semibold mb-4">Stories</h3>
        <StoryRing
          stories={stories}
          onCreateStory={handleCreateStory}
          onViewStory={handleViewStory}
          currentUser={{
            name: 'John Doe',
            avatar: 'JD'
          }}
        />
      </div>

      {/* Content Creator */}
      <ContentCreator onPublish={handlePublish} />

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <PostDisplay
            key={post.id}
            post={post}
            onLike={handleLike}
            onComment={handleComment}
            onShare={handleShare}
            onBookmark={handleBookmark}
            onPurchase={handlePurchase}
            onTip={handleTip}
          />
        ))}
      </div>

      {/* Story Viewer */}
      <StoryViewer
        stories={stories}
        currentIndex={currentStoryIndex}
        isOpen={showStoryViewer}
        onClose={() => setShowStoryViewer(false)}
        onNext={handleNextStory}
        onPrevious={handlePreviousStory}
        onLike={handleStoryLike}
        onPurchase={(storyId) => console.log('Purchase story:', storyId)}
      />
    </div>
  )
}

export default ContentFeed