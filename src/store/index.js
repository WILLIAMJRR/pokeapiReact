//paso1 la store
import { configureStore } from '@reduxjs/toolkit';
//3.3
import nameTrainer from './slices/TrainerName.slice.js';



//1.1 para generar la store es la siguiente con el metodo configure store que viene de la libreria redux
export const store = configureStore({
    reducer: {
        //3.4
        nameTrainer,
    },
});
