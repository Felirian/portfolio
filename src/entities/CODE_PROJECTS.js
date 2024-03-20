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
    title: 'Сайт посвящённый, трудоустройству и социализации людей с инвалидностью в России',
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
    title: 'Сайт компании PushKeen, где собраны все проекты и направления работы',
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
    title: 'Страница посвящённая проекту Паблика-Арта, созданного для погружения жителей Мурино в уличное искусство',
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
    title: 'Сайт где собраны все проекты компании PushKeen для РЖД',
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
    title: 'Сайт презентующий стайлгайд айдентики Екатеринбургского общественного транспорта',
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