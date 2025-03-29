import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CategorySection from '../components/CategorySection';
import navigationData from '../assets/data';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const decodedCategoryName = decodeURIComponent(categoryName);
  
  // 查找选定的分类
  const category = navigationData.find(
    (cat) => cat.name === decodedCategoryName
  );
  
  // 所有Hook必须在条件语句之前调用
  useEffect(() => {
    if (decodedCategoryName !== '全部工具' && !category) {
      navigate('/');
    }
  }, [category, navigate, decodedCategoryName]);
  
  // 处理全部工具的特殊情况
  if (decodedCategoryName === '全部工具') {
    return (
      <div className="min-h-screen pt-16">
        {navigationData.map(category => (
          <CategorySection key={category.name} category={category} />
        ))}
        
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
  }
  
  if (!category) {
    return null;
  }
  
  return (
    <div className="min-h-screen pt-16">
      <CategorySection category={category} />
      
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

export default CategoryPage; 