import Arrow  from "../../assets/graphisms/ArrowDou.svg";
export function StripContent() {
  return (
    <ul>
      {Array.from([1, 2, 3, 4, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18], (i) => (
        <ul key={i}>
          <li>11-14 DE NOVEMBRO</li>
          <li>
            <img src={Arrow} />
          </li>
          <li>INGRESSO GRATUITO</li>
          <li>
            <img src={Arrow} />
          </li>
        </ul>
      ))}
    </ul>
  );
}
