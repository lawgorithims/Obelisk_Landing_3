import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Upload, Download, Search, FileText, Settings, User, Bell } from "lucide-react";

export default function Desktop() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side */}
            <div className="flex items-center space-x-4">
              <Link to="/pricing" className="flex items-center text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Pricing
              </Link>
              <div className="text-2xl font-bold text-black">OBELISK</div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              
              <div className="space-y-3">
                <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Document
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Start New Analysis
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Search className="w-4 h-4 mr-2" />
                  Legal Research
                </Button>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Recent Documents</h3>
                <div className="space-y-2">
                  <div className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 cursor-pointer">
                    <div className="text-sm font-medium text-gray-900">Contract Analysis.pdf</div>
                    <div className="text-xs text-gray-500">2 hours ago</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 cursor-pointer">
                    <div className="text-sm font-medium text-gray-900">Legal Brief Draft.docx</div>
                    <div className="text-xs text-gray-500">1 day ago</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 cursor-pointer">
                    <div className="text-sm font-medium text-gray-900">Case Research Notes.pdf</div>
                    <div className="text-xs text-gray-500">3 days ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Welcome Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Welcome to Obelisk
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Your AI-powered legal research and document analysis platform
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Document Review</h3>
                    <p className="text-sm text-gray-600">
                      Upload and analyze legal documents with AI-powered insights
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Research</h3>
                    <p className="text-sm text-gray-600">
                      Search case law, statutes, and legal precedents instantly
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Download className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Drafting</h3>
                    <p className="text-sm text-gray-600">
                      Generate legal documents with proper citations and formatting
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Getting Started */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Getting Started</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Upload Your First Document</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Start by uploading a legal document to see Obelisk's analysis capabilities in action.
                    </p>
                    <Button size="sm" className="mt-3">
                      Upload Now
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Explore Legal Research</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Try our comprehensive legal research tools to find relevant cases and statutes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Generate Documents</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Use our AI-powered document drafting to create professional legal documents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-gray-600">
              © 2025 Obelisk LLC. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
