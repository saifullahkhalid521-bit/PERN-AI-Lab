const createCounter = () => {
  let num = 0;
  return () => {
    num++;
    return num;
  };
};
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());


const createGreeting = (name) => {
  return () => {
    console.log(`Hello ${name}`);
  }
}
const greeting = createGreeting("Saif");
greeting();
greeting();


const createScoreTracker = () => {
  let currentScore = 0;
  const scoreTracker = {
    add(score) {
      currentScore+=score;
    },
    get() {
      console.log(currentScore);
    }
  };
  return scoreTracker;
};

const score = createScoreTracker();
score.add(10);
score.add(20);
score.get();
score.add(5);
score.get();


const createPrivetPassword = (userPassword) => {
  return  checkPassword = {
    check (enterPassword) {
      if(enterPassword === userPassword){
        console.log("Access");
      }else{
        console.log("Wrong");
      };
    },
  };
};
const account = createPrivetPassword(11234);
account.check(11234);
account.check(11244);


const createClickCounter = () => {
  let counter = 0;
  return () => {
    counter++;
    if(counter < 2){
      console.log(`Clicked ${counter} time`);
    }else{
      console.log(`Clicked ${counter} times`);
    }
    
  };
};
const click = createClickCounter();
click();
click();
click();


const createPrivetCounter = (start) => {
  let count = start;
   const counterM =() => {
    count++;
    console.log(count);
  };
  counterM.reset = () => {
    count = start;
    console.log(count);
  };
  return counterM;
};
const counter1 = createPrivetCounter(10);
counter1();
counter1();
counter1.reset();
counter1();


const createCounter3 = () => {
  let count = 0;
  return () => {
    count++;
    console.log(count);
  };
}

const counter2 = createCounter3();
const counter3 = createCounter3();


counter2()
counter2()

counter3()
counter3()
counter3()

counter2()



const createTracker = () => {
  let min;
  let max;

  const trackIt = (num) => {
    if (min === undefined){
      min = num;
      max = num;
      return;
    }

    if (min > num){
      min = num;
    }

    if (max < num){
      max = num;
    }

  }

  trackIt.getMin = () => {
    console.log(min);
  }

  trackIt.getMax = () => {
    console.log(max);
  }
   return trackIt;
};

const tracker = createTracker();
tracker(10);
tracker(5);
tracker(20);
tracker(8);

tracker.getMin();
tracker.getMax();



const createAccount = (amount) => {
  let balance = amount;

  return {
    deposit(amount) {
      balance+= amount;
    },

    withdraw(amount) {
      if(amount > balance){
        console.log('Insufficient Balance');
      }
      else{
        balance-=amount;
      }
    },

    getBalance() {
      console.log(balance);
    }
  }
}
const account1 = createAccount(1000);

account1.deposit(500);
account1.withdraw(300);
account1.withdraw(2000);

account1.getBalance();



const createGenerator = (start , steps) => {
  let st = start;
  let step = steps;
  let count;

  return () => {
    if ( count === undefined){
      count++;
      console.log(st);
      return;
    }else{
    st+=step;
    console.log(st);
    }
  }
}

const generate = createGenerator(10 , 5);
generate();
generate();
generate();
generate();

const generate2 = createGenerator(100 , 10);
generate2();
generate2();
generate2();