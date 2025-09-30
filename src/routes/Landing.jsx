import ChoiceCard from "../components/ChoiceCard.jsx";

export default function Landing() {
  return (
    <div className="container">
      <header className="hero">
        <h1>A Tale of Two Selves</h1>
        <p>
          An adventure in code and story. Choose your path—or cross the bridge.
        </p>
      </header>
      <section className="choices">
        <ChoiceCard
          title={"Jordan Campbell — The Engineer’s Path"}
          subtitle={"Systems with soul. Performance with purpose."}
          to="/engineer"
          variant="engineer"
        />
        <ChoiceCard
          title={"Jayden King — The Storyteller’s Path"}
          subtitle={"Worlds you can step into. Tables you’ll remember."}
          to="/storyteller"
          variant="storyteller"
        />
        <ChoiceCard
          title={"The Fusion — The Bridge"}
          subtitle={"Where code becomes narrative, and narrative becomes code."}
          to="/fusion"
          variant="fusion"
        />
      </section>
    </div>
  );
}
