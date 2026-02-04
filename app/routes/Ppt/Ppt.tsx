import { useState } from "react";
import Counters from "~/components/Counters/Counters";
import Item from "~/components/Item/Item";
import Resultado from "~/components/Resultado/Resultado";

const items = [
  {
    name: "Piedra",
    imageUrl: "https://dummyimage.com/300x300/000/fff&text=Piedra",
  },
  {
    name: "Papel",
    imageUrl: "https://dummyimage.com/300x300/000/fff&text=Papel",
  },
  {
    name: "Tijeras",
    imageUrl: "https://dummyimage.com/300x300/000/fff&text=Tijeras",
  },
];

export default function Ppt() {
  const [message, setMessage] = useState("Selecciona una opción para jugar");
  const [image, setImage] = useState(
    "https://dummyimage.com/300x300/ccc/000&text=?",
  );
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  };

  const determineWinner = (userChoice: string, computerChoice: string) => {
    if (userChoice === computerChoice) {
      return "empate";
    }

    if (
      (userChoice === "Piedra" && computerChoice === "Tijeras") ||
      (userChoice === "Papel" && computerChoice === "Piedra") ||
      (userChoice === "Tijeras" && computerChoice === "Papel")
    ) {
      return "gana";
    }

    return "pierde";
  };

  const handleChoice = (userItem: (typeof items)[0]) => {
    const computerItem = getComputerChoice();
    const result = determineWinner(userItem.name, computerItem.name);

    setImage(computerItem.imageUrl);

    if (result === "gana") {
      setMessage(
        `¡Ganaste! Elegiste ${userItem.name} y la computadora eligió ${computerItem.name}`,
      );
      setWins(wins + 1);
    } else if (result === "pierde") {
      setMessage(
        `Perdiste. Elegiste ${userItem.name} y la computadora eligió ${computerItem.name}`,
      );
      setLosses(losses + 1);
    } else {
      setMessage(`Empate. Ambos eligieron ${userItem.name}`);
    }
  };

  return (
    <div className="ppt">
      <section className="choices">
        {items.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            imageUrl={item.imageUrl}
            onClick={() => handleChoice(item)}
          />
        ))}
      </section>
      <Resultado message={message} image={image} />
      <Counters wins={wins} losses={losses} />
    </div>
  );
}
