let storage = {
  state: {
    id: 0,
    name: "Валерий Лохматый",
    wallpaperImgSrc: 'https://niti-d.by/wp-content/uploads/2020/10/15.1.jpg',
    avatarImgSrc: 'https://i.ibb.co/CDYzqYW/2025-01-29-222000471.png',
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
    newPostText: "",
    dialogs: [
      {
        id: 1,
        name: "Сергей Петушенко",
        imgSrc: 'https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg',
        unsentMessage: "",
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
        unsentMessage: "",
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
        unsentMessage: "",
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
  },

  rerenderEntireTree: null,

  addPost() {
    if (this.state.newPostText.length) {
      const newPost = {
        id: 5,
        likesCount: 0,
        message: this.state.newPostText
      };
      this.state.posts.push(newPost);
      this.state.newPostText = "";
    }
    this.rerenderEntireTree(this.state);
  },

  setNewPostText(newText) {
    this.state.newPostText = newText;
    this.rerenderEntireTree(this.state);
  },

  addMessage() {
    if (this.state.dialogs[0].unsentMessage.length) {
      const newMessage = {
        id: 3,
        authorId: 0,
        message: this.state.dialogs[0].unsentMessage
      };
      this.state.dialogs[0].messages.push(newMessage);
      this.state.dialogs[0].unsentMessage = "";
    }
    this.rerenderEntireTree(this.state);
  },

  setNewMessage(newText) {
    this.state.dialogs[0].unsentMessage = newText;
    this.rerenderEntireTree(this.state);
  },

  subscribe(observer) {
    this.rerenderEntireTree = observer;
  }
}

export default storage;