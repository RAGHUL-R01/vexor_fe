import { QRCode } from "antd";

export default function QR_generator(props) {
  console.log(props.Value)
  return (
    <div >
      <QRCode
        errorLevel="H"
        value={props.Value}
        // icon={vexor1}
        size='120'
      /></div>
  )
}
