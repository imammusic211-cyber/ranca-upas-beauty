const regularTentTiers = [
    { name: 'Reguler', summary: 'Pilihan praktis dengan tenda, matras, lampu emergency, serta jasa pasang dan bongkar.', summaryEn: 'A practical setup with a tent, sleeping mat, emergency light, and setup service.', features: ['Tenda', 'Matras', 'Lampu Emergency', 'Jasa Pasang', 'Bongkar Tenda'] },
    { name: 'Medium', summary: 'Lebih hangat dengan sleeping bag dan api unggun, lengkap dengan matras, lampu, serta jasa pasang-bongkar.', summaryEn: 'Stay warm with a sleeping bag and campfire, plus a sleeping mat, emergency light, and setup service.', features: ['Tenda', 'Matras', 'Sleeping Bag', 'Lampu Emergency', 'Api Unggun', 'Jasa Pasang', 'Bongkar Tenda'] },
    { name: 'Premium', summary: 'Lebih nyaman dengan sleeping bag, kasur karpet, bantal, api unggun, serta lampu dan layanan pasang-bongkar.', summaryEn: 'Enjoy extra comfort with a sleeping bag, carpet mattress, pillow, campfire, emergency light, and setup service.', features: ['Tenda', 'Matras', 'Sleeping Bag', 'Lampu Emergency', 'Kasur Karpet', 'Bantal', 'Api Unggun', 'Jasa Pasang', 'Bongkar Tenda'] },
    { name: 'Rimba', summary: 'Perlengkapan lengkap dengan kasur karpet, bantal, alat masak, sleeping bag, lampu, api unggun, dan layanan pasang-bongkar.', summaryEn: 'A complete camp setup with a carpet mattress, pillow, cooking kit, sleeping bag, emergency light, and campfire.', features: ['Tenda', 'Matras', 'Sleeping Bag', 'Lampu Emergency', 'Kasur Karpet', 'Bantal', 'Kompor', 'Nesting', 'Gas', 'Api Unggun', 'Jasa Pasang', 'Bongkar Tenda'] }
];

const regularTentCapacities = [
    {
        capacity: '2 Orang',
        dimensions: '2X2 Meter',
        photo: 'images/paket tenda rancaupas/tenda reguler/kapasitas 2 orang.....jpeg',
        prices: { Reguler: 'Rp 120.000', Medium: 'Rp 210.000', Premium: 'Rp 260.000', Rimba: 'Rp 320.000' }
    },
    {
        capacity: '4 Orang',
        dimensions: '2,5X2,5 Meter',
        photo: 'images/paket tenda rancaupas/tenda reguler/kapasitas 4 orang.jpeg',
        prices: { Reguler: 'Rp 200.000', Medium: 'Rp 305.000', Premium: 'Rp 355.000', Rimba: 'Rp 415.000' }
    },
    {
        capacity: '6 Orang',
        dimensions: '3X2,5 Meter',
        photo: 'images/paket tenda rancaupas/tenda reguler/kapasitas 6 orang.jpeg',
        prices: { Reguler: 'Rp 240.000', Medium: 'Rp 375.000', Premium: 'Rp 475.000', Rimba: 'Rp 535.000' }
    },
    {
        capacity: '12 Orang',
        dimensions: '6X2,5 Meter',
        photo: 'images/paket tenda rancaupas/tenda reguler/kapasitas 12 orang.jpeg',
        prices: { Reguler: 'Rp 320.000', Medium: 'Rp 565.000', Premium: 'Rp 765.000', Rimba: 'Rp 825.000' }
    }
];

const regularTentPackages = regularTentCapacities.flatMap((tent) => regularTentTiers.map((tier) => ({
    name: `Tenda ${tier.name} ${tent.capacity}`,
    tier: tier.name,
    price: tent.prices[tier.name],
    capacity: tent.capacity,
    note: `${tier.summary} Tenda double layer ${tent.dimensions}, kapasitas ${tent.capacity}.`,
    noteEn: `${tier.summaryEn} Double-layer tent, ${tent.dimensions}, for ${tent.capacity.replace(' Orang', ' people')}.`,
    photo: tent.photo,
    features: tier.features
})));

