import dialogsPageReducer from "./dialogsPage-reducer";
import profilePageReducer from "./profilePage-reducer";
import userReducer from "./users-reducer";

let store = {
  _state: {
    users: [
      {
        user_id: 1,
        name: "Сергей Петушенко",
        city: 'Minsk, Belarus',
        avatarSrc: 'https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg',
        isFriend: true
      },
      {
        user_id: 2,
        name: "Лёша Вонючка",
        city: 'Minsk, Belarus',
        avatarSrc: 'https://s1.bloknot-novorossiysk.ru/thumb/850x0xcut/upload/iblock/e84/omyb57mq3bau1kef8z8r9cjxv89x032m/WhatsApp-Image-2023_08_08-at-12.39.20.jpeg',
        isFriend: true
      },
      {
        user_id: 3,
        name: "Даша Рублёва",
        city: 'Minsk, Belarus',
        avatarSrc: 'https://i.ytimg.com/vi/Deazgd2DRlI/maxresdefault.jpg',
        isFriend: true
      },
      {
        user_id: 4,
        name: "Маша Копейкина",
        city: 'Minsk, Belarus',
        avatarSrc: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_6526807c5f13c138b5e613e5_652681c0c095b8411a5c6cba/scale_1200',
        isFriend: true
      },
      {
        user_id: 5,
        name: "Роман Блохин",
        city: 'Hoiniki, Belarus',
        avatarSrc: 'https://img.freepik.com/free-photo/close-up-portrait-beautiful-cat_23-2149214419.jpg',
        isFriend: false
      },
      {
        user_id: 6,
        name: "Леонид Тыгыдыченко",
        city: 'Hoiniki, Belarus',
        avatarSrc: 'https://ic.pics.livejournal.com/kot_de_azur/31835946/149185/900.jpg',
        isFriend: false
      },
    ],
    profilePage: {
      id: 0,
      name: "Валерий Лохматый",
      wallpaperImgSrc: 'https://niti-d.by/wp-content/uploads/2020/10/15.1.jpg',
      avatarImgSrc: 'https://i.ibb.co/CDYzqYW/2025-01-29-222000471.png',
      posts: [
        {
          post_id: 1, likesCount: 23, message: 'Сегодня ел влажные корма.'
        },
        {
          post_id: 2, likesCount: 3213, message: 'Вчера ел сгущёнку с Богданчоусом'
        },
        {
          post_id: 3, likesCount: 223, message: 'Сегодня встречался с Дашей за гаражами'
        }
      ],
      newPostText: "",
    },
    dialogsPage: {
      messages: [
        {
          message_id: 1,
          sender_id: 1,
          receiver_id: 0,
          message: "Поехали на дачу охотиться за мышами, пить молоко, сосать сиску у коровок, гонять собак, лизать свою шерсть и делать котят",
        },
        {
          message_id: 2,
          sender_id: 0,
          receiver_id: 1,
          message: "Не поеду, я буду скучать по маме, папе, Неколаю и Богданчоусу",
        },
        {
          message_id: 3,
          sender_id: 2,
          receiver_id: 0,
          message: "ПОГНАЛИ В ДОТУ",
        },
        {
          message_id: 4,
          sender_id: 0,
          receiver_id: 2,
          message: "Не хочу, ты играешь как лох",
        },
        {
          message_id: 5,
          sender_id: 2,
          receiver_id: 0,
          message: "НУ ПОШЛИ В ДОТУ Я БУДУ НОРМ ИГРАТЬ",
        },
        {
          message_id: 6,
          sender_id: 3,
          receiver_id: 0,
          message: "Приходи сегодня за гаражи",
        },
        {
          message_id: 7,
          sender_id: 0,
          receiver_id: 3,
          message: "Не пойду, у меня есть Маша Копейкина",
        }
      ],
      dialogs:
       [{
          dialog_id: 1,
          name: "Сергей Петушенко",
          imgSrc: 'https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg',
          unsentMessage: "",
          messages: [1,2]
        },
        {
          dialog_id: 2,
          name: "Лёша Вонючка",
          imgSrc: "https://s1.bloknot-novorossiysk.ru/thumb/850x0xcut/upload/iblock/e84/omyb57mq3bau1kef8z8r9cjxv89x032m/WhatsApp-Image-2023_08_08-at-12.39.20.jpeg",
          unsentMessage: "",
          messages: [3,4,5]
        },
        {
          dialog_id: 3,
          name: "Даша Рублёва",
          imgSrc: "https://i.ytimg.com/vi/Deazgd2DRlI/maxresdefault.jpg",
          unsentMessage: "",
          messages: [6,7]
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
  },

  _callSubscriber: null,

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._callSubscriber(this._state);
  }
}

export default store;