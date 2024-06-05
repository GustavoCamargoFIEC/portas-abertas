fetch("../json/projeto.json")
  .then((res) => res.json())
  .then((data) => {
    const container = document.querySelector('.container');
    data.forEach((obj) => {
      for (let prop in obj) {
        obj[prop].forEach((item) => {
          const card = document.createElement('div');
          card.classList.add('card')

          const image = document.createElement('img');
          image.src = item.imagem
          image.style.width = "100px";
          image.style.height = "100px";

          const price = document.createElement('p');
          price.innerHTML = item.faixadepreco

          const useFor = document.createElement('p')
          useFor.innerHTML = "Mais utilizado para " + item.prefenciadeuso

          const notaDesempenho = document.createElement('p')
          notaDesempenho.innerHTML = "Sua nota de desempenho: " + item.notadesempenho

          const notaBeneficio = document.createElement('p')
          notaBeneficio.innerHTML = "Sua nota de custo benefício: " + item.notabeneficio

          const tipo = document.createElement('h1');
          tipo.innerHTML = item.tipo;

          card.appendChild(tipo)
          card.appendChild(image)
          card.appendChild(price)
          card.appendChild(useFor)
          card.appendChild(notaDesempenho)
          card.appendChild(notaBeneficio)
          container.appendChild(card)
        })
      }
    })
  })
