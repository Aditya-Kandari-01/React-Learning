function App() {
  const pageScroll = (elem) => {
    if (elem>0){
      console.log('Scrolling Downwards')
    }else{
      console.log('Scrolling Upwards')
    }
  };
  return (
    <div
      onWheel={(elem) => {
        pageScroll(elem.deltaY);
      }}
    >
      <div className="bg-[#111] h-screen w-full page1"></div>
      <div className="bg-[#222] h-screen w-full page2"></div>
      <div className="bg-[#333] h-screen w-full page3"></div>
    </div>
  );
}
export default App;
