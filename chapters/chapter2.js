const React = require('react')
import { Map, List, FromInventory, RenderSection, NextChapter, AllButSelection} from 'windrift'

export default ({currentSection, inventory}) => {
  const sections = [
    <section>
      <h2>Chapter Two</h2>

      <p>
        There‘s really nothing here, just an example of having a second chapter.
      </p>

      <p>
        More documentation is available at the <a href="https://github.com/lizadaly/windrift-starter">Github repo</a> for this project.
    </p>
    </section>
  ]
  return <RenderSection currentSection={currentSection} sections={sections} />
}
