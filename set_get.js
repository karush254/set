function MyDate() {
  let x = new Date();
  this._year = x.getFullYear();
  this._month = 0;
  this._date = 1;
  this._hours = 04;
  this._minutes = 00;
  this._seconds = 00;
  this._milisecond = 00;
  this._monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  Object.defineProperty(this, "year", {
    set: function (value) {
      this._year = value;
      if (value === 0) {
        this._year = 1970;
      }
    },
    get: function () {
      return this._year;
    },
  });
  Object.defineProperty(this, "month", {
    set: function (value) {
      this.year += parseInt(value / 12);
      this._month = value % 12;
    },
    get: function () {
      return this._month;
    },
  });
  Object.defineProperty(this, "date", {
    set: function (value) {
      this.month += Math.floor(value / 30);
      this._date = value % 30;
    },
    get: function () {
      return this._date;
    },
  });
  Object.defineProperty(this, "hours", {
    set: function (value) {
      this.date += Math.floor(value / 24);
      this._hours = value % 24;
    },
    get: function () {
      return this._hours;
    },
  });
  Object.defineProperty(this, "minutes", {
    set: function (value) {
      this.hours += parseInt(value / 60);
      this._minutes = value % 60;
    },
    get: function () {
      return this._minutes;
    },
  });
  Object.defineProperty(this, "seconds", {
    set: function (value) {
      this.minutes += parseInt(value / 60);
      this._seconds = value % 60;
    },
    get: function () {
      return this._seconds;
    },
  });
  Object.defineProperty(this, "milisecond", {
    set: function (value) {
      this.seconds += parseInt(value / 1000);
      this._milisecond = value % 1000;
    },
    get: function () {
      return this._milisecond;
    },
  });
  this.toString = function () {
    return `${this.monthName} / ${this._date} / ${this._year} / ${this._hours} : ${this._minutes} : ${this._seconds} : ${this._milisecond}`;
  };
  Object.defineProperty(this, "monthName", {
    get: () => {
      return this._monthNames[this._month];
    },
  });
}
let x = new MyDate();
x.year = 1999;
x.month = 13;
x.date = 1;
x.hours = 24;
x.minutes = 60;
x.seconds = 60;
x.milisecond = 1000;
console.log(x.toString());
Footer;
