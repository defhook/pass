export const getSavedParkIds = () => {
  const savedParkIds = localStorage.getItem('saved_Parks')
    ? JSON.parse(localStorage.getItem('saved_Parks'))
    : [];

  return savedParkIds;
};

export const saveParkIds = (ParkIdArr) => {
  if (ParkIdArr.length) {
    localStorage.setItem('saved_Parks', JSON.stringify(ParkIdArr));
  } else {
    localStorage.removeItem('saved_Parks');
  }
};

export const removeParkId = (ParkId) => {
  const savedParkIds = localStorage.getItem('saved_Parks')
    ? JSON.parse(localStorage.getItem('saved_Parks'))
    : null;

  if (!savedParkIds) {
    return false;
  }

  const updatedSavedParkIds = savedParkIds?.filter((savedParkId) => savedParkId !== ParkId);
  localStorage.setItem('saved_Parks', JSON.stringify(updatedSavedParkIds));

  return true;
};
