// CSV数据处理成JSON格式
const csvData = `一级分类,二级分类,工具/网站名称,具体功能描述,网址
AI开发工具,AI代码生成,Bolt.new,无需配置环境的AI开发工具，可实现快速建站、自动部署,https://bolt.new/
,,Lovable.dev,同上,https://lovable.dev/?utm_source=toolify
,,Same.new,允许用户复制任何用户界面，实现像素级精确的复制,https://same.new/
,AI导航站,Toolify.ai,世界上第二大的AI产品导航网站,https://www.toolify.ai/zh/
,,Theresanaiforthat.com,世界上第一大的AI产品导航网站,https://theresanaiforthat.com/
,AI应用案例,Phind.com,专为程序员设计的AI搜索引擎，支持代码生成与运行,https://www.phind.com/
,,Perplexity.ai,AI搜索引擎，支持知识问答与研究,https://perplexity.ai/
,,SDXLTurbo.ai,提供Stability AI模型SDXL Turbo的免费在线试用服务,https://sdxlturbo.ai/
,,GPTsHunter,OpenAI GPTs第三方商店，收录用户自定义AI应用,https://gptshunter.com/
域名与建站,域名查询,LeanDomainSearch,帮助用户寻找可用域名的工具，提供简洁的域名搜索和生成服务,https://leandomainsearch.com/
,,QueryDomains,提供域名查询和相关信息的平台,https://query.domains/
,,InstantDomainSearch,实时域名搜索平台，帮助用户快速查找可用域名并提供注册选项,https://instantdomainsearch.com/
,域名注册平台,TLD-List,提供全面的顶级域名（TLD）列表和价格比较,https://tld-list.com/
,,Spaceship.com,域名注册网站,https://spaceship.com/
,,Porkbun,提供域名注册、托管和相关服务的平台,https://porkbun.com/
,,Namecheap,提供域名注册、网站托管和多种在线服务的知名平台,https://www.namecheap.com/
,建站工具,Tailwind CSS,现代化CSS框架，快速构建响应式网页模板,https://www.tailwindcss.cn/
代码托管与部署,代码托管平台,GitHub,全球最大的开源代码托管平台,https://github.com/
,部署服务,Vercel,提供前端开发和部署平台的服务商,https://vercel.com/
,,Cloudflare,提供CDN、互联网安全服务和域名解析服务,https://www.cloudflare.com/
数据分析与SEO,流量监控,Google Search Console,监测和优化网站在Google搜索结果中的表现,https://search.google.com/search-console
,,Google Analytics,网站流量分析与报告,https://analytics.google.com/
,,Bing Webmaster Tools,向Bing提交网页索引,https://www.bing.com/webmasters/submiturl
,关键词工具,Ahrefs Free SEO Tools,查看外链和关键词数据,https://ahrefs.com/free-seo-tools
,,SEMrush,查看网站关键词,https://www.semrush.com/
,,Google Trends,发现新兴搜索趋势,https://trends.google.com/trends/
,,Keyword Everywhere,实时显示关键词搜索量的浏览器插件,https://keywordseverywhere.com/
,,KeywordSea,关键词分析工具，抓取相关搜索词,https://keywordsea.com/
,,SearchSuggestion.tips,搜索下拉词工具,https://searchsuggestion.tips/
,,AITDK,查看流量和网页关键词,https://aitdk.com/
,,Google Ads Keyword Planner,广告关键词搜索量分析与建议,https://ads.google.cn/home/tools/keyword-planner/
,网站分析,SimilarWeb,网站流量分析与渠道来源监控,https://lp.similarweb.com/
学习资源与教程,建站教程网站,菜鸟教程,Web开发入门教程,https://www.runoob.com/
,,MDN Web Docs,面向开发者的Web技术中文文档,https://developer.mozilla.org/zh-CN/docs/Web
,视频教程,B站建站教程,Web建站视频教程,https://www.bilibili.com/video/BV1Wr4y1R7Bd/
支付与商业化,支付网关,Stripe Atlas,国际支付解决方案，支持海外公司注册与收款,https://stripe.com/zh-us/atlas
,产品发布平台,Product Hunt,海外新产品发布的圣地,https://www.producthunt.com/
,,Hacker News Show,技术开发者发布小型项目的平台,https://news.ycombinator.com/show
,商业化工具,SEOBox Referring,通过Stripe平台展示每月最赚钱的Top 100产品,https://seo.box/referring/
其他工具,临时邮箱服务,Temp-mail.org,提供临时、匿名、免费的可丢弃电子邮件地址,https://temp-mail.org/
,学术研究工具,Consensus.app,科研论文AI搜索引擎,https://consensus.app/
,调研报告工具,Genspark.ai,生成结构化调研报告的AI搜索引擎,https://www.genspark.ai/
,表单工具,Typeform,交互式表单工具，支持收款功能与用户数据收集,https://www.typeform.com/`;

// 解析CSV数据
function parseCSV(csv) {
  const lines = csv.split('\n');
  const headers = lines[0].split(',');
  const result = [];
  
  let currentCategory = null;
  let currentSubcategory = null;
  
  for (let i = 1; i < lines.length; i++) {
    // 确保每行至少有基本的网站信息
    const values = lines[i].split(',');
    
    // 如果行完全为空，跳过
    if (values.length <= 2) continue;
    
    // 使用当前活动的类别或新的类别
    const category = values[0].trim() || currentCategory;
    const subcategory = values[1].trim() || currentSubcategory;
    
    // 确保有有效的网站名称和URL
    if (!values[2] || !values[4]) continue;
    
    // 更新当前活动的类别和子类别
    currentCategory = category;
    currentSubcategory = subcategory;
    
    // 创建网站数据对象
    const website = {
      name: values[2].trim(),
      description: values[3].trim(),
      url: values[4].trim()
    };
    
    // 查找或创建分类
    let categoryObj = result.find(c => c.name === category);
    if (!categoryObj) {
      categoryObj = { name: category, subcategories: [] };
      result.push(categoryObj);
    }
    
    // 查找或创建子分类
    let subcategoryObj = categoryObj.subcategories.find(s => s.name === subcategory);
    if (!subcategoryObj) {
      subcategoryObj = { name: subcategory, websites: [] };
      categoryObj.subcategories.push(subcategoryObj);
    }
    
    // 添加网站到子分类
    subcategoryObj.websites.push(website);
  }
  
  return result;
}

const navigationData = parseCSV(csvData);

// 生成图标颜色
const iconColors = [
  'bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-500', 
  'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500',
  'bg-orange-500', 'bg-cyan-500', 'bg-lime-500', 'bg-emerald-500'
];

// 为每个网站生成图标
navigationData.forEach(category => {
  category.subcategories.forEach(subcategory => {
    subcategory.websites.forEach((website, index) => {
      // 随机选择一种颜色
      const colorIndex = Math.floor(Math.random() * iconColors.length);
      website.iconColor = iconColors[colorIndex];
      // 生成图标文本（网站名称的第一个字符）
      website.iconText = website.name.charAt(0);
    });
  });
});

export default navigationData; 