const packageData = {
    'tenda-reguler': regularTentPackages,
    'paket-kasur-reguler': [
        { 
            name: 'Paket Kasur Arpenaz 4.0', 
            price: 'Rp 350.000', 
            capacity: '4 Orang', 
            note: 'Tidur lebih nyaman dengan tenda Arpenaz 4.0, 2 kasur, 4 sleeping bag, lampu, dan layanan bongkar pasang.',
            photo: 'images/paket tenda rancaupas/apernaz 4.0.jpeg',
            features: ['Tenda Arpenaz 4.0', '2 Kasur Unk 4 Orang', '4 Sleeping Bag', 'Lampu', 'Bongkar Pasang']
        },
        { 
            name: 'Paket Kasur Mandala', 
            price: 'Rp 350.000', 
            capacity: '4 Orang', 
            note: 'Nikmati tenda Mandala dengan 2 kasur, 4 sleeping bag, lampu, dan layanan bongkar pasang.',
            photo: 'images/paket tenda rancaupas/mandala.jpeg',
            features: ['Tenda Mandala', '2 Kasur Unk 4 Orang', '4 Sleeping Bag', 'Lampu', 'Bongkar Pasang']
        },
        { 
            name: 'Paket Kasur Arpenaz 4.1', 
            price: 'Rp 400.000', 
            capacity: '4 Orang', 
            note: 'Tenda Arpenaz 4.1 untuk 4 orang, lengkap dengan 2 kasur, 4 sleeping bag, lampu, dan bongkar pasang.',
            photo: 'images/paket tenda rancaupas/arvenaz 4.1.jpeg',
            features: ['Tenda Arpenaz 4.1', '2 Kasur Unk 4 Orang', '4 Sleeping Bag', 'Lampu', 'Bongkar Pasang']
        }
    ],
    'paket-matras-reguler': [
        {
            name: 'Paket Matras Arpenaz 4.0',
            price: 'Rp 275.000',
            capacity: '4 Orang',
            note: 'Tenda Arpenaz 4.0 dengan 4 matras, 4 sleeping bag, lampu, dan layanan bongkar pasang. Tiket dan area camp belum termasuk.',
            photo: 'images/paket tenda rancaupas/apernaz 4.0.jpeg',
            features: ['Tenda Arpenaz 4.0', '4 Matras', '4 Sleeping Bag', 'Lampu', 'Bongkar Pasang']
        },
        {
            name: 'Paket Matras Mandala',
            price: 'Rp 250.000',
            capacity: '4 Orang',
            note: 'Tenda Mandala untuk 4 orang, dilengkapi 4 matras, 4 sleeping bag, lampu, dan bongkar pasang. Tiket dan area camp belum termasuk.',
            photo: 'images/paket tenda rancaupas/mandala.jpeg',
            features: ['Tenda Mandala', '4 Matras', '4 Sleeping Bag', 'Lampu', 'Bongkar Pasang']
        },
        {
            name: 'Paket Matras Charly',
            price: 'Rp 325.000',
            capacity: '6 Orang',
            note: 'Tenda Charly untuk 6 orang dengan 6 matras, 6 sleeping bag, lampu, dan bongkar pasang. Tiket dan area camp belum termasuk.',
            photo: 'images/paket tenda rancaupas/chally.jpeg',
            features: ['Tenda Charly', '6 Matras', '6 Sleeping Bag', 'Lampu', 'Bongkar Pasang']
        }
    ],
    'paket-matras-lengkap': [
        { 
            name: 'Paket Matras Lengkap Arpenaz 4.0', 
            price: 'Rp 375.000', 
            capacity: '4 Orang', 
            note: 'Paket siap camping dengan 4 matras, 4 sleeping bag, lampu, meja-kursi, flysheet, kompor, dan gas. Tiket dan area camp belum termasuk.',
            photo: 'images/paket tenda rancaupas/apernaz 4.0.jpeg',
            features: ['Tenda Arpenaz 4.0', '4 Matras', '4 Sleeping Bag', 'Lampu', '4 Kursi + 1 Meja', 'Flysheet 3x4', 'Kompor + Gas', 'Bongkar Pasang']
        },
        { 
            name: 'Paket Matras Lengkap Arpenaz 4.1', 
            price: 'Rp 450.000', 
            capacity: '4 Orang', 
            note: 'Tenda Arpenaz 4.1 dengan 4 matras, sleeping bag, meja-kursi, flysheet, kompor, dan gas. Tiket dan area camp belum termasuk.',
            photo: 'images/paket tenda rancaupas/arvenaz 4.1.jpeg',
            features: ['Tenda Arpenaz 4.1', '4 Matras', '4 Sleeping Bag', 'Lampu', '4 Kursi + 1 Meja', 'Flysheet 3x4', 'Kompor + Gas', 'Bongkar Pasang']
        },
        { 
            name: 'Paket Matras Lengkap Arpenaz 4.2', 
            price: 'Rp 475.000', 
            capacity: '4 Orang', 
            note: 'Tenda Arpenaz 4.2 lengkap dengan matras, sleeping bag, meja-kursi, flysheet, kompor, dan gas. Tiket dan area camp belum termasuk.',
            photo: 'images/paket tenda rancaupas/arvenaz 4.2.jpeg',
            features: ['Tenda Arpenaz 4.2', '4 Matras', '4 Sleeping Bag', 'Lampu', '4 Kursi + 1 Meja', 'Flysheet 3x4', 'Kompor + Gas', 'Bongkar Pasang']
        }
    ],
    'paket-kasur-lengkap': [
        { 
            name: 'Paket Kasur Lengkap Arpenaz 4.0', 
            price: 'Rp 450.000', 
            capacity: '4 Orang', 
            note: 'Kenyamanan ekstra dengan 2 kasur, 4 sleeping bag, lampu, meja-kursi, flysheet, kompor gas, dan bongkar pasang. Tiket belum termasuk.',
            photo: 'images/paket tenda rancaupas/apernaz 4.0.jpeg',
            features: ['Tenda Arpenaz 4.0 / Mandala', '2 Kasur Unk 4 Orang', '4 Sleeping Bag', 'Lampu', '4 Kursi + 1 Meja', 'Flysheet 3x4', 'Kompor Gas', 'Bongkar Pasang']
        },
        { 
            name: 'Paket Kasur Lengkap Arpenaz 4.1', 
            price: 'Rp 550.000', 
            capacity: '4 Orang', 
            note: 'Tenda Arpenaz 4.1 dengan kasur dan bantal, sleeping bag, lampu, meja-kursi, flysheet, serta kompor gas. Termasuk tiket camp 4 orang.',
            photo: 'images/paket tenda rancaupas/arvenaz 4.1.jpeg',
            features: ['Tenda Arpenaz 4.1', '2 Kasur Unk 4 Orang + 2 Bantal', '4 Sleeping Bag', 'Lampu', '4 Kursi + 1 Meja', 'Flysheet 3x4', 'Kompor Gas', 'Bongkar Pasang']
        },
        { 
            name: 'Paket Kasur Lengkap Arpenaz 4.2', 
            price: 'Rp 600.000', 
            capacity: '4 Orang', 
            note: 'Tenda Arpenaz 4.2 lengkap dengan kasur dan bantal, sleeping bag, lampu, meja-kursi, flysheet, serta kompor gas. Termasuk tiket camp 4 orang.',
            photo: 'images/paket tenda rancaupas/arvenaz 4.2.jpeg',
            features: ['Tenda Arpenaz 4.2', '2 Kasur Unk 4 Orang + 2 Bantal', '4 Sleeping Bag', 'Lampu', '4 Kursi + 1 Meja', 'Flysheet 3x4', 'Kompor +Gas', 'Bongkar Pasang']
        }
    ],
    'paket-estetik': [
        { 
            name: 'Paket Estetik Landwolf / Eclipse', 
            price: 'Rp 700.000', 
            capacity: '4 Orang', 
            note: 'Suasana estetik dengan kasur busa, meja-kursi, 2 lampu, matras, kompor gas, dan bongkar pasang. Tiket dan area camp belum termasuk.',
            photo: 'images/paket tenda rancaupas/landwolf eclipse.jpeg',
            features: ['Kasur Busa', '4 Kursi + 1 Meja', '2 Lampu', 'Matras', 'Kompor + Gas', 'Bongkar Pasang']
        },
        { 
            name: 'Paket Estetik Naturehike V13', 
            price: 'Rp 850.000', 
            capacity: '4 Orang', 
            note: 'Camping nyaman dan estetik dengan kasur busa, meja-kursi, 2 lampu, matras, kompor gas, dan bongkar pasang. Tiket dan area camp belum termasuk.',
            photo: 'images/paket tenda rancaupas/naturehike v13.jpeg',
            features: ['Kasur Busa', '4 Kursi + 1 Meja', '2 Lampu', 'Matras', 'Kompor + Gas', 'Bongkar Pasang']
        }
    ]
};

const priceListData = [
    { name: 'Reguler', price: 'Rp 180.000', accent: 'reguler', features: ['Tenda 2 Orang', 'Matras dasar', 'Lampu roaming', 'Area parkir'] },
    { name: 'Medium', price: 'Rp 260.000', accent: 'medium', features: ['Tenda 4 Orang', 'Kasur nyaman', 'Selimut + bantal', 'Akses toilet'] },
    { name: 'Premium', price: 'Rp 420.000', accent: 'premium', features: ['Tenda 6 Orang', 'Fasilitas lengkap', 'Area lebih luas', 'Sambutan tim support'] }
];

