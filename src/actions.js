export const toggleHeart = (index) => {
    return {
      type: 'TOGGLE_HEART',
      payload: { index },
    };
  };