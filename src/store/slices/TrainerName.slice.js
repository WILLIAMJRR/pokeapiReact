//paso 3 crear la carpeta slice y el trainername donde se va a guardar el nombre del entrenador
import { createSlice } from "@reduxjs/toolkit";

//3.1 se crea la funcion createSlice que viene del la libreria redux toolking
const nameTrainerSlice =  createSlice({

    name: "nameTrainer",
    initialState: '',
    //actions
    reducers: {
        //paso 5 este representre el valor actual que es '' de nuestro estado el action captura lo q el usuario envia como parametro
       setNameTrainer:(state,action)=>action.payload//valor actual de nuestro estado
        
    }
})
//5.1 .action seria igual que .reducers y todas las actions se guardan en un objeto
export const {setNameTrainer} = nameTrainerSlice.actions//estan todas las action son objetos y se desesctrura para importarlo


//3.2 representante global hay q exportarlo
export default nameTrainerSlice.reducer;
