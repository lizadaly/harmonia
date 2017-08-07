
import bellamy from './bellamy'
import age from './age'
import notes from './notes'
import brooks from './brooks'
import {frag1} from './frags'
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
  }
}
