import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
  {
    id: 1, likesCount: '23', message: 'Сегодня ел влажные корма.'
  },
  {
    id: 2, likesCount: '3213', message: 'Вчера ел сгущёнку с Богданчоусом'
  },
  {
    id: 3, likesCount: '223', message: 'Сегодня встречался с Дашей за гаражами'
  }
]

let dialogs = [
  {
    id: 1,
    name: 'Сергей Петушенко',
    lastMsg: 'Поехали на дачу охотиться за мышами, пить молоко, сосать сиску у коровок, гонять собак, лизать свою шерсть и делать котят',
    imgSrc: 'https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg'
  },
  {
    id: 2,
    name: "Лёша Вонючка",
    lastMsg: "ПОГНАЛИ В ДОТУ",
    imgSrc: "https://s1.bloknot-novorossiysk.ru/thumb/850x0xcut/upload/iblock/e84/omyb57mq3bau1kef8z8r9cjxv89x032m/WhatsApp-Image-2023_08_08-at-12.39.20.jpeg"
  },
  {
    id: 3,
    name: "Даша Рублёва",
    lastMsg: "Приходи сегодня за гаражи",
    imgSrc: "https://i.ytimg.com/vi/Deazgd2DRlI/maxresdefault.jpg"
  }]

let messages = [
  {
    id: 1,
    message: "Поехали на дачу охотиться за мышами, пить молоко, сосать сиску у коровок, гонять собак, лизать свою шерсть и делать котят",
    imgSrc: "https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg"
  }
]

ReactDOM.render(
    <App messages={messages} dialogs={dialogs} posts={posts}/>,
  document.getElementById('root')
);