
import bellamy from './bellamy'
import age from './age'
import notes from './notes'
import {frag1} from './frags'

export const docs = {
  frag1: {
    author: "XXX",
    title: "Notes from a Journey",
    id: "frag1",
    year: 1880,
    text: frag1,
    type: "frag",
    page: null
  },
  notes: {
    author: "Lynn",
    title: "Lecture 3 notes",
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
  }
}
