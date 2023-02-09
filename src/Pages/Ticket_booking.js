import './Styles/Ticket_booking.scss';
import PhoneIcon from '@mui/icons-material/Phone';
import QR from '../Services/QR_generator';
import { CloseOutlined } from '@ant-design/icons';
import { Page, Text, View, Document, Image, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ref = React.createRef();
export const BookingID = () => {
    var result = '';
    var characters = 'ABCDEFGHJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 7; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
const MyDocument = ({ Store_, Store_details, Booking_ID, QRT }) => (
    <Document>
        <Page size="A4" style={{ margin: "50" }}>
            <View style={{ flexDirection: "row" }}>
                <View>
                    <Image src={Store_.Image} style={{ width: "150px", borderRadius: "10px", marginRight: "30px" }} />
                </View>
                <View style={{ padding: "20px 0" }}>
                    <Text style={{ fontSize: "30px", fontWeight: "10", padding: "5px 0 40px 0" }}>{Store_.Movie_name + " (" + Store_.Details.Certificate + ")"}</Text>
                    <Text style={{ padding: "5px 0" }}>{Store_details.Language + ", " + Store_details.Picture}</Text>
                    <Text style={{ padding: "5px 0" }}>{Store_details.Date + " | " + Store_details.Timer}</Text>
                    <Text style={{ padding: "5px 0" }}>{Store_details.Theater}</Text>
                </View>
            </View>
            <View style={{ padding: "30px 0", flexDirection: "row"}}>
                <View><Text>Hi</Text></View>
                
            </View>
        </Page>
    </Document>
);

export default function Ticket_booking() {
    let navigate = useNavigate();
    const Booking_ID = BookingID();
    const Store_ = useSelector(store => store.Reducer[0]);
    const Store_details = useSelector(store => store.Reducer_Tic[0]);
    const QRT = <QR />;
    useEffect(() => {
        if (!Store_.Movie_name) navigate('/main');
    }, [Store_.Movie_name, navigate]);
    return (
        <PDFViewer style={{ height: "700px", width: "100%" }}>
            <MyDocument Store_={Store_} Store_details={Store_details} Booking_ID={Booking_ID} QRT={QRT} />
        </PDFViewer>
    )
}