const packageNotesEn = {
    'Paket Kasur Arpenaz 4.0': 'Sleep comfortably in an Arpenaz 4.0 tent with two mattresses, four sleeping bags, a lamp, and setup service.',
    'Paket Kasur Mandala': 'Enjoy a Mandala tent with two mattresses, four sleeping bags, a lamp, and setup service.',
    'Paket Kasur Arpenaz 4.1': 'An Arpenaz 4.1 tent for four, with two mattresses, four sleeping bags, a lamp, and setup service.',
    'Paket Matras Arpenaz 4.0': 'An Arpenaz 4.0 tent with four mats, four sleeping bags, a lamp, and setup service. Tickets and campsite fees are not included.',
    'Paket Matras Mandala': 'A Mandala tent for four with four mats, four sleeping bags, a lamp, and setup service. Tickets and campsite fees are not included.',
    'Paket Matras Charly': 'A Charly tent for six with six mats, six sleeping bags, a lamp, and setup service. Tickets and campsite fees are not included.',
    'Paket Matras Lengkap Arpenaz 4.0': 'A ready-to-camp setup with four mats, four sleeping bags, a lamp, table and chairs, flysheet, stove, and gas. Tickets and campsite fees are not included.',
    'Paket Matras Lengkap Arpenaz 4.1': 'An Arpenaz 4.1 tent with four mats, sleeping bags, table and chairs, flysheet, stove, and gas. Tickets and campsite fees are not included.',
    'Paket Matras Lengkap Arpenaz 4.2': 'An Arpenaz 4.2 tent with mats, sleeping bags, table and chairs, flysheet, stove, and gas. Tickets and campsite fees are not included.',
    'Paket Kasur Lengkap Arpenaz 4.0': 'Extra comfort with two mattresses, four sleeping bags, a lamp, table and chairs, flysheet, gas stove, and setup service. Tickets are not included.',
    'Paket Kasur Lengkap Arpenaz 4.1': 'An Arpenaz 4.1 tent with mattresses and pillows, sleeping bags, a lamp, table and chairs, flysheet, and gas stove. Includes camping tickets for four.',
    'Paket Kasur Lengkap Arpenaz 4.2': 'An Arpenaz 4.2 tent with mattresses and pillows, sleeping bags, a lamp, table and chairs, flysheet, and gas stove. Includes camping tickets for four.',
    'Paket Estetik Landwolf / Eclipse': 'Create a stylish campsite with a foam mattress, table and chairs, two lights, a mat, gas stove, and setup service. Tickets and campsite fees are not included.',
    'Paket Estetik Naturehike V13': 'Enjoy a stylish, comfortable camp with a foam mattress, table and chairs, two lights, a mat, gas stove, and setup service. Tickets and campsite fees are not included.'
};

