import { brand as specimen, h2, h3, note, p, t, table, tip, ul, warn, type DocPage } from "../types";

export const brand: DocPage = {
  slug: "brand",
  title: t("Brand & logo", "Brand & logo"),
  description: t(
    "The Sama logo, its variants, colours and typeface, with every file ready to download. Use these instead of redrawing or recolouring the logo.",
    "Logo Sama, variannya, warna, dan hurufnya, dengan semua file siap diunduh. Pakai file ini, jangan menggambar ulang atau mengganti warna logonya.",
  ),
  blocks: [
    h2("logo", "The logo", "Logo"),
    p(
      "The logo pairs a **symbol** with a lowercase **wordmark**. The symbol is two equal forms facing each other across a narrow gap: two wallets on opposite sides of the same trade, meeting with nothing in between. The wordmark is built on SF Pro Rounded and converted to outlines.",
      "Logo terdiri dari **simbol** dan **wordmark** huruf kecil. Simbolnya berupa dua bentuk setara yang berhadapan dengan celah sempit: dua dompet di dua sisi transaksi yang sama, bertemu tanpa perantara. Wordmark-nya berbasis SF Pro Rounded dan sudah diubah ke outline.",
    ),
    specimen("primary"),
    ul(
      ["The **gap** between the two forms must stay visible at every size.", "**Celah** di antara dua bentuk harus tetap terlihat di semua ukuran."],
      ["The symbol always sits to the **left** of the wordmark.", "Simbol selalu berada di **kiri** wordmark."],
      ["Never retype the wordmark in a font. Always use the SVG files below.", "Jangan mengetik ulang wordmark dengan font. Selalu pakai file SVG di bawah."],
    ),

    h2("variants", "Variants and downloads", "Varian dan unduhan"),
    p(
      "Three lockups (horizontal, stacked, symbol) in colour, white and black, plus the app icon. Pick the one with the most contrast against its background. Every file is a vector SVG.",
      "Tiga susunan (horizontal, bertumpuk, simbol) dalam warna, putih, dan hitam, ditambah ikon aplikasi. Pilih yang paling kontras dengan latarnya. Semua file berformat vektor SVG.",
    ),
    specimen("variants"),
    tip(
      "Need a PNG? Open the SVG in Figma or a browser and export at the size you need. The app's own PNG icons are in `public/icons`.",
      "Butuh PNG? Buka SVG di Figma atau browser lalu ekspor sesuai ukuran. Ikon PNG aplikasi ada di `public/icons`.",
    ),

    h2("clear-space", "Clear space and minimum size", "Ruang kosong dan ukuran minimum"),
    p(
      "The unit **x** is the width of one form in the symbol. Keep at least 1x clear on every side, free of text, images and page edges.",
      "Satuan **x** adalah lebar satu bentuk pada simbol. Sisakan minimal 1x kosong di setiap sisi, bebas dari teks, gambar, dan tepi halaman.",
    ),
    specimen("clearspace"),
    table(
      [["Version", "Versi"], ["Minimum", "Minimum"], ["Note", "Catatan"]],
      [
        [["Horizontal, screen", "Horizontal, layar"], "120 px", ["Below this, use the symbol.", "Di bawah ini, pakai simbol."]],
        [["Horizontal, print", "Horizontal, cetak"], "30 mm", ["Width.", "Lebar."]],
        [["Stacked", "Bertumpuk"], "80 px", ["Width.", "Lebar."]],
        [["Symbol", "Simbol"], "16 px", ["Height. The gap must stay visible.", "Tinggi. Celah harus tetap terlihat."]],
      ],
    ),
    specimen("sizes"),

    h2("colour", "Colour", "Warna"),
    p(
      "SAMA Orange is the signature. Use it sparingly, for the logo and the one action that matters on a screen, so it keeps standing out. Most surfaces stay white, mist or ink.",
      "SAMA Orange adalah warna khas. Pakai secukupnya, untuk logo dan satu aksi terpenting di layar, supaya tetap menonjol. Sebagian besar permukaan tetap putih, mist, atau ink.",
    ),
    specimen("colors"),
    h3("accent-token", "The accent token", "Token aksen"),
    p(
      "In the app, `--accent` is a deeper **#C8360F** in light mode and **#FF7A4A** in dark mode, not the logo orange itself. White text on #FF4A17 is only 3.4:1, so buttons and accent text use the deeper shade to pass WCAG AA. Keep #FF4A17 for the logo, icons and large display type.",
      "Di aplikasi, `--accent` memakai **#C8360F** yang lebih gelap di mode terang dan **#FF7A4A** di mode gelap, bukan oranye logo itu sendiri. Teks putih di atas #FF4A17 hanya 3,4:1, jadi tombol dan teks aksen memakai warna yang lebih gelap supaya lolos WCAG AA. Simpan #FF4A17 untuk logo, ikon, dan judul besar.",
    ),
    table(
      [["Text on background", "Teks di latar"], ["Ratio", "Rasio"], ["Use for", "Pakai untuk"]],
      [
        ["Ink / White", "16.9 : 1", ["Body text", "Teks isi"]],
        ["White / #C8360F", "5.3 : 1", ["Primary buttons, selected navigation", "Tombol utama, navigasi terpilih"]],
        ["Ink / SAMA Orange", "5.0 : 1", ["Labels on orange", "Label di atas oranye"]],
        ["White / Sky", "12.7 : 1", ["Dark panels, hero", "Panel gelap, hero"]],
        ["White / SAMA Orange", "3.4 : 1", ["Large text only (≥ 24 px)", "Hanya teks besar (≥ 24 px)"]],
      ],
    ),

    h2("typography", "Typography", "Tipografi"),
    p(
      "Sama uses **SF Pro Rounded**, the rounded cut of Apple's iOS system typeface, at the weights below. It shares the wordmark's soft, friendly shapes. Use JetBrains Mono for addresses, hashes and code.",
      "Sama memakai **SF Pro Rounded**, versi membulat dari huruf sistem iOS, dengan ketebalan di bawah. Bentuknya lembut dan ramah, sama seperti wordmark. Pakai JetBrains Mono untuk alamat, hash, dan kode.",
    ),
    specimen("type"),
    note(
      "The app self-hosts SF Pro Rounded from `components/font`. Apple licenses SF Pro for products on Apple platforms, so check the licence before using it in print or other materials; Nunito is the closest free alternative.",
      "Aplikasi menyajikan SF Pro Rounded sendiri dari `components/font`. Apple melisensikan SF Pro untuk produk di platform Apple, jadi cek lisensinya sebelum dipakai di materi cetak atau lainnya; Nunito adalah alternatif gratis yang paling mirip.",
      ["Licence", "Lisensi"],
    ),

    h2("misuse", "Don't", "Jangan"),
    p(
      "Only ever scale the logo proportionally. Avoid every change below.",
      "Logo hanya boleh diperbesar atau diperkecil secara proporsional. Hindari semua perubahan di bawah.",
    ),
    specimen("misuse"),
    warn(
      "The 3D look belongs to the app icon only. Never add shadows, glows or bevels to the flat logo.",
      "Tampilan 3D hanya untuk ikon aplikasi. Jangan tambahkan bayangan, glow, atau bevel pada logo flat.",
    ),

    h2("source", "Source files", "File sumber"),
    p(
      "The logo files are generated from the original artwork in `sama-brand/source` by `node sama-brand/build.mjs`, which writes them to `sama-brand/logo` and `public/brand`. The full brand guidelines page is `sama-brand/sama-brand-guide.html`.",
      "File logo dibuat dari artwork asli di `sama-brand/source` dengan `node sama-brand/build.mjs`, yang menulisnya ke `sama-brand/logo` dan `public/brand`. Halaman panduan brand lengkap ada di `sama-brand/sama-brand-guide.html`.",
    ),
  ],
};
