import React, { useState, useEffect } from 'react';
import WebsiteCard from './WebsiteCard';

const CategorySection = ({ category }) => {
  const [activeSubcategory, setActiveSubcategory] = useState('');
  
  useEffect(() => {
    // 确保在分类变化时重置活跃的子分类
    if (category && category.subcategories && category.subcategories.length > 0) {
      setActiveSubcategory(category.subcategories[0].name);
    }
  }, [category]);

  // 防止在category还未加载时渲染
  if (!category || !category.subcategories || category.subcategories.length === 0) {
    return <div className="text-center py-16">正在加载...</div>;
  }

  // 确保有选中的子分类
  const currentSubcategory = category.subcategories.find(s => s.name === activeSubcategory) || category.subcategories[0];

  return (
    <section className="fade-in py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          {category.name}
        </h2>

        {/* 二级分类导航 */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2 bg-[#f5f5f7] p-1 rounded-full">
            {category.subcategories.map((subcategory) => (
              <button
                key={subcategory.name}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSubcategory === subcategory.name
                    ? 'bg-white text-[#0071e3] shadow-sm'
                    : 'text-[#1d1d1f] hover:bg-white/50'
                }`}
                onClick={() => setActiveSubcategory(subcategory.name)}
              >
                {subcategory.name}
              </button>
            ))}
          </div>
        </div>

        {/* 网站卡片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentSubcategory && currentSubcategory.websites && currentSubcategory.websites.length > 0 ? (
            currentSubcategory.websites.map((website, index) => (
              <WebsiteCard key={`${website.name}-${index}`} website={website} />
            ))
          ) : (
            <div className="col-span-3 text-center py-10 text-gray-500">
              该分类下暂无网站
            </div>
          )}
        </div>

        {/* 返回顶部按钮 */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="btn btn-secondary inline-flex items-center space-x-2"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
            <span>返回顶部</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection; 