const translations = {
    'Beranda': 'Home',
    'Tentang': 'About',
    'Aktivitas': 'Activities',
    'Paket Tenda': 'Tent Packages',
    'Kontak': 'Contact',
    'Kami melayani penyewaan perlengkapan camping: tenda, matras, kasur, dan kebutuhan lainnya untuk berkemah lebih nyaman.': 'We provide camping equipment rentals, including tents, sleeping mats, mattresses, and more for a comfortable outdoor stay.',
    'Reservasi Sekarang': 'Book Now',
    'Tentang Kami': 'About Us',
    'Kenapa': 'Why',
    'Nikmati pengalaman camping terbaik di tengah hamparan alam hijau, udara pegunungan yang sejuk, serta suasana yang menenangkan. Ranca Upas menjadi destinasi favorit untuk gathering, family outing, outbound, dan team building perusahaan.': 'Enjoy a memorable camping experience surrounded by lush landscapes, cool mountain air, and a peaceful atmosphere. Ranca Upas is a favorite destination for group gatherings, family outings, outdoor activities, and corporate team building.',
    'Area camping luas, penangkaran rusa, pemandian air panas, dan berbagai aktivitas seru siap memberikan pengalaman yang tak terlupakan.': 'Spacious campsites, a deer sanctuary, hot springs, and exciting activities come together for an unforgettable stay.',
    'Pemandangan Ranca Upas dari atas saat matahari terbit': 'Aerial view of Ranca Upas at sunrise',
    'Area Kami': 'Our Campsites',
    'Pilihan': 'Explore',
    'Area Camping': 'Camping Areas',
    'Area camping teduh di bawah pohon Rasamala': 'A shaded campsite beneath Rasamala trees',
    'Lihat Paket': 'View Packages',
    'Foto Rasamala': 'Rasamala photos',
    'Pemandangan area Rasamala dari atas': 'Aerial view of the Rasamala area',
    'Deretan tenda di area camping Rasamala': 'Tents at the Rasamala campsite',
    'Foto Rasamala sebelumnya': 'Previous Rasamala photo',
    'Foto Rasamala berikutnya': 'Next Rasamala photo',
    'Foto sebelumnya': 'Previous photo',
    'Foto berikutnya': 'Next photo',
    'Area camping Savana': 'Savana campsite',
    'Padang rumput luas dengan pemandangan gunung': 'Open grassland with mountain views',
    'Foto Savana': 'Savana photos',
    'Pemandangan lapang dan tenda di Savana': 'Open views and tents in Savana',
    'Suasana camping di area Savana': 'Camping in the Savana area',
    'Foto Savana sebelumnya': 'Previous Savana photo',
    'Foto Savana berikutnya': 'Next Savana photo',
    'Area camping Pinus': 'Pine campsite',
    'Camping di tengah hutan pinus yang menyejukkan': 'Camp among refreshing pine trees',
    'Foto Pinus': 'Pine area photos',
    'Tenda di antara pepohonan Pinus': 'A tent among the pine trees',
    'Suasana malam dan api unggun di area camping': 'Nighttime campfire at the campsite',
    'Foto Pinus sebelumnya': 'Previous pine area photo',
    'Foto Pinus berikutnya': 'Next pine area photo',
    'Yang Bisa Dilakukan': 'Things To Do',
    'Seru': 'Fun',
    'Penangkaran Rusa': 'Deer Sanctuary',
    'BERENANG': 'SWIMMING',
    'API UNGGUN': 'CAMPFIRE',
    'Lihat Lebih Dekat': 'Take A Closer Look',
    'Galeri': 'Gallery',
    'Foto Tenda': 'Tent Photos',
    'Koleksi foto tenda camping kami — dari interior, eksterior, hingga suasana malam di area camp.': 'A collection of our camping tents, from interiors and exteriors to the atmosphere of the campsite at night.',
    'Tenda dome kapasitas 2 orang di area camping': 'Two-person dome tent at the campsite',
    'Foto kapasitas 2 orang': 'Two-person tent photos',
    'Dua tenda biru di area camping hijau': 'Two blue tents in a green campsite',
    'Tenda di bawah pepohonan area camping': 'A tent beneath the campsite trees',
    'Tenda Eiger di antara pepohonan': 'An Eiger tent among the trees',
    'Deretan tenda camping di lapangan terbuka': 'Camping tents lined up in an open field',
    'Kapasitas': 'Capacity',
    'Orang': 'People',
    'Tenda kapasitas 4 orang di area camping': 'Four-person tent at the campsite',
    'Foto kapasitas 4 orang': 'Four-person tent photos',
    'Tenda kapasitas 4 orang di lapangan camping': 'Four-person tent in the camping field',
    'Tenda kapasitas 4 orang di area pepohonan': 'Four-person tent among the trees',
    'Deretan tenda camping kapasitas 4 orang': 'Four-person tents lined up at the campsite',
    'Tenda kapasitas 4 orang di area camping': 'Four-person tent at the campsite',
    'Tenda lorong kapasitas 12 orang': 'Twelve-person tunnel tent',
    'Foto kapasitas 12 orang': 'Twelve-person tent photos',
    'Area tenda luas untuk kapasitas 12 orang': 'Spacious tent area for up to 12 people',
    'Tenda besar untuk kapasitas 12 orang': 'Large tent for up to 12 people',
    'Model Tenda': 'Tent Model',
    'Pilihan Terbaik': 'Our Best Options',
    'Paket Tenda': 'Tent Packages',
    '* Harga belum termasuk tiket': '* Prices exclude entrance tickets',
    'Rincian Paket': 'Package Details',
    'Paket pilihan Anda': 'Your selected package',
    'Fasilitas Paket': 'Package includes',
    'Tenda Reguler': 'Regular Tent',
    'Paket Kasur Reguler': 'Regular Mattress Package',
    'Paket Matras Reguler': 'Regular Sleeping Mat Package',
    'Paket Matras Lengkap': 'Complete Sleeping Mat Package',
    'Paket Kasur Lengkap': 'Complete Mattress Package',
    'Paket Estetik': 'Aesthetic Package',
    'Reguler': 'Regular',
    'Medium': 'Medium',
    'Premium': 'Premium',
    'Rimba': 'Rimba',
    'Tenda double layer': 'Double-layer tent',
    '🏕️ Tenda Reguler': '🏕️ Regular Tent',
    '🛋️ Alas Kasur': '🛋️ Mattress Pads',
    '🎒 Matras Lengkap': '🎒 Complete Sleeping Mat',
    '✨ Kasur Lengkap': '✨ Complete Mattress',
    '🦋 Estetik': '🦋 Aesthetic',
    'Harga Lengkap': 'Full Price List',
    'Paket &': 'Packages &',
    'Price List Camping': 'Camping Price List',
    'Silakan cek list benefit fasilitas lengkap yang didapatkan pada setiap tingkatan harga di bawah ini.': 'See the facilities and benefits included with each package tier below.',
    'Tenda 2 Orang': '2-person tent',
    'Matras dasar': 'Basic sleeping mat',
    'Lampu roaming': 'Portable lamp',
    'Area parkir': 'Parking area',
    'Tenda 4 Orang': '4-person tent',
    'Kasur nyaman': 'Comfortable mattress',
    'Selimut + bantal': 'Blanket + pillow',
    'Akses toilet': 'Restroom access',
    'Tenda 6 Orang': '6-person tent',
    'Fasilitas lengkap': 'Full facilities',
    'Area lebih luas': 'More spacious area',
    'Sambutan tim support': 'Support team assistance',
    'Formulir Data Diri': 'Guest Information Form',
    'Reservasi': 'Booking',
    'Nama Lengkap': 'Full Name',
    'Masukkan nama Anda': 'Enter your name',
    'Jumlah Peserta': 'Number of Guests',
    'Pilih jumlah': 'Select a group size',
    '15+ Orang (Group)': '15+ People (Group)',
    'Rombongan / Event': 'Group / Event',
    'Tanggal Check-in': 'Check-in Date',
    'Pilihan Paket': 'Package Selection',
    'Pilih paket': 'Select a package',
    'Catatan Tambahan': 'Additional Notes',
    'Request khusus, pertanyaan, dll.': 'Special requests, questions, etc.',
    'Kirim Reservasi': 'Send Booking',
    'Hubungi Kami': 'Get In Touch',
    'Kontak &': 'Contact &',
    'Lokasi': 'Location',
    'Lihat alamat Ranca Upas di Google Maps': 'View Ranca Upas on Google Maps',
    'Alamat': 'Address',
    'Telepon / WhatsApp': 'Phone / WhatsApp',
    'Jam Operasional': 'Opening Hours',
    'Setiap Hari': 'Every Day',
    'Keluhan & Masukan': 'Feedback & Suggestions',
    'Sampaikan kendala atau saran Anda kepada tim Ranca Upas.': 'Share an issue or suggestion with the Ranca Upas team.',
    'Nama': 'Name',
    'Nama Anda': 'Your name',
    'Email untuk balasan': 'Reply email address',
    'Keluhan atau masukan': 'Feedback or suggestion',
    'Ceritakan keluhan atau masukan Anda...': 'Tell us about your feedback or suggestion...',
    'Kirim Keluhan': 'Send Feedback',
    'Mengirim...': 'Sending...',
    'Terima kasih, keluhan Anda sudah terkirim.': 'Thank you, your feedback has been sent.',
    'Gagal mengirim. Coba lagi atau hubungi kami via WhatsApp.': 'Failed to send. Please try again or contact us via WhatsApp.',
    'Temukan Kami': 'Find Us',
    'Peta': 'Map',
    'Peta lokasi Ranca Upas, Ciwidey': 'Map of Ranca Upas, Ciwidey',
    'Chat WhatsApp': 'Chat on WhatsApp',
    'Destinasi camping & wisata alam terbaik di Ciwidey, Bandung. Pengalaman alam yang tak terlupakan bersama keluarga dan sahabat.': 'A camping and nature getaway in Ciwidey, Bandung. Make unforgettable memories with family and friends.',
    'Navigasi': 'Navigation',
    'Paket Tenda': 'Tent Packages',
    'Area Camping': 'Camping Areas',
    'Area Rasamala': 'Rasamala Area',
    'Area Savana': 'Savana Area',
    'Area Pinus': 'Pine Area',
    'Kembali ke atas': 'Back to top',
    'Reservasi Terkirim!': 'Booking Sent!',
    'Terima kasih! Tim kami akan segera menghubungi Anda untuk konfirmasi reservasi camping Anda.': 'Thank you! Our team will contact you shortly to confirm your camping booking.',
    'Tutup': 'Close',
    'Preview gambar': 'Image preview',
    'Tutup galeri': 'Close gallery',
    'Pilih': 'Select',
    'dan lanjut ke formulir reservasi': 'and continue to the booking form',
    'Kapasitas:': 'Capacity:',
    'Halo Ranca Upas Beauty, saya ingin reservasi camping.': 'Hello Ranca Upas Beauty, I would like to book a camping trip.',
    'Jumlah Peserta:': 'Number of Guests:',
    'Tanggal Check-in:': 'Check-in Date:',
    'Paket:': 'Package:',
    'Catatan:': 'Notes:',
    'Tidak ada catatan': 'No additional notes',
    'Keluhan dan Masukan Ranca Upas': 'Ranca Upas Feedback and Suggestions',
    'Email untuk balasan:': 'Reply email address:',
    'Keluhan atau masukan:': 'Feedback or suggestion:',
    'Buka/tutup navigasi': 'Toggle navigation',
    'paket': 'package',
    '2 Orang': '2 People',
    '4 Orang': '4 People',
    '6 Orang': '6 People',
    '8 Orang': '8 People',
    '10 Orang': '10 People',
    '12 Orang': '12 People',
    '2 Hari 1 Malam Experience': '2 Days 1 Night Experience',
    'Area camping Rasamala': 'Rasamala campsite',
    'PENANGKARAN RUSA': 'DEER SANCTUARY',
    'Foto kapasitas 2 orang sebelumnya': 'Previous two-person tent photo',
    'Foto kapasitas 2 orang berikutnya': 'Next two-person tent photo',
    'Foto kapasitas 4 orang sebelumnya': 'Previous four-person tent photo',
    'Foto kapasitas 4 orang berikutnya': 'Next four-person tent photo',
    'Foto kapasitas 12 orang sebelumnya': 'Previous twelve-person tent photo',
    'Foto kapasitas 12 orang berikutnya': 'Next twelve-person tent photo',
    'Tenda Mandala': 'Mandala Tent',
    'Tenda Reguler 2 Orang': 'Regular Tent 2 People',
    'Tenda Reguler 4 Orang': 'Regular Tent 4 People',
    'Tenda Reguler 6 Orang': 'Regular Tent 6 People',
    'Tenda Reguler 12 Orang': 'Regular Tent 12 People',
    'Tenda Medium 2 Orang': 'Medium Tent 2 People',
    'Tenda Medium 4 Orang': 'Medium Tent 4 People',
    'Tenda Medium 6 Orang': 'Medium Tent 6 People',
    'Tenda Medium 12 Orang': 'Medium Tent 12 People',
    'Tenda Premium 2 Orang': 'Premium Tent 2 People',
    'Tenda Premium 4 Orang': 'Premium Tent 4 People',
    'Tenda Premium 6 Orang': 'Premium Tent 6 People',
    'Tenda Premium 12 Orang': 'Premium Tent 12 People',
    'Tenda Rimba 2 Orang': 'Rimba Tent 2 People',
    'Tenda Rimba 4 Orang': 'Rimba Tent 4 People',
    'Tenda Rimba 6 Orang': 'Rimba Tent 6 People',
    'Tenda Rimba 12 Orang': 'Rimba Tent 12 People',
    'Alas Kasur Cozy': 'Cozy Mattress Pad',
    'Alas Kasur Resort': 'Resort Mattress Pad',
    'Alas Kasur Adventure': 'Adventure Mattress Pad',
    'Matras Lengkap Mini': 'Complete Sleeping Mat Mini',
    'Matras Lengkap Comfort': 'Complete Sleeping Mat Comfort',
    'Matras Lengkap Group': 'Complete Sleeping Mat Group',
    'Kasur Lengkap Regal': 'Complete Mattress Regal',
    'Kasur Lengkap Zenith': 'Complete Mattress Zenith',
    'Kasur Lengkap Elite': 'Complete Mattress Elite',
    'Estetik Nature': 'Nature Aesthetic',
    'Estetik Sunset': 'Sunset Aesthetic',
    'Estetik Premium': 'Premium Aesthetic',
    'Cocok untuk pengalaman camping ringan dengan tidur lebih nyaman.': 'A great choice for a light camping trip with a more comfortable night of sleep.',
    'Tingginya kenyamanan untuk rombongan kecil dan keluarga.': 'Extra comfort for small groups and families.',
    'Ideal untuk trip bersama keluarga dan teman dekat.': 'Ideal for a trip with family and close friends.',
    'Matras tebal 2 cm': '2 cm thick sleeping mat',
    'Bahan anti lembab': 'Moisture-resistant material',
    'Portabel & mudah dibawa': 'Portable and easy to carry',
    'Lapisan lembut premium': 'Premium soft layer',
    'Nyaman untuk malam dingin': 'Comfortable on cold nights',
    'Desain praktis': 'Practical design',
    'Ukuran lebih luas': 'Extra spacious',
    'Ramah untuk semua usia': 'Suitable for all ages',
    'Dukungan tidur maksimal': 'Enhanced sleeping support',
    'Nikmati tidur yang lebih hangat serta penyangga nyaman.': 'Enjoy a warmer night with comfortable support.',
    'Paket lebih nyaman untuk kebutuhan acara keluarga maupun gathering.': 'A more comfortable option for family events and group gatherings.',
    'Pilihan paling cocok untuk kegiatan outbound dan team building.': 'A great choice for outdoor activities and team building.',
    'Bahan empuk lembut': 'Soft, cushioned material',
    'Tahan dingin malam hari': 'Keeps you warm on cold nights',
    'Sesuai untuk tenda premium': 'Made for premium tents',
    'Desain premium': 'Premium design',
    'Kapasitas lebih luas': 'More room to stretch out',
    'Tebal dan stabil': 'Thick and stable',
    'Bahan kuat dan awet': 'Strong, durable material',
    'Ideal untuk event': 'Ideal for events',
    'Kualitas tidur lebih baik': 'Better sleep quality',
    'Paket lengkap untuk kebutuhan camping santai dan nyaman.': 'A complete package for a relaxed and comfortable camping trip.',
    'Semua kebutuhan tidur bersatu dalam satu paket praktis.': 'All your sleeping essentials in one practical package.',
    'Bagi Anda yang ingin ketenangan dan kenyamanan bersama group.': 'For groups looking for a peaceful, comfortable stay.',
    'Matras + selimut': 'Sleeping mat + blanket',
    'Tersedia sarung pelindung': 'Protective cover included',
    'Komplit untuk malam dingin': 'Everything you need for cold nights',
    'Komposisi nyaman': 'Comfort-focused setup',
    'Cocok untuk keluarga': 'Great for families',
    'Mudah dibersihkan': 'Easy to clean',
    'Paket group': 'Group package',
    'Nyaman untuk beramai-ramai': 'Comfortable for a group',
    'Kualitas premium': 'Premium quality',
    'Pilih paket premium untuk resting time yang lebih maksimal.': 'Choose a premium package for a more restful stay.',
    'Pengalaman tidur paling istimewa di tengah alam.': 'A special night of sleep surrounded by nature.',
    'Paket riset premium dengan detail kualitas tinggi.': 'A premium package with carefully selected details.',
    'Bantal & selimut': 'Pillow & blanket',
    'Tampilan rapi dan nyaman': 'Neat, comfortable setup',
    'Bahan tahan lama': 'Durable materials',
    'Mudah dikemas': 'Easy to pack',
    'Nyaman saat malam dingin': 'Comfortable on cold nights',
    'Menonjolkan nuansa estetis dan romantis untuk liburan santai.': 'A romantic, stylish setting for a relaxing getaway.',
    'Desain artistik untuk pengalaman camping yang berkesan.': 'An artistic design for a memorable camping experience.',
    'Paket paling populer untuk momen gathering dan prewedding.': 'A popular choice for gatherings and pre-wedding events.',
    'Dekorasi natural': 'Natural decor',
    'Sangat cocok untuk foto': 'Perfect for photos',
    'Nuansa camp lebih estetik': 'A more polished campsite look',
    'Tema sunset': 'Sunset theme',
    'fasilitas tambahan': 'Additional facilities',
    'Cocok untuk momen spesial': 'Great for special occasions',
    'Dipadu dekorasi alam': 'Paired with natural decor',
    'Cocok untuk sesi foto': 'Ideal for photo sessions',
    'Chat WhatsApp Ranca Upas di 0821 2073 0123': 'Chat with Ranca Upas on WhatsApp at 0821 2073 0123',
    'Kirim email ke Ranca Upas Beauty': 'Email Ranca Upas Beauty',
    '24 jam': '24 hours',
    'Pilih bahasa': 'Choose language',
    'Ranca Upas, kembali ke beranda': 'Ranca Upas, back to home',
    'Ranca Upas Beauty - Destinasi camping terbaik di Ciwidey, Bandung. Nikmati pengalaman 2 Hari 1 Malam di alam terbuka dengan penangkaran rusa, pemandian air panas, dan berbagai aktivitas outdoor.': 'Ranca Upas Beauty - A camping destination in Ciwidey, Bandung. Enjoy a 2-day, 1-night outdoor experience with a deer sanctuary, hot springs, and outdoor activities.',
    'Ranca Upas Beauty — Pengalaman Camping & Wisata Alam': 'Ranca Upas Beauty — Camping & Nature Experience',
    'Halo Ranca Upas Beauty, saya ingin bertanya mengenai reservasi.': 'Hello Ranca Upas Beauty, I have a question about booking.',
    'Halo Ranca Upas Beauty, saya ingin tanya tentang paket camping.': 'Hello Ranca Upas Beauty, I have a question about camping packages.'
};

