import React, { useState } from 'react';

const WebsiteCard = ({ website }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="card group hover:bg-white border border-gray-100">
        <div className="p-5">
          <a 
            href={website.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center mb-4 group"
          >
            <div className={`w-10 h-10 rounded-lg ${website.iconColor} flex items-center justify-center text-white font-medium mr-3`}>
              {website.iconText}
            </div>
            <h3 className="text-lg font-medium text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors duration-300">
              {website.name}
            </h3>
          </a>
          
          <p className="text-sm text-[#86868b] mb-4 line-clamp-2">
            {website.description}
          </p>
          
          <div className="flex justify-between items-center">
            <a 
              href={website.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-[#0071e3] hover:text-blue-700 hover:underline transition-all duration-200"
            >
              访问网站
            </a>
            
            <button
              onClick={() => setShowModal(true)}
              className="text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors duration-200"
            >
              查看详情
            </button>
          </div>
        </div>
      </div>

      {/* 模态框 */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 fade-in">
          <div 
            className="bg-white rounded-xl shadow-lg max-w-md w-full mx-auto overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <a 
                  href={website.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className={`w-10 h-10 rounded-lg ${website.iconColor} flex items-center justify-center text-white font-medium mr-3`}>
                    {website.iconText}
                  </div>
                  <h3 className="text-xl font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                    {website.name}
                  </h3>
                </a>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-[#86868b] hover:text-[#1d1d1f] transition-colors"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  </svg>
                </button>
              </div>
              
              <p className="text-sm text-[#424245] mb-6">
                {website.description}
              </p>
              
              <div className="mb-6">
                <div className="text-sm font-medium text-[#86868b] mb-1">网站链接：</div>
                <a 
                  href={website.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0071e3] hover:underline break-all"
                >
                  {website.url}
                </a>
              </div>
              
              <div className="flex justify-end">
                <a
                  href={website.url}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  立即访问
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WebsiteCard; 