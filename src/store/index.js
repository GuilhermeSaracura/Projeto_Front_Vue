import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods:[
    {
    name: "Coxinha de frango saudável assada",
    type: "Savory",
    url:"https://www.hojetemfrango.com.br/receita/coxinha-de-frango-saudavel-assada/",
    description: "Para matar a vontade do salgadinho mais amado das festas de aniversário, uma ótima sugestão de receita, cozinha feita com batata doce, aveia e frango, alimentos fontes de carboidrato, proteína e fibras, boa ideia para comer algo diferente e mesmo assim mantendo a alimentação saudável da semana."
    },
    {
    name: "Bolinho de Frango com Aveia",
    type: "Savory",
    url:"https://anamariabraga.globo.com/receita/bolinho-fit-de-frango-com-aveia/",
    description: "Nesta opção de salgado assado fitnes, fonte de proteína, feito com frango e aveia, rico em fibras, ótima opção para quem precisa de ganho de massa muscular."
    },
    {
    name: "Puffs de Batata Doce",
    type: "Savory",
    url:"https://melepimenta.com/puffs-de-batata-doce-saudaveis/",
    description: "Puffs deliciosos feito com ingredientes acessíveis, uma ótima opção saudável para o lanche da tarde."
    },
    {
    name: "Picolé de melancia com maracujá",
    type: "Candies",
    url:"https://www.youtube.com/watch?v=6AXi5wgMuAQ",
    description: "Esta receita é para quem deseja criar um picolé com sabor diferente e misturar frutas, no caso, a melancia e o maracujá."
    },
    {
    name: "Sorvete de banana e manteiga de amendoim",
    type: "Candies",
    url:"https://www.youtube.com/watch?v=cpnVnMXPdV8",
    description: "Esta dica é perfeita para quem tem muito desejo por doce e quer incluir uma fruta junto com algo a mais. É aí que entra a manteiga de amendoim."
    },
    {
    name: "Iogurte de framboesa",
    type: "Candies",
    url:"https://blogdamimis.com.br/2012/09/07/frozen-yogurt-de-framboesa/",
    description: "Prefere os iogurtes em vez dos sorvetes? Pois esta receita foi feita para você. É só misturar iogurte desnatado com frutas vermelhas."
    },
    {
    name: "Suco de limão de siciliano com hortelã",
    type: "Juice",
    url:"http://www.segredosdatiaemilia.com.br/2013/08/24/suco-de-limao-siciliano-com-hortela/",
    description: "Que o tradicional suco de limão é o favorito entre os brasileiros, devido ao seu sabor cítrico e delicioso, isso nós já sabemos. Não é à toa que ele também é utilizado para a fabricação de sorvetes, doces e outras receitas. Aqui, para apreciar esse delicioso suco com o toque refrescante da hortelã, misturando esses dois ingredientes com água e açúcar e batendo tudo no liquidificador."
    },
    {
    name: "Suco de laranja com morango",
    type: "Juice",
    url:"https://melepimenta.com/suco-de-laranja-com-morango/",
    description: "Essa é uma mistura saborosa dentre todas as receitas de sucos naturais, uma dica perfeita para quem procura algo diferente para beber. Para fazer esse suco, basta misturar o suco de laranja com morangos congelados e açúcar e bater tudo em um liquidificador. Fica uma delícia!"
    }
  ]},
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