const reverseTranslations = Object.fromEntries(
    Object.entries(translations).map(([indonesian, english]) => [english, indonesian])
);
let currentLanguage = 'id';
function localizedText(text, language = currentLanguage) {
    if (language === 'en') return translations[text] || text;
    return reverseTranslations[text] || text;
}

function applyLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
        const node = walker.currentNode;
        const original = node.nodeValue;
        const text = original.trim();
        if (!text) continue;
        const translated = localizedText(text);
        if (translated !== text) {
            node.nodeValue = original.replace(text, translated);
        }
    }

    document.querySelectorAll('[aria-label], [alt], [placeholder], [title]').forEach((element) => {
        ['aria-label', 'alt', 'placeholder', 'title'].forEach((attribute) => {
            const value = element.getAttribute(attribute);
            if (value) element.setAttribute(attribute, localizedText(value));
        });
    });

    document.querySelectorAll('[data-language-id][data-language-en]').forEach((element) => {
        element.innerHTML = element.dataset[`language${language === 'en' ? 'En' : 'Id'}`];
    });

    const description = document.querySelector('meta[name="description"]');
    if (description) {
        description.content = localizedText(description.content);
    }
    document.title = localizedText(document.title);

    document.querySelectorAll('a[href*="wa.me"]').forEach((link) => {
        const url = new URL(link.href);
        const message = url.searchParams.get('text');
        if (message) {
            url.searchParams.set('text', localizedText(message));
            link.href = url.toString();
        }
    });

    document.querySelectorAll('[data-language]').forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
}

