import { RequestApi } from "../helper/RequestApi";

const pendaftaranInstansi = async (data) => {
  try {
    const responseData = await RequestApi("POST", `instansi`, {}, {}, "Mencoba Menampilkan produk");

    return responseData;
  } catch (error) {
    console.error("Terjadi kesalahan saat menampilkan produk  ", error);
    throw error;
  }
};

export default {
  pendaftaranHandler,
};
