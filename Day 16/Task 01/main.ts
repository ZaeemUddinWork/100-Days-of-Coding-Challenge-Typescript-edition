/*
Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, 
model, year, and a method describe() that logs a sentence about the laptop.

Explain & TIP: 
Objects can also contain functions (methods) that can perform actions using the object's properties. 
This introduces method definition within objects.
*/
//saving laptop specification
let laptop = {
  make: "Dell",
  model: "E16",
  year: 2018,
  Core: "i7 13th Gen",
  Ram: "16GB",
  Rom: "1TB SSD, 1TB HDD",
  GPU: "Rtx 3060",
  describe: function () {
    //function for printing specification
    console.log(`
        Laptp Specification:
        Make: ${this.make}
        Model: ${this.model}
        Year: ${this.year}
        Core: ${this.Core}
        Ram: ${this.Ram}
        Rom: ${this.Rom}
        GPU: ${this.GPU}
        `);
  },
};

//specification describing
laptop.describe();
