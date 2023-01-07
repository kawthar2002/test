import { getDataFromfakeAPi } from "./api";
import "./App.css";
import Timer from "./assets/timer.png";
import Table from "./components/Table";
import { useTimer } from "./hooks";
import { toReadableTimerString } from "./lib/index";

export const App = () => {
  const timer = useTimer();
  const participants = getDataFromfakeAPi();
  return (
    <div className="App">
      <header>
        <h1>
          Ход торгов
          <span>Тестовые торги на аппарат ЛОТОС №2033564 (09.11.2022 09:09)</span>
        </h1>
      </header>
      <main>
        <h2>
          Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанных в
          таблице :
        </h2>
        <div className="timer">
          <p>ХОД</p>
          <div className="timer-body">
            <div className="timer-clock">{toReadableTimerString(timer)}</div>
            <img src={Timer} alt="timer"></img>
          </div>
        </div>
        <Table participants={participants} />
      </main>
    </div>
  );
};
