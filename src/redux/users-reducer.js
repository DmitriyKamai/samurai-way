const TOGGLE_FRIEND = 'TOGGLE-FRIEND';
const UPDATE_SEARCH = 'UPDATE-SEARCH';
const SET_USERS = 'SET-USERS';

export const toggleFriendActionCreator = (user_id) => ({
  type: TOGGLE_FRIEND,
  user_id
});

export const updateSearchActionCreator = (text) => ({
  type: UPDATE_SEARCH,
  text
});

export const setUsersActionCreator = (users) => ({
  type: SET_USERS,
  users
})

let initialState = {
  searchUserInfo: "",
  findedUsers: [],
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
    {
      user_id: 7,
      name: "Борис Аэродромный",
      city: 'Grodno, Belarus',
      avatarSrc: 'https://cs12.pikabu.ru/post_img/2021/08/31/8/1630411847138875200.jpg',
      isFriend: false
    },
    {
      user_id: 8,
      name: "Семён Инкубаторский",
      city: 'Miami, USA',
      avatarSrc: 'https://oboi-telefon.ru/wallpapers/173323/38721.jpg',
      isFriend: false
    },
    {
      user_id: 9,
      name: "Dmitriy Usachev",
      city: 'Hamburg, Germany',
      avatarSrc: 'https://i.pinimg.com/736x/5b/47/cc/5b47cc694e9f196cfd9bc0a8d6777074.jpg',
      isFriend: false
    },
  ],
  friends: [
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
  ]
}

const usersReducer = (state = initialState, action) => {
  let stateCopy = {
    searchUserInfo: state.searchUserInfo,
    users: [...state.users],
    friends: [...state.friends]
  };
  switch (action.type) {
    case TOGGLE_FRIEND:
      let userIndex = stateCopy.users.findIndex(user => user.user_id === action.user_id);
      if (stateCopy.users[userIndex].isFriend) {
        stateCopy.users[userIndex] = { ...state.users[userIndex], isFriend: false };
        stateCopy.friends = state.friends.filter(friend => friend.user_id !== action.user_id);
      } else {
        stateCopy.users[userIndex] = { ...state.users[userIndex], isFriend: true };
        stateCopy.friends.push(stateCopy.users[userIndex]);
      }
      stateCopy.findedUsers = stateCopy.users.filter(user => stateCopy.searchUserInfo ? user.name.toLowerCase().includes(stateCopy.searchUserInfo.toLowerCase()) : true);
      return stateCopy;
    case UPDATE_SEARCH:
      stateCopy = {
        searchUserInfo: action.text,
        users: [...state.users],
        friends: [...state.friends]
      };
      stateCopy.findedUsers = stateCopy.users.filter(user => action.text ? user.name.toLowerCase().includes(action.text.toLowerCase()) : true);
      return stateCopy;
    case SET_USERS:
      stateCopy = {
        ...state,
        users: [...action.users],
      }
      stateCopy.findedUsers = stateCopy.users.filter(user => stateCopy.searchUserInfo ? user.name.toLowerCase().includes(stateCopy.searchUserInfo.toLowerCase()) : true);
      return stateCopy;
    default:
      stateCopy.findedUsers = stateCopy.users.filter(user => stateCopy.searchUserInfo ? user.name.toLowerCase().includes(stateCopy.searchUserInfo.toLowerCase()) : true);
      return stateCopy;
  }
}

export default usersReducer