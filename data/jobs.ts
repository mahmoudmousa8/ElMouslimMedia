export const careerDepartments = [
  "Digital Marketing",
  "Software Development",
  "Mobile Development",
  "UI/UX Design",
  "Cloud and Infrastructure",
  "Customer Support",
  "Sales",
];

export type Vacancy = {
  title: string;
  department: (typeof careerDepartments)[number];
  location: string;
  active: boolean;
  description: string;
};

export const vacancies: Vacancy[] = [];