function setupLanguageSwitcher() {
    let savedLanguage = 'id';
    try {
        savedLanguage = localStorage.getItem('rancaUpasLanguage') || 'id';
    } catch (error) {
        savedLanguage = 'id';
    }
    currentLanguage = savedLanguage === 'en' ? 'en' : 'id';

    document.querySelectorAll('[data-language]').forEach((button) => {
        button.addEventListener('click', () => {
            const language = button.dataset.language === 'en' ? 'en' : 'id';
            currentLanguage = language;
            try {
                localStorage.setItem('rancaUpasLanguage', language);
            } catch (error) {
                // Language switching remains available when storage is disabled.
            }
            document.getElementById('nav-links')?.classList.remove('open');
            document.getElementById('nav-toggle')?.classList.remove('active');
            applyLanguage(language);
            renderPackages();
            renderPriceList();
            populatePackageOptions();
        });
    });
}

function renderPackages() {
    const grid = document.getElementById('paket-grid');
    if (!grid) return;

    const categoryLabels = {
        'tenda-reguler': 'Tenda Reguler',
        'paket-kasur-reguler': 'Paket Kasur Reguler',
        'paket-matras-reguler': 'Paket Matras Reguler',
        'paket-matras-lengkap': 'Paket Matras Lengkap',
        'paket-kasur-lengkap': 'Paket Kasur Lengkap',
        'paket-estetik': 'Paket Estetik'
    };

    grid.innerHTML = Object.entries(packageData).map(([category, items]) => `
        <section class="paket-category" aria-labelledby="paket-category-${category}">
            <h3 class="paket-category-title" id="paket-category-${category}">${localizedText(categoryLabels[category])}</h3>
            <div class="paket-category-grid ${category === 'tenda-reguler' ? 'regular-tent-capacity-grid' : ''}">
                ${category === 'tenda-reguler' ? regularTentCapacities.map((tent) => `
                    <article class="regular-tent-capacity">
                        <img class="regular-tent-photo" src="${tent.photo}" alt="Tenda kapasitas ${localizedText(tent.capacity)}" loading="lazy">
                        <div class="regular-tent-content">
                            <h4>${localizedText('Kapasitas:')} ${localizedText(tent.capacity)}</h4>
                            <p class="regular-tent-spec">${localizedText('Tenda double layer')} · ${tent.dimensions}</p>
                            <div class="regular-tent-options">
                                ${items.filter((item) => item.capacity === tent.capacity).map((item) => `
                                    <div class="regular-tent-option" data-package="${item.name}" tabindex="0" role="button" aria-label="${localizedText('Pilih')} ${localizedText(item.name)} ${item.price}">
                                        <div class="regular-tent-choice">
                                            <span class="regular-tent-tier">${localizedText(item.tier)}</span>
                                            <span class="regular-tent-price">${item.price}</span>
                                        </div>
                                        <ul class="regular-tent-features">
                                            ${item.features.map((feature) => `<li>${localizedText(feature)}</li>`).join('')}
                                        </ul>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </article>
                `).join('') : items.map((item) => `
                    <article class="paket-card" data-package="${item.name}" tabindex="0" role="button" aria-label="${localizedText('Pilih')} ${localizedText(item.name)} ${localizedText('dan lanjut ke formulir reservasi')}">
                        <div class="paket-card-inner">
                            <div class="paket-card-image">
                                <img src="${item.photo}" alt="${localizedText(item.name)}" loading="lazy">
                            </div>
                            <div class="paket-card-content">
                                <div class="paket-card-header">
                                    <h3>${localizedText(item.name)}</h3>
                                </div>
                                <div class="paket-card-body">
                                    <div class="paket-price">${item.price}</div>
                                    <div class="paket-capacity">${localizedText('Kapasitas:')} ${localizedText(item.capacity)}</div>
                                    <div class="paket-note">${currentLanguage === 'en' ? item.noteEn || packageNotesEn[item.name] || item.note : item.note}</div>
                                    <ul class="paket-features">
                                        ${item.features.map(feature => `<li class="paket-feature">${localizedText(feature)}</li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </article>
                `).join('')}
            </div>
        </section>
    `).join('');
}

function setupPackageCardSelection() {
    const grids = [
        document.getElementById('paket-grid'),
        document.getElementById('pricelist-grid')
    ].filter(Boolean);
    const reservationSection = document.getElementById('reservasi');
    const packageSelect = document.getElementById('res-paket');
    if (!grids.length || !reservationSection || !packageSelect) return;

    const selectPackage = (card) => {
        packageSelect.value = card.dataset.package || '';
        packageSelect.dispatchEvent(new Event('change', { bubbles: true }));
        reservationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    grids.forEach((grid) => {
        grid.addEventListener('click', (event) => {
            const card = event.target.closest('[data-package]');
            if (card && grid.contains(card)) selectPackage(card);
        });

        grid.addEventListener('keydown', (event) => {
            const card = event.target.closest('[data-package]');
            if (!card || !grid.contains(card) || card instanceof HTMLButtonElement || !['Enter', ' '].includes(event.key)) return;
            event.preventDefault();
            selectPackage(card);
        });
    });
}

function setupPackageCategoryNavigation() {
    const navigation = document.querySelector('.paket-category-nav');
    const packageSection = document.getElementById('paket');
    const categories = [...document.querySelectorAll('.paket-category')];
    if (!navigation || !packageSection || !categories.length) return;

    const links = [...navigation.querySelectorAll('a[href^="#paket-category-"]')];
    const activeColors = ['#1e4d3a', '#285d66', '#784b2a', '#294c66', '#565f1d', '#713f46'];
    let activeCategoryId = null;
    const setActiveCategory = (categoryId, forceCenter = false) => {
        const categoryChanged = categoryId !== activeCategoryId;
        activeCategoryId = categoryId;
        links.forEach((link, index) => {
            const isActive = link.hash === `#${categoryId}`;
            link.classList.toggle('active', isActive);
            const title = document.querySelector(link.hash);
            if (!isActive) {
                link.removeAttribute('aria-current');
                link.style.removeProperty('--category-active-color');
                title?.style.removeProperty('--category-active-color');
                return;
            }

            link.setAttribute('aria-current', 'location');
            link.style.setProperty('--category-active-color', activeColors[index % activeColors.length]);
            title?.style.setProperty('--category-active-color', activeColors[index % activeColors.length]);
            if ((categoryChanged || forceCenter) && navigation.scrollWidth > navigation.clientWidth) {
                const centeredScrollLeft = link.offsetLeft + link.offsetWidth / 2 - navigation.clientWidth / 2;
                navigation.scrollTo({ left: centeredScrollLeft, behavior: 'smooth' });
            }
        });
    };

    let updateScheduled = false;
    const updateActiveCategory = () => {
        updateScheduled = false;
        const sectionBounds = packageSection.getBoundingClientRect();
        if (sectionBounds.bottom <= 0 || sectionBounds.top >= window.innerHeight) {
            activeCategoryId = null;
            links.forEach((link) => {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
            });
            return;
        }

        const activationLine = navigation.getBoundingClientRect().bottom + 20;
        let activeCategory = categories[0];
        categories.forEach((category) => {
            if (category.querySelector('.paket-category-title').getBoundingClientRect().top <= activationLine) {
                activeCategory = category;
            }
        });
        setActiveCategory(activeCategory.querySelector('.paket-category-title').id);
    };

    const scheduleUpdate = () => {
        if (updateScheduled) return;
        updateScheduled = true;
        window.requestAnimationFrame(updateActiveCategory);
    };

    navigation.addEventListener('click', (event) => {
        const link = event.target.closest('a[href^="#paket-category-"]');
        if (link) setActiveCategory(link.hash.slice(1), true);
    });
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('hashchange', scheduleUpdate);
    window.addEventListener('pageshow', scheduleUpdate);
    scheduleUpdate();
}

function setupPhotoSliders() {
    document.querySelectorAll('[data-photo-gallery]').forEach((gallery) => {
        const card = gallery.closest('.area-card, .galeri-tenda-item');
        const image = card?.querySelector('[data-area-photo], [data-tent-photo]');
        const counter = gallery.querySelector('[data-photo-counter]');
        if (!image || !counter) return;

        const photos = [
            { src: image.getAttribute('src'), alt: image.alt },
            ...[...gallery.querySelectorAll('template[data-photo-src]')].map((photo) => ({
                src: photo.dataset.photoSrc,
                alt: photo.dataset.photoAlt || ''
            }))
        ];
        let currentIndex = 0;

        const showPhoto = (step) => {
            currentIndex = (currentIndex + step + photos.length) % photos.length;
            image.src = photos[currentIndex].src;
            image.alt = photos[currentIndex].alt;
            counter.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`;
        };

        gallery.querySelectorAll('[data-photo-step]').forEach((button) => {
            button.addEventListener('click', () => showPhoto(Number(button.dataset.photoStep)));
        });
    });
}

function renderPriceList() {
    const grid = document.getElementById('pricelist-grid');
    if (!grid) return;

    grid.innerHTML = priceListData.map((tier) => `
        <article class="pricelist-card" data-package="${tier.name}" tabindex="0" role="button" aria-label="${localizedText('Pilih')} ${localizedText('paket')} ${localizedText(tier.name)} ${localizedText('dan lanjut ke formulir reservasi')}">
            <div class="pricelist-card-header">
                <h3>${localizedText(tier.name)}</h3>
            </div>
            <div class="pricelist-card-body">
                <div class="tier-block">
                    <div class="tier-header">
                        <span class="tier-name">${localizedText(tier.name)}</span>
                        <span class="tier-price ${tier.accent}">${tier.price}</span>
                    </div>
                    <ul class="tier-features">
                        ${tier.features.map(feature => `<li>${localizedText(feature)}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </article>
    `).join('');
}

function populatePackageOptions() {
    const select = document.getElementById('res-paket');
    if (!select) return;

    const selectedPackage = select.value;
    const options = [`<option value=''>${localizedText('Pilih paket')}</option>`];
    [...Object.values(packageData).flat(), ...priceListData].forEach((item) => {
        options.push(`<option value="${item.name}">${localizedText(item.name)}</option>`);
    });
    select.innerHTML = options.join('');
    if (selectedPackage && options.some((option) => option.includes(`value="${selectedPackage}"`))) {
        select.value = selectedPackage;
    }
    select.dispatchEvent(new Event('change', { bubbles: true }));
}

function setupSelectedPackageSummary() {
    const select = document.getElementById('res-paket');
    const summary = document.getElementById('selected-package-summary');
    if (!select || !summary) return;

    const allPackages = [...Object.values(packageData).flat(), ...priceListData];
    const updateSummary = () => {
        const item = allPackages.find((packageItem) => packageItem.name === select.value);
        if (!item) {
            summary.hidden = true;
            summary.innerHTML = '';
            return;
        }

        const image = item.photo
            ? `<img class="selected-package-photo" src="${item.photo}" alt="${localizedText(item.name)}">`
            : '<div class="selected-package-placeholder" aria-hidden="true">⛺</div>';

        summary.innerHTML = `
            <h3 class="selected-package-title">${localizedText('Rincian Paket')}</h3>
            <div class="selected-package-details">
                ${image}
                <div class="selected-package-content">
                    <p class="selected-package-label">${localizedText('Paket pilihan Anda')}</p>
                    <h4>${localizedText(item.name)}</h4>
                    <p class="selected-package-price">${item.price}</p>
                    ${item.capacity ? `<p class="selected-package-capacity">${localizedText('Kapasitas:')} ${localizedText(item.capacity)}</p>` : ''}
                    <h5>${localizedText('Fasilitas Paket')}</h5>
                    <ul class="selected-package-features">
                        ${item.features.map((feature) => `<li>${localizedText(feature)}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        summary.hidden = false;
    };

    select.addEventListener('change', updateSummary);
    updateSummary();
}

function setupNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    const navItems = navLinks ? navLinks.querySelectorAll('.nav-link') : [];

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            navToggle.classList.toggle('active', isOpen);
        });

        navItems.forEach((link) => {
            link.addEventListener('click', () => {
                navItems.forEach((item) => item.classList.remove('active'));
                link.classList.add('active');
                navLinks.classList.remove('open');
                navToggle.classList.remove('active');
            });
        });
    }

    const sections = [...document.querySelectorAll('section[id]')];
    const updateActiveNav = () => {
        const scrollPosition = window.scrollY + 180;
        let currentId = 'hero';

        sections.forEach((section) => {
            if (scrollPosition >= section.offsetTop) {
                currentId = section.id;
            }
        });

        navItems.forEach((link) => {
            const isActive = link.dataset.section === currentId;
            link.classList.toggle('active', isActive);
        });
    };

    const nav = document.getElementById('main-nav');
    const updateNav = () => {
        if (!nav) return;
        nav.classList.toggle('scrolled', window.scrollY > 30);
        updateActiveNav();
    };
    updateNav();
    window.addEventListener('scroll', updateNav);
}

function setupAnimations() {
    const animatedItems = document.querySelectorAll('[data-animate]');
    if (!animatedItems.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    animatedItems.forEach((item) => observer.observe(item));
}

function setupBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function setupGalleryLightbox() {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('image-modal-img');
    const closeButton = document.querySelector('.close-modal');
    if (!modal || !modalImg || !closeButton) return;

    const galleryItems = document.querySelectorAll('.galeri-item img, .galeri-tenda-main-photo, .gallery-link img, .aktivitas-card img, [data-area-photo]');
    const prevButton = document.querySelector('.image-modal-prev');
    const nextButton = document.querySelector('.image-modal-next');
    const counter = document.getElementById('image-modal-counter');
    let photos = [];
    let currentIndex = 0;
    let touchStartX = 0;

    const showPhoto = (index) => {
        if (!photos.length) return;
        currentIndex = (index + photos.length) % photos.length;
        modalImg.src = photos[currentIndex].src;
        modalImg.alt = photos[currentIndex].alt || '';
        if (counter) counter.textContent = `${currentIndex + 1} / ${photos.length}`;
        const single = photos.length <= 1;
        if (prevButton) prevButton.style.display = single ? 'none' : 'flex';
        if (nextButton) nextButton.style.display = single ? 'none' : 'flex';
        if (counter) counter.style.display = single ? 'none' : 'block';
    };

    galleryItems.forEach((image) => {
        image.addEventListener('click', () => {
            const card = image.closest('.area-card, .galeri-tenda-item, figure, .aktivitas-card');
            const templates = card ? card.querySelectorAll('template[data-photo-src]') : [];
            photos = [{ src: image.currentSrc || image.src, alt: image.alt }];
            templates.forEach((photo) => photos.push({ src: photo.dataset.photoSrc, alt: photo.dataset.photoAlt || '' }));
            currentIndex = 0;
            showPhoto(0);
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
        });
    });

    prevButton?.addEventListener('click', (event) => { event.stopPropagation(); showPhoto(currentIndex - 1); });
    nextButton?.addEventListener('click', (event) => { event.stopPropagation(); showPhoto(currentIndex + 1); });
    modal.addEventListener('touchstart', (event) => { touchStartX = event.touches[0].clientX; }, { passive: true });
    modal.addEventListener('touchend', (event) => {
        const deltaX = event.changedTouches[0].clientX - touchStartX;
        if (Math.abs(deltaX) > 50) showPhoto(currentIndex + (deltaX < 0 ? 1 : -1));
    }, { passive: true });

    const closeModal = () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        modalImg.src = '';
    };

    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) closeModal();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
        if (modal.classList.contains('active') && event.key === 'ArrowLeft') showPhoto(currentIndex - 1);
        if (modal.classList.contains('active') && event.key === 'ArrowRight') showPhoto(currentIndex + 1);
    });
}

