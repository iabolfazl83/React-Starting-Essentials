import {CORE_CONCEPTS} from "../data";
import CoreConcept from "./CoreConcept";

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map(conceptItem => <CoreConcept {...conceptItem}/>)}
      </ul>
    </section>
  )
}

export default CoreConcepts;