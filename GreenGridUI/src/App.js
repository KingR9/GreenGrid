import React, { useState, useEffect } from 'react';
import { Shield, Code, Users, Lock, ArrowRight, Zap, Globe, CheckCircle, User, Building, LogOut, Eye, Copy, Download } from 'lucide-react';

const BlockchainMarketplace = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [loginType, setLoginType] = useState('client');
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  // Mock data for demonstration
  const mockClients = {
    'client1': { 
      username: 'client1', 
      password: 'pass123', 
      name: 'TechCorp Solutions',
      contractAddress: '0x742d35cc6634c0532925a3b8d8c34aa4e86c3e9f',
      contractType: 'DeFi Lending Protocol',
      deploymentDate: '2024-12-15',
      gasUsed: '2,456,789',
      description: 'Advanced decentralized lending protocol with automated interest rate optimization and collateral management.'
    },
    'client2': { 
      username: 'client2', 
      password: 'pass456', 
      name: 'CryptoVentures Ltd',
      contractAddress: '0x9a8b7c6d5e4f3a2b1c9d8e7f6a5b4c3d2e1f0a9b',
      contractType: 'NFT Marketplace',
      deploymentDate: '2024-11-28',
      gasUsed: '1,823,456',
      description: 'Comprehensive NFT trading platform with royalty management and cross-chain compatibility.'
    }
  };

  const mockCompanyMembers = {
    'admin': { username: 'admin', password: 'admin123', name: 'Sarah Johnson', role: 'Senior Blockchain Developer' },
    'developer': { username: 'developer', password: 'dev123', name: 'Mike Chen', role: 'Smart Contract Architect' }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = loginType === 'client' ? mockClients : mockCompanyMembers;
    const user = users[credentials.username];
    
    if (user && user.password === credentials.password) {
      setCurrentUser(user);
      setUserType(loginType);
      setShowLogin(false);
      setCredentials({ username: '', password: '' });
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setUserType(null);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  // Landing Page Component
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">ChainForge</h1>
          </div>
          <button
            onClick={() => setShowLogin(true)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Access Portal
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
            <h2 className="relative text-6xl font-bold text-white mb-6 leading-tight">
              Enterprise-Grade
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Smart Contract Solutions
              </span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Unlock the power of blockchain technology with our bespoke smart contract development and deployment services. 
            Secure, scalable, and tailored to your business needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Shield className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-grade security protocols with multi-signature validation and comprehensive audit trails.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Zap className="w-12 h-12 text-pink-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
              <p className="text-gray-300">Optimized smart contracts with minimal gas fees and maximum transaction throughput.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Globe className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-3">Global Scale</h3>
              <p className="text-gray-300">Cross-chain compatibility ensuring your contracts work across multiple blockchain networks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-white text-center mb-16">Why Choose ChainForge?</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Custom Development</h4>
                  <p className="text-gray-300">Every smart contract is built from the ground up to meet your specific business requirements and compliance needs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">24/7 Monitoring</h4>
                  <p className="text-gray-300">Continuous monitoring and maintenance of your deployed contracts with real-time alerts and performance analytics.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Expert Support</h4>
                  <p className="text-gray-300">Direct access to our team of blockchain architects and smart contract specialists for ongoing support.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Proven Track Record</h4>
                  <p className="text-gray-300">Over $500M in assets secured through our smart contracts with zero security breaches to date.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-white/20 backdrop-blur-lg">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Code className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h4>
                  <p className="text-gray-300 mb-6">Join over 500+ enterprises already leveraging our blockchain solutions.</p>
                  <button
                    onClick={() => setShowLogin(true)}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto"
                  >
                    Access Your Portal
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  // Login Modal Component
  const LoginModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Secure Access Portal</h3>
          <p className="text-gray-600">Choose your access type to continue</p>
        </div>

        <div className="flex space-x-2 mb-6">
          <button
            onClick={() => setLoginType('client')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center ${
              loginType === 'client'
                ? 'bg-purple-100 text-purple-700 border-2 border-purple-500'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <User className="w-4 h-4 mr-2" />
            Client
          </button>
          <button
            onClick={() => setLoginType('company')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center ${
              loginType === 'company'
                ? 'bg-purple-100 text-purple-700 border-2 border-purple-500'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Building className="w-4 h-4 mr-2" />
            Company
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin(e)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin(e)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={() => setShowLogin(false)}
              className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={handleLogin}
              className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg"
            >
              Sign In
            </button>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            Demo credentials: 
            {loginType === 'client' ? ' client1/pass123 or client2/pass456' : ' admin/admin123 or developer/dev123'}
          </p>
        </div>
      </div>
    </div>
  );

  // Client Dashboard Component
  const ClientDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ChainForge Portal</h1>
                <p className="text-sm text-gray-500">Welcome back, {currentUser.name}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Smart Contract</h2>
          <p className="text-gray-600">Manage and monitor your blockchain deployment</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contract Overview */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Contract Details</h3>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Active</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-500">Contract Address</p>
                  <p className="text-lg font-mono text-gray-900">{currentUser.contractAddress}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(currentUser.contractAddress)}
                  className="text-purple-600 hover:text-purple-700 transition-colors"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-500">Contract Type</p>
                  <p className="text-lg font-semibold text-gray-900">{currentUser.contractType}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-500">Deployment Date</p>
                  <p className="text-lg font-semibold text-gray-900">{currentUser.deploymentDate}</p>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-500 mb-2">Description</p>
                <p className="text-gray-700">{currentUser.description}</p>
              </div>
            </div>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Gas Used</span>
                  <span className="font-semibold text-gray-900">{currentUser.gasUsed}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Network</span>
                  <span className="font-semibold text-gray-900">Ethereum</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Status</span>
                  <span className="text-green-600 font-semibold">✓ Verified</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
                  <Eye className="w-4 h-4" />
                  <span>View on Explorer</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Download ABI</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  // Company Dashboard Component
  const CompanyDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ChainForge Admin</h1>
                <p className="text-sm text-gray-500">{currentUser.name} • {currentUser.role}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Company Dashboard</h2>
          <p className="text-gray-600">Manage client contracts and system overview</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Active Contracts</p>
                <p className="text-2xl font-bold text-gray-900">127</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Clients</p>
                <p className="text-2xl font-bold text-gray-900">89</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Assets Secured</p>
                <p className="text-2xl font-bold text-gray-900">$547M</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-xl font-semibold text-gray-900">Recent Client Contracts</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {Object.values(mockClients).map((client, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{client.name}</h4>
                    <p className="text-sm text-gray-600">{client.contractType}</p>
                    <p className="text-xs text-gray-500 font-mono">{client.contractAddress}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{client.deploymentDate}</p>
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Active</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  // Main render logic
  if (currentUser && userType === 'client') {
    return <ClientDashboard />;
  }
  
  if (currentUser && userType === 'company') {
    return <CompanyDashboard />;
  }

  return (
    <>
      <LandingPage />
      {showLogin && <LoginModal />}
    </>
  );
};

export default BlockchainMarketplace;
