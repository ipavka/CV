import {uId} from "../../utils/config";
import todoImage from "../../assets/image/todo_list.png";
import socialNet from "../../assets/image/social_network.png";
import cards from "../../assets/image/cards.png";


export const projectsData = [
  {
    id: uId(),
    imgUrl: todoImage,
    gitHubUrl: 'https://github.com/ipavka/ToDo_List',
    projectLinkUrl: 'https://github.com/ipavka/ToDo_List',
    header: 'ToDo List',
    descriptionHeader: 'SPA React Redux TypeScript',
    title: 'todo',
    backImg: {backgroundImage: `url(${todoImage})`},
    description: 'React, Redux, TypeScript, JavaScript',
    detailed: 'Сайт для управления списками дел/задач, есть возможность добавлять, редактировать,' +
      ' менять статус, сортировать, удалять. Проект на стадии разработки.'
  },
  {
    id: uId(),
    imgUrl: socialNet,
    gitHubUrl: 'https://github.com/ipavka/samuraiWay_1.0',
    projectLinkUrl: 'https://github.com/ipavka/samuraiWay_1.0',
    header: 'Social Network',
    descriptionHeader: 'SPA React Redux TypeScript',
    title: 'network',
    backImg: {backgroundImage: `url(${socialNet})`},
    description: 'React, Redux, TypeScript, JavaScript',
    detailed: 'Социальная сеть, работает на открытой API. На данный момент реализована возможность' +
      ' просматривать список пользователей, подписываться и отписываться от любого пользователя, просматривать любой' +
      ' профиль пользователя. Проект на стадии разработки.'
  },
  {
    id: uId(),
    imgUrl: cards,
    gitHubUrl: 'https://github.com/ipavka/samuraiWay_1.0',
    projectLinkUrl: 'https://github.com/ipavka/samuraiWay_1.0',
    header: 'Study Cards',
    descriptionHeader: 'SPA React Redux TypeScript',
    title: 'cards',
    backImg: {backgroundImage: `url(${cards})`},
    description: 'React, Redux, TypeScript, JavaScript',
    detailed: 'Социальная сеть, работает на открытой API. На данный момент реализована возможность' +
      ' просматривать список пользователей, подписываться и отписываться от любого пользователя, просматривать любой' +
      ' профиль пользователя. Проект на стадии разработки.'
  },
]