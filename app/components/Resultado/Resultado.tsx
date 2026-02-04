export default function Resultado({
  message,
  image,
}: {
  message: string;
  image?: string;
}) {
  return (
    <section className="panel">
      <div className="panelMessage">{message}</div>

      <div className="panelImage">
        <img src={image} alt="Resultado" className="resultImg" />
      </div>
    </section>
  );
}