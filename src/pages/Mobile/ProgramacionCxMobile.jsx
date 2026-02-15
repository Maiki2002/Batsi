import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { supabase } from "../../services/supabase";

LocaleConfig.locales['fr'] = {
    monthNames: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ],
    dayNames: [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado' ],
    dayNamesShort: [ 'Dom', 'Lun', 'Mar', 'Mier', 'Jue', 'Vier', 'Sab']
}

LocaleConfig.defaultLocale = ['fr']

export default async function Cirugias(){
    const { data, error } = await supabase.from("programacionCX").select("*")
    const [ selected, setSelected ] = useState('')

    return(
        <View>

            <Calendar 
            onDayPress={dia =>{
                setSelected(dia.dateString)
            }}
            markedDates={{
                [selected]: {selected:true}        
            }}
            >
            </Calendar>

        </View>
    )
}