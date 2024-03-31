import KakVseImg from '../assets/CodeProjects/Kak-vse.jpg';
import PushKeenImg from '../assets/CodeProjects/PushKeen.jpg';
import LaboratoryPushKeenImg from '../assets/CodeProjects/Laboratory-PushKeen.jpg';
import RzdPushKeenImg from '../assets/CodeProjects/Rzd-PushKeen.jpg';
import EKBImg from '../assets/CodeProjects/EKB.jpg';

//-------------------------------------mockups-------------------------------------\\
import KakVseMockup from '../assets/CodeProjects/mockups/Kak-vse.png';
import PushKeenMockup from '../assets/CodeProjects/mockups/PushKeen.png';
import LaboratoryPushKeenMockup from '../assets/CodeProjects/mockups/Laboratory-PushKeen.png';
import RzdPushKeenMockup from '../assets/CodeProjects/mockups/Rzd-PushKeen.png';
import EKBMockup from '../assets/CodeProjects/mockups/EKB.png';

export const CODE_PROJECTS_DATA = [
  {
    name: 'Как все',
    mainImg: KakVseImg,
    link: 'https://kak-vse.info/',
    text: [
      `"Как все" - это веб-платформа, которая выступает в качестве виртуального пространства для трудоустройства 
      и социализации людей с инвалидностью в России. Страница проектов на этом сайте представляет собой важный раздел,
      где каждый проект является символом надежды и успешной адаптации инвалидов в обществе.`,
      `На странице проектов вы обнаружите уникальные и вдохновляющие истории людей с ограниченными возможностями, 
      которые добились успеха в различных сферах жизни благодаря своему таланту, стойкости и профессионализму. Каждый 
      проект представлен с описанием его цели, задач, этапов реализации и достигнутых результатов.`,
      ``
    ],
    info: `Многостраничный сайт с админ-панелью, по готовому дизайн проекту`,
    stack: ['next.js, ', 'GRAPHql, ', 'strapi, ', 'scss,', 'VERCEL, '],
    slug: 'Kak-vse',
    realization: '~40 д',
    component: '',
    mockup: KakVseMockup,

  },
  {
    name: 'PushKeen',
    mainImg: PushKeenImg,
    link: '',
    text: [
      `"PushKeen" представляет собой динамичную веб-платформу, служащую виртуальным отражением компании с широким 
      спектром проектов и направлений работы. На странице проектов сайта "PushKeen" вы найдете подробные описания 
      каждого проекта, а также информацию о технологиях и инновациях, применяемых в их реализации.`,
    ],
    info: `Поддержка сайта, редизайн, добавление новых проектов`,
    stack: ['next.js', 'GRAPHql', 'strapi', 'scss', 'VERCEL'],
    slug: 'PushKeen',
    realization: '',
    component: '',
    mockup: PushKeenMockup
  },
  {
    name: 'Лаборатория ПАБЛИК-АРТА',
    mainImg: LaboratoryPushKeenImg,
    link: '',
    text: [
      `"Лаборатория ПАБЛИК-АРТА" - это онлайн-платформа, разработанная специально для просвещения и вовлечения
      жителей Мурино в захватывающий мир уличного искусства. На странице, посвященной проекту "Паблик-Арта", представлены
      не только описания различных искусственных объектов, но и фотографии, видео и интерактивные материалы, позволяющие
      пользователям окунуться в уникальную атмосферу творчества и самовыражения.`,

    ],
    info: `Лэндинг по готовому дизайн-проекту`,
    stack: ['React', 'scss', 'Nginx'],
    slug: 'Laboratory-PushKeen',
    realization: '~5 д',
    component: '',
    mockup: LaboratoryPushKeenMockup
  },
  {
    name: 'РЖД & PushKeen',
    mainImg: RzdPushKeenImg,
    link: '',
    text: [
      `"РЖД & PushKeen" – это веб-страница, созданная специально для компании РЖД, в сотрудничестве с PushKeen, 
      представляющая собой лендинг, объединяющий все проекты компании PushKeen, реализованные для РЖД.`,
      `На этой странице вы найдете подробную информацию о каждом проекте, проведенном в партнерстве с РЖД. Это включает 
      в себя описание проектов, ссылки, достигнутые результаты, а также визуализация проектов`
    ],
    info: `Лэндинг по готовому дизайн-проекту`,
    stack: ['React', 'scss', 'Nginx'],
    slug: 'Rzd-PushKeen',
    realization: '~5 д',
    component: '',
    mockup: RzdPushKeenMockup
  },
  {
    name: 'ЕКАТЕРИНБУРГСКИЙ ТРАНСПОРТ',
    mainImg: EKBImg,
    link: '',
    text: [
      `"ЕКАТЕРИНБУРГСКИЙ ТРАНСПОРТ" - это веб-ресурс, целью которого является презентация стайлгайда айдентики 
      общественного транспорта в Екатеринбурге. Этот сайт представляет собой источник информации о визуальной
      идентификации транспортной системы города, включая логотипы, цветовую схему, типографику и другие элементы 
      брендинга.`,

    ],
    info: `Многостраничный сайт, с динамически появляющимися элементами.`,
    stack: ['React', 'scss', 'Nginx'],
    slug: 'EKB',
    realization: '~14 ч',
    component: '',
    mockup: EKBMockup
  },
  // {
  //   name: 'Rare Beasts ',
  //   mainImg: KakVseImg,
  //   title: 'Сайт посвящён животным занесенным в красную книгу.  На сайте можно узнать информацию о разных видах, почитать новости, а так же перейти на сайты фонов, которые предоставляют помощь.',
  //   info: `Карточки о животных выполнены в виде презентации. Блочная система страницы, где каждый блок плавно меняется при скролле.`,
  //   stack: ['next.js', 'GRAPHql', 'strapi', 'scss', 'VERCEL'],
  //   slug: 'Rare-Beasts',
  //   realization: '~40 д',
  //   component: ''
  // },
]