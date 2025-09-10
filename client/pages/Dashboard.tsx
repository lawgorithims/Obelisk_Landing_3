import { Button } from "@/components/ui/button";
import {
  Home,
  BarChart3,
  Settings,
  ChevronDown,
  Moon,
  FolderOpen,
  Menu,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#202228] text-white font-['Inder',_-apple-system,_Roboto,_Helvetica,_sans-serif]">
      {/* Header */}
      <header className="h-[52px] bg-[#202228] border-b border-[#5E5E5E] flex items-center px-4">
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-[#A0A0A0]">Obelisk Dashboard</span>
          <span className="text-[#E0E0E0]"> &gt; Workspace #1</span>
        </div>
        <div className="ml-auto">
          <Button className="bg-[#2196F3] hover:bg-[#1976D2] text-white text-sm px-4 py-1 h-6 rounded">
            Switch Workspace
          </Button>
        </div>
      </header>

      <div className="flex h-[calc(100vh-52px)]">
        {/* Sidebar */}
        <aside className="w-[228px] bg-[#24262E] shadow-lg flex flex-col">
          {/* Logo */}
          <div className="p-4 border-b border-[#3F4350]/30">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#E0E0E0] rounded-lg flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 0L0 15V20H2.5V37.5H10V25H17.5V37.5H37.5V20H40V15L35 11.25V2.5H27.5V5.625L20 0ZM22.5 25H30V32.5H22.5V25Z"
                    fill="#2196F3"
                  />
                </svg>
              </div>
              <span className="text-[#E0E0E0] text-lg font-normal">
                Obelisk
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="ml-auto p-1 h-5 w-5 text-[#A0A0A0] hover:text-white"
              >
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            <div className="flex items-center space-x-3 text-[#A0A0A0] py-2">
              <Home className="w-6 h-6" />
              <span className="text-lg">Home</span>
            </div>

            <div className="flex items-center space-x-3 text-[#A0A0A0] py-2">
              <BarChart3 className="w-5 h-5" />
              <span className="text-lg">Analytics</span>
            </div>

            <div className="flex items-center space-x-3 text-[#A0A0A0] py-2">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.1183 8.41177C18.1183 10.9094 16.0866 12.9412 13.5889 12.9412H11.0007C8.50304 12.9412 6.47128 10.9094 6.47128 8.41177V6.47059H18.1183L18.1183 8.41177ZM20.7066 5.17647H16.8242V0H15.5301V5.17647H9.0595V0H7.76539V5.17647H3.88303V6.47058H5.17716V8.41177C5.17716 11.6225 7.78998 14.2353 11.0007 14.2353H11.6477V18.7647C11.6477 19.8349 10.7768 20.7059 9.70657 20.7059C8.63633 20.7059 7.76539 19.8349 7.76539 18.7647C7.76539 16.9814 6.31339 15.5294 4.53009 15.5294C2.7468 15.5294 1.2948 16.9814 1.2948 18.7647V22H2.58892V18.7647C2.58892 17.6945 3.45986 16.8235 4.53009 16.8235C5.60033 16.8235 6.47127 17.6945 6.47127 18.7647C6.47127 20.548 7.92327 22 9.70657 22C11.4912 22 12.9419 20.548 12.9419 18.7647V14.2353H13.5889C16.7996 14.2353 19.4124 11.6225 19.4124 8.41177V6.47059H20.7066V5.17647Z"
                  fill="#A0A0A0"
                />
              </svg>
              <span className="text-lg">Integrations</span>
            </div>

            <div className="py-2">
              <div className="flex items-center space-x-3 text-[#E0E0E0] mb-3">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.6562 1.5625H2.34375C1.48438 1.5625 0.78125 2.26562 0.78125 3.125V17.9688C0.78125 18.8281 1.48438 19.5312 2.34375 19.5312H22.6562C23.5156 19.5312 24.2188 18.8281 24.2188 17.9688V3.125C24.2188 2.26562 23.5156 1.5625 22.6562 1.5625ZM22.6562 15.625C22.6562 16.0547 22.3047 16.4062 21.875 16.4062H3.125C2.69531 16.4062 2.34375 16.0547 2.34375 15.625V3.90625C2.34375 3.47656 2.69531 3.125 3.125 3.125H21.875C22.3047 3.125 22.6562 3.47656 22.6562 3.90625V15.625ZM17.1875 22.6562C17.1875 23.0875 16.8383 23.4375 16.4062 23.4375H8.59375C8.16172 23.4375 7.8125 23.0875 7.8125 22.6562C7.8125 22.225 8.16172 21.875 8.59375 21.875H9.375V20.3125H15.625V21.875H16.4062C16.8383 21.875 17.1875 22.225 17.1875 22.6562ZM17.1875 10.9375C17.1875 11.3687 16.8383 11.7188 16.4062 11.7188H8.59375C8.16172 11.7188 7.8125 11.3687 7.8125 10.9375C7.8125 10.5063 8.16172 10.1562 8.59375 10.1562H16.4062C16.8383 10.1562 17.1875 10.5063 17.1875 10.9375ZM17.1875 7.8125C17.1875 8.24375 16.8383 8.59375 16.4062 8.59375H8.59375C8.16172 8.59375 7.8125 8.24375 7.8125 7.8125C7.8125 7.38125 8.16172 7.03125 8.59375 7.03125H16.4062C16.8383 7.03125 17.1875 7.38125 17.1875 7.8125Z"
                    fill="#E0E0E0"
                  />
                </svg>
                <span className="text-lg">Workspaces</span>
                <ChevronDown className="w-6 h-6 ml-auto" />
              </div>

              {/* Current workspace indicator */}
              <div className="bg-[#3F4350]/50 rounded px-4 py-2 mb-4">
                <span className="text-[#E0E0E0] text-sm">Workspace #1</span>
              </div>

              {/* Workspace list */}
              <div className="space-y-3 pl-4">
                <div className="flex items-center space-x-3 text-[#E0E0E0] text-sm">
                  <FolderOpen className="w-3 h-3" />
                  <span>Workspace #1</span>
                </div>
                <div className="flex items-center space-x-3 text-[#E0E0E0] text-sm">
                  <FolderOpen className="w-3 h-3" />
                  <span>Workspace #2</span>
                </div>
                <div className="flex items-center space-x-3 text-[#E0E0E0] text-sm">
                  <FolderOpen className="w-3 h-3" />
                  <span>Workspace #3</span>
                </div>
              </div>

              <Button className="bg-[#2196F3] hover:bg-[#1976D2] text-[#E0E0E0] text-xs px-4 py-1 h-6 rounded mt-4 w-full">
                + Add New Workspace
              </Button>
            </div>
          </nav>

          {/* Bottom section */}
          <div className="p-4 border-t border-[#3F4350]/30 space-y-4">
            <div className="flex items-center space-x-3 text-[#A0A0A0] text-lg">
              <Moon className="w-6 h-6" />
              <span>Dark Mode</span>
            </div>

            <div className="flex items-center space-x-3 text-[#A0A0A0] text-lg">
              <Settings className="w-6 h-6" />
              <span>Settings</span>
            </div>

            {/* User profile */}
            <div className="flex items-center space-x-3 pt-2">
              <div className="w-9 h-9 bg-[#A0A0A0] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">SG</span>
              </div>
              <div>
                <div className="text-[#A0A0A0] text-sm">Schuyler Gleaves</div>
                <div className="text-[#A0A0A0] text-xs">
                  schuylergleaves@outlook.com
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex">
          {/* Documents Section */}
          <section className="flex-1 border-r border-[#5E5E5E] border-dashed bg-[#202228] flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-white text-3xl font-normal">documents</h2>
            </div>
          </section>

          {/* Editor Section */}
          <section className="flex-1 border-r border-[#5E5E5E] border-dashed bg-[#202228] flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-white text-3xl font-normal">editor</h2>
            </div>
          </section>

          {/* Assistant Section */}
          <section className="flex-1 bg-[#202228] flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-white text-3xl font-normal">assistant</h2>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
