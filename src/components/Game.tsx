import { Words } from "./Words";

// TODO mudar focus automaticamente ao digitar a letra
// TODO permitir a navegação entre as letras da palavra pelas setas do teclado
// TODO travar o jogo quando o usuário acertar a palavra
// TODO mostrar a palavra correta quando o usuário errar
// TODO implementar o teclado virtual
// TODO gerar a palavra aleatoriamente
// TODO permitir apenas palavras reais e exibir mensagem de erro caso digite uma palavra inválida

export function Game() {
  return (
    <>
      <h1 className="text-center text-5xl pt-10 mb-20">Guess the word</h1>
      <div className="flex justify-center"><Words/></div>
    </>
  )
}