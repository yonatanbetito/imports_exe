export class Player {
  constructor(name) {
    this.name = name;
    this.timeList = [];
  }
  recordTime(start, end) {
    let sumTime = end - start;
    this.timeList.push(sumTime);
    return sumTime;
  }

  showStats() {
    let total = 0;
    for (let i = 0; i < this.timeList.length; i++) {
      total += this.timeList[i];
    }

    let average = total / this.timeList.length;
    return {
      totalll: total,
      averageee: average,
    };
  }
}


