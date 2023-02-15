class Utils {
  static concatenateStrings(array) {
    if (!array) {
      throw new Error("Missing argument!");
    }

    return array.join(", ");
  }

  static concatenateStringsWithAnd(array) {
    if (!array) {
      throw new Error("Missing argument!");
    }

    const lastItem = array[array.length - 1];
    array.pop();
    return `${array.join(", ")}, and ${lastItem}`;
  }

  static splitAmpersandsFromArray(array) {
    if (!array) {
      throw new Error("Missing argument!");
    }

    const newArray = [];
    for (let item of array) {
      if (item.split("").includes("&")) {
        const newItemSplit = item.split("&");
        for (let element of newItemSplit) newArray.push(element.trim());
      } else newArray.push(item);
    }
    return newArray;
  }

  static formatNumWithCommas(num) {
    if (!num) {
      throw new Error("Missing argument!");
    }

    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  static formatProblemsSolved(solvedAmount, isCodewars = false) {
    if (!solvedAmount) {
      throw new Error("Missing argument!");
    }

    if (solvedAmount) {
      const formattedAmount = this.formatNumWithCommas(solvedAmount);
      const problemsString = isCodewars ? "Katas" : "Problems";
      return `${formattedAmount} ${problemsString} Solved`;
    }
    return "Error";
  }
}

export default Utils;
