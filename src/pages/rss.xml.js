import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(){
	return rss({
		title: 'Astro alumno | Blog',
		description: 'Mi viaje de aprendizaje de Astro',
		site: 'https://prova-astro-gpg.netlify.app/',
		items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
		customData: `<language>es</language>`,
	})
}