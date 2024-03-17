export function StripContent() {
  return (
    <ul>
      {Array.from({ length: 10 }, () => (
        <>
          <li>22-25 DE ABRIL</li>
          <li>
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="12" height="12" rx="5.93394" fill="white" />
            </svg>
          </li>
          <li>INGRESSO GRATUITO</li>
        </>
      ))}
    </ul>
  );
}
