export interface Student{
  id: number;
  name: string;
  subjects: Array<string>;
  intro: string;
  marks: number;
}

export const students = [
  {
    id:101,
    name:'Rajesh',
    subjects: ['abc','cde'],
    intro: 'I am Rajesh and I am a great Student.',
    marks: 85
  },
  {
    id:102,
    name:'Amir',
    subjects: ['bgr'],
    intro: 'I am Amir and I am a great Student.',
    marks: 65
  },
  {
    id:103,
    name:'Bob',
    subjects: ['mki','ytr'],
    intro: 'I am Bob and I am a great Student.',
    marks: 91
  }
];
