

export class Gift {
  constructor(data) {
    this.id = data.id
    this.tag = data.tag
    this.url = data.url
    this.embed_url = data.embed_url || 'https://media.giphy.com/media/l0O9zKrd7InZvso5W/giphy.gif'
    this.opened = data.opened
  }


  get giftTemplate() {
    return `
        <div class="col-3 m-1 selectable card"  onclick="app.sandboxController.openGift('${this.id}')">
          <div class="pt-2">
            <img src="${this.opened ? this.url : 'https://images.unsplash.com/photo-1628699265231-97b2a3e7b9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdyYXBwaW5nJTIwcGFwZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}" class="img-fluid">
          </div>
          <div class="text-center">
            <p>${this.tag}</p>
          </div>
        </div>
`
  }

  get giphyTemp() {
    return `
    <div class="card p-1 img-fluid w-25 col-3 m-1">
      <img src="${this.url}">
    </div>
      `
  }
}