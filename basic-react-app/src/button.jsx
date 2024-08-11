function printHello(event) {
  console.log("hello!");
  console.log(event);
}

function printBye() {
  console.log("Bye!");
}

function handleHover() {
  console.log("hover");
}

function handleDblClick() {
  console.log("You doubled click!");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>click me</button>
      <button onMouseOver={handleHover}>Hover Over me!</button>
      <p onClick={printBye}>This is para is for event demo!</p>
      <button onDoubleClick={handleDblClick}>double click me!</button>
    </div>
  );
}
