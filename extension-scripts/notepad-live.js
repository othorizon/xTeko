
$ui.render({
  views: [
    {
      type: "web",
      props: {
        url: "http://notepad.live/"
      },
      layout:$layout.fill,
      events: {
        didClose: function(sender) {
          $clipboard.save($props.url)
        }
      }
    }
  ]
})
