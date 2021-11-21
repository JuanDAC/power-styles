

export const extensionOnString = () => {
    /**
     * addPrefixCustom:: void -> string
     */
  String.prototype.addPrefixCustom = function () {
    if (this.startsWith("--")) {
      return `custom${this}`;
    }
    return this;
  }
};

