window.addEventListener("scroll", () => {
  const scrollPosition = window.pageYOffset;
  const background = document.querySelector(".parallax-background");

  // Регулируйте коэффициент для желаемого эффекта
  const rate = 0.5;
  background.style.transform = `translateY(${scrollPosition * rate}px)`;
});

const menuData = {
  breakfasts: [
    { name: "Сырники со сметаной и сезонными ягодами", weight: "", price: 490 },
    {
      name: "Блинчики с творожным муссом и домашним вареньем",
      weight: "",
      price: 320,
    },
    { name: "Панкейки с ягодами и кленовым сиропом", weight: "", price: 590 },
    { name: "Каша на воде/молоке рисовая", weight: "", price: 320 },
    {
      name: "Наполнители 50 г: сгущенное молоко/банан, яблоко/варенье домашнее/кленовый сироп",
      weight: "",
      price: 50,
    },
    { name: "Каша пшенная с томленой грушей", weight: "", price: 480 },
    { name: "Яичница/омлет", weight: "", price: 300 },
    { name: "Наполнители 50 г: бекон/томат/сыр", weight: "", price: 100 },
    {
      name: "Омлет с пармской ветчиной, томатами / с цукини, молодым козьим сыром",
      weight: "",
      price: 680,
    },
    { name: "Чирбули (яичница по-грузински)", weight: "", price: 490 },
    {
      name: "Яйцо пашот, лосось с драниками из цукини",
      weight: "",
      price: 990,
    },
    {
      name: "Бриошь с мясом краба, яйцом пашот и соусом голландез",
      weight: "",
      price: 950,
    },
    { name: "Круассан с лососем и гуакамоле", weight: "", price: 750 },
    { name: "Круассан классический", weight: "", price: 230 },
  ],
  appetizers: [
    { name: "Ассорти донской вяленой рыбы", weight: "350 г", price: 950 },
    { name: "Бутеры с мойвой", weight: "90 г", price: 300 },
    { name: "Брускетта с лососем и рикоттой", weight: "160 г", price: 780 },
    {
      name: "Брускетта с креветками конфи, авокадо и острым манго",
      weight: "140 г",
      price: 750,
    },
    {
      name: "Паштет из мидий с хрустящими гренками",
      weight: "180 г",
      price: 560,
    },
    { name: "Семга слабосоленая", weight: "100 г", price: 950 },
    { name: "Татаки из тунца", weight: "220 г", price: 1300 },
    {
      name: "Винный сет",
      weight: "270 г",
      description: "хумус из тыквы с креветками, паштет из мидий, овощная сальса",
      price: 1100,
    },
    {
      name: "Сет закусок под водку",
      weight: "580 г",
      price: 1000, description: "сельдь, скумбрия, сало, картофель, лук, перец чили, лимон, отварное яйцо"
    },
    { name: "Чебуреки мини с креветками", weight: "310 г", price: 750 },
    { name: "Ассорти сезонных овощей", weight: "270 г", price: 620 },
    { name: "Ассорти местных сыров", weight: "270 г", price: 590 },
    { name: "Ассорти европейских сыров", weight: "190 г", price: 1300 },
    { name: "Ассорти мясных деликатесов", weight: "120 г", price: 1100 },
    {
      name: "Камамбер жареный с брусничным вареньем",
      weight: "170 г",
      price: 920,
    },
    { name: "Брускетта с пармой", weight: "220 г", price: 520 },
    {
      name: "Паштет из печени цыпленка с апельсиновым чатни",
      weight: "220 г",
      price: 720,
    },
    {
      name: "Тар-тар из говядины с соусом бернэ и тостом из круассана",
      weight: "210 г",
      price: 850,
    },
    { name: "Рваная буррата с тунцом", weight: "190 г", price: 950 },
    { name: "Антипасти из маслин", weight: "100 г", price: 750 },
  ],
  saladsAndWarmSalads: [
    {
      name: "Карпаччо из печеной свеклы с творожным сыром и черничным конфи",
      weight: "290 г",
      price: 400,
    },
    {
      name: "Салат с хрустящими баклажанами в кисло-сладком соусе",
      weight: "190 г",
      price: 480,
    },
    { name: "Салат греческий", weight: "250 г", price: 620 },
    { name: "Салат Цезарь с индейкой", weight: "230 г", price: 650 },
    { name: "Салат Цезарь с креветками", weight: "210 г", price: 820 },
    { name: "Стейк-романо с авокадо и ростбифом", weight: "240 г", price: 990 },
    {
      name: "Салат с кальмаром и молодым картофелем",
      weight: "195 г",
      price: 620,
    },
    { name: "Салат с креветками и бататом", weight: "280 г", price: 920 },
    { name: "Теплый салат с морепродуктами", weight: "280 г", price: 920 },
  ],
  seafoodAndOysters: [
    { name: "Устрица Муроцу", weight: "1 шт", price: 900 },
    { name: "Устрица российская", weight: "1 шт", price: 500 },
    { name: "Устрицы заморские", weight: "1 шт", price: "750" }, 
    { name: "Морской ёж", weight: "1 шт", price: 580 },
    { name: "Спизула", weight: "1 шт", price: 880 },
    { name: "Камчатский краб", weight: "100 г", price: 950 },
    { name: "Лобстер", weight: "100 г", price: 2100 },
    {
      name: "Морской гребешок стандарт/гигант",
      weight: "100/160",
      price: "600 | 1200",  description: "наличие уточняйте у Вашего официанта"
    },
    {
      name: "Анадара - Моллюск с кровеносной системой ",
      weight: "1 шт",
      price: "880",
    }
  
  ],
  shrimpAndOysters: [
    {
      name: "Магаданские креветки на льду",
      weight: "100 г",
      description: "заказ от 300 г",
      price: 600,
    },
    {
      name: "Креветки тигровые в пряном соусе, подаются на сковороде",
      weight: "170 г",
      price: 850,
    },
       {
      name: "Рапаны в сливочном соусе с грибами",
      weight: "220",
      price: 820,
    },
       {
      name: "Осьминоги мини с водорослями чука",
      weight: "210",
      price: 1750,
    },
    { name: "Креветки темпура с крем чиз и нори", weight: "180 г", price: 850 },
    {
      name: "Устрица запечённая с кремом из шпината и голубого сыра",
      weight: "1 шт",
      price: 650,
    },
  ],

  soups: [
    {
      name: "Буйабес с соусом руй и пшеничными тостами",
      weight: "350 г",
      price: 1300,
    },
    { name: "Том-Ям", weight: "400 г", price: 1200 },
    { name: "Кукурузный крем-суп с креветкой", weight: "350 г", price: 720 },
    { name: "Крем-суп с лесными грибами", weight: "310 г", price: 550 },
  ],
  dishesSortedByPriceDesc: [
    {
      name: "Ризотто ди маре",
      weight: "250 г",
      price: 1100,
    },
    {
      name: "Паста Нери с морепродуктами в сливочном соусе",
      weight: "310 г",
      price: 1100,
    },
    {
      name: "Папарделле с тигровыми креветками",
      weight: "280 г",
      price: 1100,
    },
    {
      name: "Паста каламарата с крабом",
      weight: "350 г",
      price: 850,
    },
    {
      name: "Паста карбонара",
      weight: "270 г",
      price: 700,
    },
  ],
  localMenu: [
    {
      price: 460,
      weight: "360 г",
      name: "Окрошка с индейкой на квасе / на кефире с мацони и мятой",
    },
    { price: 900, weight: "380 г", name: "Бефстроганов с картофельным пюре" },
    {
      price: 790,
      weight: "350 г",
      name: "Котлеты из щуки с булгуром и соусом из белых грибов ",
    
    },
    {
      price: 780,
      weight: "300 г",
      name: "Донская уха с белорыбицей и овощами",  description: "(готовится на уличном мангале, уточняйте у официанта)"
    },
    { price: 700, weight: "350 г", name: "Борщ с салом и зеленью" },
    { price: 890, weight: "210 г", name: "Оливье с лососем" },
    { price: 650, weight: "420 г", name: "Домашние соленья" },
    {
      price: 620,
      weight: "440 г",
      name: "Домашнее сало со сливочным хреном и чесночными гренками",
    },
    {
      price: 520,
      weight: "230 г",
      name: "Домашнее сало со сливочным хреном и чесночными гренками",
    },
    { price: 280, weight: "150 г", name: "Картофель жареный с луком" },
  ],
  seafoodMenu: [
    {
      price: 1290,
      weight: "300 г",
      name: "Осетр с соусом цитрусовый берблан",
      note: "заказ от 300 грамм",
    },
    { price: 2800, weight: "370 г", name: "Осьминог с мини картофелем" },
    {
      price: 1690,
      weight: "380 г",
      name: "Стейк из палтуса с йогуртовым соусом",
    },
    { price: 2500, weight: "800 г", name: "Паэлья с морепродуктами" },
    {
      price: 920,
      weight: "220 г",
      name: "Кальмар на гриле с запеченным бататом",
    },
    { price: 1750, weight: "310 г", name: "Говяжьи щечки с пюре из батата" },
    {
      price: 2100,
      weight: "100 г",
      name: "Фаланги камчатского краба с соусом на выбор",
      note: "из черного перца/чесночный",
    },
    {
      price: 100,
      weight: "50 г",
      name: "из черного перца/чесночный",
      note: "",
    },
    { price: 2100, weight: "790 г", name: "Ассорти морепродуктов", description: "тушки кальмара, осьминог с соусом терияки, креветки 8/12, мясо камчатского краба, тунец обжаренный в перечной панировке" },
    { price: 2850, weight: "1000 г", name: "Мидии в соусе Дор-блю" },
    { price: 2850, weight: "1000 г", name: "Мидии в соусе Бер блан" },
    { price: 2850, weight: "1000 г", name: "Мидии в соусе Том-Ям" },

    {
      price: 2900,
      weight: "700 г",
      name: "Черноморский сет ",
      description: "cтаврида, барабуля, сарган",
    },
    {
      price: 690,
      weight: "100 г",
      name: "Барабуля жареная",
      description: "заказ от 300 грамм",
    },
    {
      price: 1400,
      weight: 270,
      name: "Утиная ножка в апельсиновой глазури с яблочным пюре",
    },
  ],
  meatMenu: [
    { price: 500, weight: "400 г", name: "Мозговые косточки со специями" },
    {
      price: 450,
      weight: "100 г",
      name: "Свиные рёбра с соусом барбекю и салатом коул-слоу",
    },
    { price: 2200, weight: "250 г", name: "Стейк Мясника" },
    { price: 1500, weight: "100 г", name: "Стейк Рибай" },
    { price: 1200, weight: "100 г", name: "Креветки тигровые 8/12" },
    { price: 470, weight: "100 г", name: "Тушки кальмаров" },
    { price: 1200, weight: "100 г", name: "Стейк из камбалы" },
    { price: 1200, weight: "100 г", name: "Стейк из лосося" },
    { price: 720, weight: "100 г", name: "Стейк из тунца" },
    { price: 490, weight: "100 г", name: "Сибас" },
    { price: 470, weight: "100 г", name: "Дорада" },
    { price: 390, weight: "100 г", name: "Форель" },
  ],
   grillMenu: [
    { price: 380, weight:"100 г" , name: "Люля кебаб из курицы" },
    { price: 620, weight:"100 г" , name: "Люля кебаб из барарнины" },
    { price: 380, weight:"100 г" , name: "Шашлык из куриного бедра" },
    { price: 450, weight:"100 г" , name: "Шашлык из свинины" }, 
    { price: 1200, weight:"100 г" , name: "Каре баранины" },
        { price: 960, weight: "500 г", name: "Цыпленок Тапака" },
            { price: 220, weight:"100 г" , name: "Овощи на гриле ", description: "баклажан, болгарский перец, чили, томат, шампиньоны" },
                { price: 150, weight:"100 г" , name: "Картофель с салом" },
  ],

  menuChildrens: [
    { price: 470, weight: null, name: "Куриные наггетсы с сырным соусом" },
    { price: 370, weight: null, name: "Суп с фрикадельками" },
    { price: 320, weight: null, name: "Картофель фри" },
    { price: 480, weight: null, name: "Пельмени с говядиной и свининой" },
    { price: 490, weight: null, name: "Машкины котлетки" },
  ],

  menuBread: [
    {
      name: "Овощной рататуй",
      price: 380,
      weight: "150 г ",
      description: "",
    },
    {
      name: "Ананас на углях с какао и острым чили",
      price: 600,
      weight: "170 г",
      description: "",
    },
    {
      name: "Картофель черри запеченный с розмарином",
      price: 350,
      weight: "150 г",
      description: "",
    },
    {
      name: "Картофельное пюре",
      price: 320,
      weight: "150 г",
      description: "",
    },
    {
      name: "Жареные кабачки с чесноком и укропом",
      price: 350,
      weight: "120 г",
      description: "",
    },
  ],
  menuBreads: [
    {
      name: "Хлебная корзина (ассорти)",
      price: 290,
      weight: "170 г",
      description: "",
    },
  ],
  menuSouse: [
    {
      name: "Дор-блю",
      weight: "50 г",
      price: 190,
      description: "",
    },
    {
      name: "Кетчуп домашний",
      weight: "50 г",
      price: 100,
      description: "",
    },
    {
      name: "Розе (сливочный)",
      weight: "50 г",
      price: 190,
      description: "",
    },
    {
      name: "Барбекю",
      weight: "50 г",
      price: 150,
      description: "",
    },
    {
      name: "Сливочно-перечный",
      weight: "50 г",
      price: 190,
      description: "",
    },
    {
      name: "Демигляc",
      weight: "50 г",
      price: 100,
      description: "",
    },
  ],
  menuDesert: [
    {
      name: "Шоколадный брауни",
      weight: "",
      price: 650,
    },
    {
      name: "Баноффи с грушей",
      weight: "",
      price: 650,
    },
    {
      name: "Панна котта экзотик чиа",
      weight: "",
      price: 550,
    },
    {
      name: "Синьор Помидор",
      weight: "",
      price: 550,
    },
    {
      name: "Чизкейк",
      weight: "",
      price: 480,
    },
    {
      name: "Медовик шоколадный",
      weight: "",
      price: 470,
    },
    {
      name: "Павлова",
      weight: "",
      price: 400,
    },

    {
      name: "Наполеон",
      weight: "",
      price: 450,
    },
    {
      name: "Сезонные фрукты и ягоды",
      weight: "100 г",
      price: 350,
    },
    {
      name: "Сорбет на Ваш выбор",
      weight: "50 г",
      price: 250,
    },
    {
      name: "Мороженое на Ваш выбор",
      weight: "50",
      price: 250,
    },
  ],
};

