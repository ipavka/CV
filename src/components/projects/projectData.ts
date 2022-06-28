import {uId} from "../../utils/config";
import todoImage from "../../assets/image/todo_list.png";
import socialNet from "../../assets/image/social_network.png";


export const projectsData = [
  {
    id: uId(),
    imgUrl: todoImage,
    gitHubUrl: 'https://github.com/ipavka/ToDo_List',
    projectLinkUrl: 'https://github.com/ipavka/ToDo_List',
    header: 'ToDo List',
    title: 'todo',
    backImg: {backgroundImage: `url(${todoImage})`},
    description: 'React, Redux, TypeScript, JavaScript',
    detailed: 'ToDo List. Сайт для управления списками дел/задач, есть возможность добавлять, редактировать,' +
      ' менять статус, сортировать, удалять. P.S. Проект на стадии разработки.'
  },
  {
    id: uId(),
    imgUrl: socialNet,
    gitHubUrl: 'https://github.com/ipavka/samuraiWay_1.0',
    projectLinkUrl: 'https://github.com/ipavka/samuraiWay_1.0',
    header: 'Social Network',
    title: 'network',
    backImg: {backgroundImage: `url(${socialNet})`},
    description: 'React, Redux, TypeScript, JavaScript',
    detailed: 'Социальная сеть. Социальная сеть, работает на открытой API. На данный момент реализована возможность' +
      ' просматривать список пользователей, подписываться и отписываться от любого пользователя, просматривать любой' +
      ' профиль пользователя. P.S. Проект на стадии разработки.'
  },
]