// const list = document.getElementById('fizzbuzz')

const fizzbuzz = {
  variables() {
    this.ol = document.createElement('ol');
    this.currentItems = 0;
    this.maxItems = 101;
  },

  olCreation() {
    document.body.appendChild(this.ol);
    this.ol.id = 'fizzbuzz';
    this.ol.className = 'grid';
  },

  infiniteScroll() {
    window.addEventListener('scroll', e => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        this.fizzbuzz();
      }
    });
  },

  fizzbuzz() {
    // for (let i = this.currentItems; i < this.maxItems; i++)
    do {
      this.currentItems++;
      if (this.currentItems % 15 === 0) {
        this.ol.insertAdjacentHTML(
          'beforeend',
          `<li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>`
        );
      } else if (this.currentItems % 5 === 0) {
        this.ol.insertAdjacentHTML(
          'beforeend',
          ` <li class="buzz">BU<i>zz</i></li>`
        );
      } else if (this.currentItems % 3 === 0) {
        this.ol.insertAdjacentHTML(
          'beforeend',
          `<li class="fizz">FI<i>zz</i></li>`
        );
      } else {
        this.ol.insertAdjacentHTML('beforeend', `<li>${this.currentItems}</li>`);
      }
    } while (this.currentItems < this.maxItems);
  },

  init() {
    document.documentElement.classList.add('js-enabled'), this.variables();
    this.olCreation();
    this.fizzbuzz();
    this.infiniteScroll();
  },
};

fizzbuzz.init();
