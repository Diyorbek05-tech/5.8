//   // Avtobus 
// class Avtobus {
//   constructor(nomer, marshrut, joylar) {
//     this.nomer = nomer;           
//     this.marshrut = marshrut;     
//     this.joylar = joylar;        
//     this.bandJoylar = 0;          
//   }

//   getInfo() {
//     return `Nomer: ${this.nomer}, Marshrut: ${this.marshrut}, 
//     Joylar: ${this.joylar}, Band joylar: ${this.bandJoylar}`;
//   }

//   joyBronQilish() {
//     if (this.bandJoylar < this.joylar) {
//       this.bandJoylar++;
//       return "Joy muvaffaqiyatli bron qilindi.";
//     } else {
//       return "Bo'sh joy mavjud emas!";
//     }
//   }

//   bronBekorQilish() {
//     if (this.bandJoylar > 0) {
//       this.bandJoylar--;
//       return "Bron bekor qilindi.";
//     } else {
//       return "Bekor qilinadigan bron topilmadi!";
//     }
//   }
// }

// // / boshqaruv tizimi
// class AvtobusBoshqaruv {
//   constructor() {
//     this.avtobusRoyxati = [];
//   }

//   avtobusQoshish(avtobus) {
//     this.avtobusRoyxati.push(avtobus);
//   }

//   barcha() {
//     return this.avtobusRoyxati.map(bus => bus.getInfo()).join("\n");
//   }

//   marshrutBoyichaQidirish(marshrut) {
//     return this.avtobusRoyxati.filter(bus => bus.marshrut === marshrut);
//   }

//   joyBron(nomer) {
//     let topilganAvtobus = this.avtobusRoyxati.find(bus => bus.nomer === nomer);
//     if (topilganAvtobus) {
//       return topilganAvtobus.joyBronQilish();
//     }
//     return "Avtobus mavjud emas!";
//   }

//   bronBekor(nomer) {
//     let topilganAvtobus = this.avtobusRoyxati.find(bus => bus.nomer === nomer);
//     if (topilganAvtobus) {
//       return topilganAvtobus.bronBekorQilish();
//     }
//     return "Avtobus mavjud emas!";
//   }
// }

// //
// let boshqaruv = new AvtobusBoshqaruv();

// let bus1 = new Avtobus(1, "Toshkent - Samarqand", 40);
// let bus2 = new Avtobus(2, "Toshkent - Buxoro", 35);

// boshqaruv.avtobusQoshish(bus1);
// boshqaruv.avtobusQoshish(bus2);

// console.log(boshqaruv.barcha());

// console.log(boshqaruv.joyBron(1));
// console.log(boshqaruv.joyBron(1));
// console.log(boshqaruv.bronBekor(1));

// console.log(boshqaruv.marshrutBoyichaQidirish("Toshkent - Buxoro"));








// // tavar
// class Tovar {
//   constructor(kod, nomi, qiymat, miqdor) {
//     this.kod = kod;
//     this.nomi = nomi;
//     this.qiymat = qiymat;
//     this.miqdor = miqdor;
//   }

//   getDetails() {
//     return `Kod: ${this.kod}, Nomi: ${this.nomi}, Qiymati: ${this.qiymat}, Omborda: ${this.miqdor}`;
//   }

//   miqdorYangilash(qoshish) {
//     this.miqdor += qoshish;
//     return `Tovar miqdori o'zgartirildi: ${this.miqdor}`;
//   }
// }


// class BuyurtmaQismi {
//   constructor(tovar, dona) {
//     this.tovar = tovar; 
//     this.dona = dona;     
//   }

//   summaniHisoblash() {
//     return this.tovar.qiymat * this.dona;
//   }
// }


// class Zakaz {
//   constructor(raqam) {
//     this.raqam = raqam;
//     this.qismlar = [];
//   }

//   qismQoshish(qism) {
//     this.qismlar.push(qism);
//   }

//   jamiSumma() {
//     let total = 0;
//     for (let item of this.qismlar) {
//       total += item.summaniHisoblash();
//     }
//     return total;
//   }
// }

// //magazin
// class Magazin {
//   constructor() {
//     this.tovarlar = [];
//     this.zakazlar = [];
//   }

//   tovarQoshish(tovar) {
//     this.tovarlar.push(tovar);
//   }

//   tovarlarRoyxati() {
//     return this.tovarlar.map(item => item.getDetails()).join("\n");
//   }

//   zakazYaratish(raqam) {
//     let yangiZakaz = new Zakaz(raqam);
//     this.zakazlar.push(yangiZakaz);
//     return yangiZakaz;
//   }
// }


// let magazin = new Magazin();

// let tovar1 = new Tovar(1, "Olma", 5000, 100);
// let tovar2 = new Tovar(2, "Anor", 8000, 50);

// magazin.tovarQoshish(tovar1);
// magazin.tovarQoshish(tovar2);

// console.log("Tovarlar:");
// console.log(magazin.tovarlarRoyxati());

// let zakaz1 = magazin.zakazYaratish(101);
// zakaz1.qismQoshish(new BuyurtmaQismi(tovar1, 3));
// zakaz1.qismQoshish(new BuyurtmaQismi(tovar2, 2));

// console.log("Zakaz jami summasi:", zakaz1.jamiSumma());