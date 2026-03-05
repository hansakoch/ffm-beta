import React, { useState } from 'react'
import { 
  Plus, 
  FileText, 
  Calendar, 
  Target, 
  DollarSign, 
  Users,
  Clock,
  Award,
  Zap,
  Save,
  Eye,
  Edit,
  Trash2
} from 'lucide-react'

interface TrainingProgram {
  id: string
  title: string
  description: string
  duration: number // weeks
  price: number
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  category: string
  workoutsPerWeek: number
  totalWorkouts: number
  includes: string[]
  sales: number
  revenue: number
  rating: number
  reviews: number
  status: 'draft' | 'published' | 'archived'
  createdAt: string
}

const TrainingProgramBuilder = () => {
  const [programs, setPrograms] = useState<TrainingProgram[]>([
    {
      id: '1',
      title: 'Beast Mode Strength Program',
      description: 'Complete 12-week strength building program with progressive overload and nutrition guidance.',
      duration: 12,
      price: 149,
      difficulty: 'Intermediate',
      category: 'Strength Training',
      workoutsPerWeek: 4,
      totalWorkouts: 48,
      includes: ['48 detailed workouts', 'Nutrition guide', 'Progress tracking', 'Video demonstrations', 'Email support'],
      sales: 23,
      revenue: 3427,
      rating: 4.9, 
      reviews: 23,
      status: 'published',
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      title: 'Fighter Conditioning Blueprint',
      description: 'Elite conditioning program used by professional fighters. Build explosive power and endurance.',
      duration: 8,
      price: 99,
      difficulty: 'Advanced',
      category: 'Combat Sports',
      workoutsPerWeek: 5,
      totalWorkouts: 40,
      includes: ['40 fight-specific workouts', 'Recovery protocols', 'Mental training', 'Sparring prep'],
      sales: 31,
      revenue: 3069,
      rating: 4.8, 
      reviews: 31,
      status: 'published',
      createdAt: '2024-01-10'
    },
    {
      id: '3',
      title: 'Complete Nutrition Transformation',
      description: '16-week comprehensive nutrition program with meal plans, supplement guides, and personal coaching.',
      duration: 16,
      price: 199,
      difficulty: 'Beginner',
      category: 'Nutrition',
      workoutsPerWeek: 0,
      totalWorkouts: 0,
      includes: ['Custom meal plans', 'Supplement protocols', 'Weekly check-ins', 'Recipe database', 'Shopping lists'],
      sales: 18,
      revenue: 3582,
      rating: 4.9,
      reviews: 18,
      status: 'published',
      createdAt: '2024-01-20'
    },
    {
      id: '4',
      title: 'Home Gym Setup Guide',
      description: 'Complete guide to building the perfect home gym on any budget with equipment recommendations.',
      duration: 4,
      price: 49,
      difficulty: 'Beginner',
      category: 'Equipment Guide',
      workoutsPerWeek: 0,
      totalWorkouts: 0,
      includes: ['Equipment guides', 'Budget options', 'Space planning', 'Setup videos', 'Maintenance tips'],
      sales: 67,
      revenue: 3283,
      rating: 4.7,
      reviews: 52,
      status: 'published',
      createdAt: '2024-02-01'
    }
  ])

  const [showBuilder, setShowBuilder] = useState(false)
  const [editingProgram, setEditingProgram] = useState<TrainingProgram | null>(null)

  const totalRevenue = programs.reduce((sum, p) => sum + p.revenue, 0)
  const totalSales = programs.reduce((sum, p) => sum + p.sales, 0)
  const avgPrice = totalRevenue / totalSales || 0

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Training Programs</h2>
          <p className="text-gray-300">Create and sell custom workout programs to your fans</p>
        </div>
        <button 
          onClick={() => setShowBuilder(true)}
          className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>Create Program</span>
        </button>
      </div>

      {/* Revenue Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <div className="text-2xl font-bold text-green-400 mb-2">£{totalRevenue.toLocaleString()}</div>
          <div className="text-gray-300">Total Revenue</div>
          <div className="text-green-400 text-sm">+34% this month</div>
        </div>
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <div className="text-2xl font-bold text-blue-400 mb-2">{totalSales}</div>
          <div className="text-gray-300">Programs Sold</div>
          <div className="text-blue-400 text-sm">8 this week</div>
        </div>
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <div className="text-2xl font-bold text-purple-400 mb-2">£{Math.round(avgPrice)}</div>
          <div className="text-gray-300">Average Price</div>
          <div className="text-purple-400 text-sm">Higher than industry</div>
        </div>
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <div className="text-2xl font-bold text-orange-400 mb-2">{programs.length}</div>
          <div className="text-gray-300">Active Programs</div>
          <div className="text-orange-400 text-sm">2 bestsellers</div>
        </div>
      </div>

      {/* Optimization Tips */}
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
        <h3 className="text-xl font-bold text-white mb-4">💡 Program Optimization Tips</h3>
        <div className="space-y-3">
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <h4 className="text-white font-bold mb-1">Your 12-week programs sell 3x better!</h4>
            <p className="text-gray-300 text-sm">Fans prefer longer, comprehensive programs over short ones</p>
            <span className="text-green-400 font-bold text-sm">Create more 12+ week programs</span>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
            <h4 className="text-white font-bold mb-1">VIP fans buy 67% of your programs</h4>
            <p className="text-gray-300 text-sm">Create exclusive VIP-only programs at premium pricing</p>
            <span className="text-blue-400 font-bold text-sm">+£500/month potential</span>
          </div>
        </div>
      </div>

      {/* Programs List */}
      <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 overflow-hidden">
        <div className="p-6 border-b border-gray-700/50">
          <h3 className="text-xl font-bold text-white">Your Programs</h3>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {programs.map((program) => (
              <div key={program.id} className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{program.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        program.status === 'published' ? 'bg-green-500/20 text-green-400' :
                        program.status === 'draft' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {program.status.toUpperCase()}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        program.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        program.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {program.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-3">{program.description}</p>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{program.duration} weeks</span>
                      </div>
                      <div className="flex items-center">
                        <Zap size={14} className="mr-1" />
                        <span>{program.workoutsPerWeek}x/week</span>
                      </div>
                      <div className="flex items-center">
                        <Target size={14} className="mr-1" />
                        <span>{program.totalWorkouts} workouts</span>
                      </div>
                      <div className="flex items-center">
                        <Users size={14} className="mr-1" />
                        <span>{program.category}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Includes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.includes.map((item, index) => (
                          <span key={index} className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right ml-6">
                    <div className="text-green-400 font-bold text-2xl">£{program.price}</div>
                    <div className="text-gray-400 text-sm mb-2">per program</div>
                    <div className="text-white font-bold">£{program.revenue.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">{program.sales} sold</div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-600/20 rounded-lg">
                  <div className="text-center">
                    <div className="text-yellow-400 font-bold flex items-center justify-center">
                      <Award size={16} className="mr-1" />
                      {program.rating}
                    </div>
                    <div className="text-gray-400 text-sm">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-400 font-bold">{program.reviews}</div>
                    <div className="text-gray-400 text-sm">Reviews</div>
                  </div>
                  <div className="text-center">
                    <div className="text-purple-400 font-bold">{program.sales}</div>
                    <div className="text-gray-400 text-sm">Sales</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <button 
                    onClick={() => setEditingProgram(program)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all flex items-center space-x-2"
                  >
                    <Edit size={16} />
                    <span>Edit</span>
                  </button>
                  <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-all flex items-center space-x-2">
                    <Eye size={16} />
                    <span>Preview</span>
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-all">
                    Duplicate
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-all flex items-center space-x-2">
                    <Trash2 size={16} />
                    <span>Archive</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Program Builder Modal */}
      {showBuilder && (
        <ProgramBuilderModal onClose={() => setShowBuilder(false)} />
      )}
    </div>
  )
}

// Program Builder Modal Component
const ProgramBuilderModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: 8,
    price: 99,
    difficulty: 'Intermediate',
    category: 'Strength Training',
    workoutsPerWeek: 4,
    includes: ['Detailed workouts', 'Nutrition guide', 'Progress tracking']
  })

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-3xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white">Create Training Program</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Program Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 text-white"
              placeholder="e.g., Beast Mode Strength Program"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 text-white resize-none"
              rows={3}
              placeholder="Describe what participants will achieve..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Duration (weeks)</label>
              <select
                value={formData.duration}
                onChange={(e) => setFormData(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 text-white"
              >
                {[4, 6, 8, 10, 12, 16, 20, 24].map(weeks => (
                  <option key={weeks} value={weeks}>{weeks} weeks</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Price</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-600 bg-gray-700/30 text-gray-400">£</span>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: parseInt(e.target.value) }))}
                  className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-r-xl focus:ring-2 focus:ring-orange-500 text-white"
                  min="10"
                  step="5"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Difficulty</label>
              <select
                value={formData.difficulty}
                onChange={(e) => setFormData(prev => ({ ...prev, difficulty: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 text-white"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Workouts per Week</label>
              <select
                value={formData.workoutsPerWeek}
                onChange={(e) => setFormData(prev => ({ ...prev, workoutsPerWeek: parseInt(e.target.value) }))}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 text-white"
              >
                {[3, 4, 5, 6, 7].map(num => (
                  <option key={num} value={num}>{num}x per week</option>
                ))}
              </select>
            </div>
          </div>

          {/* Revenue Calculation */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <h4 className="text-green-400 font-bold mb-2">Revenue Potential</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Price per program:</span>
                <span className="text-white">£{formData.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">If you sell 20:</span>
                <span className="text-green-400 font-bold">£{formData.price * 20}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">If you sell 50:</span>
                <span className="text-green-400 font-bold">£{formData.price * 50}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">You keep (80%+):</span>
                <span className="text-green-300">£{Math.round(formData.price * 50 * 0.8)}</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-700/50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300"
            >
              Create Program
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TrainingProgramBuilder