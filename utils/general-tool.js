class GeneralTool {
  static concatenateStrings(array) {
    return array.join(", ");
  }

  static concatenateStringsWithAnd(array) {
    const lastItem = array[array.length - 1];
    array.pop();
    return `${array.join(", ")}, and ${lastItem}`;
  }

  static splitAmpersandsFromArray(array) {
    const newArray = [];
    for (let item of array) {
      if (item.split("").includes("&")) {
        const newItemSplit = item.split("&");
        for (let element of newItemSplit) newArray.push(element.trim());
      } else newArray.push(item);
    }
    return newArray;
  }
}

export default GeneralTool;
