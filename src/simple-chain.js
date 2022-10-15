const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {

    if(value !== undefined) {
      this.chain.push(`( ${value} )`);
    } else {
      this.chain.push('()');
    }
    return this;
  },

  removeLink(position) {

    if (typeof position != 'number' || position < 1 || position > this.chain.length){
      this.chain = []; //надо обнулять chain при finish и при условии ошибки при удалении
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
        return this;
    }
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let resultChain = this.chain.join('~~');
    this.chain = [];
    return resultChain;
  }
};

module.exports = {
  chainMaker
};
