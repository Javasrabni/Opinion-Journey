// import { DataArticle } from "@/lib/articles";

import Cardcomp from "@/components/cardcomp";

export default function Home() {
    return (
        <div className="sm:p-8 lg:p-16 flex flex-col gap-8">
            <div className="flex flex-col gap-4 items-center justify-center w-full h-[60vh]">
                <h1 className='text-4xl  font-[inte] text-center'>Ruang Akademik, WriteLab Academia</h1>
                <p className="text-md text-center max-w-[42rem]">Menambah kemampuan berpikir kirtis serta menambah wawasan dan pengetahuan, kami akan berbagi tentang artikel terkait penelitian dan essay opini pribadi terkait berbagai topik atau isu.</p>

                {/* Kategori */}
                <div className="w-full h-fit flex items-center justify-center gap-4">
                    <div className="hover:bg-gray-900 bg-gray-100 hover:text-white cursor-pointer p-4 flex items-center justify-center rounded-lg">
                        <h1>Essay</h1>
                    </div>
                    <div className="hover:bg-gray-900 bg-gray-100 hover:text-white cursor-pointer p-4 flex items-center justify-center rounded-lg">
                        <h1>Artikel Akademik</h1>
                    </div>
                </div>
            </div>

            <hr className="text-gray-200 " />

            <Cardcomp fileSource={"/embeded/music_learning.pdf"} titleCard={'Tingkatkan Kinerja Otak Anda Saat Belajar Dengan Jenis Musik Berikut.'} description={<p><b>Data Penelitian:</b> Studi dari University of California menunjukkan peningkatan performa 12-15% pada tugas spasial-temporal dengan musik baroque, namun tidak ada efek pada logical reasoning. <br /> <b>Rekomendasi Praktis:</b> Untuk matematika/logika: musik minimal/ambient, untuk bahasa/sastra: lebih baik tanpa musik, untuk aktivitas kreatif: musik dengan variasi sedang</p>} linkOnClick={'Buka dokumen - Baca dalam 3 menit.'} shortCard={false} />

            <div className="mt-8 flex flex-col" >
                <h1 className='text-xl font-bold font-[news]'>Cara Menulis Artikel</h1>

                <div className="flex gap-8 overflow-x-scroll pb-4">
                    <Cardcomp fileSource={"/embeded/kiat-artikel/kiatArtikel.pdf"} titleCard={'Panduan Menulis Artikel Dengan Benar Berdasarkan Jenisnya.'} linkOnClick={'Buka dokumen'} shortCard={true} />
                    <Cardcomp fileSource={"/embeded/kiat-artikel/kiatArtikel.pdf"} titleCard={'Panduan Menulis Artikel Dengan Benar Berdasarkan Jenisnya.'} linkOnClick={'Buka dokumen'} shortCard={true} />
                </div>
            </div >


        </div >
    );
}
