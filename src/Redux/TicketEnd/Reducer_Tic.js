const State_val = [{
    Language: null,
    Picture: null,
    Date: null,
    Theater: null,
    Time:null
}]

const Reducer_Tic = (State = State_val, action) => {
    if (action.type == "ADD_TICKET_DETAILS") {
        return [{
            Language: action.payload.Language,
            Picture: action.payload.Picture,
            Date: action.payload.Date,
            Timer: action.payload.Time,
            Theater:action.payload.Theater
        }]
    }
    else return State;
}

export default Reducer_Tic;