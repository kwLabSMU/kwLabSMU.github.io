var MarkToHtml = function(el, url) {
  this.md = new markdownit();
  this.el = el;
  this.url = url;
  this.init();
};

MarkToHtml.prototype = {
  init: function() {
    this.getMd();
  },
  getMd: function() {
    var that = this;
    $.get(this.url, function(data) {
      that.renderMd(data);
    });
  },
  renderMd: function(data) {
    const result = this.md.render(data);
    $(this.el).html(result);
  }
};

// new MarkToHtml(".md-container", "/md/teacher.md");
