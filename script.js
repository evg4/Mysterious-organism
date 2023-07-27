// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, array) => {
  return {
    specimenNum: num,
    dna: array,
    mutate() {
      let idx = Math.floor(Math.random() * this.dna.length);
      let oldDNA = this.dna[idx];
      do{
        this.dna[idx] = returnRandBase();
      } while(oldDNA === this.dna[idx]);
      return this.dna;
    },
    compareDNA(object) {
      let identical = [];
      for (let i=0; i<this.dna.length; i++) {
        if (this.dna[i] === object.dna[i]) {
          identical.push(this.dna[i])
        }
      }
      console.log(identical);
      let percentInCommon = (identical.length / 15) * 100;
      console.log('Specimen #' + this.specimenNum + ' and specimen #' + object.specimenNum + ' have ' + percentInCommon + '% DNA in common');
    },
    willLikelySurvive() {
      const cAndG = this.dna.filter(base => {
        return (base === 'C' || base === 'G')
      })
      if (cAndG.length >= 9) {return true} else {return false}
    },
  };
};

const example = pAequorFactory(1, mockUpStrand());
const example2 = pAequorFactory(5, mockUpStrand());
//console.log(example);
//console.log(example);
//console.log(returnRandBase());
//console.log(example.dna);
//console.log(example2.dna);
//example.compareDNA(example2)
console.log(example.willLikelySurvive());

let survivors = [];
let counter = 1;
while (survivors.length < 30) {
  survivor = pAequorFactory(counter, mockUpStrand());
  if (survivor.willLikelySurvive() === true) {survivors.push(survivor)};
  counter++;
}
console.log(survivors);
console.log(survivors.length)







