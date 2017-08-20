
import bellamy from './bellamy'
import age from './age'
import notes from './notes'
import brooks from './brooks'
import {astrolith1} from './astrolith'
import mizora from './mizora'
import hence from './hence'
import {frag1, frag2, frag3, frag4, frag5, frag6, diagram1} from './frags'
import {paper1, paper2, paper3, paper4} from './newspaper'
import {lynn1} from './lynn'

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
  frag4: {
    author: "", title: "", id: "frag4", year: 1880, text: frag4, type: "frag", page: null
  },
  frag5: {
    author: "", title: "", id: "frag5", year: 1880, text: frag5, type: "frag", page: null
  },
  frag6: {
    author: "", title: "", id: "frag6", year: 1880, text: frag6, type: "frag", page: null
  },
  diagram1:  {
    author: "", title: "", id: "diagram1", year: 1880, text: diagram1, type: "diagram", page: null
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
  paper2: {
    author: "",
    year: "1884",
    title: "",
    id: "paper2",
    text: paper2,
    type: "paper"
  },
  paper3: {
    author: "Together We Shall Shine a Light", year: "1884", title: "Spring, 1884", id: "paper3", text: paper3, type: "paper"
  },
  paper4: {
    author: "Together We Shall Shine a Light", year: "1889", title: "Fall, 1889", id: "paper4", text: paper4, type: "paper"
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
  astrolith1: {
    author: "",
    year: "1990",
    title: "",
    id: "astrolith1",
    page: null,
    text: astrolith1,
    type: null
  },
  mizora: {
    author: "Mary E. Bradley",
    year: "1889",
    title: "Mizora",
    id: "mizora",
    page: "75",
    text: mizora,
    type: "book"
  },
  hence: {
    author: "Mary Griffith",
    year: "1836",
    title: "Three Hundred Years Hence",
    page: "58",
    text: hence,
    type: "book"
  },
  lynn1: {
    author: "August 30, 1999", title: "", id: "lynn1", year: 1999, text: lynn1, type: "notebook", page: null
  }
}
