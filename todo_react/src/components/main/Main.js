import './main.scss';

function Main(props) {
  return (
    <main className="page">
      {props.children}
    </main>
  );
}

export default Main;