// jest.setup.js - Mock global localStorage for all tests

class LocalStorageMock {
  constructor() { this.store = {}; }
  clear() { this.store = {}; }
  getItem(key) { return this.store[key] || null; }
  setItem(key, value) { this.store[key] = value; }
  removeItem(key) { delete this.store[key]; }
  get length() { return Object.keys(this.store).length; }
  key(index) { return Object.keys(this.store)[index] || null; }
}
global.localStorage = new LocalStorageMock();
