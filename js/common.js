// 平滑滚动到指定区块
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // 避开导航栏
      behavior: 'smooth'
    });
  }
}

// 页面加载完成后初始化通用功能
document.addEventListener('DOMContentLoaded', function() {
  // 导航链接点击事件
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('href').substring(1);
      scrollToSection(sectionId);
    });
  });

  // 监听滚动，为导航栏添加阴影
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    } else {
      navbar.style.boxShadow = 'var(--shadow)';
    }
  });
});


// 返回顶部功能
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });
  
  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// 在现有初始化后调用
document.addEventListener('DOMContentLoaded', () => {
  initBackToTop();
});