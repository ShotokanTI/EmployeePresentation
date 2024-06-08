// employee.mock.ts
import type { Employee } from '~/mocks/employee/interfaces/employee.interface';

export const employees: Employee[] = [
  {
    id: 1,
    name: 'John Silva',
    description: 'Full Stack Developer with experience in web and mobile projects.',
    position: 'Full Stack Developer',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 2,
    name: 'Mary Oliveira',
    description: 'UI/UX Designer passionate about creating amazing digital experiences.',
    position: 'UI/UX Designer',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 3,
    name: 'Charles Santos',
    description: 'Marketing Analyst with skills in SEO and content marketing.',
    position: 'Marketing Analyst',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    id: 4,
    name: 'Anna Costa',
    description: 'Software Engineer specialized in mobile development.',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    id: 5,
    name: 'Peter Almeida',
    description: 'Project Manager with experience in leading agile teams.',
    position: 'Project Manager',
    photo: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    id: 6,
    name: 'Fernanda Lima',
    description: 'Information Security Specialist focused on encryption and networks.',
    position: 'Information Security Specialist',
    photo: 'https://randomuser.me/api/portraits/women/6.jpg'
  },
  {
    id: 7,
    name: 'Rafael Mendes',
    description: 'Systems Administrator with experience in Linux and Windows environments.',
    position: 'Systems Administrator',
    photo: 'https://randomuser.me/api/portraits/men/7.jpg'
  },
  {
    id: 8,
    name: 'Juliana Ferreira',
    description: 'Data Scientist with a strong background in machine learning and data analysis.',
    position: 'Data Scientist',
    photo: 'https://randomuser.me/api/portraits/women/8.jpg'
  },
  {
    id: 9,
    name: 'Lucas Rocha',
    description: 'Product Owner with extensive experience in agile methodologies and product management.',
    position: 'Product Owner',
    photo: 'https://randomuser.me/api/portraits/men/9.jpg'
  },
  {
    id: 10,
    name: 'Camila Souza',
    description: 'Frontend Developer specialized in Vue.js and React.',
    position: 'Frontend Developer',
    photo: 'https://randomuser.me/api/portraits/women/10.jpg'
  }
];

export default employees;
