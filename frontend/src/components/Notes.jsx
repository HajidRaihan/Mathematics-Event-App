import React from "react";

const Notes = () => {
  return (
    <div className="fixed bottom-5 right-5 w-[300px]">
      <p className="text-xs text-primary font-semibold mb-2">
        NOTE Bukti Pembayaran dapat dikirim melalui nomor berikut
      </p>

      <div
        className="p-5 rounded-xl bg-primary
    "
      >
        <p className="font-medium text-xs text-white">Contact Us</p>
        <p className="font-medium text-xs text-white">SMA/Sederajat : 0882-0205-12061 (Nila)</p>
        <p className="font-medium text-xs text-white">Mahasiswa KTMN: 0813-3799-3787 (Rifqi)</p>
      </div>
    </div>
  );
};

export default Notes;