// Обновленная функция для отображения раздела меню с описанием
function renderMenu(sectionId, items) {
  const container = document.getElementById(sectionId);
  container.innerHTML = ""; // Очистка перед рендерингом
  items.forEach((item) => {
    const dishDiv = document.createElement("div");
    dishDiv.className = "dish";

    // Название блюда
    const nameDiv = document.createElement("div");
    nameDiv.className = "dish-name";
    nameDiv.textContent = item.name;

    // Если есть описание, добавляем его под названием
    if (item.description) {
      const descriptionDiv = document.createElement("div");
      descriptionDiv.className = "dish-description";
      descriptionDiv.textContent = item.description;
      descriptionDiv.style.fontStyle = "italic";
      descriptionDiv.style.fontSize = "0.9em"; // чуть меньше, чем основной текст
      nameDiv.appendChild(descriptionDiv); // добавляем описание внутрь названия
    }

    // Детали: вес и цена
    const detailsDiv = document.createElement("div");
    detailsDiv.className = "dish-details";

    const weightSpan = document.createElement("span");
    weightSpan.className = "dish-weight";
    weightSpan.textContent = item.weight;

    const priceSpan = document.createElement("span");
    priceSpan.className = "dish-price";
    priceSpan.textContent = `${item.price} ₽`;

    detailsDiv.appendChild(weightSpan);
    detailsDiv.appendChild(priceSpan);

    dishDiv.appendChild(nameDiv);
    dishDiv.appendChild(detailsDiv);

    container.appendChild(dishDiv);
  });
}

// Отрисовка разделов
renderMenu("breakfasts", menuData.breakfasts);
renderMenu("appetizers", menuData.appetizers);
renderMenu("saladsAndWarmSalads", menuData.saladsAndWarmSalads);
renderMenu("seafoodAndOysters", menuData.seafoodAndOysters);
renderMenu("shrimpAndOysters", menuData.shrimpAndOysters);
renderMenu("soups", menuData.soups);
renderMenu("dishesSortedByPriceDesc", menuData.dishesSortedByPriceDesc);
renderMenu("localMenu", menuData.localMenu);
renderMenu("seafoodMenu", menuData.seafoodMenu);
renderMenu("meatMenu", menuData.meatMenu);
renderMenu("grillMenu", menuData.grillMenu);
renderMenu("menuChildrens", menuData.menuChildrens);
renderMenu("menuBread", menuData.menuBread);
renderMenu("menuBreads", menuData.menuBreads);
renderMenu("menuSouse", menuData.menuSouse);
renderMenu("menuDesert", menuData.menuDesert);
