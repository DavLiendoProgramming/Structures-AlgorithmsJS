class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(som, val) {
    const index = this._hash(som);
    return (this.data[index] = val);
  }

  get(som) {
    return this.data[this._hash(som)];
  }
}

const myHashTable = new HashTable(50);

myHashTable.set('purple', 1000);

console.log(myHashTable.get('purple'));
