export const getFAQs = async () => {
	const faqSections = [
		{
			title: "Soalan popular",
			faqs: [
				{
					question: "Adakah penginapan saya sesuai untuk Airbnb?",
					answer: "Tetamu Airbnb berminat dengan semua jenis penginapan—bilik tambahan, apartmen, rumah, rumah percutian, malah rumah pokok.",
				},
				{
					question: "Adakah saya perlu menjadi hos sepanjang masa?",
					answer: "Tidak. Anda yang mengawal kalendar anda. Anda boleh menjadi hos sekali dalam setahun, beberapa malam dalam sebulan, atau lebih kerap.",
				},
				{
					question: "Apakah yuran Airbnb?",
					answer: "Mencipta penyenaraian adalah percuma, dan Airbnb biasanya mengutip yuran perkhidmatan sebanyak 3% daripada jumlah kecil tempahan setelah anda dibayar. Di kebanyakan kawasan, Airbnb mengutip dan membayar cukai jualan dan pelancongan secara automatik bagi pihak anda. <a href='#'>Ketahui lebih lanjut mengenai yuran.</a>",
				},
			],
		},
		{
			title: "Asas Menjadi Hos",
			faqs: [
				{
					question: "Bagaimana caranya untuk bermula?",
					answer: "Anda boleh mencipta penyenaraian dalam beberapa langkah sahaja, semuanya mengikut rentak anda. Mulakan dengan memberitahu kami tentang kediaman anda, ambil beberapa gambar, dan tambah butiran tentang keunikannya. <a href='#'>Mulakan penyenaraian anda.</a>",
				},
				{
					question:
						"Bagaimanakah cara mempersiapkan kediaman saya untuk tetamu?",
					answer: "Pastikan penginapan anda bersih, tidak berselerak dan semuanya berfungsi dengan betul. Barang-barang seperti cadar bersih dan peralatan mandian lengkap membantu mewujudkan tempat penginapan yang selesa dan menarik. <a href='#'>Lihat panduan kami untuk mempersiapkan penginapan anda.</a>",
				},
				{
					question:
						"Bagaimana saya dilindungi apabila saya menjadi hos?",
					answer: "AirCover untuk Hos memberikan perlindungan menyeluruh setiap kali anda menjadi hos penginapan anda di Airbnb. <a href='#'>Ketahui lebih lanjut mengenai AirCover untuk Hos dan perkara yang disertakan.</a>",
				},
				{
					question: "Ada tip untuk menjadi hos yang hebat?",
					answer: "Daripada berkongsi senarai destinasi tempat kegemaran anda kepada menjawab mesej tetamu dengan cepat, terdapat banyak cara untuk menjadi hos yang cemerlang. <a href='#'>Dapatkan lebih banyak tip menjadi hos.</a>",
				},
			],
		},
		{
			title: "Dasar & peraturan",
			faqs: [
				{
					question:
						"Adakah terdapat sebarang peraturan yang terpakai di bandar saya?",
					answer: "Sesetengah kawasan mempunyai undang-undang dan peraturan untuk menjadi hos kediaman anda. Penting untuk anda memahami undang-undang yang mungkin terpakai kepada lokasi anda. Selain itu, bergantung pada tempat tinggal anda, anda mungkin perlu menyemak dengan HOA anda, membaca perjanjian pajakan anda, atau memaklumkan tuan rumah atau jiran anda tentang rancangan anda untuk menjadi hos di Airbnb. <a href='#''>Ketahui lebih lanjut mengenai menjadi hos yang bertanggungjawab.</a>",
				},
				{
					question: "Bagaimana jika saya ada soalan lain?",
					answer: "Hos tempatan adalah sumber maklumat dan pandangan yang hebat. Kami boleh menghubungkan anda dengan hos Airbnb yang berpengalaman di kawasan anda yang mungkin boleh menjawab soalan tambahan. <a href='#''>Tanya hos.</a>",
				},
			],
		},
	];

	return faqSections;
};
