
import bellamy from './bellamy'
import age from './age'
import notes from './notes'
import brooks from './brooks'
import astrolith from './astrolith'
import {frag1, frag2, frag3} from './frags'
import {paper1} from './newspaper'

export const docs = {
  frag1: {
    author: "",
    title: "",
    id: "frag1",
    year: 1880,
    text: frag1,
    type: "frag",
    page: null
  },
  frag2: {
    author: "", title: "", id: "frag2", year: 1880, text: frag2, type: "frag", page: null
  },
  frag3: {
    author: "", title: "", id: "frag3", year: 1880, text: frag3, type: "frag", page: null
  },

  notes: {
    author: "Lynn",
    title: "Draft syllabus",
    id: "notes",
    year: 1980,
    page: null,
    text: notes,
    type: null
  },
  bellamy: {
    author: "Edward Bellamy",
    title: "Looking Backward",
    id: "bellamy",
    year: 1888,
    page: 28,
    text: bellamy,
    type: "book"
  },
  age1: {
    author: "W. H. Hudson",
    title: "A Crystal Age",
    id: "age",
    year: 1887,
    page: 1,
    text: age,
    type: "book"
  },
  paper1: {
    author: "Together We Shall Shine a Light",
    year: "1889",
    title: "Summer, 1889",
    id: "paper1",
    text: paper1,
    type: "paper"
  },
  brooks: {
    author: "Byron A. Brooks",
    year: "1893",
    title: "Earth Revisited",
    id: "brooks",
    page: 40,
    text: brooks,
    type: "book"
  },
  astrolith: {
    author: "",
    year: "1990",
    title: "",
    id: "astrolith",
    page: null,
    text: astrolith,
    type: null

  }
}
