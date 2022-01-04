import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="animal-form"
export default class extends Controller {
  static get targets() {
    return ['name', 'counter'];
  }

  countCharacters(event) {
    let characters = this.nameTarget.value.length;
    this.counterTarget.innerText = characters;
  }
}
