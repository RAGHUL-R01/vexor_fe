const State_values = [
    {
        "Id": null,
        "Movie_name": null,
        "Image": null,
        "Ratingsandvotes": {
            "Rating": null,
            "Votes": null
        },
        "Screen": null,
        "Language": null,
        "Details": {
            "Time": null,
            "Type": null,
            "Certificate": null,
            "Release_date": null,
            "About": null
        }
    }
]

const Reducer1 = (state = State_values, action) => {
    if (action.type === "Adding") {
        //When Increment action is called, Modifying only the Addvalue and keep maintaining
        // same value for Subvalue and value and vice versa..
        console.log(action.payload)
        return [
            {
                "Id": action.payload.Id,
                "Movie_name": action.payload.Movie_name,
                "Image": action.payload.Image,
                "Ratingsandvotes": {
                    "Rating": action.payload.Ratingsandvotes.Rating,
                    "Votes": action.payload.Ratingsandvotes.Votes
                },
                "Screen": action.payload.Screen,
                "Language": action.payload.Language,
                "Details": {
                    "Time": action.payload.Details.Time,
                    "Type": action.payload.Details.Type,
                    "Certificate": action.payload.Details.Certificate,
                    "Release_date": action.payload.Details.Release_date,
                    "About": action.payload.Details.About
                }
            }
        ]
    }

    //Maintaining Subvalue and Addvalue state in Increment action to prevent it from loss.
    else return state;
}
export default Reducer1;