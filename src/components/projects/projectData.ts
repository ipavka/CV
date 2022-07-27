import {uId} from "../../utils/config";
import todoImage from "../../assets/image/todo_list.png";
import socialNet from "../../assets/image/social_network.png";
import cards from "../../assets/image/cards.png";
import binSearch from "../../assets/image/bin_searh_2.png";
import binSearchMain from "../../assets/image/bin_searh_1.png";
import financialControl from "../../assets/image/financial_control_1.png";
import financialControlMain from "../../assets/image/financial_control_2.png";


export const projectsData = [
  {
    id: uId(),
    imgUrl: todoImage,
    gitHubUrl: 'https://github.com/i-pavka/ToDoList',
    projectLinkUrl: 'https://i-pavka.github.io/ToDoList',
    header: 'ToDo List',
    descriptionHeader: 'SPA React Redux TypeScript',
    title: 'todo',
    backImg: {backgroundImage: `url(${todoImage})`},
    description: 'React, Redux, TypeScript, JavaScript',
    detailed: `Сайт для управления списками дел/задач, есть возможность добавлять, редактировать, менять статус,
     сортировать, удалять. Все данные хранятся на сервере, взаимодействие с сервером по REST API.
      Проект на стадии разработки.`
  },
  {
    id: uId(),
    imgUrl: cards,
    gitHubUrl: 'https://github.com/i-pavka/StudyCards',
    projectLinkUrl: 'https://i-pavka.github.io/StudyCards/',
    header: 'Study Cards',
    descriptionHeader: 'SPA React Redux TypeScript',
    title: 'cards',
    backImg: {backgroundImage: `url(${cards})`},
    description: 'React, Redux, TypeScript, JavaScript',
    detailed: `Сайт для обучения по карточкам. Можно создать колоду карточек с вопросами и ответами и тренироваться
     отвечать на вопросы. В зависимости от ответа, можно выставлять оценку, по этой оценки формируется случайная
      выдача следующего вопроса, приоритете у карточек с меньшим рейтингом. Реализованна, регистрация, логинизация,
       сброс пароля, добавление, редактирование карточек, просмотр карточек других пользователей, фильтрация, 
       сортировка, поиск. Все данные хранятся на сервере, взаимодействие с сервером по REST API. 
       Проект разрабатывался совместно в команде.`
  },
  {
    id: uId(),
    imgUrl: socialNet,
    gitHubUrl: 'https://github.com/i-pavka/SocialNetwork',
    projectLinkUrl: 'https://i-pavka.github.io/SocialNetwork',
    header: 'Social Network',
    descriptionHeader: 'SPA React Redux TypeScript',
    title: 'network',
    backImg: {backgroundImage: `url(${socialNet})`},
    description: 'React, Redux, TypeScript, JavaScript',
    detailed: `Социальная сеть, работает на открытой API. На данный момент реализована возможность просматривать список
     пользователей, подписываться и отписываться от любого пользователя, просматривать любой профиль пользователя.
     Все данные хранятся на сервере, взаимодействие с сервером по REST API.
      Проект на стадии разработки.`
  },
  {
    id: uId(),
    imgUrl: binSearchMain,
    gitHubUrl: 'https://github.com/i-pavka/binSearch',
    projectLinkUrl: 'https://i-pavka.github.io/binSearch',
    header: 'Binary search',
    descriptionHeader: 'SPA React Redux TypeScript',
    title: 'binSearch',
    backImg: {backgroundImage: `url(${binSearch})`},
    description: 'React, Redux, TypeScript, JavaScript',
    detailed: 'Игра в угадай число. Можно загадать число из выбранного диапазона, игра угадает число за определённое' +
      ' количество попыток. После старта нужно давать подсказку, больше число или меньше. В конце игры выводится ' +
      'результат всех попыток. Принцип вычисления основан на бинарном поиске.'
  },
  {
    id: uId(),
    imgUrl: financialControlMain,
    gitHubUrl: 'https://github.com/ipavka/financial_control',
    projectLinkUrl: 'https://pykor.xyz/',
    header: 'Financial Control',
    descriptionHeader: 'python, FastAPI, SQLite, JavaScript, AJAX',
    title: 'financialControl',
    backImg: {backgroundImage: `url(${financialControl})`},
    description: 'python, FastAPI, HTML/CSS, JavaScript, AJAX, SQLite, linux, Nginx, systemd, uvicorn, gunicorn',
    detailed: `Через сайт записывает расходы и распределяет по категориям. Например запись 300 мтс будет записана
     в категорию "Связь" Отправленные записи валидируются и по описанию определяется нужная категория и туда
      записывается, если такого описания нет в категориях, предлагает выбрать категорию для записи и запишет ее.
       В данной версии пока реализована возможность записи, по определенным категориям,
        возможность просмотреть все записи, удалить или изменить сумму.`
  },
]