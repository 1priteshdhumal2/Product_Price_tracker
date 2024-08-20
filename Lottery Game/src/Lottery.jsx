import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n, winCondition }) {
  const [ticket, setTicket] = useState(genTicket(n));
  let isWinning = winCondition(ticket);

  const generateNewTicket = () => {
    const newTicket = genTicket(n); // Generate a new ticket
    setTicket(newTicket); // Update the ticket state
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Lottery game</h1>
      <button onClick={generateNewTicket}>Generate lottery ticket</button>
      <Ticket ticket={ticket} />
      <p>{!isWinning && <h3>sorry you lose</h3>}</p>
      <p>{isWinning && "Congratulation , you won"}</p>
    </div>
  );
}
