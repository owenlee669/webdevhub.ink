import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import navigationData from '../assets/data';

// 扁平化所有网站数据用于搜索
const getAllWebsites = () => {
  const websites = [];
  navigationData.forEach(category => {
    category.subcategories.forEach(subcategory => {
      subcategory.websites.forEach(website => {
        websites.push({
          ...website,
          category: category.name,
          subcategory: subcategory.name
        });
      });
    });
  });
  return websites;
};

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  
  // 获取当前页面的类别
  const getCurrentCategory = () => {
    const path = location.pathname;
    if (path === '/') return '';
    
    const match = path.match(/\/category\/(.+)/);
    return match ? decodeURIComponent(match[1]) : '';
  };
  
  const currentCategory = getCurrentCategory();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim() === '') {
      setSearchResults([]);
      setShowResults(false);
      return;
    }
    
    const allWebsites = getAllWebsites();
    const results = allWebsites.filter(website => 
      website.name.toLowerCase().includes(value.toLowerCase()) ||
      website.description.toLowerCase().includes(value.toLowerCase())
    );
    
    setSearchResults(results);
    setShowResults(true);
  };
  
  const handleSearchBlur = () => {
    // 延迟隐藏搜索结果，以便用户可以点击
    setTimeout(() => {
      setShowResults(false);
    }, 200);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8 text-[#0071e3]" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 10V3L4 14h7v7l9-11h-7z" 
              />
            </svg>
            <span className="text-xl font-semibold text-[#1d1d1f]">WebDevHub</span>
          </Link>

          {/* 桌面导航 */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              首页
            </Link>
            {navigationData.map((category) => (
              <Link 
                key={category.name} 
                to={`/category/${encodeURIComponent(category.name)}`} 
                className={`nav-link ${currentCategory === category.name ? 'active' : ''}`}
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* 搜索框 */}
          <div className="hidden md:flex relative">
            <div className="relative">
              <input 
                type="text" 
                placeholder="搜索工具..."
                className="pl-10 pr-4 py-2 rounded-full bg-[#f5f5f7] text-sm focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition-all duration-200 w-60"
                value={searchTerm}
                onChange={handleSearch}
                onBlur={handleSearchBlur}
                onFocus={() => searchTerm.trim() !== '' && setShowResults(true)}
              />
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-[#86868b] absolute top-2 left-3" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>
            
            {/* 搜索结果 */}
            {showResults && searchResults.length > 0 && (
              <div className="absolute top-full mt-2 right-0 w-80 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                <div className="max-h-96 overflow-y-auto">
                  {searchResults.map((website, index) => (
                    <a 
                      key={`${website.name}-${index}`}
                      href={website.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 border-b border-gray-100 hover:bg-[#f5f5f7] transition-colors"
                    >
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-lg ${website.iconColor} flex items-center justify-center text-white font-medium mr-3`}>
                          {website.iconText}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-[#1d1d1f]">{website.name}</h4>
                          <p className="text-xs text-[#86868b] line-clamp-1">{website.description}</p>
                          <p className="text-xs text-[#0071e3] mt-1">{website.category} / {website.subcategory}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
            
            {showResults && searchResults.length === 0 && searchTerm.trim() !== '' && (
              <div className="absolute top-full mt-2 right-0 w-80 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                <div className="p-4 text-center text-[#86868b]">
                  未找到相关工具
                </div>
              </div>
            )}
          </div>

          {/* 移动端菜单按钮 */}
          <button 
            className="md:hidden flex items-center" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-[#1d1d1f]" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      <div 
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 shadow-md' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 pb-4">
          <div className="mb-4 pt-2 relative">
            <input 
              type="text" 
              placeholder="搜索工具..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#f5f5f7] text-sm focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition-all duration-200"
              value={searchTerm}
              onChange={handleSearch}
              onBlur={handleSearchBlur}
              onFocus={() => searchTerm.trim() !== '' && setShowResults(true)}
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-[#86868b] absolute top-[14px] left-3" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
            
            {/* 移动端搜索结果 */}
            {showResults && searchResults.length > 0 && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                <div className="max-h-96 overflow-y-auto">
                  {searchResults.map((website, index) => (
                    <a 
                      key={`${website.name}-${index}`}
                      href={website.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 border-b border-gray-100 hover:bg-[#f5f5f7] transition-colors"
                    >
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-lg ${website.iconColor} flex items-center justify-center text-white font-medium mr-3`}>
                          {website.iconText}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-[#1d1d1f]">{website.name}</h4>
                          <p className="text-xs text-[#86868b] line-clamp-1">{website.description}</p>
                          <p className="text-xs text-[#0071e3] mt-1">{website.category} / {website.subcategory}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <nav className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className={`py-2 nav-link ${location.pathname === '/' ? 'active' : ''}`} 
              onClick={() => setIsOpen(false)}
            >
              首页
            </Link>
            {navigationData.map((category) => (
              <Link 
                key={category.name} 
                to={`/category/${encodeURIComponent(category.name)}`} 
                className={`py-2 nav-link ${currentCategory === category.name ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 