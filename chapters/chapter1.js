const React = require('react')
import { Map, List, RenderSection, FromInventory, NextChapter} from 'windrift'



export default ({currentSection, inventory}) => {
  const sections = [
    <section>
      <style>{`/* Some styles for this demo. Delete this when starting your own project. */
        .game-text { margin: 1rem; padding: 1rem; font-size: 1rem; border-left: 1px dotted gray; font-family: Georgia; color: #485C5A }
        pre { margin: .5rem; padding: .5rem; font-family: Consolas, Menlo, monospace; background: rgb(240,240,240)}
      `}
      </style>
      <h2>Windrift Starter</h2>
      <p>
        Welcome to the starter application for <a href="https://github.com/lizadaly/windrift/">Windrift</a>, a framework
        for writing interactive stories. The source code for this demo is available in
        the <a href="https://github.com/lizadaly/windrift-starter">windrift-starter</a> repository.
      </p>
      <h4>Read me first</h4>
      <p>
        If you have not yet read the <a href="https://github.com/lizadaly/windrift">Windrift core README</a>,
        you should do that first! It explains the high level design of Windrift as well as the key
        concepts you’ll need to follow along with the rest of this tutorial.
      </p>
      <p>
        This page will walk through some of the most common features of a Windrift story,
        and can be used as a way to bootstrap your own story.
      </p>
      <h4>A List of two choices</h4>
      <p>
        You can choose an item, and both items will remain displayed:
      </p>
      <pre>{`<List expansions={[["dogs", "cats"], ["dogs", "cats"]}} tag="animal" conjunction="or"/>`}</pre>

      <p className="game-text">
        Do you prefer <List expansions={[["dogs", "cats"], ["dogs", "cats"]]} tag="animal" conjunction="or"/>?
      </p>
    </section>,
    <section>
      <p>To display the user‘s response, just evaluate the inventory value in the markup directly:</p>

      <pre>{`<p>Hmm, {inventory.animal}, really?</p>`}</pre>
      <p className="game-text">
        Hmm, {inventory.animal}, really?
      </p>

      <h4>Doing transformations on responses</h4>
      <p>
        If you want to modify the user’s response somehow, like by pluralizing it,
        you can use the {`<FromInventory>`} component to do so safely (even if the
        value wasn’t yet set by the user):
      </p>
      <pre>{`One <FromInventory from={inventory.animal} onLoad={(from) => from.substring(0, from.length -1)} />, two{' '}
{inventory.animal}. <FromInventory from={inventory.animal} onLoad={(from) => from.charAt(0).toUpperCase() + from.slice(1)} /> are great.
`}</pre>
      <p className="game-text">
        One <FromInventory from={inventory.animal} onLoad={(from) => from.substring(0, from.length -1)} />, two{' '}
        {inventory.animal}. <FromInventory from={inventory.animal} onLoad={(from) => from.charAt(0).toUpperCase() + from.slice(1)} /> are great.
      </p>
      <p>
        If you expect to do a lot of these transformations, you could make a function or component
        to wrap them:
      </p>
      <pre>{`YOU MUST REALLY LOVE <AllCaps text={inventory.animal} /> HUH`}</pre>

      <p className="game-text">
        YOU MUST REALLY LOVE <AllCaps text={inventory.animal} /> HUH
      </p>

      <h4>Expanding in-place for effect</h4>
      <pre>{`<List expansions={["acceptable", "understandable", "admirable"]} tag="adj1" />`}</pre>
      <p className="game-text">
        I suppose that’s an <List expansions={["acceptable", "understandable", "admirable"]} tag="adj1" /> choice...
      </p>
    </section>,
    <section>
      <h4>Pick one, retain the answer</h4>
      <pre>{`<List expansions={[["Vladimir", "Xiùlán", "Ikiaq"], "_last"]} tag="name1" conjunction="or" />`}</pre>
      <p className="game-text">
        What would you like to name your pet {inventory.animal ? inventory.animal.substring(0, inventory.animal.length -1): null}:{' '}
        <List expansions={[["Vladimir", "Xiùlán", "Ikiaq"], "_last"]} tag="name1" conjunction="or" />
      </p>
    </section>,
  <section>
    <h4>Evaluating two different choices</h4>

    <pre>{`<List expansions={[["Vladimir", "Xiùlán", "Ikiaq"], "_last"]} tag="name2" conjunction="or" />`}</pre>
    
    <p className="game-text">If you had two {inventory.animal}, what would you name the other one:{' '}
      <List expansions={[["Vladimir", "Xiùlán", "Ikiaq"], "_last"]} tag="name2" conjunction="or" />
    </p>
  </section>,
  <section>

    <p>
      You can evaluate inventory values in ordinary JavaScript directly:
    </p>

    <pre>{`Looks like you’ll have two {inventory.animal} named
    { inventory.name1 === inventory.name2 ? "the same" : "differently" }.`}</pre>

    <p className="game-text">
      Looks like you’ll have two {inventory.animal} named { inventory.name1 === inventory.name2 ? "the same" : "differently" }.
    </p>

    <h4>Using Maps</h4>

    <p>
      Maps can be used to simply return canned responses to choices:
    </p>

    <pre>{`<Map from={inventory.name2} to={{
      vladimir: " that’s a fine Russian name",
      xiùlán: " that’s a fine Chinese name",
      ikiaq: " that’s a fine Inuit name"
    }}/>`}</pre>

    <p className="game-text">
      {inventory.name2}:
      <Map from={inventory.name2} to={{
        vladimir: " that’s a fine Russian name",
        xiùlán: " that’s a fine Chinese name",
        ikiaq: " that’s a fine Inuit name"
      }}/>.
    </p>

    <p>
      But since Maps can return markup themselves, they can also be used to build up further choices:
    </p>

    <pre>{`<Map from={inventory.name2} to={{
      vladimir: <p>Since you like Russian names, why not pick a second one from this set:{' '}
      <List expansions={[["Alexei", "Darya", "Elena"], "_last"]} tag="name3" conjunction="or" /></p>,
      xiùlán: <p>Since you like Chinese names, why not pick a second one from this set:{' '}
      <List expansions={[["Li Jing", "Zhang Yan", "Wang Jie"], "_last"]} tag="name3" conjunction="or" /></p>,
      ikiaq: <p>Since you like Inuit names, why not pick a second one from this set:{' '}
      <List expansions={[["Naaqtuuq", "Pakak", "Toklo"], "_last"]} tag="name3" conjunction="or" /></p>,
    }}/>`}</pre>

    <div className="game-text">
      <Map from={inventory.name2} to={{
        vladimir: <p>Since you like Russian names, why not pick a second one from this set:{' '}
          <List expansions={[["Alexei", "Darya", "Elena"], "_last"]} tag="name3" conjunction="or" /></p>,
        xiùlán: <p>Since you like Chinese names, why not pick a second one from this set:{' '}
          <List expansions={[["Li Jing", "Zhang Yan", "Wang Jie"], "_last"]} tag="name3" conjunction="or" /></p>,
        ikiaq: <p>Since you like Inuit names, why not pick a second one from this set:{' '}
          <List expansions={[["Naaqtuuq", "Pakak", "Toklo"], "_last"]} tag="name3" conjunction="or" /></p>,
      }}/>
    </div>

  </section>,
  <section>
    <p>
      For more advanced uses of Maps and Lists, see the <a href="https://lizadaly.github.io/windrift/examples/advanced/">Advanced demo</a> and <a href="https://github.com/lizadaly/windrift/blob/master/examples/advanced/chapters/chapter1.js">sample code</a>.
    </p>
    <p className="game-text">
      Great, you can now begin your story with your two {inventory.animal}, {inventory.name1} and {inventory.name3}.
    </p>

    <NextChapter chapter={2}/>

  </section>
  ]
  return <RenderSection currentSection={currentSection} sections={sections} />
}

const AllCaps = ({text}) => (
  <FromInventory from={text} onLoad={(text) => text.toUpperCase()} />
)
