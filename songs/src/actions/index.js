//Action creator
export const selectSong = (song) => {
  //Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

//No default export, so { selectSong } is required to import


