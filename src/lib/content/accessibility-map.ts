import type { ContentSentence } from '$lib/text-translator/types';

export type MapItem = {
	id: string;
	name: ContentSentence;
	// description: ContentSentence;
	generalInfo: ContentSentence | ContentSentence[];
	latitude: number;
	longitude: number;
	googleMapsLink: string;
	'accessibility-information': {
		'overall-rating-1-5': number;
		// text: ContentSentence;
		'specific-issues': {
			name: ContentSentence;
			// description: ContentSentence;
			description: ContentSentence | ContentSentence[];
			images: string[];
		}[];
		'accessibility-features-1-5': {
			parking: number;
			toilets: number;
			paths: number;
			seating: number;
			shelter: number;
		};
	};
};

export const mapData: MapItem[] = [
	{
		id: '1',
		name: {
			en: 'Selmun Family Park',
			mt: "Il-Park tal-Familja f'Selmun"
		},
		// description: {
		// 	en: 'Selmun Family Park is a small public park in the north of Malta. It contains a running track, playgrounds, picnic areas and various sport fields',
		// 	mt: "Il-Park tal-Familja f'Selmun huwa park pubbliku żgħir fit-tramuntana ta' Malta. Fiha pista għal-ġiri, postijiet tal-logħob, żoni għall-'picnic' u diversi kampijiet sportivi."
		// },
		generalInfo: [
			{
				en: `Has additional amneties such as running track, playground, book exchange, ecc ecc`,
				mt: `Hemm faċilitajiet addizzjonali bħal trakka għall-ġiri, post tal-logħob, skambju ta' kotba, eċċ eċċ`
			},
			{
				en: 'Toilets available',
				mt: 'Toilets disponibbli'
			},
			{
				en: 'Not too busy',
				mt: 'Mhux mimli nies wisq'
			},
			{
				en: 'Paths are level and smooth enough',
				mt: 'It-trejqiet huma lixxi u livellati biżżejjed'
			}
		],
		latitude: 35.95556,
		longitude: 14.373796,
		googleMapsLink: 'https://maps.app.goo.gl/hHpNPggGLk3NSAhV8',
		'accessibility-information': {
			'overall-rating-1-5': 2,
			// text: {
			// 	en: 'In general, the park is somewhat accessible, but various issues make the park difficult to navigate for wheelchair users, as well as the general public. That said, many amamenities are available, and the park is a nice place to visit.',
			// 	mt: 'B’mod ġenerali, il-park huwa xi ftit aċċessibbli, iżda diversi problemi jagħmlu l-park diffiċli biex wieħed jimxi fih għal nies bis-siġġijiet tar-roti, kif ukoll għall-pubbliku ġenerali. Apparti min hekk, għandu ħafna faċilitajiet, u l-park huwa post sabiħ biex wieħed iżur.'
			// },
			'specific-issues': [
				{
					name: {
						en: 'Paths',
						mt: 'Trejqiet'
					},
					description: [
						{
							en: 'Paths are narrow - 2-way traffic not possible',
							mt: "It-treqjiet huma dojjoq - traffiku f'żewġ direzzjonijiet mhux possibbli"
						},
						{
							en: 'Paths are bordered by small walls, which greatly limit manouvering space',
							mt: "It-treqjiet huma mdawra b'ħitan żgħar, li jagħmluhom ħafna inqas aċċessibli"
						},
						{
							en: 'Some paths are innaccessable due to big step at entry points',
							mt: 'Xi treqjiet huma inaċċessabbli minħabba tarġa kbira fid-daħla tagħhom'
						}
					],
					// en: 'Most paths are level and smooth enough, however are too narrow for 2-way wheelchair traffic. Paths are also bordered with small walls, which greatly limit manouvering space. Additionally, some paths are completely inaccessable due to big steps at their start or end.',
					// mt: 'Ħafna mit-toroq huma livellati u biżżejjed lixxi, madankollu huma wisq rqiqa għal traffiku ta’ siġġijiet tar-roti f’żewġ direzzjonijiet. It-toroq huma wkoll mdawra b’ħitan żgħar, li jillimitaw b’mod kbir l-aċċess. Barra minn hekk, xi toroq huma kompletament inaċċessibbli minħabba tarġi kbar fil-bidu jew fit-tmiem tagħhom.'
					images: [
						'/accessible-map-imgs/selmun-park/path1.jpg',
						'/accessible-map-imgs/selmun-park/path2.jpg',
						'/accessible-map-imgs/selmun-park/path3.jpg',
						'/accessible-map-imgs/selmun-park/path4.jpg'
					]
				},
				{
					name: {
						en: 'Toilets',
						mt: 'Toilets'
					},
					description: [
						{
							en: `Toilets are in a very bad shape`,
							mt: `It-toilets jinsabu f'kundizzjoni ħażina ħafna`
						},
						{
							en: `Entry to toilets has as step - not accessabile`,
							mt: `Id-daħla tat-toilets għandha tarġa - mhux aċċessibbli`
						}
						// en: 'Unfortunately, the toilets at the park are in very bad shape and in need of severe repair. Additionally, the toilet area has a step at its entrance, making it inaccessible for wheelchair users.',
						// mt: 'Sfortunatament, it-toilets fil-park jinsabu f’kundizzjoni ħażina ħafna u jeħtieġu manutenzjoni severa. Barra minn hekk, tat-toilets għandhom tarġa fil-daħla, li tagħmilhom inaċċessibbli għal nies bis-siġġijiet tar-roti.'
					],
					images: [
						'/accessible-map-imgs/selmun-park/toilet1.jpg',
						'/accessible-map-imgs/selmun-park/toilet2.jpg'
					]
				},
				{
					name: {
						en: 'Picnic Area',
						mt: 'Zona tal-Picnic'
					},
					description: [
						// en: 'While the Picnic Area is accessible, the tables are not wheelchair accessible, being too high and narrow for wheelchair users.',
						// mt: "Filwaqt li l-żona tal-Picnic hi aċċessibbli, l-imwejjed m'humiex aċċessibbli għan-nies bis-siġġijiet tar-roti, peress li huma għoljin u rqiqa wisq."
						{
							en: 'Tables are not usable by wheelchair users',
							mt: 'L-imwejjed ma jistgħux jintużaw minn nies bis-siġġijiet tar-roti'
						},
						{
							en: 'Various hazardous areas',
							mt: 'Diversi żoni perikolużi'
						}
					],
					images: [
						'/accessible-map-imgs/selmun-park/picnic1.jpg',
						'/accessible-map-imgs/selmun-park/danger-area1.jpg',
						'/accessible-map-imgs/selmun-park/danger-area2.jpg'
					]
				},
				{
					name: {
						en: 'Shelter',
						mt: 'Kenn'
					},
					description: {
						en: 'The park has no shelter.',
						mt: "Il-'park' ma għandu l-ebda kenn."
					},
					images: []
				},
				// {`
				// 	name: {
				// 		en: 'Hazardous Areas',
				// 		mt: 'Żoni Perikolużi'
				// 	},
				// 	description: {
				// 		en: 'There are various areas in the park that are hazardous for wheelchair users, such as open grassy areas and step edges. These areas are not properly marked, and pose a danger to wheelchair users as well as the general public.',
				// 		mt: 'Hemm diversi żoni fil-park li huma perikolużi għan-nies bis-siġġijiet tar-roti, bħal żoni miftuħa bil-ħaxix u tarġi. Dawn iż-żoni mhumiex immarkati b’mod xieraq, u joffru periklu kemm għan-nies bis-siġġijiet tar-roti kif ukoll għall-pubbliku ġenerali.'
				// 	},
				// 	images: [
				// 		'/accessible-map-imgs/selmun-park/danger-area1.jpg',
				// 		'/accessible-map-imgs/selmun-park/danger-area2.jpg'
				// 	]
				// },`
				{
					name: {
						en: 'Parking',
						mt: 'Parkeġġ'
					},
					description: {
						en: 'No blue badge parkings',
						mt: "L-ebda parkeġġ speċjali għal persuni b'diżabilità"
					},
					images: []
				}
			],
			'accessibility-features-1-5': {
				parking: 2,
				toilets: 2,
				paths: 3,
				seating: 2,
				shelter: 1
			}
		}
	}
];
