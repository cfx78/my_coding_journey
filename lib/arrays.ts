import { Technologies, Stack, Category, Project } from '@prisma/client';

export const technologies: Technologies[] = [
	Technologies.MONGODB,
	Technologies.NEXT,
	Technologies.PRISMA,
	Technologies.REACT,
	Technologies.TAILWIND,
	Technologies.TYPESCRIPT,
];

export const stacks: Stack[] = [Stack.FULLSTACK, Stack.FRONTEND, Stack.BACKEND];

export const categories: Category[] = [Category.PERSONAL, Category.PROJECT];

export const projects: Project[] = [
	Project.BLOG,
	Project.BUGTRACKER,
	Project.ECOMMERCE,
	Project.PORTFOLIO,
	Project.SOCIALMEDIA,
];
