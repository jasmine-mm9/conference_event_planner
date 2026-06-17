import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: "https://pixabay.com/photos/business-computer-conference-20031/",
      name: "Projector",
      cost: 3500,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/photos/speakers-bluetooth-tech-speaker-4109274/",
      name: "Speakers",
      cost: 3500,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/photos/public-speaking-mic-microphone-3926344/",
      name: "Microphone",
      cost: 3500,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/photos/whiteboard-dry-erase-marker-blank-2903269/",
      name: "Whiteboard",
      cost: 3500,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/photos/signpost-waypoint-wood-grain-board-235079/",
      name: "Signs",
      cost: 3500,
      quantity: 0,
    }
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      
    },
    decrementAvQuantity: (state, action) => {
     
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
