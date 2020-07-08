var audio1 = document.getElementById("audioID");
function playAudio() {
  audio1.play();
}

alert('selamat Datang di Nafrozen Mart');
var promo = confirm('Toko Kami Sedang Memiliki Promosi Loh... | Mau Lihat?');
if (promo === true) {
	alert('ini promonya');
} else {
	confirm('Apakah Anda Yakin Tidak Tertarik Dengan Diskon Kami?');
	alert('Terima Kasih');
}