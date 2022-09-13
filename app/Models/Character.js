export class Character {
  constructor(data) {
    // Adapter pattern
    this.id = data._id // adapt the data to my needs
    this.name = data.name

    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correct_answer = data.correct_answer
    this.incorrect_answers = data.incorrect_answers
  }

  get CardTemplate() {
    return /*html*/`
      <div class="col-md-3 my-3">
        <div class="card h-100">
          <h4>${this.category}</h4>
            <div class="card-body">
            <h4>${this.question}</h4>
          </div>
        </div>
      </div>
    `
  }


}
