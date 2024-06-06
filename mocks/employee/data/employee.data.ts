// employee.mock.ts
import type { Employee } from '~/mocks/employee/interfaces/employee.interface';

export const employees: Employee[] = [
  {
    id: 1,
    name: 'João Silva',
    description: 'Desenvolvedor Full Stack com experiência em projetos web e mobile.',
    position: 'Desenvolvedor Full Stack',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 2,
    name: 'Maria Oliveira',
    description: 'Designer de UI/UX apaixonada por criar experiências digitais incríveis.',
    position: 'Designer UI/UX',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 3,
    name: 'Carlos Santos',
    description: 'Analista de Marketing com habilidades em SEO e marketing de conteúdo.',
    position: 'Analista de Marketing',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    id: 4,
    name: 'Ana Costa',
    description: 'Engenheira de Software especializada em desenvolvimento mobile.',
    position: 'Engenheira de Software',
    photo: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    id: 5,
    name: 'Pedro Almeida',
    description: 'Gerente de Projetos com experiência em liderança de equipes ágeis.',
    position: 'Gerente de Projetos',
    photo: 'https://randomuser.me/api/portraits/men/5.jpg'
  }
];

export default employees;