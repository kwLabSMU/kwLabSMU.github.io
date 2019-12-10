var Member = function() {
  this.init();
};

Member.prototype = {
  init: function() {
    var that = this;
    this.el();
    this.getData().then(function(data) {
      that.render(data);
    });
  },
  el: function() {
    this.$el = {};
    this.$el.container = $(".jq-container");
    this.$el.box = $("<div />").addClass("col-md-8");
    this.$el.title = $("<h1 />")
      .addClass("page-header sidebar-title")
      .text("历届学生介绍");
    this.$el.hr = $("<hr />");
    this.$el.item = $(".jq-item")
      .detach()
      .show();
  },
  getData() {
    return $.get("/data/json/members.json");
  },
  render(data) {
    var that = this;
    this.$el.box.append(this.$el.title);
    data.forEach(function(v) {
      var item = $(that.$el.item).clone(),
        hr = $(that.$el.hr).clone();
      item
        .find(".jq-name")
        .text(v.name)
        .end()
        .find(".jq-time")
        .text(v.time)
        .end()
        .find(".jq-location")
        .text(v.location)
        .end()
        .find(".jq-introduction")
        .text(v.introduction);
      that.$el.box.append(item, hr);
    });
    this.$el.container.html(this.$el.box);
  }
};
