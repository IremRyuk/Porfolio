import { useSelector } from "react-redux"

export default function Table() {
    const flag = useSelector((res:any)=>res.flag)
  return (
<div className="contacts">
<div className="ct">
    <p className="ctt">Gmail</p>
    <a className="cta" href="mailto:giorgi.iremadze98@gmail.com">giorgi.iremadze98@gmail.com</a>
</div>
<div className="ct">
    <p className="ctt">GitHub</p>
    <a className="cta" href={`https://github.com/IremRyuk?tab=repositories`} target="_blank">https://github.com/IremRyuk?tab=repositories</a>
</div>
<div className="ct">
    <p className="ctt">
    {flag==='pl'
    ?'Telefon'
    :'Phone'}
    </p>
    <a className="cta" href="tel:+48782817904">+48782817904</a>
</div>
<div className="ct">
    <p className="ctt">Linkedin</p>
    <a className="cta" href={`https://www.linkedin.com/in/george-iremadze-684a25360/`} target="_blank">https://www.linkedin.com/in/george-iremadze-684a25360/</a>
</div>
</div>
  )
}
