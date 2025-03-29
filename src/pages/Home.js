import React from 'react';
import { Link } from 'react-router-dom';
import navigationData from '../assets/data';

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* 英雄区域 */}
      <section className="bg-gradient-to-b from-[#f5f5f7] to-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1d1d1f]">
            Web<span className="text-[#0071e3]">Dev</span>Hub
          </h1>
          <p className="mt-6 text-xl text-[#424245] max-w-3xl mx-auto">
            发现最实用的互联网工具，助力您的工作与学习更加高效
          </p>
          <div className="mt-10">
            <Link
              to="/category/全部工具"
              className="btn btn-primary"
            >
              开始探索
            </Link>
          </div>
        </div>
      </section>

      {/* 分类展示 */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">浏览分类</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {navigationData.map((category) => (
              <Link
                key={category.name}
                to={`/category/${encodeURIComponent(category.name)}`}
                className="group"
              >
                <div className="card h-full p-6 border border-gray-100 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0071e3] flex items-center justify-center text-white font-medium mr-4 group-hover:scale-110 transition-transform duration-300">
                      {category.name.charAt(0)}
                    </div>
                    <h3 className="text-xl font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors duration-300">
                      {category.name}
                    </h3>
                  </div>
                  
                  <div className="mt-2 flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.subcategories.slice(0, 5).map((subcategory) => (
                        <span
                          key={subcategory.name}
                          className="inline-flex px-3 py-1 bg-[#f5f5f7] text-[#424245] text-xs rounded-full"
                        >
                          {subcategory.name}
                        </span>
                      ))}
                      {category.subcategories.length > 5 && (
                        <span className="inline-flex px-3 py-1 bg-[#f5f5f7] text-[#424245] text-xs rounded-full">
                          +{category.subcategories.length - 5}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-sm text-[#86868b]">
                      包含 {category.subcategories.reduce((sum, sub) => sum + sub.websites.length, 0)} 个网站工具
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 text-[#0071e3] text-sm font-medium flex justify-between items-center">
                    <span>浏览全部</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 功能特点 */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-16">我们的特点</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-[#0071e3] rounded-2xl flex items-center justify-center mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">精选工具</h3>
              <p className="text-[#86868b]">
                我们精心筛选每一个工具，确保其实用性和可靠性，为您节省筛选时间
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-[#0071e3] rounded-2xl flex items-center justify-center mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">分类清晰</h3>
              <p className="text-[#86868b]">
                科学的分类体系，让您快速找到所需工具，提高工作与学习效率
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-[#0071e3] rounded-2xl flex items-center justify-center mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">持续更新</h3>
              <p className="text-[#86868b]">
                我们不断寻找和添加新的优质工具，让您始终了解互联网最新动态
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA区域 */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">开始探索更多实用工具</h2>
          <p className="text-[#86868b] mb-10 max-w-2xl mx-auto">
            我们精选了各个领域的优质工具，助您提高工作效率，优化学习体验
          </p>
          <Link
            to="/category/全部工具"
            className="btn btn-primary"
          >
            查看所有工具
          </Link>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-[#1d1d1f] text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
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
                <span className="text-xl font-semibold ml-2">WebDevHub</span>
              </div>
              <p className="text-[#86868b] mt-2">您的互联网工具之家</p>
            </div>
            
            <div>
              <p className="text-[#86868b]">&copy; {new Date().getFullYear()} WebDevHub. 保留所有权利.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 