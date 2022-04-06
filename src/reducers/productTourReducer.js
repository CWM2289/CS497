/**
 * set initial state
 */
const initalState = {
  key: new Date(),
  run: false,
  continuous: true,
  loading: false,
  stepIndex: 0,
  steps: [
    {
      target: '.page-content',
      content: 'This is our page content',
      disableBeacon: true,
    },
    {
      target: '.footer',
      content: 'This is page footer',
    },
    {
      target: '.navbar',
      content: 'This is page navigation bar',
    },
  ],
};
  /**
   * Reducer for setting the authorization
   * @param {object} state The previous state value
   * @param {object} action The redux action
   * @return {string} The new state
   */
export default (state = initalState, action) => {
  switch (action.type) {
    case 'START':
      return { ...state, run: true };
    case 'RESET':
      return { ...state, stepIndex: 0 };
    case 'STOP':
      return { ...state, run: false };
    case 'NEXT_OR_PREV':
      return { ...state, ...action.payload };
    case 'RESTART':
      return {
        ...state,
        stepIndex: 0,
        run: true,
        loading: false,
      };
    default:
      return state;
  }
};
