const authors: { id: string; name: string }[] = [
  { id: '1', name: 'Chinua Achebe' },
  { id: '2', name: 'Wole Soyinka' },
  { id: '3', name: 'Buchi Emecheta' },
  { id: '4', name: 'Chimamanda Ngozi Adichie' },
  { id: '5', name: 'Ben Okri' },
  { id: '6', name: 'Sefi Atta' },
  { id: '7', name: 'Helon Habila' },
  { id: '8', name: 'Ifeoma Okoye' },
  { id: '9', name: 'Nnedi Okorafor' },
  { id: '10', name: 'Akachi Adimora-Ezeigbo' },
];

const books: { id: string; title: string; authorId: string }[] = [
  { id: '1', title: 'Things Fall Apart', authorId: '1' },
  { id: '2', title: 'The Lion and the Jewel', authorId: '2' },
  { id: '3', title: 'The Joys of Motherhood', authorId: '3' },
  { id: '4', title: 'Half of a Yellow Sun', authorId: '4' },
  { id: '5', title: 'The Famished Road', authorId: '5' },
  { id: '6', title: 'Everything Good Will Come', authorId: '6' },
  { id: '7', title: 'Oil on Water', authorId: '7' },
  { id: '8', title: 'Sugar and Swallows', authorId: '8' },
  { id: '9', title: 'Who Fears Death', authorId: '9' },
  { id: '10', title: 'Ropes', authorId: '10' },
];

export { authors, books };