import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Alert, Modal } from "react-native";
import { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { supabase } from "../../services/supabase";
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { format } from "date-fns";
import DateTimePicker, { DateType, useDefaultStyles } from  'react-native-ui-datepicker';

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
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mier', 'Jue', 'Vier', 'Sab']
}

LocaleConfig.defaultLocale = ['fr']

async function supabaseConection(dia) {
    const { data, error } = await supabase.from("programacionCx").select("*").eq("FechaCreada", dia)
    console.log(data, error)
}

export default function Cirugias() {
    const [cxDate, setCxDate ] = useState(null)
    const [selected, setSelected] = useState('')
    const [agregarCxModal, setAgregarCxModal] = useState(false)
    const [hospital, setHospital] = useState('')
    const dataFechaHoy = Date.now()
    const FechaHoy = format(new Date(dataFechaHoy), "yyyy-MM-dd HH:mm:ss")

    return (
        <View>

            <Calendar
                onDayPress={dia => {
                    setSelected(dia.dateString)
                    supabaseConection(dia.dateString)

                }}
                markedDates={{
                    [selected]: { selected: true, },
                }}
            >
            </Calendar>

            <View style={styles.container}>

                <TouchableOpacity style={styles.buttonAgregarCirugia} onPress={() => {
                    setAgregarCxModal(true)
                }}>
                    <Entypo name="circle-with-plus" size={65}></Entypo>
                </TouchableOpacity>
                <Modal
                    visible={agregarCxModal}
                    animationType="slide"
                    transparent={false}>
                    <View style={styles.modal}>
                        <View style={styles.modalCard}>
                            <Text style={styles.title}>Programar Cirugía</Text>
                            <TextInput 
                            placeholder="Hospital"
                            onChangeText={(text)=>{
                                setHospital(text)
                                console.log(text)
                            }} />

                            <DateTimePicker
                                mode="single"
                                // date={cxDate ?? undefined}
                                onChange={( { date } ) => {
                                   
                                }}></DateTimePicker>

                            <TouchableOpacity onPress={() => {
                                setAgregarCxModal(false)
                            }}>
                                <Ionicons name="arrow-back" size={24} color="black" />
                            </TouchableOpacity>

                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        padding: 20
    },
    container: {
        position: 'absolute',
        right: 100,
        bottom: 50
    },
    buttonAgregarCirugia: {
        alignItems: 'center',
        padding: 5,
        borderRadius: 5
    },
    buttonRegresar: {
        alignItems: 'center',
    },
    modal: {
        backgroundColor: '#ffffff72',
        justifyContent: 'center',
        padding: 100
    },
    modalCard: {
        backgroundColor: "#ffffff",
        padding: 100,
        borderRadius: 20
    }
})
