const opcoes = document.getElementsByName('opcao-pagina');

Array.from(opcoes).forEach(opcao => {
    opcao.addEventListener('click', function () {
        const elementoClicado = this;

        if(elementoClicado.classList.contains('active')) {
            elementoClicado.classList.remove('active');
        } else {
            elementoClicado.classList.add('active');
        }
    });
});

export function Navegacao(props) {
    return (
        <div className="navegacao">
            <input type="radio" className="active" name="opcao-pagina" id="pagina-0" defaultChecked onClick={() => props.atualizarPaginaSelecionada(0)}/>
            <label htmlFor="pagina-0">Pratos Principais</label>
            <input type="radio" name="opcao-pagina" id="pagina-1" onClick={() => props.atualizarPaginaSelecionada(1)}/>
            <label htmlFor="pagina-1">Sobremesas</label>
            <input type="radio" name="opcao-pagina" id="pagina-2" onClick={() => props.atualizarPaginaSelecionada(2)}/>
            <label htmlFor="pagina-2">Bebidas</label>
        </div>
    )
}
