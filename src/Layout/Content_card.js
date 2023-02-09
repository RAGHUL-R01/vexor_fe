import './Styles/_Content_card.scss';
import Data from '../Data/Cont_card.json'
export default function Content_card() {
    return (
        <div className='Cont_Co_crd'>
            <div className='rec_'>The Best of Live Events</div>
            <div>Step out or Stay in, Intresting experiences for everyone</div>
            <div className='hui87I'>
                {Data.map(Elem => {
                    return <div key={Elem.header1} style={{ backgroundColor: `${Elem.clr}` }} className="crd_cont_980" >
                        <div style={{ fontFamily: "sans-serif", fontSize: "22px", fontWeight: "600" }}>{Elem.header1}</div>
                        <div style={{ fontFamily: "sans-serif", fontSize: "20px", fontWeight: "600" }}>{Elem.header2}</div>
                        <div style={{ fontSize: "12px", fontWeight: "500", paddingTop: "4px" }}>{Elem.events}</div>
                        <div className='CRd-Cont_btm763j'>Jira</div>
                    </div>
                })}
            </div>
        </div>
    )
}
