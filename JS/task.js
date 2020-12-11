class CountdownTimer {

  constructor (timer) {
    this.selectorRef = document.querySelector(timer.selector);
    this.targetDate = timer.targetDate;
    this.daysRef = this.selectorRef.querySelector('[data-value="days"]');
    this.hoursRef = this.selectorRef.querySelector('[data-value="hours"]');
    this.minsRef = this.selectorRef.querySelector('[data-value="mins"]');
    this.secsRef = this.selectorRef.querySelector('[data-value="secs"]');
    this.currentDate = Date.now();
    this.days = 0;
    this.hours = 0;
    this.mins = 0;
    this.secs = 0;
    this.deltaTime = 0;
  }

  pad (value) { return String(value).padStart(2, '0'); }
  
  updateTimer (time) {
    this.days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    this.hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    this.mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    this.secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    this.daysRef.textContent = this.days;
    this.hoursRef.textContent = this.hours;
    this.minsRef.textContent = this.mins;
    this.secsRef.textContent = this.secs;
  }   
    
  interval = setInterval(() => {
      const currentDate = Date.now()
    this.deltaTime = this.targetDate.getTime() - currentDate;
    if (this.deltaTime <= 0) {
      clearInterval(this.interval);
      this.daysRef.textContent = '00';
      this.hoursRef.textContent = '00';
      this.minsRef.textContent = '00';
      this.secsRef.textContent = '00';
      return;
    };
      this.updateTimer(this.deltaTime);
  }, 1000)

 

}

const timerFirst = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 15, 2020'),
});

const timerSecond = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Dec 13, 2020'),
});
