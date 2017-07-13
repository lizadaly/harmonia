
import bellamy from './bellamy'
import age from './age'
import notes from './notes'

export const docs = {
  notes01: {
    author: "Lynn",
    title: "Lecture 3 notes",
    id: "notes01",
    year: 1980,
    page: null,
    text: notes.notes01,
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
