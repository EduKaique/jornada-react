function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? name + '✅' : name}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Packing List de Sally Ride</h1>
      <ul>
        <Item isPacked={true} name="Traje especial" />
        <Item isPacked={true} name="Caoacete com folha dourada" />
        <Item isPacked={false} name="Foto de Tam" />
      </ul>
    </section>
  );
}
