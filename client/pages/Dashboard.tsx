import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Upload, 
  Download, 
  Search, 
  FileText, 
  Settings, 
  User, 
  Bell,
  Plus,
  BarChart3,
  Clock,
  CheckCircle,
  AlertCircle,
  BookOpen,
  Briefcase,
  Scale,
  Filter,
  MoreHorizontal
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center">
                <div className="text-2xl font-bold text-black">OBELISK</div>
              </Link>
              <div className="hidden md:flex items-center space-x-6 ml-8">
                <Link to="/dashboard" className="text-blue-600 font-medium">Dashboard</Link>
                <Link to="#" className="text-gray-600 hover:text-gray-900">Documents</Link>
                <Link to="#" className="text-gray-600 hover:text-gray-900">Research</Link>
                <Link to="#" className="text-gray-600 hover:text-gray-900">Cases</Link>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your legal work.</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Document
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Documents Analyzed</p>
                <p className="text-2xl font-bold text-gray-900">147</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <Search className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Research Queries</p>
                <p className="text-2xl font-bold text-gray-900">89</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Briefcase className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Cases</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 bg-teal-100 rounded-lg">
                <Clock className="w-6 h-6 text-teal-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Hours Saved</p>
                <p className="text-2xl font-bold text-gray-900">234</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="h-auto p-4 justify-start bg-blue-600 hover:bg-blue-700">
                  <Upload className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">Upload Document</div>
                    <div className="text-xs opacity-90">Analyze contracts & files</div>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-auto p-4 justify-start">
                  <Search className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">Legal Research</div>
                    <div className="text-xs text-gray-500">Find cases & statutes</div>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-auto p-4 justify-start">
                  <FileText className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">Draft Document</div>
                    <div className="text-xs text-gray-500">Create legal docs</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Contract Analysis Completed</p>
                    <p className="text-xs text-gray-600">Service Agreement.pdf - 15 key points identified</p>
                    <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <BookOpen className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Research Query Processed</p>
                    <p className="text-xs text-gray-600">Found 23 relevant cases for intellectual property dispute</p>
                    <p className="text-xs text-gray-500 mt-1">4 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Review Required</p>
                    <p className="text-xs text-gray-600">Employment Contract.docx needs your attention</p>
                    <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Analysis Results */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Recent Analysis</h2>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Merger Agreement.pdf</p>
                      <p className="text-xs text-gray-600">Risk Score: Low • 12 clauses analyzed</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">NDA Template.docx</p>
                      <p className="text-xs text-gray-600">Risk Score: Medium • 8 issues flagged</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">License Agreement.pdf</p>
                      <p className="text-xs text-gray-600">Risk Score: High • Review recommended</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Active Cases */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Active Cases</h3>
                <Button size="sm" variant="outline">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-900">Johnson v. TechCorp</p>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
                  </div>
                  <p className="text-xs text-gray-600">Contract dispute • Due: March 15</p>
                </div>

                <div className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-900">IP Portfolio Review</p>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Review</span>
                  </div>
                  <p className="text-xs text-gray-600">Patent analysis • Due: March 20</p>
                </div>

                <div className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-900">M&A Due Diligence</p>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">In Progress</span>
                  </div>
                  <p className="text-xs text-gray-600">Document review • Due: April 1</p>
                </div>
              </div>
            </div>

            {/* Usage Statistics */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">This Month's Usage</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">AI Requests</span>
                    <span className="font-medium">247 / 500</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '49.4%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Storage Used</span>
                    <span className="font-medium">18.2 / 60 GB</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '30.3%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Active Workspaces</span>
                    <span className="font-medium">2 / 5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '40%'}}></div>
                  </div>
                </div>
              </div>

              <Button variant="outline" size="sm" className="w-full mt-4">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Detailed Analytics
              </Button>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              
              <div className="space-y-2">
                <Link to="#" className="flex items-center p-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded">
                  <Scale className="w-4 h-4 mr-3" />
                  Legal Templates
                </Link>
                <Link to="#" className="flex items-center p-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded">
                  <BookOpen className="w-4 h-4 mr-3" />
                  Case Law Database
                </Link>
                <Link to="#" className="flex items-center p-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded">
                  <Settings className="w-4 h-4 mr-3" />
                  Account Settings
                </Link>
                <Link to="/pricing" className="flex items-center p-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded">
                  <BarChart3 className="w-4 h-4 mr-3" />
                  Upgrade Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
