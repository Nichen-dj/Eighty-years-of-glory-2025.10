// 图片轮播逻辑
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

// 切换轮播图片
function changeSlide(n) {
  showSlide(currentSlide + n);
}

// 跳转到指定图片
function goToSlide(n) {
  showSlide(n);
}

// 显示当前图片
function showSlide(n) {
  // 处理边界值（循环轮播）
  if (n < 0) currentSlide = slides.length - 1;
  else if (n >= slides.length) currentSlide = 0;
  else currentSlide = n;

  // 更新图片和指示器状态
  slides.forEach(slide => slide.classList.remove('active'));
  indicators.forEach(indicator => indicator.classList.remove('active'));
  
  slides[currentSlide].classList.add('active');
  indicators[currentSlide].classList.add('active');
}

// 自动轮播（每5秒切换一次）
setInterval(() => {
  changeSlide(1);
}, 5000);