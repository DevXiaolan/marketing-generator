const render = () => {
  console.log('Render');
  return Promise.resolve();
}
(global => {
  global['marketing-generator'] = {
    bootstrap: () => {
      console.log('marketing-generator bootstrap');
      return Promise.resolve();
    },
    mount: () => {
      console.log('marketing-generator mount');
      return render();
    },
    unmount: () => {
      console.log('marketing-generator unmount');
      return Promise.resolve();
    },
  };
})(window);