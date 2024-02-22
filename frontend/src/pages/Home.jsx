import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="background-main min-h-screen">
        <Navbar />
        <div className="md:max-w-[850px] mt-14">
          <div className="mt-10 flex flex-col md:mx-32 mx-5 gap-3">
            <p className="md:text-xl text-lg text-white">Halo, Welcome To</p>
            <h1 className="md:text-5xl text-4xl text-white font-bold tracking-widest">
              MATHEMATICS EVENT
            </h1>
            <h1 className="md:text-5xl text-4xl text-primary font-bold tracking-widest">XXIV</h1>
            <p className="text-white md:text-base text-xs md:font-semibold font-medium md:tracking-widest tracking-wider">
              “ Mathematics Beyond Limits: Membuka Petualangan Matematika, Temukan Keajaiban dalam
              Angka ”
            </p>
            <p className="text-xs text-white">
              Mathematics Event adalah kompetisi matematika tahunan yang diadakan oleh Himpunan
              Mahasiswa Matematika Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas
              Hasanuddin (Himatika FMIPA Unhas) sebagai wadah untuk mengembangkan kualitas sumber
              daya manusia dalam berpikir kritis dengan ilmu matematika. Mathematics Event merupakan
              kegiatan rutin dalam bentuk kompetisi matematika sebagai bentuk peran aktif Himatika
              FMIPA Unhas dalam mencerdaskan generasi Indonesia.
            </p>
            {/* <button
              className="w-[300px] text-primary uppercase text-base py-1 bg-white rounded-lg font-semibold mt-5"
              onClick={() => navigate("/pendaftaran-peserta")}
            >
              Pendaftaran
            </button> */}
          </div>
        </div>
      </div>

      <div className="md:mx-32 mx-5 my-32 text-sm text-primary flex flex-col gap-3">
        <h3 className="font-bold">PESERTA MATHEMATICS EVENT XXIV</h3>
        <div>
          <p className="font-medium">Tingkat</p>
          <ol className="list-decimal ml-5">
            <li>SMA/Sederajat Se-Indonesia</li>
            <li> Mahasiswa Se-Indonesia</li>
          </ol>
        </div>
        <h3 className="font-bold">Tahapan Pelaksanaan Olimpiade Mathematics Event XXIV</h3>
        <div>
          <ol className="list-decimal ml-5">
            <li className="font-medium">
              Webinar Nasional Matematika Waktu : Sabtu, 24 Februari 2024
            </li>
            <ul className="list-disc ml-5">
              <li>Tempt : Zoom Cloud Meeting</li>
            </ul>
            <li className="font-medium">Babak Penyisihan</li>
            <ul className="list-disc ml-5">
              <li>Waktu : Sabtu, 24 Februari 2024</li>
              <li>Tempat : Zoom Cloud Meeting</li>
            </ul>
            <li className="font-medium">Babak semifinal, final, Grandfinal </li>
            <ul className="list-disc ml-5">
              <li>Waktu : Sabtu – Minggu, 9 – 10 Maret 2024 </li>
              <li>Tempat : Baruga A.Pettarani dan Science Building Universitas Hasanuddin</li>
            </ul>
          </ol>
        </div>
        <h3 className="font-bold">Tahapan Pelaksanaan Olimpiade Mathematics Event XXIV</h3>
        <ol className="list-decimal ml-5">
          <li className="font-medium">
            Pengumpulan Abstrak: Online by google form, 23 Januari – 4 Februari 2024
          </li>
          <li className="font-medium">
            Pengumpulan Makalah Lengkap: Online by google form and google drive, 12-21 Februari 2024
          </li>
          <li className="font-medium">Presentasi: Online by cloud zoom meeting, 2 Maret 2024</li>
        </ol>
      </div>

      <div className="bg-primary min-h-screen">
        <div className="md:mx-32 mx-5  max-w-[600px] py-32 text-sm text-white flex flex-col gap-3">
          <h3 className="font-bold">GAMBARAN LOMBA</h3>
          <div>
            <h3 className="font-bold">SMA</h3>
            <ul className="list-decimal  ml-5">
              <li className="font-medium">Penyisihan ( Seleksi regional)</li>
              <ol className="list-disc ml-3">
                <li>
                  Babak penyisihan dilakukan secara online dalam bentuk soal pilihan ganda dan
                  essai. 30 peserta dengan urutan teratas dari keseluruhan peserta ditambah 30%
                  peserta dengan urutan teratas tiap regional akan lolos ke babak semifinal di
                  Makassar
                </li>
              </ol>
              <li className="font-medium">Semifinal</li>
              <ol className="list-disc ml-3">
                <li>
                  Peserta yang lolos dari babak peyisihan online akan mengerjakan soal dalam bentuk
                  pilihan ganda. 30 peserta dengan nilai tertinggi akan lanjut ke babak final.
                </li>
              </ol>
              <li className="font-medium">Final</li>
              <ol className="list-disc ml-3">
                <li>
                  Theater Game: Soal lisan dibacakan dalam video, lalu peserta mengerjakan soal.
                  Akan diseleksi 15 peserta untuk masuk ke game selanjutnya.
                </li>
                <li>
                  Bomb Game: Soal tertulis dikerjakan secara bersamaan. Akan diseleksi 9 peserta
                  untuk bermain di game selanjutnya
                </li>
                <li>
                  Tender Game: Soal tertulis ditampilkan pada layar, peserta menawar waktu untuk
                  mengerjakan soal. Peserta dengan tawaran terendah akan mengerjakan soal. Akan
                  diseleksi 3 peserta untuk lolos ke babak grandfinal.
                </li>
              </ol>
              <li className="font-medium">Grandfinal</li>
              <ol className="list-disc ml-3">
                <li>
                  Presentasi: soal tertulis dan peserta mengerjakan soal lalu dipresentasikan pada
                  tim juri
                </li>
                <li>
                  Matrix Game: soal tertulis dan babak rebutan, peserta memilih soal yang
                  ditampilkan dalam bentuk matriks.
                </li>
              </ol>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
