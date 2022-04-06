/**
 * Reducer for setting the authorization
 * @param {object} state The previous state value
 * @param {object} action The redux action
 * @return {string} The new state
 */
export default (state = null, action) => {
  switch (action.type) {
    case 'AUTHORIZATION':
      return action.payload;
    default:
      return state;
  }
};
