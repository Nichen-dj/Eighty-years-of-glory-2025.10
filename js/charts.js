// 初始化数据可视化图表
function initCharts() {
  // 1. 战役持续时间与成果图
  const battleCtx = document.getElementById('battleChart').getContext('2d');
  new Chart(battleCtx, {
    type: 'bar',
    data: {
      labels: ['九一八事变', '七七事变', '南京保卫战', '百团大战', '湘西会战'],
      datasets: [{
        label: '持续时间（天）',
        data: [3, 38, 13, 105, 47],
        backgroundColor: 'rgba(212, 175, 55, 0.7)',
        yAxisID: 'y'
      }, {
        label: '歼敌数（万）',
        data: [0.2, 1.2, 0.5, 2.5, 1.2],
        backgroundColor: 'rgba(179, 27, 27, 0.7)',
        yAxisID: 'y1'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { type: 'linear', position: 'left', title: { display: true, text: '持续时间（天）' } },
        y1: { type: 'linear', position: 'right', title: { display: true, text: '歼敌数（万）' }, grid: { drawOnChartArea: false } }
      },
      plugins: { title: { display: true, text: '主要战役持续时间与成果' } }
    }
  });

  // 2. 伤亡统计图表
  const casualtyCtx = document.getElementById('casualtyChart').getContext('2d');
  new Chart(casualtyCtx, {
    type: 'pie',
    data: {
      labels: ['中国军队', '中国平民', '日本军队'],
      datasets: [{
        data: [380, 2000, 130],
        backgroundColor: [
          'rgba(179, 27, 27, 0.7)',
          'rgba(51, 51, 51, 0.7)',
          'rgba(212, 175, 55, 0.7)'
        ]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: { display: true, text: '抗战时期伤亡人数（单位：万）' },
        tooltip: { callbacks: { label: (ctx) => `${ctx.label}: ${ctx.raw}万` } }
      }
    }
  });

  // 3. 年份与战役数量图表
  const yearlyCtx = document.getElementById('yearlyChart').getContext('2d');
  new Chart(yearlyCtx, {
    type: 'line',
    data: {
      labels: ['1931', '1932', '1937', '1938', '1939', '1940', '1941', '1942', '1943', '1944', '1945'],
      datasets: [{
        label: '战役数量',
        data: [5, 8, 28, 42, 35, 38, 25, 20, 18, 22, 18],
        borderColor: 'rgba(179, 27, 27, 1)',
        backgroundColor: 'rgba(179, 27, 27, 0.1)',
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true, title: { display: true, text: '战役数量' } },
        x: { title: { display: true, text: '年份' } }
      },
      plugins: { title: { display: true, text: '抗战年份与战役数量' } }
    }
  });
}

// 页面加载完成后初始化图表
document.addEventListener('DOMContentLoaded', initCharts);