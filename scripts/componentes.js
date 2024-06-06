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

          const price = document.createElement('p');
          price.innerHTML = item.faixadepreco

          const useFor = document.createElement('p')
          useFor.innerHTML = "Utilizado para " + item.prefenciadeuso

          const notaDesempenho = document.createElement('p')
          notaDesempenho.innerHTML = "Sua nota de desempenho: " + item.notadesempenho

          const notaBeneficio = document.createElement('p')
          notaBeneficio.innerHTML = "Sua nota de custo benefício: " + item.notabeneficio
          notaBeneficio.classList.add('pPadding')

          const tipo = document.createElement('h1');
          tipo.innerHTML = item.tipo;

          const pDiv = document.createElement('div')
          pDiv.classList.add('pDiv')
          card.appendChild(tipo)
          card.appendChild(image)
          pDiv.appendChild(price)
          pDiv.appendChild(useFor)
          pDiv.appendChild(notaDesempenho)
          pDiv.appendChild(notaBeneficio)
          card.appendChild(pDiv)
          container.appendChild(card)
        })
      }
    })
  })
