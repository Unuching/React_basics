const p1 = {
  fullname: function () {
    return this.fname + ' ' + this.lName;
  },
};
const p2 = {
  fname: 'Mrachingnu',
  lName: 'Marma',
};
const p3 = {
  fname: 'Chengchengnu',
  lName: 'Marma',
};



console.log(p1.fullname.call(p3));
