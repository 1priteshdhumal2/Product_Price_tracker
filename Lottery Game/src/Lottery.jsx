import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";

export default function Lottery() {
  const [ticket, setTicket] = useState(genTicket(3));
  let isWinning = sum(ticket) === 15;

  const generateNewTicket = () => {
    const newTicket = genTicket(3); // Generate a new ticket
    setTicket(newTicket); // Update the ticket state
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Lottery game</h1>
      <button onClick={generateNewTicket}>Generate lottery ticket</button>
      <h3 className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </h3>
      <p>{isWinning && "Congratulation , you won"}</p>
    </div>
  );
}
