import { autorun, makeAutoObservable } from 'mobx';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => {
    this.count++;
  };

  decrement = () => {
    this.count--;
  };
  get double() {
    return this.count * 2;
  }
}

const counterStore = new CounterStore();
export default counterStore;
autorun(() => {
  console.log(counterStore.count);
});
