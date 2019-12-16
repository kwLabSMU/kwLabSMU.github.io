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
    this.$el.box = $("<div />");
    this.$el.itemPic = $(".jq-student-img-item").detach();
    this.$el.itemText = $(".jq-student-text").detach();
    this.$el.item = $(".jq-item")
      .detach()
      .show();
  },
  getData() {
    return $.get("/data/json/member.json");
  },
  render(data) {
    var that = this;
    data.forEach(function(v) {
      var item = that.$el.item.clone();
      item.find(".jq-student-time").text(v.year);
      v.children.forEach(function(node) {
        const picItem = that.$el.itemPic.clone();
        picItem.find("img").attr("src", node.img);
        const itemText = that.$el.itemText.clone();
        itemText.html($("<strong />").text(node.name));
        const locText = that.$el.itemText.clone().text(node.location);
        item
          .find(".jq-student-img")
          .append(picItem)
          .end()
          .find(".jq-student-name")
          .append(itemText)
          .end()
          .find(".jq-student-location")
          .append(locText);
      });
      that.$el.box.append(item);
    });
    this.$el.container.append(that.$el.box);
  }
};
