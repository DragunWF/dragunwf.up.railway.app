class GeneralTool {
  static concatenateStrings(array) {
    return array.join(", ");
  }

  static concatenateStringsWithAnd(array) {
    const lastItem = array[array.length - 1];
    array.pop();
    return `${array.join(", ")}, and ${lastItem}`;
  }
}

export default GeneralTool;