function setupTentGalleryPhotoChoices() {
    const gallery = document.querySelector('.galeri-tenda-grid');
    if (!gallery) return;

    gallery.addEventListener('click', (event) => {
        const choice = event.target.closest('.tent-photo-choice');
        if (!choice || !gallery.contains(choice)) return;

        const card = choice.closest('.galeri-tenda-item');
        const image = card?.querySelector('[data-tent-photo]');
        if (!image) return;

        image.src = choice.dataset.photoSrc;
        image.alt = choice.dataset.photoAlt || '';

        card.querySelectorAll('.tent-photo-choice').forEach((button) => {
            const isSelected = button === choice;
            button.classList.toggle('active', isSelected);
            button.setAttribute('aria-pressed', String(isSelected));
        });
    });
}

function setupReservationForm() {
    const form = document.getElementById('reservation-form');
    const modal = document.getElementById('reservation-modal');
    const modalClose = document.getElementById('modal-close');

    if (!form || !modal || !modalClose) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('res-name')?.value?.trim() || '-';
        const guests = document.getElementById('res-guests')?.value || '-';
        const date = document.getElementById('res-date')?.value || '-';
        const paket = document.getElementById('res-paket')?.value || '-';
        const notes = document.getElementById('res-notes')?.value?.trim() || localizedText('Tidak ada catatan');

        const message = [
            localizedText('Halo Ranca Upas Beauty, saya ingin reservasi camping.'),
            '',
            `${localizedText('Nama')}: ${name}`,
            `${localizedText('Jumlah Peserta:')} ${guests}`,
            `${localizedText('Tanggal Check-in:')} ${date}`,
            `${localizedText('Paket:')} ${localizedText(paket)}`,
            `${localizedText('Catatan:')} ${notes}`
        ].join('\n');

        const whatsappNumber = '6282120730123';
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.location.href = whatsappUrl;
        modal.classList.add('active');
        form.reset();
    });

    modalClose.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal-overlay') || event.target === modal) {
            modal.classList.remove('active');
        }
    });
}

