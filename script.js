function showGameInfo(genre) {
    const info = {
      action: "Экшн игры включают в себя такие жанры, как шутеры и приключенческие игры с быстрым темпом, где важно быстро реагировать на события.",
      rpg: "РПГ игры предлагают богатый сюжет и развитие персонажей. Игроки могут принимать важные решения, влияющие на ход игры.",
      strategy: "Стратегии требуют от игроков умения планировать и принимать решения, учитывая множество факторов. Это могут быть как пошаговые, так и реального времени стратегии."
    };
  
    const infoElement = document.getElementById(`${genre}-info`);
    infoElement.innerHTML = info[genre];
  }
  