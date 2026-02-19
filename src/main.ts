import "./style.css";
import "./clean-code/04-homework";
import "./clean-code/05-dry";
import "./clean-code/06-classes-a";
import "./clean-code/06-classes-b";
import "./clean-code/06-classes-c";
import "./clean-code/07-tarea";
import "./code-smells/01-singleton";
import "./code-smells/02-high-coupling";
import "./code-smells/02-low-coupling";
import "./solid/01-srp";
import "./solid/02-open-close-a";
import "./solid/02-open-close-b";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>CleanCode y SOLID</h1>
  <span>Revisar la consola de JavaScript</span>
`;
