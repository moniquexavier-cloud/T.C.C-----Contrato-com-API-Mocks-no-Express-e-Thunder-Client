// Dados Mocks (falsos) dos cards sobre os quilombos
const mockQuilomboCards = [
  {
    imagem: "https://exemplo.com/imagens/foto-quilombo.jpg",
    nome: "Quilombo dos Palmares",
    descricao: "Um dos maiores e mais emblemáticos quilombos do período colonial do Brasil."
  }
];

// Controller dos cards sobre os quilombos
const getQuilomboCards = async (req, res) => {
  try {
    return res.status(200).json(mockQuilomboCards);
  } catch (error) {
    return res.status(500).json({
      mensagem: "Erro interno ao procurar os cards dos quilombos.",
      erro: error.message
    });
  }
};

export { getQuilomboCards };