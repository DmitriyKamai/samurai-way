let state = {
  profilePage: {
    posts: [
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
  },
  dialogsPage: {
    dialogs: [
      {
        id: 1,
        name: "Сергей Петушенко",
        imgSrc: 'https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg',
        messages: [
          {
            id: 1,
            authorId: 1,
            message: "Поехали на дачу охотиться за мышами, пить молоко, сосать сиску у коровок, гонять собак, лизать свою шерсть и делать котят",
          },
          {
            id: 2,
            authorId: 0,
            message: "Не поеду, я буду скучать по маме, папе, Неколаю и Богданчоусу",
          }
        ]
      },
      {
        id: 2,
        name: "Лёша Вонючка",
        imgSrc: "https://s1.bloknot-novorossiysk.ru/thumb/850x0xcut/upload/iblock/e84/omyb57mq3bau1kef8z8r9cjxv89x032m/WhatsApp-Image-2023_08_08-at-12.39.20.jpeg",
        messages: [
          {
            id: 1,
            authorId: 1,
            message: "ПОГНАЛИ В ДОТУ",
          },
          {
            id: 2,
            authorId: 0,
            message: "Не хочу, ты играешь как лох",
          }
        ]
      },
      {
        id: 3,
        name: "Даша Рублёва",
        imgSrc: "https://i.ytimg.com/vi/Deazgd2DRlI/maxresdefault.jpg",
        messages: [
          {
            id: 1,
            authorId: 1,
            message: "Приходи сегодня за гаражи",
          },
          {
            id: 2,
            authorId: 0,
            message: "Не пойду, у меня есть Маша Копейкина",
          }
        ]
      }],
  },
  sidebar: {
    friends: [
      {
        id: 1,
        name: "Сергей Петушенко",
        imgSrc: 'https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg'
      },
      {
        id: 2,
        name: "Лёша Вонючка",
        imgSrc: "https://s1.bloknot-novorossiysk.ru/thumb/850x0xcut/upload/iblock/e84/omyb57mq3bau1kef8z8r9cjxv89x032m/WhatsApp-Image-2023_08_08-at-12.39.20.jpeg"
      },
      {
        id: 3,
        name: "Даша Рублёва",
        imgSrc: "https://i.ytimg.com/vi/Deazgd2DRlI/maxresdefault.jpg"
      }]
  }
}

export default state;