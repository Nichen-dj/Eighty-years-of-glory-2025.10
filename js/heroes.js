// 英雄数据
// 抗日战争英雄数据
const heroes = [
  // 原列表英雄
  {
    id: 1,
    name: "杨靖宇",
    title: "东北抗日联军总司令",
    image: "assets/images/YangJingyu.jpeg",
    quote: "我们中国人都投降了，还有中国吗？",
    description: "东北抗日联军的主要创建者和领导人，在冰天雪地、弹尽粮绝的情况下，独自与大量日寇周旋战斗数日后壮烈牺牲，时年35岁。牺牲后，日军残忍地剖开他的腹部，发现他的胃里只有枯草、树皮和棉絮，没有一粒粮食。"
  },
  {
    id: 2,
    name: "赵尚志",
    title: "东北抗日联军创建人",
    image: "assets/images/ZhaoShangzhi.webp",
    quote: "小小的满洲国，大大的赵尚志",
    description: "东北抗日联军的主要创建者和领导人之一，被誉为“北国雄狮”。他曾两次被错误开除党籍，但仍坚持抗日。1942年，在袭击鹤立县梧桐河伪警察分驻所时，被内奸打伤，昏迷后被俘，英勇就义。"
  },
  {
    id: 3,
    name: "左权",
    title: "八路军副参谋长",
    image: "assets/images/ZuoQuan.jpg",
    quote: "为民族解放事业而牺牲，是光荣的",
    description: "八路军的高级将领，黄埔一期生，曾赴苏联伏龙芝军事学院深造。他在抗战期间协助彭德怀指挥了百团大战等众多战役。1942年，在山西省辽县（今左权县）指挥部队掩护中共中央北方局和八路军总部等机关突围时，不幸被炮弹击中，壮烈殉国，是八路军在抗战中牺牲的最高级别将领。"
  },
  {
    id: 4,
    name: "赵一曼",
    title: "抗日民族英雄",
    image: "assets/images/ZhaoYiMan.jpg",
    quote: "未惜头颅新故国，甘将热血沃中华",
    description: "著名的抗日民族英雄。她曾在东北领导工人运动和抗日斗争，后任东北抗日联军第三军第二团政委。在与日军的战斗中负伤被俘，受尽酷刑，坚贞不屈。在赴刑场的火车上，她给年幼的儿子写下了感人至深的遗书。1936年8月英勇就义，年仅31岁。"
  },
  {
    id: 5,
    name: "张自忠",
    title: "国民党陆军上将",
    image: "assets/images/ZhangZiZhong.jpg",
    quote: "为国家民族死之决心，海不清，石不烂，决不半点改变",
    description: "著名抗日将领、民族英雄。在临沂战役、徐州会战、随枣会战中战功卓著。1940年在枣宜会战中，身为集团军总司令的他亲率部队渡河作战，与日军血战，身中数弹后壮烈牺牲。他是二战中同盟国牺牲的最高将领，他的牺牲举国哀悼，延安也为其举行了追悼会。"
  },
  {
    id: 6,
    name: "彭雪枫",
    title: "新四军第四师师长",
    image: "assets/images/PengXueFeng.webp",
    quote: "为民族解放事业，我愿贡献一切",
    description: "杰出的无产阶级革命家、军事家。他领导开辟了豫皖苏抗日根据地，并创建了骑兵团。1944年9月，在河南夏邑八里庄指挥作战时，不幸被流弹击中，英勇牺牲，年仅37岁。他是新四军在抗战中牺牲的最高将领之一。"
  },

  {
    id: 7,
    name: "佟麟阁",
    title: "国民革命军第29军副军长",
    image: "assets/images/TongLinge.png",
    quote: "战死者光荣，偷生者耻辱。荣辱系于一人者轻，而系于国家民族者重。",
    description: "全面抗战爆发后，在北平南苑指挥作战，是全面抗战中第一位殉国的高级将领。1937年7月28日，在指挥部队向日军反击时，腿部中弹仍坚持战斗，后不幸被敌机炸弹击中头部，壮烈牺牲。"
  },
  {
    id: 8,
    name: "赵登禹",
    title: "国民革命军第132师师长",
    image: "assets/images/ZhaoDengyu.png",
    quote: "军人抗战有死无生，卢沟桥就是我们的坟墓！",
    description: "著名抗日将领。在长城抗战中，他曾亲率“大刀队”夜袭喜峰口，重创日军，闻名全国。1937年7月28日，在北平南苑的战斗中，率部奋勇抵抗，在奉命向北平撤退途中，遭日军伏击，壮烈殉国。"
  },
  {
    id: 9,
    name: "戴安澜",
    title: "国民革命军第200师师长",
    image: "assets/images/DaiAnlan.png",
    quote: "此次远征，系唐明以来扬威国外之盛举，虽战至一兵一卒，也必死守东瓜。",
    description: "著名抗日将领，在昆仑关战役中重伤不下火线。1942年，率部作为中国远征军的先头部队赴缅甸作战，在同古保卫战中以寡敌众，歼敌五千余人，轰动世界。在撤退回国途中遭日军伏击，身负重伤，于1942年5月26日在缅甸茅邦村殉国。"
  },
  {
    id: 10,
    name: "王铭章",
    title: "国民革命军第122师师长",
    image: "assets/images/WangMingzhang.png",
    quote: "誓死坚守滕县，城存与存，城亡与亡。",
    description: "1938年徐州会战中，为保卫台儿庄的屏障——滕县，率部与装备精良的日军矶谷师团血战四天三夜，为台儿庄布防赢得了宝贵时间。在城破之际，他腹部中弹，毅然自戕，壮烈殉国。他的牺牲极大地激励了全国军民的抗战决心。"
  },
  {
    id: 11,
    name: "狼牙山五壮士",
    title: "八路军晋察冀军区英雄群体",
    image: "assets/images/LangYaShan.png",
    quote: "打倒日本帝国主义！中国共产党万岁！",
    description: "1941年，在河北易县的狼牙山战斗中，八路军晋察冀军区五位战士——马宝玉、葛振林、宋学义、胡德林、胡福才，为掩护主力部队和群众转移，将敌人引向绝路，在弹尽粮绝后，宁死不屈，毅然跳下悬崖。马宝玉、胡德林、胡福才壮烈牺牲，葛振林和宋学义被山腰树枝挂住，幸免于难。"
  },
  {
    id: 12,
    name: "成本华",
    title: "敌后抗日女民兵",
    image: "assets/images/ChengBenhua.png",
    quote: "给我拍一张，我要看着鬼子是怎么倒下的！",
    description: "安徽和县的抗日女英雄。在1938年初的和县保卫战中，她与战友们奋力抵抗日军，最终因寡不敌众被俘。日军对她进行了残酷的刑讯，但她始终坚贞不屈。就义前，她双手交叉抱在胸前，轻蔑地微笑着，让记者给她拍照，留下了那张著名的“最美抗日女兵”照片，随后壮烈牺牲，年仅24岁。"
  },
  {
    id: 13,
    name: "高志航",
    title: "中国空军“空军战神”",
    image: "assets/images/GaoZhihang.png",
    quote: "身为中国空军，怎么能让敌人的飞机飞在头上！",
    description: "中国空军的驱逐机司令兼第4航空大队大队长。1937年8月14日，他率队在杭州笕桥上空迎击日军轰炸机，击落敌机3架，首创中国空军抗战史上击落敌机的纪录，此战被称为“八一四空战”，国民政府后来将这一天定为“空军节”。1937年11月，他在周家口机场遭敌机空袭，壮烈牺牲。"
  },
  {
    id: 14,
    name: "谢晋元",
    title: "国民革命军第88师524团团长",
    image: "assets/images/XieJinyuan.png",
    quote: "余一枪一弹，亦必与敌周旋到底！",
    description: "1937年淞沪会战后期，为掩护大部队撤退，他率“八百壮士”（实际为四百余人）坚守苏州河北岸的四行仓库，孤军奋战四昼夜，击退日军数十次进攻，毙敌200余人，极大地鼓舞了全国军民的士气。后奉命撤入租界，被羁禁于“孤军营”。1941年，他被叛徒刺杀，英勇殉国。"
  },
  {
    id: 15,
    name: "诺尔曼·白求恩",
    title: "国际主义战士",
    image: "assets/images/Bethune.png",
    quote: "手术台就是阵地。",
    description: "加拿大共产党员，著名的胸外科医师。他不远万里来到中国，在晋察冀边区为八路军提供医疗服务。他创办了模范医院，培训了大批医务干部，极大地提高了八路军的医疗水平。1939年11月，因在手术中感染败血症，不幸在河北唐县逝世。毛泽东撰写了《纪念白求恩》一文，高度赞扬了他的国际主义精神。"
  }
];


