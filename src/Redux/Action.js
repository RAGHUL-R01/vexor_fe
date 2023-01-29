export const AddDataToStore = (data) => {
    return {
        type: "Adding",
        payload: data
    }
}
export const AddTicketDetailsToStore = (data) => {
    return {
        type: "ADD_TICKET_DETAILS",
        payload: data
    }
}
