// 战役数据 - 扩展更多抗日战争重大事件
const battles = [
  // 局部抗战阶段（1931-1937）
  {
    id: 1,
    year: 1931,
    month: 9,
    day: 18,
    title: "九一八事变",
    description: "日本关东军炸毁沈阳柳条湖附近铁路并嫁祸中国军队，突袭沈阳，侵占中国东北。国民政府采取\"不抵抗政策\"，东北迅速沦陷。",
    stats: {
      chineseTroops: 15,
      chineseCasualties: 1.5,
      japaneseTroops: 2,
      japaneseCasualties: 0.2
    }
  },
  {
    id: 2,
    year: 1932,
    month: 1,
    day: 28,
    title: "一·二八事变",
    description: "日军进攻上海，国民革命军第十九路军奋起抵抗，持续一个多月。",
    stats: {
      chineseTroops: 30,
      chineseCasualties: 8,
      japaneseTroops: 9,
      japaneseCasualties: 2.5
    }
  },
  {
    id: 3,
    year: 1932,
    month: 3,
    day: 1,
    title: "伪满洲国成立",
    description: "日本扶植溥仪建立傀儡政权\"满洲国\"，企图合法化对东北的统治。",
    stats: null
  },
  {
    id: 4,
    year: 1933,
    title: "长城抗战",
    description: "日军进犯山海关、热河，中国军队在喜峰口、古北口等地顽强阻击。",
    stats: {
      chineseTroops: 50,
      chineseCasualties: 5,
      japaneseTroops: 10,
      japaneseCasualties: 2
    }
  },
  {
    id: 5,
    year: 1935,
    title: "华北事变",
    description: "日本策动\"华北自治运动\"，企图分裂华北，民族危机加剧。",
    stats: null
  },
  {
    id: 6,
    year: 1936,
    month: 12,
    day: 12,
    title: "西安事变",
    description: "张学良、杨虎城发动兵谏，迫使蒋介石停止内战、一致抗日，促成国共第二次合作。",
    stats: null
  },
  
  // 全面抗战爆发与战略防御（1937-1938）
  {
    id: 7,
    year: 1937,
    month: 7,
    day: 7,
    title: "卢沟桥事变",
    description: "日军在北平附近演习时借口士兵失踪，进攻宛平城，全面抗战爆发。",
    stats: {
      chineseTroops: 29,
      chineseCasualties: 5,
      japaneseTroops: 5,
      japaneseCasualties: 1.2
    }
  },
  {
    id: 8,
    year: 1937,
    month: 8,
    day: 13,
    title: "淞沪会战",
    description: "中日双方投入百万兵力，激战三个月，粉碎日本\"三个月灭亡中国\"的企图。",
    stats: {
      chineseTroops: 80,
      chineseCasualties: 30,
      japaneseTroops: 30,
      japaneseCasualties: 9
    }
  },
  {
    id: 9,
    year: 1937,
    month: 8,
    day: 22,
    title: "红军改编",
    description: "陕北红军主力改编为国民革命军第八路军（八路军），南方游击队改编为新四军。",
    stats: null
  },
  {
    id: 10,
    year: 1937,
    month: 12,
    day: 13,
    title: "南京大屠杀",
    description: "日军攻占南京后实施长达六周的大屠杀，超过30万平民遇难。",
    stats: {
      chineseTroops: 10,
      chineseCasualties: 30,
      japaneseTroops: 5,
      japaneseCasualties: 0.5
    }
  },
  {
    id: 11,
    year: 1938,
    month: 3,
    day: 24,
    title: "台儿庄大捷",
    description: "中国军队在山东台儿庄歼灭日军万余人，取得正面战场首次重大胜利。",
    stats: {
      chineseTroops: 29,
      chineseCasualties: 5,
      japaneseTroops: 5,
      japaneseCasualties: 1.2
    }
  },
  {
    id: 12,
    year: 1938,
    month: 6,
    day: 1,
    title: "武汉会战",
    description: "抗战中规模最大的战役，战后抗日战争进入战略相持阶段。",
    stats: {
      chineseTroops: 100,
      chineseCasualties: 40,
      japaneseTroops: 50,
      japaneseCasualties: 25
    }
  },
  
  // 战略相持阶段（1939-1944）
  {
    id: 13,
    year: 1939,
    month: 9,
    day: 1,
    title: "第一次长沙会战",
    description: "日军进攻长沙被击退，稳定了华中战局。",
    stats: {
      chineseTroops: 24,
      chineseCasualties: 4,
      japaneseTroops: 10,
      japaneseCasualties: 3
    }
  },
  {
    id: 14,
    year: 1940,
    month: 8,
    day: 20,
    title: "百团大战",
    description: "八路军在华北发动大规模破袭战，重击日军交通线。",
    stats: {
      chineseTroops: 40,
      chineseCasualties: 17,
      japaneseTroops: 20,
      japaneseCasualties: 2.5
    }
  },
  {
    id: 15,
    year: 1941,
    month: 1,
    day: 4,
    title: "皖南事变",
    description: "国民党军队围攻新四军，加剧国共摩擦。",
    stats: null
  },
  {
    id: 16,
    year: 1941,
    month: 12,
    day: 7,
    title: "太平洋战争爆发",
    description: "日本偷袭珍珠港，中国对日、德、意正式宣战，成为反法西斯同盟国。",
    stats: null
  },
  {
    id: 17,
    year: 1942,
    title: "中国远征军入缅作战",
    description: "为保卫滇缅公路，中国军队赴缅甸与盟军协同对日作战。",
    stats: {
      chineseTroops: 40,
      chineseCasualties: 20,
      japaneseTroops: 30,
      japaneseCasualties: 15
    }
  },
  {
    id: 18,
    year: 1943,
    month: 11,
    day: 22,
    title: "开罗会议",
    description: "蒋介石与罗斯福、丘吉尔会谈，明确战后日本需归还侵占的中国领土。",
    stats: null
  },
  
  // 战略反攻与胜利（1945）
  {
    id: 19,
    year: 1945,
    month: 4,
    day: 23,
    title: "中共七大召开",
    description: "毛泽东提出\"放手发动群众，壮大人民力量\"，准备对日全面反攻。",
    stats: null
  },
  {
    id: 20,
    year: 1945,
    month: 8,
    day: 6,
    title: "美国投掷原子弹（广岛）",
    description: "广岛遭原子弹轰炸，加速日本溃败。",
    stats: null
  },
  {
    id: 21,
    year: 1945,
    month: 8,
    day: 9,
    title: "美国投掷原子弹（长崎）与苏联对日宣战",
    description: "长崎遭原子弹轰炸；苏联红军出兵中国东北，歼灭关东军。",
    stats: null
  },
  {
    id: 22,
    year: 1945,
    month: 8,
    day: 15,
    title: "日本无条件投降",
    description: "日本天皇发布《终战诏书》，正式宣布投降。",
    stats: null
  },
  {
    id: 23,
    year: 1945,
    month: 9,
    day: 2,
    title: "日本签署投降书",
    description: "在东京湾美军密苏里号战舰上举行投降仪式，抗日战争暨世界反法西斯战争胜利结束。",
    stats: null
  },
  {
    id: 24,
    year: 1945,
    month: 9,
    day: 9,
    title: "中国战区受降仪式",
    description: "在南京举行，日本中国派遣军总司令冈村宁次向中国政府投降。",
    stats: null
  }
];

