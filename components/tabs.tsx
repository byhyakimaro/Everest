export function Tabs(props: any) {
  return (
    <div className="tabs">
      <li>
        <input type="radio" name="tabs" id="0001" className="rd_tab" checked/>
        <label htmlFor="0001" className="tab_label">Pedido: 0001</label>
      </li>
      <li>
        <input type="radio" name="tabs" id="0002" className="rd_tab"/>
        <label htmlFor="0002" className="tab_label">Pedido: 0002</label>
      </li>
    </div>
  )
}
