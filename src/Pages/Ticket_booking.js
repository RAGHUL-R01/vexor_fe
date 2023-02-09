import './Styles/Ticket_booking.scss';
import QRCode from 'qrcode.react';
import jsPDF from 'jspdf';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const BookingID = () => {
    var result = '';
    var characters = 'ABCDEFGHJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 7; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


export default function Ticket_booking() {
    let navigate = useNavigate();
    const Booking_ID = BookingID();
    const Store_ = useSelector(store => store.Reducer[0]);
    const Store_details = useSelector(store => store.Reducer_Tic[0]);
    const qrCodeRef = useRef(null);

    const downloadPDF = () => {
        const canvas = qrCodeRef.current.childNodes[0];
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.setLineWidth(2);
        pdf.rect(10, 10, 190, 275);
        pdf.addImage(Store_.Image, 'PNG', 40, 20, 40, 60);
        pdf.setFontSize(20);
        pdf.text(Store_.Movie_name, 90, 30);
        pdf.setFontSize(14);
        pdf.text(Store_details.Language + "  " + Store_details.Picture, 90, 40);
        pdf.text(Store_details.Date + "  " + Store_details.Timer, 90, 50);
        pdf.text(Store_details.Theater, 90, 60);
        pdf.addImage(imgData, 'PNG', 40, 100, 50, 50);
        pdf.text("BOOKING ID :" + Booking_ID, 100, 110)
        pdf.text("SCREEN 1", 100, 120)
        pdf.text("1 Ticket(s)", 100, 130)
        pdf.text("Total Amount", 40, 170)
        pdf.text("Rs.155.75", 150, 170)
        pdf.setFontSize(12);
        pdf.text("Privacy Policy", 40, 190)
        pdf.text("____________", 40, 192)
        pdf.setFontSize(10);
        pdf.text("This ticket has been generated using Vexor app for educational purpose!", 40, 202)
        pdf.text("VEXOR has been created and maintained by R-01", 40, 210)
        pdf.save('qr-code.pdf');
    };
    useEffect(() => {
        if (!Store_.Movie_name) navigate('/main');
    }, [Store_.Movie_name, navigate]);
    return (
        <div>
            <div ref={qrCodeRef}>
                <QRCode value={Store_.Movie_name + " " + Store_details.Date + "  " + Store_details.Timer + " " + Booking_ID} size={200} />
            </div>
            <button onClick={downloadPDF}>Download PDF</button>
        </div>
    )
}
