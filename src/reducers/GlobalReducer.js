import Constants from 'expo-constants';
const current_version = Constants.version;

const initial_state = {
  asset: {
    images: {
      splash: require('../../assets/splash.png'),
    },
    colors: {
      White: "#FFFFFF",
      bgClassRoom: '#1f3a93',
      grayLight: '#999999',
      evaluation_sdq: '#cf000f',
      black: '#000000',
      DarkOrange: "#FF8C00",
      Darkblue: 'rgba(34, 139, 34, 0.7)',
      DarkblueV2: '#006400',
      DarkblueV3: 'rgba(34, 139, 34, 0.2)',
      DarkblueV4: 'rgba(34, 139, 34, 0.1)',
    },
  },
  Colors_main: ["#017b01", "#006400"],
  colors_Orange: ["#017b01", "#006400"],
  styleViewAuth: [
    {
      flex: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.9)'
    },
    {
      width: '100%', height: '100%', justifyContent: 'center',
      alignItems: 'center', marginTop: 10
    }],
  BackgroundColor: { flex: 1, backgroundColor: '#b8d5b7', alignItems: 'center' },
  ViewMainShow: { width: '100%', marginTop: 10, alignItems: 'center', flexDirection: 'column' },
  current_version,
  font_size_SS: 11,
  font_size_S: 13,
  font_size_S_M: 12,
  font_size_M: 14,
  font_size_L: 16,
  font_size_L2: 20,
  font_size_L3: 22,
  font_size_L4: 24,
  font_size_XL: 25,
  font_size_XXL: 30,
};
const ACTION_TYPE = {
  SET_IS_LOADING: 'SET_IS_LOADING',
  UPDATE_REDUX: 'UPDATE_REDUX',
};
export default (state = initial_state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_IS_LOADING:
      return {
        ...state,
        is_loading: action.status
      }
    default:
      return state
  }
};