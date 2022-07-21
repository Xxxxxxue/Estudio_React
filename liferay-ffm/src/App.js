import './App.css';
function App() {
  return (
    <div className="container text-center mt-5">
      <h1>Faria Financial Management</h1>
      {/*un slider*/}
      <br></br>
      <div id="carouselExampleIndicators" className="carousel slide boxi" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">  
            <div className="boxi">
              <p>Checking Acount 33333333<br/>$2567.53</p>
            </div>
        </div>

        <div className="carousel-item">
          <div className="boxi">
            <p>Savings Account 234563245<br/>$9567.53</p>
          </div>
        </div>

        <div className="carousel-item"> 
          <div  className="boxi">
            <p>Individual Retirement Account 43211234<br/>$4367.53</p>
          </div>
        </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

    </div>
  );
}

export default App;
