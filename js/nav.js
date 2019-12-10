function Nav() {
  this.init();
}

Nav.prototype = {
  init: function() {
    this.el();
    this.eventBind();
  },
  el: function() {
    this.$el = {};
    this.$el.nav = $(".jq-nav");
  },
  eventBind: function() {
    var that = this;
    this.$el.nav.on("click", "li", function(e) {
      if ($(e.target).hasClass("active")) return;
      that.$el.nav.find(".active").removeClass("active");
      $(e.target)
        .parent()
        .addClass("active");
    });
  }
};
