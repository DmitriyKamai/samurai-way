const ADD_MESSAGE = 'ADD-MESSAGE';

export const addMessageActionCreator = (message) => ({ type: ADD_MESSAGE, message });


let initialState = {
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
      messages: [1, 2]
    },
    {
      dialog_id: 2,
      name: "Лёша Вонючка",
      imgSrc: "https://s1.bloknot-novorossiysk.ru/thumb/850x0xcut/upload/iblock/e84/omyb57mq3bau1kef8z8r9cjxv89x032m/WhatsApp-Image-2023_08_08-at-12.39.20.jpeg",
      unsentMessage: "",
      messages: [3, 4, 5]
    },
    {
      dialog_id: 3,
      name: "Даша Рублёва",
      imgSrc: "https://i.ytimg.com/vi/Deazgd2DRlI/maxresdefault.jpg",
      unsentMessage: "",
      messages: [6, 7]
    }],
}

const dialogsReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        message_id: 3,
        receiver_id: 1,
        sender_id: 0,
        message: action.message
      };
      stateCopy = {
        ...state,
        dialogs: [...state.dialogs],
        messages: [...state.messages, newMessage]
      }
      stateCopy.dialogs[0].unsentMessage = "";
      return stateCopy;
    default:
      return state;
  }

}

export default dialogsReducer