// 轮播配置
let currentSlide = 0;
const slidesPerPage = 5;

// 渲染英雄卡片
function renderHeroes() {
  const carousel = document.getElementById('heroesCarousel');
  carousel.innerHTML = '';

  // 计算总页数
  const totalSlides = Math.ceil(heroes.length / slidesPerPage);

  // 生成每页幻灯片
  for (let i = 0; i < totalSlides; i++) {
    const slide = document.createElement('div');
    slide.className = 'hero-slide';
    slide.dataset.index = i;

    // 每页显示的英雄
    const start = i * slidesPerPage;
    const end = start + slidesPerPage;
    const pageHeroes = heroes.slice(start, end);

    // 生成英雄卡片
    pageHeroes.forEach(hero => {
      const card = document.createElement('div');
      card.className = 'hero-card';
      card.innerHTML = `
        <img src="${hero.image}" alt="${hero.name}" class="hero-img">
        <div class="hero-info">
          <h3>${hero.name}</h3>
          <p>${hero.title}</p>
          <p class="hero-quote">"${hero.quote}"</p>
        </div>
      `;
      slide.appendChild(card);
    });

    carousel.appendChild(slide);
  }

  // 更新轮播位置
  updateCarouselPosition();
}

// 更新轮播位置
function updateCarouselPosition() {
  const slides = document.querySelectorAll('.hero-slide');
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
  });
}

