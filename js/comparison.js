// 初始化图片对比滑块
function initImageComparisons() {
  const sliders = document.querySelectorAll('.image-comparison-slider');
  
  sliders.forEach(slider => {
    const before = slider.querySelector('.comparison-before');
    const after = slider.querySelector('.comparison-after');
    const sliderBtn = slider.querySelector('.comparison-slider');
    
    // 设置图片
    before.style.backgroundImage = `url(${slider.dataset.before})`;
    after.style.backgroundImage = `url(${slider.dataset.after})`;
    
    // 鼠标/触摸事件
    let isDragging = false;
    
    // 处理滑动
    function handleSlide(e) {
      if (!isDragging) return;
      
      let clientX;
      // 处理触摸和鼠标事件
      if (e.type.includes('touch')) {
        clientX = e.touches[0].clientX;
      } else {
        clientX = e.clientX;
      }
      
      // 计算相对位置
      const rect = slider.getBoundingClientRect();
      let position = (clientX - rect.left) / rect.width;
      
      // 限制在0-1范围内
      position = Math.max(0, Math.min(position, 1));
      
      // 更新位置
      const percentage = position * 100;
      before.style.width = `${percentage}%`;
      sliderBtn.style.left = `${percentage}%`;
    }
    
    // 事件监听
    sliderBtn.addEventListener('mousedown', () => isDragging = true);
    sliderBtn.addEventListener('touchstart', () => isDragging = true);
    
    window.addEventListener('mousemove', handleSlide);
    window.addEventListener('touchmove', handleSlide);
    
    window.addEventListener('mouseup', () => isDragging = false);
    window.addEventListener('touchend', () => isDragging = false);
  });
}

// 初始化对比图表
function initComparisonCharts() {
  // 1. GDP对比图表
  const gdpCtx = document.getElementById('gdpChart').getContext('2d');
  new Chart(gdpCtx, {
    type: 'bar',
    data: {
      labels: ['1945年', '1978年', '2000年', '2010年', '2023年'],
      datasets: [{
        label: 'GDP(万亿元)',
        data: [0.06, 0.37, 1.21, 4.13, 126.06],
        backgroundColor: 'rgba(179, 27, 27, 0.7)',
        borderColor: 'rgba(179, 27, 27, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true, title: { display: true, text: 'GDP(万亿元)' } }
      },
      plugins: { title: { display: true, text: '中国GDP增长对比' } }
    }
  });
  
  // 2. 军事力量对比图表
  const militaryCtx = document.getElementById('militaryChart').getContext('2d');
  new Chart(militaryCtx, {
    type: 'radar',
    data: {
      labels: ['陆军', '海军', '空军', '导弹力量', '信息化水平'],
      datasets: [{
        label: '1945年',
        data: [60, 10, 5, 0, 0],
        backgroundColor: 'rgba(179, 27, 27, 0.2)',
        borderColor: 'rgba(179, 27, 27, 0.8)',
      }, {
        label: '2025年',
        data: [90, 85, 90, 95, 90],
        backgroundColor: 'rgba(212, 175, 55, 0.2)',
        borderColor: 'rgba(212, 175, 55, 0.8)',
      }]
    },
    options: {
      responsive: true,
      plugins: { title: { display: true, text: '军事力量对比 (0-100分)' } }
    }
  });
  
  // 3. 国际影响力对比图表
  const internationalCtx = document.getElementById('internationalChart').getContext('2d');
  new Chart(internationalCtx, {
    type: 'line',
    data: {
      labels: ['1945', '1955', '1975', '1995', '2015', '2025'],
      datasets: [{
        label: '国际影响力指数',
        data: [30, 40, 50, 65, 80, 90],
        fill: true,
        backgroundColor: 'rgba(179, 27, 27, 0.1)',
        borderColor: 'rgba(179, 27, 27, 1)',
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { min: 0, max: 100, title: { display: true, text: '影响力指数' } },
        x: { title: { display: true, text: '年份' } }
      },
      plugins: { title: { display: true, text: '中国国际影响力变化' } }
    }
  });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  // 初始化返回顶部按钮
  initBackToTop();
  
  // 初始化图片对比
  initImageComparisons();
  
  // 初始化对比图表
  initComparisonCharts();
  
  // 初始化滚动动画
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.section > div:not(.section-title)').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(item);
  });
  
  // 监听可见性变化，添加动画
  document.addEventListener('visibilitychange', (e) => {
    if (!document.hidden) {
      document.querySelectorAll('.visible').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    }
  });
});


// 平滑滚动到指定区块
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    });
  }
}

// 在 DOMContentLoaded 事件中添加导航点击事件
document.addEventListener('DOMContentLoaded', () => {
  // 现有代码...
  
  // 添加导航点击事件
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      // 如果是内部锚点链接
      if (href.startsWith('#')) {
        e.preventDefault();
        scrollToSection(href.substring(1));
      }
      // 外部页面链接让其正常跳转
    });
  });
});


// 图片对比区轮播功能
function initComparisonSlideshows() {
  const comparisons = document.querySelectorAll('.image-comparison-slider');
  
  comparisons.forEach(comparison => {
    const beforeSlides = comparison.querySelectorAll('.before-slideshow .slide');
    const afterSlides = comparison.querySelectorAll('.after-slideshow .slide');
    
    let beforeCurrent = 0;
    let afterCurrent = Math.floor(beforeSlides.length / 2); // 岔开半轮
    
    // 初始化显示
    beforeSlides[beforeCurrent].classList.add('active');
    afterSlides[afterCurrent].classList.add('active');
    
    // 自动轮播
    setInterval(() => {
      // 更新左侧图片
      beforeSlides[beforeCurrent].classList.remove('active');
      beforeCurrent = (beforeCurrent + 1) % beforeSlides.length;
      beforeSlides[beforeCurrent].classList.add('active');
      
      // 更新右侧图片（岔开半轮）
      afterSlides[afterCurrent].classList.remove('active');
      afterCurrent = (afterCurrent + 1) % afterSlides.length;
      afterSlides[afterCurrent].classList.add('active');
    }, 3000); // 每3秒切换一次
  });
}

// 成就区轮播功能
function initAchievementSlideshows() {
  const achievements = document.querySelectorAll('.achievement-slideshow');
  
  achievements.forEach(slideshow => {
    const slides = slideshow.querySelectorAll('.achievement-slide');
    let current = 0;
    
    // 初始化显示
    slides[current].classList.add('active');
    
    // 自动轮播
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 2500); // 每2.5秒切换一次
  });
}

// 在DOMContentLoaded事件中初始化轮播
document.addEventListener('DOMContentLoaded', () => {
  // 现有初始化代码...
  
  // 初始化图片对比轮播
  initComparisonSlideshows();
  
  // 初始化成就区轮播
  initAchievementSlideshows();
});

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
  // 获取所有导航链接
  const navLinks = document.querySelectorAll('.nav-links a');
  
  // 为每个链接添加点击事件
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // 阻止默认跳转行为
      e.preventDefault();
      
      // 获取目标区域的ID（从href中提取，如"#keywords" -> "keywords"）
      const targetId = this.getAttribute('href').substring(1);
      // 找到目标区域元素
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // 平滑滚动到目标区域（距离顶部100px，避免被导航栏遮挡）
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
        
        // 可选：添加导航选中状态（需要配合CSS）
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });
});