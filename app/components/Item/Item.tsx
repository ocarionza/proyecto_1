export default function Item({
  name,
  imageUrl,
  onClick,
}: {
  name: string;
  imageUrl: string;
  onClick?: () => void;
}) {
  return (
    <div className="choice" onClick={onClick}>
      <img src={imageUrl} alt={name} className="choice-image" />
      <div className="choice-label">{name}</div>
    </div>
  );
}