// 轮播控制
function nextSlide() {
  const totalSlides = Math.ceil(heroes.length / slidesPerPage);
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateCarouselPosition();
  } else {
    // 最后一页时跳回第一页
    currentSlide = 0;
    updateCarouselPosition();
  }
}

function prevSlide() {
  const totalSlides = Math.ceil(heroes.length / slidesPerPage);
  if (currentSlide > 0) {
    currentSlide--;
    updateCarouselPosition();
  } else {
    // 第一页时跳至最后一页
    currentSlide = totalSlides - 1;
    updateCarouselPosition();
  }
}

// 自动轮播相关变量
let carouselInterval;
const AUTO_ROTATE_DELAY = 5000; // 每5秒切换一次

// 启动自动轮播
function startAutoCarousel() {
  // 清除已有的定时器（如果存在）
  if (carouselInterval) {
    clearInterval(carouselInterval);
  }
  
  // 设置新的定时器
  carouselInterval = setInterval(() => {
    nextSlide(); // 直接调用下一页函数，已包含循环逻辑
  }, AUTO_ROTATE_DELAY);
}

// 暂停自动轮播
function pauseAutoCarousel() {
  if (carouselInterval) {
    clearInterval(carouselInterval);
  }
}

// 生成和平愿景区的英雄点阵
function initPeaceDots() {
  const grid = document.getElementById('achievementGrid');
  if (!grid) return;

  // 生成100个英雄头像点
  for (let i = 0; i < 100; i++) {
    const dot = document.createElement('div');
    dot.className = 'hero-dot';
    const randomHero = heroes[Math.floor(Math.random() * heroes.length)];
    dot.style.backgroundImage = `url(${randomHero.image})`;
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    dot.style.opacity = '0.3';
    grid.appendChild(dot);
  }

  // 绑定揭晓按钮事件
  document.getElementById('unveilBtn').addEventListener('click', unveilAchievement);
}

// 揭晓成就动画
function unveilAchievement() {
  const dots = document.querySelectorAll('.hero-dot');
  const overlay = document.getElementById('achievementOverlay');
  
  // 成就数据
  const achievements = [
    { icon: '🚄', text: '高铁纵横' },
    { icon: '🛰️', text: '航天强国' },
    { icon: '🏭', text: '工业崛起' },
    { icon: '🌱', text: '绿水青山' },
    { icon: '📚', text: '教育普及' }
  ];
  const randomAchievement = achievements[Math.floor(Math.random() * achievements.length)];

  // 光点汇聚动画
  dots.forEach((dot, index) => {
    const centerX = 50;
    const centerY = 50;
    const angle = (index / dots.length) * Math.PI * 2;
    const radius = 20 + Math.sin(index * 0.5) * 10;
    
    const targetX = centerX + Math.cos(angle) * radius;
    const targetY = centerY + Math.sin(angle) * radius;
    
    dot.style.left = `${targetX}%`;
    dot.style.top = `${targetY}%`;
    dot.style.opacity = '1';
    dot.style.transform = 'scale(1.2)';
  });

  // 显示成就文字
  setTimeout(() => {
    overlay.innerHTML = `
      <div class="achievement-text">
        <div class="achievement-icon">${randomAchievement.icon}</div>
        <div class="achievement-name">${randomAchievement.text}</div>
      </div>
    `;
    overlay.style.opacity = '1';
  }, 1500);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  // 渲染英雄卡片
  renderHeroes();
  
  // 初始化和平愿景区点阵
  initPeaceDots();
  
  // 绑定轮播控制按钮事件
  document.getElementById('prevHero').addEventListener('click', () => {
    prevSlide();
    startAutoCarousel(); // 点击后重启定时器
  });
  
  document.getElementById('nextHero').addEventListener('click', () => {
    nextSlide();
    startAutoCarousel(); // 点击后重启定时器
  });
  
  // 获取轮播容器并添加鼠标事件监听
  const carouselContainer = document.getElementById('heroesCarousel');
  if (carouselContainer) {
    // 鼠标悬停时暂停
    carouselContainer.addEventListener('mouseenter', pauseAutoCarousel);
    // 鼠标离开时恢复自动轮播
    carouselContainer.addEventListener('mouseleave', startAutoCarousel);
  }
  
  // 启动自动轮播
  startAutoCarousel();
});