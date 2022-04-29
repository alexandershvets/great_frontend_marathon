// action creator util
export const actionCreator = (type) => (payload) => {
  return {
    type,
    payload
  };
};