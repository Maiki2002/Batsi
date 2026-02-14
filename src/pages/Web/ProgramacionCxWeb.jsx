import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";

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

export default function Cirugias(){
    const [ selected, setSelected ] = useState('')

    return(
        <Calendar 
        onDayPress={dia =>{
            setSelected(dia.dateString)
            console.log(dia.dateString)
        }}
        markedDates={{
            [selected]: {selected:true, },
        }}
        >
        </Calendar>
    )
}