// 生成时间轴
function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  container.innerHTML = '';

  battles.forEach((battle, index) => {
    const isLeft = index % 2 === 0;
    const timelineItem = document.createElement('div');
    timelineItem.className = `timeline-item ${isLeft ? 'left' : 'right'}`;
    timelineItem.dataset.id = battle.id;

    // 构建统计数据HTML
    let statsHtml = '';
    if (battle.stats) {
      statsHtml = `
        <button class="stats-btn" onclick="toggleStats(${battle.id})">
          查看战役数据
        </button>
        <div class="stats-content" id="stats-${battle.id}" style="display:none;">
          <canvas id="chart-${battle.id}"></canvas>
        </div>
      `;
    }

    timelineItem.innerHTML = `
      <div class="timeline-content">
        <h3>${battle.year} · ${battle.title}</h3>
        <p>${battle.description}</p>
        ${statsHtml}
      </div>
    `;

    container.appendChild(timelineItem);
  });

  // 初始化时间轴动画
  initTimelineAnimation();
}

// 时间轴滚动动画
function initTimelineAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
  });
}

// 切换统计数据显示
function toggleStats(battleId) {
  const statsContent = document.getElementById(`stats-${battleId}`);
  if (statsContent.style.display === 'none') {
    statsContent.style.display = 'block';
    initBattleChart(battleId); // 初始化图表
  } else {
    statsContent.style.display = 'none';
  }
}

// 初始化战役数据图表
function initBattleChart(battleId) {
  const battle = battles.find(b => b.id === battleId);
  if (!battle) return;

  const ctx = document.getElementById(`chart-${battleId}`).getContext('2d');
  
  if (battle.year === 1945) {
    // 总伤亡统计（饼图）
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['中国军民伤亡（万）', '日本伤亡（万）'],
        datasets: [{
          data: [
            battle.stats.totalChineseCasualties,
            battle.stats.totalJapaneseCasualties
          ],
          backgroundColor: [
            'rgba(179, 27, 27, 0.8)',
            'rgba(51, 51, 51, 0.8)'
          ]
        }]
      },
      options: { responsive: true }
    });
  } else {
    // 战役兵力对比（柱状图）
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['参战兵力（万）', '伤亡人数（万）'],
        datasets: [{
          label: '中国军队',
          data: [battle.stats.chineseTroops, battle.stats.chineseCasualties],
          backgroundColor: 'rgba(179, 27, 27, 0.7)'
        }, {
          label: '日本军队',
          data: [battle.stats.japaneseTroops, battle.stats.japaneseCasualties],
          backgroundColor: 'rgba(51, 51, 51, 0.7)'
        }]
      },
      options: { responsive: true }
    });
  }
}

// 页面加载时渲染时间轴
document.addEventListener('DOMContentLoaded', renderTimeline);


// 搜索历史事件
function searchTimeline() {
  const searchTerm = document.getElementById('timelineSearch').value.toLowerCase();
  const items = document.querySelectorAll('.timeline-item');
  
  items.forEach(item => {
    const content = item.textContent.toLowerCase();
    const isMatch = content.includes(searchTerm);
    
    item.style.display = isMatch ? '' : 'none';
    
    // 如果是匹配项且未显示，则触发动画
    if (isMatch && !item.classList.contains('visible')) {
      item.classList.add('visible');
    }
  });
}

// 重置搜索结果
function resetTimeline() {
  document.getElementById('timelineSearch').value = '';
  const items = document.querySelectorAll('.timeline-item');
  items.forEach(item => {
    item.style.display = '';
  });
  // 重新初始化动画观察器
  initTimelineAnimation();
}