function setupComplaintForm() {
    const form = document.getElementById('complaint-form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('complaint-name').value.trim();
        const email = document.getElementById('complaint-email').value.trim();
        const complaint = document.getElementById('complaint-message').value.trim();
        const subject = localizedText('Keluhan dan Masukan Ranca Upas');
        const statusEl = document.getElementById('complaint-status');
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) submitBtn.disabled = true;
        if (statusEl) { statusEl.textContent = localizedText('Mengirim...'); statusEl.style.color = ''; }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', complaint);
        formData.append('_subject', subject);
        formData.append('_template', 'table');
        formData.append('_captcha', 'false');

        fetch('https://formsubmit.co/ajax/0borak033@gmail.com', {
            method: 'POST',
            body: formData,
            headers: { Accept: 'application/json' }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success === 'true' || data.success === true) {
                    if (statusEl) { statusEl.textContent = localizedText('Terima kasih, keluhan Anda sudah terkirim.'); statusEl.style.color = '#1b5e20'; }
                    form.reset();
                } else {
                    throw new Error('send failed');
                }
            })
            .catch(() => {
                if (statusEl) { statusEl.textContent = localizedText('Gagal mengirim. Coba lagi atau hubungi kami via WhatsApp.'); statusEl.style.color = '#b3261e'; }
            })
            .finally(() => {
                if (submitBtn) submitBtn.disabled = false;
            });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupLanguageSwitcher();
    renderPackages();
    renderPriceList();
    populatePackageOptions();
    setupSelectedPackageSummary();
    setupPackageCardSelection();
    setupPackageCategoryNavigation();
    setupPhotoSliders();
    setupTentGalleryPhotoChoices();
    setupNavigation();
    setupAnimations();
    setupBackToTop();
    setupGalleryLightbox();
    setupReservationForm();
    setupComplaintForm();
    applyLanguage(currentLanguage);
});
