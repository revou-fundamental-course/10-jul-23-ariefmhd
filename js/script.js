// Variabel tombol "Hitung BMI" dan "Reset".

let button = document.getElementById("hitung");
let btnReset = document.getElementById("reset");

function hitungBMI() {
  // Variabel yang digunakan dalam perhitungan.
  let berat = document.getElementById("berat").value;
  let tinggi = document.getElementById("tinggi").value;

  // Rumus perhitungan BMI.
  let t = Math.pow(
    tinggi / 100,
    2
  ); /* Memberikan variabel bantuan t, untuk menampung nilai tinggi badan yang dibuat ke meter, lalu dipangkatkan 2 */
  let h =
    berat /
    t; /* Memberikan variabel bantuan h, untuk menampung nilai berat badan yang dibagi dengan variabel t */
  let a =
    h.toFixed(
      1
    ); /* Memberikan variabel bantuan a, hasil akhir perhitungan BMI dengan angka 1 digit di belakang koma */

  // Variabel yang digunakan dalam output.

  let s = document.getElementById("status");
  let rsl = document.getElementById("result");
  let nt = document.getElementById("note");
  const e1 = document.getElementById("explanation1");
  const e2 = document.getElementById("explanation2");
  const e3 = document.getElementById("explanation3");
  const e4 = document.getElementById("explanation4");
  const d1 = document.getElementById("disease1");
  const d2 = document.getElementById("disease2");

  // Perbandingan if-else untuk menampilkan hasil serta penjelasan yang telah didapat dari perhitungan BMI.

  if (a <= 18.5) {
    s.innerHTML =
      "Kekurangan berat badan"; /* menambahkan text html di variabel s */
    nt.innerHTML =
      "Anda kekurangan berat badan"; /* menambahkan text html variabel nt*/
    rsl.innerHTML =
      a; /* menambahkan nilai a hasil perhitungan dalam variabel rsl */
    e1.classList.remove(
      "disable"
    ); /* menghapus class disable yang berada pada e1 */
    d1.classList.remove(
      "disable"
    ); /* menghapus class disable yang berada pada d1 */
  } else if (a > 18.5 && a <= 24.9) {
    s.innerHTML = "Normal";
    nt.innerHTML = "Anda memiliki berat badan ideal<br>Good Job!!";
    rsl.innerHTML = a;
    e2.classList.remove("disable");
  } else if (a >= 25 && a <= 29.9) {
    s.innerHTML = "Kelebihan berat badan!";
    nt.innerHTML = "Anda memiliki berat badan berlebih!";
    rsl.innerHTML = a;
    e3.classList.remove("disable");
    d2.classList.remove("disable");
  } else if (a >= 30) {
    s.innerHTML = "Obesitas";
    nt.innerHTML = "Anda berada dalam kategori obesitas!";
    rsl.innerHTML = a;
    e4.classList.remove("disable");
    d2.classList.remove("disable");
  }
}

// Function reset untuk menghilangkan value input form yang sudah di-isikan.

function getReset() {
  document.getElementById("berat").value = "";
  document.getElementById("usia").value = "";
  document.getElementById("tinggi").value = "";
}

// Function menampilkan pilihan input bertipe radio.

function getRadio() {
  let radio = document.getElementsByName("gender");
  let i;
  for (i = 0; i <= radio.length; i++) {
    if (radio[i].checked) {
      document.getElementById("radio-output").innerHTML =
        radio[i].value +
        "<br>Usia " +
        document.getElementById("usia").value +
        " Tahun" +
        "<br>Berat " +
        document.getElementById("berat").value +
        " kg" +
        "<br>Tinggi " +
        document.getElementById("tinggi").value +
        " cm";
    }
  }
}

// Membuat perintah pada tiap variabel tombol setelah di-click dan menjalankan function yang ada.

button.addEventListener("click", hitungBMI);
button.addEventListener("click", getRadio);
btnReset.addEventListener("click", getReset);
