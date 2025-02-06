let rerenderEntireTree;

let state = {
  users: [
    {
      id: 0,
      name: "Валерий Лохматый",
      wallpaperImgSrc: 'https://niti-d.by/wp-content/uploads/2020/10/15.1.jpg',
      avatarImgSrc: 'https://i.ibb.co/CDYzqYW/2025-01-29-222000471.png'
    }
  ],
  profilePage: {
    posts: [
      {
        id: 1, likesCount: 23, message: 'Сегодня ел влажные корма.'
      },
      {
        id: 2, likesCount: 3213, message: 'Вчера ел сгущёнку с Богданчоусом'
      },
      {
        id: 3, likesCount: 223, message: 'Сегодня встречался с Дашей за гаражами'
      }
    ],
    newPostText: ""
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
      },
      {
        id: 4,
        name: "Маша Копейкина",
        imgSrc: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_6526807c5f13c138b5e613e5_652681c0c095b8411a5c6cba/scale_1200"
      }
    ]
  }
}


export const addPost = () => {
  if (state.profilePage.newPostText.length) {
    const newPost = {
      id: 5,
      likesCount: 0,
      message: state.profilePage.newPostText
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
  }
  rerenderEntireTree(state);
};

export const setNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const addMessage = () => {
  if (state.dialogsPage.dialogs[0].unsentMessage.length) {
    const newMessage = {
      id: 3,
      authorId: 0,
      message: state.dialogsPage.dialogs[0].unsentMessage
    };
    state.dialogsPage.dialogs[0].messages.push(newMessage);
    state.dialogsPage.dialogs[0].unsentMessage = "";
  }
  rerenderEntireTree(state);
};

export const setNewMessage = (newText) => {
  state.dialogsPage.dialogs[0].unsentMessage = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;