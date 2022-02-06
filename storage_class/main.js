class Storage {
  constructor(key, {defaultValue = null, storageType = 'local'} = {}) {
    this.key = key;
    this.defaultValue = defaultValue;
    this.storageType = storageType;
    this.set(defaultValue);
  }

  get() {
    let data = this.getStorage().getItem(this.key);

    if (data === 'undefined') return;

    try {
      return JSON.parse(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  set(value) {
    this.getStorage().setItem(this.key, JSON.stringify(value));
  }

  clear() {
    this.getStorage().removeItem(this.key);
  }

  isEmpty() {
    const data = this.getStorage().getItem(this.key);
    return data === 'undefined' || data === 'null';
  }

  getStorage() {
    return (this.storageType === 'local') ? localStorage : sessionStorage;
  }
}


const names = new Storage('names', { storageType: 'session' });
const favorites = new Storage('favorites');
const currentCity = new Storage('currentCity', { defaultValue: 'Murmansk' });



/* Tests */

console.log(names);
console.log(favorites);
console.log(currentCity);

// names.set('value1');
names.set({cityName: 'Moscow'});
// names.set([1, false, 'some']);
// names.set();
console.log( names.get() );
// names.clear();
console.log( names.isEmpty() );

favorites.set('value2');
// favorites.set(null);
console.log( favorites.get() );
// storage2.clear();
console.log( favorites.isEmpty() );

console.log(localStorage);
console.log(sessionStorage);