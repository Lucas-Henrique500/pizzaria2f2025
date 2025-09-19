const Produtos = () => {
    //objeto com a lista de pizzas
    const pizzas = [
        'pizza de mussarela',
        'pizza de calabresa',
        'pizza baiana', 
        'pizza 4 queijos'
    ]
    //interação da lista de pizzas
    const ListaPizzas = pizzas.map(pizza=><li>{pizza}</li>)

    return (
        <div>
            <ul>
                {ListaPizzas}
            </ul>
        </div>
    )
}

export default Produtos