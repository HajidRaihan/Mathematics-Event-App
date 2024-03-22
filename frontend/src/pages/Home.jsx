import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  console.log(import.meta.env.VITE_BASE_URL); // "123
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

            <Link
              to={
                "https://drive.google.com/drive/folders/1hCSbSk_rHbfTcwA_hMF4HJZ2dYzgqIId?usp=sharing"
              }
              target="_blank"
              className="md:text-base text-xs text-center w-[300px] md:w-[400px] text-primary uppercase py-1 bg-white rounded-lg font-semibold mt-5"
              // onClick={() => navigate("/pendaftaran-peserta")}
            >
              Pengumuman Penilaian Abstrak LKTMN
            </Link>
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
        <h3 className="font-bold">Tahapan Pelaksanaan Olimpiade</h3>
        <div>
          <ol className="list-decimal ml-5">
            <li className="font-medium">Babak Penyisihan</li>
            <ul className="list-disc ml-5">
              <li>Waktu: Minggu, 30 Maret 2024</li>
              <li>Tempat : Zoom Cloud Meeting</li>
            </ul>
            <li className="font-medium">Babak semifinal, final, Grandfinal</li>
            <ul className="list-disc ml-5">
              <li>Waktu : Jum’at – Minggu, 19 – 21 April2024</li>
              <li>
                Tempat : Baruga A.P. Pettarani Unhas, Science Building FMIPA Unhas, dan Aula Prof.
                Mattuada FIB Unhas
              </li>
            </ul>
          </ol>
        </div>
        <h3 className="font-bold">Tahapan Pelaksanaan Karya Tulis Matematika Nasional</h3>
        <ol className="list-decimal ml-5">
          <li className="font-medium">
            Pengumpulan Abstrak: Online by google form and google drive, 22 Februari – 10 Maret 2024
          </li>
          <li className="font-medium">
            Pengumpulan full paper: Online by google form and google drive, 14 – 28 Maret 2024
          </li>
          <li className="font-medium">Presentasi: Online by cloud zoom meeting, 07 April 2024</li>

          <li className="font-medium">
            Seminar Nasional Matematika : Baruga A.P. Pettarani Unhas, 19 April 2024
          </li>
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

      <div className="md:mx-32 mx-5 my-32 text-sm text-primary flex flex-col gap-3">
        <h3 className="font-bold">Olimpiade Mahasiswa (tim beranggotakan 2 org)</h3>
        <div>
          <ol className="list-decimal ml-5">
            <li className="font-medium">Penyisihan ( Seleksi regional)</li>
            <p>
              Babak penyisihan dilakukan secara online dalam bentuk soal pilihan ganda dan essai. 15
              tim dengan urutan teraatas aakan lolos ke babak semifinal di Makassar
            </p>
            <li className="font-medium">Semifinal</li>
            <p>
              Tim akan mengerjakan soal secara individu, masing-masing nilai individu tersebut akan
              diakumulasikan menjadi nilai tim. Soal berbentuk isian dan essay. 5 tim dengan nilai
              teratas akan lolos ke babak final
            </p>
            <li className="font-medium">Final</li>
            <p>
              Mystery Room: Tim akan masuk room lalu mengerjakan soal dalam bentuk matriks, terdapat
              5 room dengan materi yang berbeda-beda. Soal berbentuk tulisan isian. 3 tim dengan
              nilai teratas akan lolos ke babak grandfinal
            </p>
            <li className="font-medium">Grandfinal</li>
            <p>
              Mystery Room: Tim akan masuk room lalu mengerjakan soal dalam bentuk matriks, terdapat
              5 room dengan materi yang berbeda-beda. Soal berbentuk tulisan isian. 3 tim dengan
              nilai teratas akan lolos ke babak grandfinal
            </p>
          </ol>
        </div>
        <h3 className="font-bold">
          Mahasiswa Karya Tulis Matematika Nassional (tim beranggotakan 2-3 org)
        </h3>

        <ol className="list-decimal ml-5">
          <li className="font-medium">Pengumpulan Abstrak</li>
          <p>
            Pengumpulan abstrak dilakukan secara online sesuai dengan tema dan subtema yang telah
            ditentukan. 25 tim dengan nilai teratas berdasarkan penilaian juri akan lolos ke tahap
            selanjutnya
          </p>
          <li className="font-medium">Pengumpulan makalah lengkap</li>
          <p>
            Pengumpulan makalah lengkap dilakukan secara online dengan pedoman penulisan karya tulis
            yang benar. 10 tim dengan nilai teratas berdasarkan penilaian juri akan lolos ke tahap
            selanjutnya
          </p>
          <li className="font-medium">Presentasi</li>
          <p>
            Presentasi dilakukan secara online oleh 10 tim yang telah lolos dari babak sebelumnya. 3
            tim dengan nilai teratas akan lolos ke babak Grand Final.
          </p>{" "}
          <li className="font-medium">Seminar Nasional Matematika</li>
          <p>
            Tahap ini merupakan tahap akhir (Grand Final) dilakukan secara luring, di mana para
            peserta akan mempresentasikan karya mereka pada Seminar Nasional Matematika untuk
            menentukan juara I, II, dan III.
          </p>
        </ol>
      </div>

      <div className="bg-primary min-h-screen">
        <div className="md:mx-32 mx-5  max-w-[600px] py-32 text-sm text-white flex flex-col gap-3">
          <h3 className="font-bold">PENDAFTARAN ONLINE</h3>
          <div>
            <ul className="list-decimal  ml-5">
              <li className="font-medium">
                Pendaftaran online dapat dilakukan dengan cara mengisi formulir pendaftaran di situs
                web Mathematics Event, terdapat dua gelombang untuk melakukan pendaftaran online
                yaitu:<br></br>
                Gelombang 1 : 22 Februari – 10 Maret 2024<br></br>
                Gelombang 2 : 11 – 28 Maret 2024
              </li>
              <br></br>
              <li className="font-medium">
                Pendaftaran online untuk peserta Mahasiswa dalam ajang KTMN dapat dilakukan dengan
                cara mengisi formulir pendaftaran di situs web Mathematics Event untuk melakukan
                pendaftaran online yaitu:{" "}
                <a href="//bit.ly/4bEYfkX" style={{ color: "rgb(173, 216, 230)" }}>
                  Form KTMN
                </a>
                <br></br>
                Pengumpulan abstrak : 22 Februari – 10 Maret 2024<br></br>
                Pengumpulan full paper : 14 – 28 Maret 2024
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="md:mx-32 mx-5 my-32 text-sm text-primary flex flex-col gap-3">
        <h3 className="font-bold">TATA CARA MATHEMATICS EVENT XXIV</h3>
        <div>
          <ol className="list-decimal ml-5">
            <li>
              Buka situs{" "}
              <a href="https://register.mathevent-unhas.com/">
                https://register.mathevent-unhas.com/
              </a>
            </li>
            <br></br>
            <li>
              {" "}
              Pilih pendaftaran instansi, kemudian isi formulir dan submit. Setelah sekolah atau
              universitas terdaftar, kamu sudah dapat melakukan pendaftaran sebagai peserta.
            </li>
            <br></br>
            <li>Pilih pendaftaram peserta, kemudian isi formulir dan submit.</li>
            <br></br>
            <li>Akun berhasil dibuat namun kamu belum terdaftar sebagai peserta resmi.</li>
            <br></br>
            <li>
              Transfer biaya pendaftaran melalui No. Rek 1554-01-001512-53-3 a.n. Mathematics Event
              dan kirimkan bukti pembayaran ke contact person panitia untuk mengaktifkan akun
            </li>
            <br></br>
            <li>Pilih Log in</li>
            <br></br>
            <li>
              Masukkan username dan password yang kamu buat sebelumnya. Jika status berubah menjadi
              aktif, maka kamu telah terdaaftar sebagai peserta Mathematics Event XXIV.
            </li>
          </ol>
          <br></br>
          <h3 className="font-bold">Biaya Kontribusi Mathematics Event XXIV</h3>
          <p className="font-medium">SMA/Sederajat </p>
          <p className="font-medium">
            Gelombang 1 : Rp. 30.000,-/Orang<br></br>
            Gelombang 2 : Rp. 45.000,-/Orang
          </p>
          <br></br>
          <p className="font-medium">Mahasiswa Olimpiade</p>
          <p className="font-medium">
            Gelombang 1 : Rp. 100.000,-/Tim<br></br>
            Gelombang 2 : Rp. 120.000,-/Tim
          </p>
          <br></br>
          <p className="font-medium">Mahasiswa KTMN</p>
          <ol className="list-decimal ml-5">
            <li>Pendaftaran abstrak : Gratis</li>
            <li>Pengumpulan Full Paper : Rp.80.000/Tim</li>
          </ol>
        </div>
      </div>

      <div className="bg-primary min-h-screen">
        <div className="md:mx-32 mx-5  max-w-[600px] py-32 text-sm text-white flex flex-col gap-3">
          <h3 className="font-bold">HADIAH JUARA MATHEMATICS EVENT XXIV</h3>
          <div>
            <p className="font-bold">SMA</p>
            <p className="font-medium">Juara 1 :</p>
            <ul className="list-decimal  ml-5">
              <li className="font-medium">Piala Bergilir Gubernur Sulawesi Selatan</li>
              <li className="font-medium">Piala Tetap</li>
              <li className="font-medium">Piagam</li>
              <li className="font-medium">Medali</li>
              <li className="font-medium">Uang Tunai</li>
            </ul>
            <br></br>

            <p className="font-medium">Juara 2 :</p>
            <ul className="list-decimal ml-5">
              <li className="font-medium">Piala Tetap</li>
              <li className="font-medium">Piagam</li>
              <li className="font-medium">Medali</li>
              <li className="font-medium">Uang Tunai</li>
            </ul>
            <br></br>

            <p className="font-medium">Juara 3 :</p>
            <ul className="list-decimal ml-5">
              <li className="font-medium">Piala Tetap</li>
              <li className="font-medium">Piagam</li>
              <li className="font-medium">Medali</li>
              <li className="font-medium">Uang Tunai</li>
            </ul>
            <br></br>

            <p className="font-bold">Mahasiswa Olimpiade</p>
            <p className="font-medium">Juara 1 :</p>
            <ul className="list-decimal  ml-5">
              <li className="font-medium">
                Piala Bergilir Menteri Pendidikan Kebudayaan, Riset, dan Teknologi{" "}
              </li>
              <li className="font-medium">Piala Tetap</li>
              <li className="font-medium">Piagam</li>
              <li className="font-medium">Medali</li>
              <li className="font-medium">Uang Tunai</li>
            </ul>
            <br></br>

            <p className="font-medium">Juara 2 :</p>
            <ul className="list-decimal ml-5">
              <li className="font-medium">Piala Tetap</li>
              <li className="font-medium">Piagam</li>
              <li className="font-medium">Medali</li>
              <li className="font-medium">Uang Tunai</li>
            </ul>
            <br></br>

            <p className="font-medium">Juara 3 :</p>
            <ul className="list-decimal ml-5">
              <li className="font-medium">Piala Tetap</li>
              <li className="font-medium">Piagam</li>
              <li className="font-medium">Medali</li>
              <li className="font-medium">Uang Tunai</li>
            </ul>
            <br></br>

            <p className="font-bold">Mahasiswa KTMN</p>
            <p className="font-medium">Juara 1 :</p>
            <ul className="list-decimal  ml-5">
              <li className="font-medium">Piala Tetap</li>
              <li className="font-medium">Piagam</li>
              <li className="font-medium">Medali</li>
              <li className="font-medium">Uang Tunai</li>
            </ul>
            <br></br>

            <p className="font-medium">Juara 2 :</p>
            <ul className="list-decimal ml-5">
              <li className="font-medium">Piala Tetap</li>
              <li className="font-medium">Piagam</li>
              <li className="font-medium">Medali</li>
              <li className="font-medium">Uang Tunai</li>
            </ul>
            <br></br>

            <p className="font-medium">Juara 3 :</p>
            <ul className="list-decimal ml-5">
              <li className="font-medium">Piala Tetap</li>
              <li className="font-medium">Piagam</li>
              <li className="font-medium">Medali</li>
              <li className="font-medium">Uang Tunai</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:mx-20 mx-5 my-10 text-sm text-primary flex flex-col gap-3">
        <div>
          <p className="font-bold">Contact Us</p>
          <p className="font-meddium">SMA/Sederajat : 0882-0205-12061 (Nila)</p>
          <p className="font-medium">Mahasiswa : 0856-9671-5602 (Eka)</p>
          <p className="font-medium">Mahasiswa LKTI: 0813-3799-3787 (Rifqi)</p>
        </div>
      </div>
    </>
  );
};

export default Home;
