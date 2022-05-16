import type { Experience } from '$lib/types/experience';

export const experiences: Experience[] = [
	{
		employer: 'Knowit',
		title: 'Summer Internship 2020',
		description:
			'Jobbet på SammeVei-prosjektet. Utviklet et administratorpanel for produkteier. Fremvisning av KPI, håndtering av relevant data mm.',
		fromDate: '2020-05',
		toDate: '2020-08',
		tags: [
			{
				name: 'React.js',
				iconName: 'react.svg'
			},
			{
				name: 'TypeScript',
				iconName: 'typescript.svg'
			},
			{
				name: 'Node',
				iconName: 'node.svg'
			},
			{
				name: 'SQL',
				iconName: 'database.svg'
			}
		]
	},
	{
		employer: 'Knowit',
		title: 'Summer Internship 2021',
		description:
			'Jobbet for Vy på prosjektet Traffic Control. Lagde en ny tjeneste som gjorde beregning av hvilke tog som er påvirket ved en infrastruktur-hendelse.',
		fromDate: '2021-05',
		toDate: '2021-10',
		tags: [
			{
				name: 'Kotlin',
				iconName: 'kotlin.svg'
			},
			{
				name: 'AWS',
				iconName: 'aws.svg'
			},
			{
				name: 'Docker',
				iconName: 'Docker.svg'
			},
			{
				name: 'Terraform',
				iconName: 'terraform.svg'
			},
			{
				name: 'Neo4j',
				iconName: 'neo4j.svg'
			}
		]
	},
	{
		employer: 'NTNU',
		title: 'Veileder i Kodeløypa',
		description:
			'Kodeløypa NTNU er en del av realfagløypene, og er et tilbud for skoleklasser ved mellomtrinnet som har lyst til å oppdage programmering.',
		fromDate: '2021-09',
		tags: [
			{
				name: 'Teaching',
				iconName: 'teaching.svg'
			}
		]
	},
	{
		employer: 'NTNU',
		title: 'Læringsassistent i Webteknologi',
		description:
			'Læringsassistent i faget IT2805 - Webteknologi. Emnet har som hensikt å gi en innføring i de grunnleggende teknologiene HTML, CSS og JavaScript. Retter ukentlige innleveringer samt et større gruppeprosjekt. Sitter i tillegg tilgjengelig på sal noen timer i uken for å hjelpe med det som trengs. Assisterer også i øvingsforelesningene der jeg går rundt og hjelper.',
		fromDate: '2019-08',
		toDate: '2021-05',
		tags: [
			{
				name: 'Teaching',
				iconName: 'teaching.svg'
			}
		]
	}
];

export const volunteering: Experience[] = [
	{
		employer: 'Studentersamfundet i Trondhjem',
		title: 'Spritsjef',
		description:
			'Øverste leder i Spritgjengen i KSG v/ Studentersamfundet i Trondhjem. Møteleder blant spritbarsjefene, skiftansvarlig en gang i uken samt representant v/ Driftsmøtet.',
		fromDate: '2020-11',
		toDate: '2021-09',
		tags: [
			{
				name: 'Leadership',
				iconName: 'briefcase.svg'
			},
			{
				name: 'HR',
				iconName: 'hr.svg'
			},
			{
				name: 'Meeting Facilitation',
				iconName: 'meeting.svg'
			},
			{
				name: 'Bartending',
				iconName: 'cocktail.svg'
			}
		]
	},
	{
		employer: 'Studentersamfundet i Trondhjem',
		title: 'Spritbarsjef',
		description:
			'Skiftleder hver helg i 20-årsbarene. Som PR & Konseptansvarlig hadde jeg ansvar for meny- og konseptutvikling i barene.',
		fromDate: '2020-08',
		toDate: '2020-11',
		tags: [
			{
				name: 'HR',
				iconName: 'hr.svg'
			},
			{
				name: 'Bartending',
				iconName: 'cocktail.svg'
			}
		]
	},
	{
		employer: 'Studentersamfundet i Trondhjem',
		title: 'Bartender',
		description:
			'Drinkmiksing, øltapping og generell servering av alkohol og leskedrikker i tillegg til rydding og vasking.',
		fromDate: '2019-01',
		toDate: '2020-08',
		tags: [
			{
				name: 'Bartending',
				iconName: 'cocktail.svg'
			}
		]
	}
];
