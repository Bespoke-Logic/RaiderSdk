import Raider from "./raider";

class Raiders {
  static async getRaider(id: Number) {
    // load raider data

    // then return raider instance
    return new Raider(id);
  }
}
export default Raiders;
